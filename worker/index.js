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

  "ADS'E EKLEDİM" İŞARETİ (14.08.2026): rapordaki her engellenebilir adresin
  yanında bir kutu var. İşaretlenen adres kayda yazılıyor (`engellendi`) ve
  yapıştırma kutusundan düşüyor, yani listede yalnızca HENÜZ EKLENMEMİŞ
  adresler kalıyor. İşaret tarayıcıda değil KV'de duruyor — telefondan
  işaretleyip bilgisayardan bakınca da aynı görünsün diye.

  İşaretleme SAKLAMA SÜRESİNİ UZATMAZ. Kayıt, son tıklamadan 7 gün sonra
  silinecek şekilde mutlak bitiş zamanıyla yazılıyor; aksi halde her tik
  kaydın ömrünü 7 gün öteler ve /kvkk/ metnindeki süre yanlışlanırdı.

  DIŞ İSTEK: yok. Telegram bildirimi YALNIZCA token tanımlanmışsa gönderilir.
  Siteye inen kod sıfır — bu sayfa Worker'ın ürettiği yönetim ekranı, dist'te
  değil; içindeki birkaç satır JS sayfa ağırlığına, LCP'ye ve JS bütçesine
  girmez.
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
        // Anahtar tanımlı değilse veya yanlışsa sayfa YOK gibi davranır.
        // 401 dönmek adresin var olduğunu doğrular, 404 hiçbir şey söylemez.
        if (!env.RAPOR_ANAHTARI || url.searchParams.get('k') !== env.RAPOR_ANAHTARI) {
          return new Response('Bulunamadı', { status: 404 });
        }
        if (request.method === 'POST') return await isaretle(request, env);
        return await rapor(env);
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
    tiklamalar: [],
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

  /*
    Tek tek tıklama zamanları. Gün toplamı "kaç kere" der, saat "hangi ritimle"
    der — asıl deseni gösteren ikincisi: kırk saniye arayla üç tıklama insan
    davranışı değildir, üç ayrı akşam bir tıklama olabilir. Son 20 kayıt
    tutuluyor, penceresi geçenler her yazımda düşüyor (gün dökümüyle aynı
    kural — saklama süresi tek yerden yönetiliyor).
  */
  const zamanSiniri = new Date(Date.now() - PENCERE_GUN * 86400000).toISOString();
  kayit.tiklamalar = (kayit.tiklamalar || []).filter((t) => t && t.z >= zamanSiniri).slice(-19);
  kayit.tiklamalar.push({ z: kayit.son, y: url.pathname });
  delete kayit.sayfalar; // eski biçim; hiçbir yerde basılmıyordu

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

/* ---------------------------------------------------- "Ads'e ekledim" işareti */

/**
 * Bir adresi "Ads'e eklendi" olarak işaretler veya işareti kaldırır.
 * İşaret KV'de duruyor, tarayıcıda değil: telefondan işaretleyip
 * bilgisayardan bakınca da aynı görünsün diye.
 */
async function isaretle(request, env) {
  if (!env.TIKLAMA) return new Response('kv-yok', { status: 503 });

  const gelen = new URLSearchParams(await request.text());
  const ip = gelen.get('ip');
  if (!ip) return new Response('eksik', { status: 400 });

  const anahtar = `ip:${ip}`;
  const kayit = await env.TIKLAMA.get(anahtar, { type: 'json' });
  if (!kayit) return new Response('kayit-yok', { status: 404 });

  const durum = gelen.get('durum') === '1';
  kayit.engellendi = durum;
  kayit.engellendiTarih = durum ? new Date().toISOString() : null;

  /*
    TTL yerine MUTLAK bitiş zamanı: kayıt son tıklamadan 7 gün sonra silinir.
    expirationTtl kullanılsaydı her işaretleme kaydın ömrünü 7 gün öteler ve
    /kvkk/ metnindeki saklama süresi yanlışlanırdı.
  */
  const son = Date.parse(kayit.son || kayit.ilk) || Date.now();
  const enErken = Math.floor(Date.now() / 1000) + 70; // KV alt sınırı 60 sn
  await env.TIKLAMA.put(anahtar, JSON.stringify(kayit), {
    expiration: Math.max(Math.floor(son / 1000) + SAKLAMA_SN, enErken),
  });

  return new Response('tamam', { headers: { 'Cache-Control': 'no-store' } });
}

