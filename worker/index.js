/*
  ÜCRETLİ TIKLAMA SAYACI — geçersiz tıklama şüphesini ölçülebilir hâle getirir.

  NEDEN VAR: Google Ads tıklayanların IP adresini hiçbir raporda göstermiyor.
  IP hariç tutma kutusu var ama engellenecek adresi zaten biliyor olmanız
  gerekiyor. Bu betik o boşluğu kapatıyor: reklamdan gelen tıklamaları sayıyor,
  eşiği aşan adresleri listeye düşürüyor.

  SAYILAN ŞEY SAYFA ZİYARETİ DEĞİL, ÜCRETLİ TIKLAMA. Ayrım kritik:
  aynı IP'den siteye birkaç kez girmek şüpheli değil, iyi bir şeydir —
  kararsız müşteri geri gelir. Şüpheli olan, her biri para yakan ayrı
  reklam tıklamalarıdır. Google reklamdan geleni adres çubuğunda `gclid`
  etiketiyle gönderdiği için ikisini ayırt edebiliyoruz. Bu koşulu
  gevşetmeyin; gclid'siz istekleri saymaya başlarsanız sayaç gerçek
  müşterileri işaretler ve liste işe yaramaz hâle gelir.

  PENCERE GÜNLÜK DEĞİL, 7 GÜNLÜK — 14.08.2026'da sahibinin isteğiyle
  değiştirildi. İlk tasarım "aynı gün 3 tıklama" arıyordu ve şunu kaçırıyordu:
  günde bir kez tıklayan biri hiçbir zaman eşiğe ulaşmıyordu, oysa üç günde
  üç tıklama tam olarak sabırlı bir saldırganın deseni. Artık kayıt IP başına
  tutuluyor, gün gün dökümü saklanıyor, 7 günden eski günler her yazımda
  temizleniyor. Eşik bu pencerenin TOPLAMINA bakıyor.

  ÜÇ SERT KURAL:

  1. ÖLÇÜM ASLA SİTEYİ BOZMAZ. Sayma işi try/catch içinde ve `waitUntil` ile
     yanıt gönderildikten SONRA çalışıyor. Betikte ne olursa olsun ziyaretçi
     sayfayı görür. Bu yüzden hiçbir `await` yanıt yolunda değil.

  2. KV BAĞLI DEĞİLSE SESSİZCE GEÇER. `env.TIKLAMA` yoksa sayaç çalışmaz,
     site normal servis edilir. Yapılandırma yarım kalırsa site düşmez.

  3. KAYIT 7 GÜN SONRA SİLİNİR. IP kişisel veridir; süresiz tutmanın
     savunulacak yanı yok ve /kvkk/ metninde bu süre yazılı. Süreyi
     değiştirirseniz KVKK metnini de değiştirin — biri değişip diğeri kalırsa
     site yanlış söz vermiş olur.

  RAPOR MOBİL UYARISI BASAR, çünkü asıl tehlike yanlış engellemedir. Turkcell
  gibi mobil şebekelerde tek genel IP'nin arkasında binlerce abone olabiliyor
  (CGNAT); o adresi Ads'te hariç tutmak gerçek müşterileri de keser. Operatör
  adı Cloudflare'in `request.cf` verisinden geliyor, tahmin edilmiyor.

  YAPMADIĞI ŞEY: kimseyi otomatik engellemez. Google Ads'e dışarıdan IP
  yazmanın API'siz yolu yok; üstelik tıklamanın parası zaten ödenmiş oluyor.
  Bu sayaç engelleme aracı değil, KANIT üretme aracıdır.

  DIŞ İSTEK: yok. Telegram bildirimi YALNIZCA token tanımlanmışsa gönderilir.
  Tarayıcıya inen kod sıfır — sayfa ağırlığı, LCP ve JS bütçesi etkilenmez.
*/

/** Pencere içindeki toplam ücretli tıklama bu sayıya ulaşınca şüpheli sayılır. */
const ESIK = 3;

/** Kaç günlük pencereye bakılıyor. SAKLAMA_SN ile aynı olmak zorunda. */
const PENCERE_GUN = 7;

/** Kayıtların yaşam süresi — /kvkk/ metnindeki süreyle aynı olmak zorunda. */
const SAKLAMA_SN = PENCERE_GUN * 24 * 60 * 60;

/** Rapor sayfasının adresi. Sitemap'te yok, dist'te yok, noindex basılıyor. */
const RAPOR_YOLU = '/_tiklama/';

/** Operatör adında bunlardan biri geçiyorsa rapor "engelleme" uyarısı basar. */
const MOBIL_IZLERI = ['turkcell iletisim', 'vodafone', 'avea', 'tt mobil', 'mobil', 'gsm', 'wireless'];

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      if (url.pathname === RAPOR_YOLU || url.pathname === '/_tiklama') {
        return await rapor(url, env);
      }

      // Ücretli tıklama: Google otomatik etiketlemesi gclid ekliyor.
      if (url.searchParams.has('gclid') && env.TIKLAMA) {
        ctx.waitUntil(sayacaEkle(request, url, env));
      }
    } catch (_) {
      // Yut. Sayaçtaki hiçbir hata sayfanın servisini engellemez.
    }

    return env.ASSETS.fetch(request);
  },
};