/* --------------------------------------------------------------- rapor */

async function rapor(env) {
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
    // Spread ÖNCE: sonra gelirse veri.gunler budanmış listenin üzerine yazar
    // ve döküm sütunu pencere dışındaki günleri gösterir.
    kayitlar.push({
      ...veri,
      ip: k.name.slice(3),
      gunler,
      toplam,
      gunSayisi: Object.keys(gunler).length,
      mobil: mobilMi(veri.operator),
    });
  }

  const supheli = kayitlar.filter((k) => k.toplam >= ESIK);
  const normal = kayitlar.filter((k) => k.toplam < ESIK);

  /*
    İki tablo iki farklı soruya cevap veriyor, sıralamaları da o yüzden ayrı:

    - Şüpheliler'de karar "engelleyeyim mi" — belirleyici olan TOPLAM, eşitlik
      hâlinde en son tıklayan üstte.
    - Eşiğin altında hepsinin toplamı zaten 1–2; orada toplama göre sıralamak
      hiçbir şey söylemiyor ve liste rastgele görünüyordu. EN YENİ ÜSTTE:
      sayfayı açtığında yeni girenleri en başta görürsün.
  */
  const sonAn = (k) => k.son || k.ilk || '';
  supheli.sort((a, b) => b.toplam - a.toplam || sonAn(b).localeCompare(sonAn(a)));
  normal.sort((a, b) => sonAn(b).localeCompare(sonAn(a)));
  const engellenebilir = supheli.filter((k) => !k.mobil);
  const mobilSupheli = supheli.filter((k) => k.mobil);

  // Yapıştırma kutusunda YALNIZCA henüz Ads'e eklenmemiş adresler durur.
  // Amaç tam olarak bu: iki kez yapıştırıp hangisini eklediğini karıştırmamak.
  const kalan = engellenebilir.filter((k) => !k.engellendi);
  const eklenmis = engellenebilir.filter((k) => k.engellendi);

  return sayfa(`
    <h1>Ücretli tıklama sayacı</h1>
    <p class="not">Son <strong>${PENCERE_GUN} günün</strong> <code>gclid</code>
    taşıyan istekleri — yani reklamdan gelen ve <strong>parası ödenen</strong>
    tıklamalar. Normal sayfa ziyaretleri buraya girmez.
    Eşik: aynı IP'den <strong>${ESIK}+</strong> tıklama (kaç güne yayıldığı fark etmez).</p>

    <h2>Şüpheli — ${supheli.length}</h2>
    ${
      supheli.length
        ? `<p class="not">Bir adresi Ads'te <strong>IP hariç tutmalarına</strong> ekledikten
           sonra <strong>“Ads'e eklendi”</strong> kutusunu işaretleyin: adres aşağıdaki
           yapıştırma listesinden düşer, satır soluklaşır. İşaret kaydediliyor, bu
           sayfayı yarın açtığınızda da duruyor.</p>
           ${tablo(supheli, true)}`
        : '<p class="not">Eşiği aşan adres yok.</p>'
    }

    ${
      engellenebilir.length
        ? `<h3>Ads'e yapıştırmaya hazır (<span id="kalanSayi">${kalan.length}</span>)</h3>
           <div id="listeKutusu"${kalan.length ? '' : ' hidden'}>
             <pre id="liste">${kalan.map((k) => kacir(k.ip)).join('\n')}</pre>
             <p><button type="button" id="kopyala">Listeyi kopyala</button>
             <span id="kopyaNot" class="not"></span></p>
           </div>
           <p id="hepsiTamam" class="tamam"${kalan.length ? ' hidden' : ''}>
             Eşiği aşan bütün adresler Ads'e eklenmiş. Yeni bir adres çıkarsa
             burada belirir.</p>
           <p class="not">Ads → kampanya → <strong>Ayarlar → Ek ayarlar → IP hariç tutmaları</strong>.
           Kampanya başına 500 adres sınırı var.
           ${
             eklenmis.length
               ? `Şu ana kadar <strong>${eklenmis.length}</strong> adresi eklediğinizi işaretlediniz.`
               : ''
           }</p>`
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
    ${
      normal.length
        ? `<p class="not"><strong>En yeni üstte.</strong> Saatler Türkiye saatiyle.
           Buradakiler normal ziyaretçi sayılır; tek tıklama şüphe değildir.</p>
           ${tablo(normal)}`
        : '<p class="not">Kayıt yok.</p>'
    }
  `);
}

/**
 * @param satirlar  kayıt listesi
 * @param secilebilir  true ise "Ads'e eklendi" işaret sütunu basılır.
 *   Mobil satırlarda kutu YOK: o adresler zaten engellenmemeli, kutu koymak
 *   yapılmaması gereken işi davet ederdi.
 */
function tablo(satirlar, secilebilir = false) {
  return `<div class="kaydir"><table>
    <tr>${secilebilir ? "<th>Ads'e eklendi</th>" : ''}<th>IP</th><th>Son tıklama</th><th>Toplam</th><th>Gün</th><th>Tıklama saatleri</th><th>Operatör</th><th>Konum</th></tr>
    ${satirlar
      .map(
        (k) => `<tr class="${k.mobil ? 'mobil' : ''}${!k.mobil && k.engellendi ? ' eklendi' : ''}">
          ${
            secilebilir
              ? k.mobil
                ? '<td class="kucuk uyari">engellemeyin</td>'
                : `<td class="isaret"><label><input type="checkbox" data-ip="${kacir(k.ip)}" data-eklenebilir${k.engellendi ? ' checked' : ''}><span>eklendi</span></label></td>`
              : ''
          }
          <td><code>${kacir(k.ip)}</code></td>
          <td class="kucuk zaman">${kacir(anBicimi(k.son || k.ilk))}</td>
          <td class="adet">${k.toplam}</td>
          <td>${k.gunSayisi}</td>
          <td class="kucuk">${saatDokumu(k)}</td>
          <td class="kucuk">${kacir(k.operator || '—')}${k.mobil ? ' <strong class="uyari">· MOBİL</strong>' : ''}</td>
          <td class="kucuk">${kacir(k.sehir || '—')} / ${kacir(k.ulke || '—')}</td>
        </tr>`,
      )
      .join('')}
  </table></div>`;
}