/* ---------------------------------------------------------------- sayaç */

function bugun() {
  return new Date().toISOString().slice(0, 10);
}

/** Pencere dışına düşen günleri kayıttan atar. */
function gunleriBudakla(gunler) {
  const sinir = new Date(Date.now() - PENCERE_GUN * 86400000)
    .toISOString()
    .slice(0, 10);
  const temiz = {};
  for (const [gun, adet] of Object.entries(gunler)) {
    if (gun >= sinir) temiz[gun] = adet;
  }
  return temiz;
}

async function sayacaEkle(request, url, env) {
  const ip = request.headers.get('CF-Connecting-IP');
  if (!ip) return;

  const anahtar = `ip:${ip}`;
  const onceki = await env.TIKLAMA.get(anahtar, { type: 'json' });

  const kayit = onceki ?? {
    gunler: {},
    sayfalar: [],
    ilk: new Date().toISOString(),
    bildirildi: false,
  };

  const g = bugun();
  kayit.gunler = gunleriBudakla(kayit.gunler || {});
  kayit.gunler[g] = (kayit.gunler[g] || 0) + 1;

  kayit.son = new Date().toISOString();
  kayit.ulke = request.cf?.country ?? '';
  kayit.sehir = request.cf?.city ?? '';
  kayit.asn = request.cf?.asn ?? '';
  kayit.operator = request.cf?.asOrganization ?? '';
  if ((kayit.sayfalar || []).length < 15) kayit.sayfalar.push(`${g} ${url.pathname}`);

  const toplam = Object.values(kayit.gunler).reduce((a, b) => a + b, 0);

  // Bildirim eşiği bir kez geçerken gider. Her tıklamada göndermek, saldırı
  // sürerken telefonu kilitler ve uyarı okunmaz hâle gelir.
  const bildirilecek = toplam >= ESIK && !kayit.bildirildi;
  if (bildirilecek) kayit.bildirildi = true;

  await env.TIKLAMA.put(anahtar, JSON.stringify(kayit), {
    expirationTtl: SAKLAMA_SN,
  });

  if (bildirilecek) await bildir(ip, kayit, toplam, env);
}

async function bildir(ip, kayit, toplam, env) {
  if (!env.TELEGRAM_TOKEN || !env.TELEGRAM_CHAT) return;

  const gunDokumu = Object.entries(kayit.gunler)
    .sort()
    .map(([g, a]) => `  ${g}: ${a}`)
    .join('\n');

  const metin =
    `⚠️ Şüpheli reklam tıklaması\n\n` +
    `IP: ${ip}\n` +
    `${PENCERE_GUN} günlük toplam: ${toplam}\n${gunDokumu}\n\n` +
    `Operatör: ${kayit.operator || '—'}\n` +
    `Konum: ${kayit.sehir || '—'} / ${kayit.ulke || '—'}\n` +
    (mobilMi(kayit.operator)
      ? `\n❗ MOBİL ŞEBEKE — bu adresi Ads'te ENGELLEMEYİN, arkasında binlerce abone olabilir.\n`
      : `\nAds → Ayarlar → Ek ayarlar → IP hariç tutmaları\n`);

  try {
    await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT, text: metin }),
    });
  } catch (_) {
    // Bildirim gitmezse kayıt yine duruyor, rapor sayfasından görülür.
  }
}

function mobilMi(operator) {
  const ad = String(operator || '').toLocaleLowerCase('tr-TR');
  return MOBIL_IZLERI.some((iz) => ad.includes(iz));
}

/* --------------------------------------------------------------- rapor */