/*
  Saatler TÜRKİYE saatiyle basılıyor. Worker UTC'de çalışıyor; ham ISO damgası
  basılsaydı rapordaki saat sahibinin telefonundakinden 3 saat geride görünür
  ve "bu tıklama gece 4'te gelmiş" gibi yanlış bir sonuca götürürdü.
*/
const BICIM = new Intl.DateTimeFormat('tr-TR', {
  timeZone: 'Europe/Istanbul',
  day: '2-digit',
  month: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

function anBicimi(iso) {
  const d = new Date(iso || '');
  return isNaN(d.getTime()) ? '—' : BICIM.format(d).replace(', ', ' · ');
}

/**
 * Tek tek tıklama saatleri, en yeni üstte. Eski kayıtlarda saat verisi yok
 * (alan 14.08.2026'da eklendi); o satırlar gün dökümüne düşer, boş kalmaz.
 */
function saatDokumu(k) {
  const liste = (k.tiklamalar || []).filter((t) => t && t.z);
  if (!liste.length) {
    return Object.entries(k.gunler)
      .sort()
      .reverse()
      .map(([g, a]) => `${kacir(g)}: ${a}`)
      .join('<br>');
  }
  const gosterilen = liste.slice().reverse().slice(0, 8);
  const gizli = k.toplam - gosterilen.length;
  return (
    gosterilen.map((t) => kacir(anBicimi(t.z))).join('<br>') +
    (gizli > 0 ? `<br><span class="soluk">+${gizli} daha</span>` : '')
  );
}

function kacir(s) {
  return String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

/*
  Yalnızca bu yönetim ekranında çalışan birkaç satır. Siteye inmiyor:
  sayfa Worker tarafından üretiliyor, dist/ içinde yok, sitemap'te yok.
  JS bütçesi (< 40 KB) ve LCP ölçümleri bundan etkilenmez.

  Yaptığı iş: kutu işaretlenince durumu sunucuya yazar ve yapıştırma
  listesini yeniden kurar. Yazma başarısız olursa kutu ESKİ HÂLİNE döner —
  işaretlenmiş görünüp kaydedilmemiş olması, en baştaki karışıklığın aynısını
  geri getirirdi.
*/
const BETIK = `<script>
(function () {
  var yol = location.pathname + location.search;

  document.addEventListener('change', function (e) {
    var kutu = e.target;
    if (!kutu.matches || !kutu.matches('input[data-eklenebilir]')) return;
    var istenen = kutu.checked;
    kutu.disabled = true;
    fetch(yol, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'ip=' + encodeURIComponent(kutu.dataset.ip) + '&durum=' + (istenen ? '1' : '0')
    }).then(function (y) {
      if (!y.ok) throw new Error(y.status);
      kutu.closest('tr').classList.toggle('eklendi', istenen);
      listeyiKur();
    }).catch(function () {
      kutu.checked = !istenen;
      alert('Kaydedilemedi. Bağlantınızı kontrol edip tekrar deneyin.');
    }).finally(function () {
      kutu.disabled = false;
    });
  });

  function listeyiKur() {
    var pre = document.getElementById('liste');
    if (!pre) return;
    var kalan = [];
    document.querySelectorAll('input[data-eklenebilir]').forEach(function (k) {
      if (!k.checked) kalan.push(k.dataset.ip);
    });
    pre.textContent = kalan.join('\\n');
    document.getElementById('kalanSayi').textContent = kalan.length;
    document.getElementById('listeKutusu').hidden = kalan.length === 0;
    document.getElementById('hepsiTamam').hidden = kalan.length > 0;
  }

  var dugme = document.getElementById('kopyala');
  if (dugme) dugme.addEventListener('click', function () {
    var not = document.getElementById('kopyaNot');
    navigator.clipboard.writeText(document.getElementById('liste').textContent)
      .then(function () { not.textContent = ' Kopyalandı.'; })
      .catch(function () { not.textContent = ' Kopyalanamadı, listeyi elle seçin.'; });
  });
})();
</script>`;

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
      tr.eklendi{background:#f1f5f9;color:#94a3b8}
      tr.eklendi code{text-decoration:line-through}
      .adet{font-weight:700}
      .kucuk{font-size:12px;color:#475569;max-width:240px;word-break:break-word}
      .zaman{white-space:nowrap;font-weight:600;color:#0f172a}
      .soluk{color:#94a3b8}
      .isaret label{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;min-height:32px}
      .isaret input{width:20px;height:20px;flex:none;accent-color:#c2410c}
      .tamam{color:#166534;background:#f0fdf4;border:1px solid #bbf7d0;padding:10px 12px;border-radius:6px;font-size:14px;max-width:62ch}
      button{font:inherit;font-size:14px;padding:8px 14px;border:0;border-radius:6px;background:#0f172a;color:#fff;cursor:pointer}
      pre{background:#0f172a;color:#fff;padding:12px;border-radius:6px;overflow:auto;min-height:1.6em}
      code{font-family:ui-monospace,monospace}
    </style></head><body>${icerik}${BETIK}</body></html>`,
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'no-store',
      },
    },
  );
}