async function rapor(url, env) {
  const anahtar = url.searchParams.get('k');

  // Anahtar tanımlı değilse veya yanlışsa sayfa YOK gibi davranır.
  // 401 dönmek adresin var olduğunu doğrular, 404 hiçbir şey söylemez.
  if (!env.RAPOR_ANAHTARI || anahtar !== env.RAPOR_ANAHTARI) {
    return new Response('Bulunamadı', { status: 404 });
  }
  if (!env.TIKLAMA) {
    return sayfa('<h1>Tıklama sayacı</h1><p>KV bağlanmamış. wrangler.jsonc → kv_namespaces kaydını kontrol edin.</p>');
  }

  const liste = await env.TIKLAMA.list({ prefix: 'ip:' });
  const kayitlar = [];

  for (const k of liste.keys) {
    const veri = await env.TIKLAMA.get(k.name, { type: 'json' });
    if (!veri) continue;
    const gunler = gunleriBudakla(veri.gunler || {});
    const toplam = Object.values(gunler).reduce((a, b) => a + b, 0);
    if (toplam === 0) continue;
    kayitlar.push({
      ip: k.name.slice(3),
      gunler,
      toplam,
      gunSayisi: Object.keys(gunler).length,
      mobil: mobilMi(veri.operator),
      ...veri,
    });
  }

  kayitlar.sort((a, b) => b.toplam - a.toplam);

  const supheli = kayitlar.filter((k) => k.toplam >= ESIK);
  const normal = kayitlar.filter((k) => k.toplam < ESIK);
  const engellenebilir = supheli.filter((k) => !k.mobil);
  const mobilSupheli = supheli.filter((k) => k.mobil);

  return sayfa(`
    <h1>Ücretli tıklama sayacı</h1>
    <p class="not">Son <strong>${PENCERE_GUN} günün</strong> <code>gclid</code>
    taşıyan istekleri — yani reklamdan gelen ve <strong>parası ödenen</strong>
    tıklamalar. Normal sayfa ziyaretleri buraya girmez.
    Eşik: aynı IP'den <strong>${ESIK}+</strong> tıklama (kaç güne yayıldığı fark etmez).</p>

    <h2>Şüpheli — ${supheli.length}</h2>
    ${supheli.length ? tablo(supheli) : '<p class="not">Eşiği aşan adres yok.</p>'}

    ${
      engellenebilir.length
        ? `<h3>Ads'e yapıştırmaya hazır (${engellenebilir.length})</h3>
           <pre>${engellenebilir.map((k) => kacir(k.ip)).join('\n')}</pre>
           <p class="not">Ads → kampanya → <strong>Ayarlar → Ek ayarlar → IP hariç tutmaları</strong>.
           Kampanya başına 500 adres sınırı var.</p>`
        : ''
    }

    ${
      mobilSupheli.length
        ? `<h3 class="uyari">Eşiği aştı ama ENGELLEMEYİN (${mobilSupheli.length})</h3>
           <p class="not">Bunlar mobil şebeke adresleri. Mobil operatörlerde tek genel IP
           binlerce aboneye paylaştırılıyor; engellersen o an o adresi kullanan
           <strong>gerçek müşterilerin</strong> de reklamı göremez. Ayrıca mobil adresler
           saatlik değişiyor, engellediğin adres yarın bambaşka birinde olur.</p>
           ${tablo(mobilSupheli)}`
        : ''
    }

    <h2>Eşiğin altında — ${normal.length}</h2>
    ${normal.length ? tablo(normal) : '<p class="not">Kayıt yok.</p>'}
  `);
}

function tablo(satirlar) {
  return `<div class="kaydir"><table>
    <tr><th>IP</th><th>Toplam</th><th>Gün</th><th>Döküm</th><th>Operatör</th><th>Konum</th></tr>
    ${satirlar
      .map(
        (k) => `<tr${k.mobil ? ' class="mobil"' : ''}>
          <td><code>${kacir(k.ip)}</code></td>
          <td class="adet">${k.toplam}</td>
          <td>${k.gunSayisi}</td>
          <td class="kucuk">${Object.entries(k.gunler)
            .sort()
            .map(([g, a]) => `${kacir(g)}: ${a}`)
            .join('<br>')}</td>
          <td class="kucuk">${kacir(k.operator || '—')}${k.mobil ? ' <strong class="uyari">· MOBİL</strong>' : ''}</td>
          <td class="kucuk">${kacir(k.sehir || '—')} / ${kacir(k.ulke || '—')}</td>
        </tr>`,
      )
      .join('')}
  </table></div>`;
}

function kacir(s) {
  return String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function sayfa(icerik) {
  return new Response(
    `<!doctype html><html lang="tr"><head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <title>Tıklama sayacı</title>
    <style>
      body{font:16px/1.6 system-ui,sans-serif;margin:0;padding:20px;color:#1e293b;background:#f8fafc}
      h1{font-size:21px;margin:0 0 8px}h2{font-size:18px;margin:28px 0 8px}
      h3{font-size:15px;margin:20px 0 6px}
      .not{color:#475569;font-size:14px;max-width:62ch}
      .uyari{color:#b91c1c}
      .kaydir{overflow-x:auto}
      table{border-collapse:collapse;width:100%;background:#fff;font-size:14px;min-width:640px}
      th,td{border:1px solid #e2e8f0;padding:8px 10px;text-align:left;vertical-align:top}
      th{background:#0f172a;color:#fff;font-weight:600}
      tr.mobil{background:#fff7ed}
      .adet{font-weight:700}
      .kucuk{font-size:12px;color:#475569;max-width:240px;word-break:break-word}
      pre{background:#0f172a;color:#fff;padding:12px;border-radius:6px;overflow:auto}
      code{font-family:ui-monospace,monospace}
    </style></head><body>${icerik}</body></html>`,
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'no-store',
      },
    },
  );
}
