/*
  ÜCRETLİ TIKLAMA SAYACI — geçersiz tıklama şüphesini ölçülebilir hâle getirir.

  NEDEN VAR: Google Ads tıklayanların IP adresini hiçbir raporda göstermiyor.
  IP hariç tutma kutusu var ama engellenecek adresi zaten biliyor olmanız
  gerekiyor. Bu betik o boşluğu kapatıyor: reklamdan gelen tıklamaları sayıyor,
  engellenmesi gereken adresleri listeye düşürüyor.

  SAYILAN ŞEY SAYFA ZİYARETİ DEĞİL, ÜCRETLİ TIKLAMA. Ayrım kritik:
  aynı IP'den siteye birkaç kez girmek şüpheli değil, iyi bir şeydir —
  kararsız müşteri geri gelir. Şüpheli olan, her biri para yakan ayrı
  reklam tıklamalarıdır. Google reklamdan geleni adres çubuğunda `gclid`
  etiketiyle gönderdiği için ikisini ayırt edebiliyoruz. Bu koşulu
  gevşetmeyin; gclid'siz istekleri saymaya başlarsanız sayaç gerçek
  müşterileri işaretler ve liste işe yaramaz hâle gelir.

  DÖRT KADEME (02.10.2026, sahibinin isteği). Listeye giren her adres Ads'te
  engelleniyor; yanlış ayrım = gerçek müşteriyi reklamdan kesmek. Bu yüzden
  karar tek bir sayıya değil dört ayrı işarete bakıyor, sırası önemli:

  1. GERÇEK MÜŞTERİ — sitede ara / WhatsApp / form düğmesine basmış. Kaç kez
     tıklamış olursa olsun ASLA listeye girmez. Bot telefon açmaz; ikisini
     ayıran en güçlü işaret bu. Haberi sitedeki küçük bir `sendBeacon`
     veriyor (src/lib/analytics.ts → gercekKisi), ETKILESIM_YOLU'na.
  2. KESİN BOT — tıklama bir sunucu merkezinden (bulut/barındırma ağı) ya da
     yurt dışından geliyor. Tek tıklamada listeye girer. ⚠️ iCloud Özel
     Geçiş (Akamai AS36183, Fastly AS54113) ve Cloudflare WARP (AS13335)
     KORUNUR: bunların arkasında gerçek iPhone ve telefon kullanıcıları var.
     "akamai" / "cloudflare" adını anahtar kelime olarak EKLEMEYİN.
  3. SIRALI ADRES BLOĞU — aynı /24 bloğundan BLOK_DK içinde BLOK_ESIK farklı
     adres, ve o blokta son UZUN_GUN günde hiç gerçek müşteri görülmemiş.
     Ads'e tek satır girer: `85.106.132.*`. Mobil hatlar ve IPv6 bu kurala GİRMEZ — Türk
     operatörlerinin ev ve mobil havuzlarında aynı semtin müşterileri zaten
     benzer adres taşıyor; düz "benzer adres = bot" kuralı bir semti keserdi.
  4. TEKRAR EDEN TIKLAMA — KISA_GUN günde KISA_ESIK ya da UZUN_GUN günde
     UZUN_ESIK tıklama. Mobil adres bu kademede listeye girmez, ayrı bölümde
     "engellemeyin" uyarısıyla durur (CGNAT: tek mobil IP'nin arkasında
     binlerce abone).

  SERT KURALLAR:

  1. ÖLÇÜM ASLA SİTEYİ BOZMAZ. Sayma işi try/catch içinde ve `waitUntil` ile
     yanıt gönderildikten SONRA çalışıyor. Betikte ne olursa olsun ziyaretçi
     sayfayı görür. Bu yüzden hiçbir `await` sayfa yanıtının yolunda değil.

  2. KV BAĞLI DEĞİLSE SESSİZCE GEÇER. `env.TIKLAMA` yoksa sayaç çalışmaz,
     site normal servis edilir. Yapılandırma yarım kalırsa site düşmez.

  3. KAYIT UZUN_GUN (30) GÜN SONRA SİLİNİR. 02.10.2026'da 7'den 30'a çıktı
     (sahibinin isteği): Google'a geçersiz tıklama incelemesi açarken geriye
     dönük kanıt gerekiyor. IP kişisel veridir; süre /kvkk/ metninde yazılı.
     Süreyi değiştirirseniz KVKK metnini de değiştirin — biri değişip diğeri
     kalırsa site yanlış söz vermiş olur.

  4. TAM IP YALNIZCA GEREKTİĞİNDE (veri en aza indirme). Kayıt anahtarı IP'nin
     kendisi değil, RAPOR_ANAHTARI ile alınmış tek yönlü özeti (`h:<özet>`);
     kayıtta IP'nin yalnızca SON BÖLÜMÜ SİLİNMİŞ hâli (`88.242.196.*`) durur.
     Tam adres yalnızca adres 2. ya da 4. kademeden listeye girdiğinde
     yazılır — Ads'e yapıştırılması gereken tek durum. Gerçek müşteri
     işareti gelince silinir. 3. kademe tam adres gerektirmiyor: blok
     yazımı zaten bütün adresleri kapsıyor. RAPOR_ANAHTARI değişirse
     özetler de değişir: sayaç sıfırdan başlar, başka zararı yok.

  5. AYNI TIKLAMA İKİ KEZ SAYILMAZ (02.10.2026). Canlı raporda neredeyse her
     ziyaretçi AYNI DAKİKADA 2 ya da 4 kez görünüyordu — Google'ın kendi
     denetim sunucuları dahil. Bu ayrı ücretli tıklama değil (tarayıcı ön
     yüklemesi, yenileme), ama eşiği tek ziyaretle aştırıyor ve gerçek
     müşteriyi "şüpheli" listesine düşürüyordu; sahibi 4 sabit hat adresini
     bu yüzden Ads'te engelledi. Aynı adresten TEKRAR_SN içinde gelen
     istek yeni tıklama sayılmaz. Ön yükleme isteklerini atmak yerine
     birleştiriyoruz: ön yüklenen sayfa kullanılırsa ikinci istek hiç
     gelmez, atsaydık o tıklamayı tamamen kaybederdik.

  YAPMADIĞI ŞEY: kimseyi otomatik engellemez. Google Ads'e dışarıdan IP
  yazmanın API'siz yolu yok; üstelik tıklamanın parası zaten ödenmiş oluyor.
  Bu sayaç engelleme aracı değil, KANIT üretme aracıdır.

  "ADS'E EKLEDİM" İŞARETİ (14.08.2026): rapordaki her engellenebilir adresin
  ve bloğun yanında bir kutu var. İşaretlenen adres kayda yazılıyor
  (`engellendi`) ve yapıştırma kutusundan düşüyor, yani listede yalnızca
  HENÜZ EKLENMEMİŞ adresler kalıyor. İşaret KV'de duruyor — telefondan
  işaretleyip bilgisayardan bakınca da aynı görünsün diye. İşaretleme
  SAKLAMA SÜRESİNİ UZATMAZ: kayıt son tıklamadan itibaren mutlak bitiş
  zamanıyla yazılıyor.

  DIŞ İSTEK: yok. Telegram bildirimi YALNIZCA token tanımlanmışsa gönderilir
  ve tam IP taşımaz. Siteye inen kod: yalnızca 1. kademenin birkaç satırlık
  `sendBeacon` çağrısı (çerezsiz, kendi alan adımıza).
*/

/** Kısa pencere: bu kadar günde KISA_ESIK tıklama → tekrar eden tıklama. */
const KISA_GUN = 7;
const KISA_ESIK = 3;

/** Uzun pencere: sabırlı saldırgan — haftada en çok iki kez, ay boyunca. */
const UZUN_GUN = 30;
const UZUN_ESIK = 5;

/** Kayıtların yaşam süresi — /kvkk/ metnindeki süreyle aynı olmak zorunda. */
const SAKLAMA_SN = UZUN_GUN * 24 * 60 * 60;

/** Aynı adresten bu kadar saniye içinde gelen istek aynı tıklamadır (kural 5). */
const TEKRAR_SN = 120;

/** 3. kademe: aynı /24 bloğundan bu kadar dakikada bu kadar FARKLI adres. */
const BLOK_DK = 60;
const BLOK_ESIK = 3;

/** Rapor sayfasının adresi. Sitemap'te yok, dist'te yok, noindex basılıyor. */
const RAPOR_YOLU = '/_tiklama/';

/** 1. kademe: sitedeki düğmeye basılınca gelen işaret. */
const ETKILESIM_YOLU = '/_t/e';
const ETKILESIM_ADI = { tel: 'Aradı', whatsapp: "WhatsApp'tan yazdı", form: 'Form gönderdi' };

/*
  Google'ın kendi ağı (AS15169). Reklam incelemesi ve açılış sayfası denetimi
  sayfayı `gclid` ile açıyor, yani sayaca ÜCRETLİ TIKLAMA gibi görünüyor —
  oysa bu ziyaretlerin parası ödenmiyor. Ayrı tutulmalarının asıl sebebi
  şu: listeye düşerlerse sahibi Google'ın kendi denetçisini engellemeye
  çalışır. Kazancı sıfır, kafa karışıklığı kesin.
*/
const GOOGLE_ASN = 15169;

/*
  Mobil hat. ASN kesin bilgi; ad listesi yedek. ⚠️ 02.10.2026'ya kadar
  yalnızca ada bakılıyordu ve Turkcell HİÇ tanınmıyordu: Cloudflare adı
  "Turkcell Iletisim" diye ASCII veriyor, tr-TR küçültme "I"yı "ı" yapıyor,
  "iletisim" araması tutmuyordu. Karşılaştırma artık kucult() ile.
*/
const MOBIL_ASN = new Set([16135, 15897, 20978]); // Turkcell · Vodafone TR · TT Mobil
const MOBIL_IZLERI = ['turkcell iletisim', 'vodafone', 'avea', 'tt mobil', 'mobil', 'gsm', 'wireless'];

/*
  2. kademe — sunucu merkezi. ASN listesi kesin bilgi; ad listesi yedek
  (Türk barındırma firmalarının ASN'leri değişken). KORUNAN_ASN her ikisinden
  önce bakılır.
*/
const VERI_MERKEZI_ASN = new Set([
  16509, 14618, // Amazon AWS
  8075, 8068, // Microsoft Azure
  396982, // Google Cloud (AS15169 Google'ın kendi denetimi DEĞİL, o ayrı)
  14061, // DigitalOcean
  24940, 213230, // Hetzner
  16276, // OVH
  63949, // Linode (Akamai Connected Cloud — Özel Geçiş'in AS36183'ü değil)
  51167, // Contabo
  20473, // Vultr / Choopa
  60781, 28753, // Leaseweb
  9009, // M247
  12876, // Scaleway
  31898, // Oracle Cloud
  45102, 37963, // Alibaba
  132203, // Tencent
  47583, // Hostinger
  212238, // Datacamp / CDN77
  174, // Cogent
]);
const VERI_MERKEZI_IZLERI = [
  'hosting', 'server', 'sunucu', 'data center', 'datacenter', 'veri merkezi',
  'colocation', 'vps', 'amazon', 'microsoft', 'digitalocean', 'hetzner',
  'ovh', 'linode', 'contabo', 'vultr', 'leaseweb', 'scaleway', 'oracle',
  'alibaba', 'tencent', 'hostinger', 'radore', 'turkticaret', 'netdirekt',
  'veridyen', 'natro',
];
const KORUNAN_ASN = new Set([13335, 36183, 54113]); // WARP · Özel Geçiş ×2

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

      // 1. kademe işareti. Sayfa değil; gövde birkaç bayt, okumak güvenli.
      if (url.pathname === ETKILESIM_YOLU) {
        if (request.method === 'POST' && env.TIKLAMA) {
          const tur = (await request.text().catch(() => '')).slice(0, 16);
          ctx.waitUntil(etkilesimEkle(request, tur, env).catch(() => {}));
        }
        return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
      }

      // Ücretli tıklama: Google otomatik etiketlemesi gclid ekliyor.
      if (url.searchParams.has('gclid') && env.TIKLAMA) {
        ctx.waitUntil(sayacaEkle(request, url, env).catch(() => {}));
      }
    } catch (_) {
      // Yut. Sayaçtaki hiçbir hata sayfanın servisini engellemez.
    }

    return env.ASSETS.fetch(request);
  },
};

/* ---------------------------------------------------------- yardımcılar */

function bugun() {
  return new Date(Date.now()).toISOString().slice(0, 10);
}

/** Pencere (UZUN_GUN) dışına düşen günleri kayıttan atar. */
function gunleriBudakla(gunler) {
  const sinir = new Date(Date.now() - UZUN_GUN * 86400000).toISOString().slice(0, 10);
  const temiz = {};
  for (const [gun, adet] of Object.entries(gunler)) {
    if (gun >= sinir) temiz[gun] = adet;
  }
  return temiz;
}

/** Son `gun` gündeki tıklama toplamı. */
function gunToplami(gunler, gun) {
  const sinir = new Date(Date.now() - gun * 86400000).toISOString().slice(0, 10);
  return Object.entries(gunler).reduce((t, [g, a]) => (g >= sinir ? t + a : t), 0);
}

/** Tıklama saatleri (ms), eskiden yeniye; TEKRAR_SN içindeki tekrarlar tek sayılır. */
function ayriZamanlar(tiklamalar) {
  const zamanlar = (tiklamalar || [])
    .map((t) => Date.parse(t && t.z))
    .filter(Number.isFinite)
    .sort((a, b) => a - b);
  const sonuc = [];
  for (const z of zamanlar) {
    if (!sonuc.length || z - sonuc[sonuc.length - 1] >= TEKRAR_SN * 1000) sonuc.push(z);
  }
  return sonuc;
}

/**
 * Kaydın gün dökümü, kural 5'e göre ayıklanmış. 02.10.2026 öncesi kayıtlar
 * çift sayımla yazıldı: tek ziyaret AYNI DAKİKADA 4 tıklama görünüyordu ve
 * yeni kural yalnızca yeni yazımlara uygulandığı için o kayıtlar gerçek
 * müşteriyi "engellenecek" listesine düşürüyordu (yayın günü canlıda 5
 * satırın 5'i). Döküm bu yüzden tıklama saatlerinden yeniden kuruluyor.
 * Saat listesi bütün tıklamaları taşımıyorsa (çok tıklamalı eski kayıt)
 * gün dökümüne dokunulmaz — o kayıt zaten şüphelidir.
 */
function ayiklanmisGunler(kayit) {
  const gunler = gunleriBudakla(kayit.gunler || {});
  const toplam = Object.values(gunler).reduce((a, b) => a + b, 0);
  const tumu = (kayit.tiklamalar || []).filter((t) => t && Number.isFinite(Date.parse(t.z)));
  if (!tumu.length || tumu.length < toplam) return gunler;
  const sonuc = {};
  for (const z of ayriZamanlar(tumu)) {
    const g = new Date(z).toISOString().slice(0, 10);
    sonuc[g] = (sonuc[g] || 0) + 1;
  }
  return gunleriBudakla(sonuc);
}

/** Kaydın silineceği an: son tıklamadan UZUN_GUN gün sonra (mutlak). */
function bitis(kayit) {
  const son = Date.parse(kayit.son || kayit.ilk) || Date.now();
  const enErken = Math.floor(Date.now() / 1000) + 70; // KV alt sınırı 60 sn
  return Math.max(Math.floor(son / 1000) + SAKLAMA_SN, enErken);
}

/**
 * IP'nin anahtarlı tek yönlü özeti — kayıt anahtarı bu. Aynı adres her
 * seferinde aynı özeti verir (tekrar sayılabilsin), ama özetten adrese
 * anahtar bilinmeden dönülemez.
 */
async function ozet(ip, gizli) {
  const kodla = new TextEncoder();
  const anahtar = await crypto.subtle.importKey(
    'raw',
    kodla.encode(gizli),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const imza = new Uint8Array(await crypto.subtle.sign('HMAC', anahtar, kodla.encode(ip)));
  return Array.from(imza.slice(0, 16), (b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Raporda ve bildirimde görünen kısaltılmış adres. IPv4'te son bölüm,
 * IPv6'da ilk üç bölümden sonrası silinir — operatör ve bölge seçilir,
 * kişi seçilmez. IPv4 maskesi aynı zamanda Ads'in blok yazımı.
 */
function maskele(ip) {
  const s = String(ip || '');
  if (!s) return '—';
  if (s.includes(':')) {
    const parcalar = s.split(':').filter(Boolean).slice(0, 3);
    return `${parcalar.join(':')}:*`;
  }
  const p = s.split('.');
  return p.length === 4 ? `${p[0]}.${p[1]}.${p[2]}.*` : '—';
}

/**
 * Operatör adlarını karşılaştırmaya hazırlar. Adlar İngilizce veritabanından
 * ASCII geliyor ("Turkcell Iletisim"); tr-TR küçültme "I"yı "ı" yapar, bu
 * yüzden ı → i katlanır. Türkçe yazılmış adlarda da ("İletişim") doğru çalışır.
 */
function kucult(s) {
  return String(s || '')
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i');
}

function mobilMi(kayit) {
  if (MOBIL_ASN.has(Number(kayit.asn))) return true;
  const ad = kucult(kayit.operator);
  return MOBIL_IZLERI.some((iz) => ad.includes(iz));
}

/** Google'ın kendi ağı mı — ASN kesin bilgi, ad yalnızca yedek kontrol. */
function googleMi(kayit) {
  if (Number(kayit.asn) === GOOGLE_ASN) return true;
  return kucult(kayit.operator).includes('google llc');
}

/** iCloud Özel Geçiş / WARP çıkışı — arkasında gerçek telefon kullanıcıları var. */
function korunanMi(kayit) {
  return KORUNAN_ASN.has(Number(kayit.asn));
}

/**
 * Tek adresin arkasında çok kişi: mobil hat (CGNAT) ya da Özel Geçiş/WARP
 * çıkışı. Bu adresleri engellemek, o an aynı adresi kullanan başka
 * müşterileri de reklamdan keser.
 */
function paylasimliMi(kayit) {
  return mobilMi(kayit) || korunanMi(kayit);
}

function veriMerkeziMi(kayit) {
  const asn = Number(kayit.asn);
  if (VERI_MERKEZI_ASN.has(asn)) return true;
  const ad = kucult(kayit.operator);
  return VERI_MERKEZI_IZLERI.some((iz) => ad.includes(iz));
}

/**
 * Bir kaydın hangi kademede olduğu. Sıra = öncelik (bkz. dosya başı).
 * kademe: gercek · google · bot · tekrar · mobil · normal
 */
function siniflandir(kayit) {
  if (kayit.etkilesim) {
    return { kademe: 'gercek', sebep: ETKILESIM_ADI[kayit.etkilesim.tur] || 'Etkileşim' };
  }
  if (googleMi(kayit)) return { kademe: 'google', sebep: '' };
  // Özel Geçiş ülkeyi de her zaman doğru taşımıyor; korunan ağ 2. kademeye
  // hiç girmez, yalnızca tekrar sayısına bakılır (ve o da "mobil" bölümüne).
  if (!korunanMi(kayit)) {
    if (veriMerkeziMi(kayit)) {
      return { kademe: 'bot', sebep: `Sunucu merkezi · ${kayit.operator || 'bilinmiyor'}` };
    }
    if (kayit.ulke && kayit.ulke !== 'TR' && kayit.ulke !== 'XX') {
      return { kademe: 'bot', sebep: `Yurt dışı · ${kayit.ulke}` };
    }
  }
  const gunler = ayiklanmisGunler(kayit);
  const kisa = gunToplami(gunler, KISA_GUN);
  const uzun = gunToplami(gunler, UZUN_GUN);
  let sebep = '';
  if (kisa >= KISA_ESIK) sebep = `${KISA_GUN} günde ${kisa} tıklama`;
  else if (uzun >= UZUN_ESIK) sebep = `${UZUN_GUN} günde ${uzun} tıklama`;
  if (!sebep) return { kademe: 'normal', sebep: '' };
  return { kademe: paylasimliMi(kayit) ? 'mobil' : 'tekrar', sebep };
}

/** "Ads'te engelli ama şüphe kalmadı" satırının sebep sütunu. */
function kaldirmaSebebi(k) {
  if (k.kademe === 'gercek') return `Gerçek müşteri · ${k.sebep}`;
  if (k.kademe === 'mobil') return `Mobil hat ya da paylaşımlı adres · ${k.sebep}`;
  if (k.kademe === 'google') return "Google'ın kendi denetimi";
  return `${k.toplam} tıklama · şüphe yok`;
}

/** Listeye girip Ads'e TAM ADRESİYLE yapıştırılacak kademeler. */
const ENGELLENECEK = new Set(['bot', 'tekrar']);

/* ---------------------------------------------------------------- sayaç */

async function sayacaEkle(request, url, env) {
  const ip = request.headers.get('CF-Connecting-IP');
  // Özet anahtarı yoksa sayaç çalışmaz — tam IP'yi anahtar yapmaya geri
  // DÜŞMEYİZ; kural 4 yapılandırma eksik diye gevşemez.
  if (!ip || !env.RAPOR_ANAHTARI) return;

  const anahtar = `h:${await ozet(ip, env.RAPOR_ANAHTARI)}`;
  const onceki = await env.TIKLAMA.get(anahtar, { type: 'json' });

  const an = Date.now();
  // Kural 5: az önce sayılmış bir tıklamanın tekrarı. Kayda dokunulmaz;
  // pencere son SAYILAN tıklamadan ölçülür.
  if (onceki && an - (Date.parse(onceki.son || '') || 0) < TEKRAR_SN * 1000) return;

  const kayit = onceki ?? {
    gunler: {},
    tiklamalar: [],
    ilk: new Date(an).toISOString(),
    bildirildi: false,
  };

  const g = bugun();
  kayit.gunler = gunleriBudakla(kayit.gunler || {});
  kayit.gunler[g] = (kayit.gunler[g] || 0) + 1;

  kayit.maske = maskele(ip);
  kayit.son = new Date(an).toISOString();
  kayit.ulke = request.cf?.country ?? '';
  kayit.sehir = request.cf?.city ?? '';
  kayit.asn = request.cf?.asn ?? '';
  kayit.operator = request.cf?.asOrganization ?? '';

  /*
    Tek tek tıklama zamanları. Gün toplamı "kaç kere" der, saat "hangi ritimle"
    der — asıl deseni gösteren ikincisi. 3. kademe de bu saatlere bakıyor.
    Son 40 kayıt tutuluyor, penceresi geçenler her yazımda düşüyor.
  */
  const zamanSiniri = new Date(an - UZUN_GUN * 86400000).toISOString();
  kayit.tiklamalar = (kayit.tiklamalar || []).filter((t) => t && t.z >= zamanSiniri).slice(-39);
  kayit.tiklamalar.push({ z: kayit.son, y: url.pathname });
  delete kayit.sayfalar; // eski biçim; hiçbir yerde basılmıyordu

  // Kural 4: tam adres yalnızca Ads'e yapıştırılacaksa. Kademesi düşen
  // kayıttan da silinir.
  const { kademe, sebep } = siniflandir(kayit);
  if (ENGELLENECEK.has(kademe)) kayit.ip = ip;
  else delete kayit.ip;

  // Bildirim listeye ilk girişte bir kez gider. Her tıklamada göndermek,
  // saldırı sürerken telefonu kilitler ve uyarı okunmaz hâle gelir.
  const bildirilecek = ENGELLENECEK.has(kademe) && !kayit.bildirildi;
  if (bildirilecek) kayit.bildirildi = true;

  await env.TIKLAMA.put(anahtar, JSON.stringify(kayit), {
    expirationTtl: SAKLAMA_SN,
  });

  if (bildirilecek) await bildir(kayit, sebep, env);
}

/**
 * 1. kademe. Reklamdan gelmemiş ziyaretçi için HİÇBİR ŞEY yazılmaz: kayıt
 * yalnızca o adresin zaten bir ücretli tıklama kaydı varsa güncellenir.
 * Kayıt yoksa yeni kayıt açılmaz — sitenin bütün ziyaretçileri izlenmez.
 */
async function etkilesimEkle(request, tur, env) {
  if (!ETKILESIM_ADI[tur]) return;
  const ip = request.headers.get('CF-Connecting-IP');
  if (!ip || !env.RAPOR_ANAHTARI) return;

  const anahtar = `h:${await ozet(ip, env.RAPOR_ANAHTARI)}`;
  const kayit = await env.TIKLAMA.get(anahtar, { type: 'json' });
  if (!kayit) return;

  kayit.etkilesim = { tur, z: new Date(Date.now()).toISOString() };
  delete kayit.ip; // gerçek müşteri: tam adrese artık hiçbir iş için gerek yok
  await env.TIKLAMA.put(anahtar, JSON.stringify(kayit), { expiration: bitis(kayit) });
}

/*
  Bildirim tam IP TAŞIMAZ: Telegram üçüncü taraf ve yurt dışında. Kısaltılmış
  adres operatörü gösterir, tam adres rapor sayfasında durur.
*/
async function bildir(kayit, sebep, env) {
  if (!env.TELEGRAM_TOKEN || !env.TELEGRAM_CHAT) return;

  const metin =
    `⚠️ Şüpheli reklam tıklaması\n\n` +
    `IP: ${kayit.maske || '—'} (tam adres rapor sayfasında)\n` +
    `Sebep: ${sebep}\n` +
    `Operatör: ${kayit.operator || '—'}\n` +
    `Konum: ${kayit.sehir || '—'} / ${kayit.ulke || '—'}\n\n` +
    `Ads → Ayarlar → Ek ayarlar → IP hariç tutmaları`;

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

/* ---------------------------------------------------- "Ads'e ekledim" işareti */

/**
 * Bir adresi ya da bloğu "Ads'e eklendi" olarak işaretler veya işareti
 * kaldırır. İşaret KV'de duruyor, tarayıcıda değil.
 */
async function isaretle(request, env) {
  if (!env.TIKLAMA) return new Response('kv-yok', { status: 503 });

  const gelen = new URLSearchParams(await request.text());
  // Kayıt anahtarı doğrudan geliyor: `h:<özet>`, 02.10.2026 öncesinin
  // `ip:<adres>` kayıtları ya da blok `b:85.106.132.*`. Başka bir KV
  // anahtarına yazdırılamasın diye biçim sınırlı.
  const anahtar = gelen.get('anahtar') || '';
  const blok = /^b:\d{1,3}\.\d{1,3}\.\d{1,3}\.\*$/.test(anahtar);
  if (!blok && !/^(h|ip):[0-9a-fA-F.:]{1,64}$/.test(anahtar)) {
    return new Response('eksik', { status: 400 });
  }

  const durum = gelen.get('durum') === '1';
  let kayit = await env.TIKLAMA.get(anahtar, { type: 'json' });
  if (!kayit && !blok) return new Response('kayit-yok', { status: 404 });
  kayit = kayit ?? { ilk: new Date(Date.now()).toISOString() };

  kayit.engellendi = durum;
  kayit.engellendiTarih = durum ? new Date(Date.now()).toISOString() : null;

  // Blok kaydı kendi tıklaması olmadığı için işaret anından itibaren sayılır.
  if (blok) kayit.son = new Date(Date.now()).toISOString();

  /*
    TTL yerine MUTLAK bitiş zamanı: kayıt son tıklamadan UZUN_GUN gün sonra
    silinir. expirationTtl kullanılsaydı her işaretleme kaydın ömrünü öteler
    ve /kvkk/ metnindeki saklama süresi yanlışlanırdı.
  */
  await env.TIKLAMA.put(anahtar, JSON.stringify(kayit), { expiration: bitis(kayit) });

  return new Response('tamam', { headers: { 'Cache-Control': 'no-store' } });
}

/* --------------------------------------------------------------- rapor */

/** KV'deki bir önekin bütün anahtarları — 1000'den fazlası sayfa sayfa. */
async function hepsiniListele(kv, prefix) {
  const anahtarlar = [];
  let cursor;
  do {
    const sayfa = await kv.list({ prefix, cursor });
    anahtarlar.push(...sayfa.keys);
    cursor = sayfa.list_complete === false ? sayfa.cursor : undefined;
  } while (cursor);
  return anahtarlar;
}

/** Kayıtları 50'şerli paralel okur; 30 günlük kayıtta yüzlerce anahtar olur. */
async function topluOku(kv, anahtarlar) {
  const sonuc = [];
  for (let i = 0; i < anahtarlar.length; i += 50) {
    const parca = anahtarlar.slice(i, i + 50);
    const veriler = await Promise.all(parca.map((k) => kv.get(k.name, { type: 'json' })));
    parca.forEach((k, j) => sonuc.push([k.name, veriler[j]]));
  }
  return sonuc;
}

/**
 * 3. kademe. Aynı /24 bloğundaki adreslerin tıklama saatleri tek çizgiye
 * dizilir; BLOK_DK'lık bir pencerede BLOK_ESIK farklı adres varsa blok
 * listeye girer. Blokta UZUN_GUN içinde bir kez bile gerçek müşteri
 * görüldüyse blok hiç işaretlenmez: `a.b.c.*` yazmak o müşteriyi ve
 * komşularını da reklamdan keser. Oradaki bot adresleri yine 2. ve 4.
 * kademeden tek tek yakalanır.
 */
function bloklariBul(kayitlar) {
  const gruplar = new Map();
  for (const k of kayitlar) {
    if (k.mobil || k.google || !String(k.maske).includes('.')) continue;
    if (k.kademe === 'bot') continue; // zaten tek başına listede
    if (!gruplar.has(k.maske)) gruplar.set(k.maske, []);
    for (const t of k.tiklamalar || []) {
      if (t && t.z) gruplar.get(k.maske).push({ z: Date.parse(t.z), k });
    }
  }

  const bloklar = [];
  for (const [maske, olaylar] of gruplar) {
    if (olaylar.some((o) => o.k.kademe === 'gercek')) continue;
    olaylar.sort((a, b) => a.z - b.z);
    let bulunan = null;
    let j = 0;
    for (let i = 0; i < olaylar.length; i++) {
      while (olaylar[i].z - olaylar[j].z > BLOK_DK * 60000) j++;
      const farkli = new Set(olaylar.slice(j, i + 1).map((o) => o.k.anahtar));
      if (farkli.size >= BLOK_ESIK && (!bulunan || farkli.size > bulunan.adet)) {
        bulunan = { adet: farkli.size };
      }
    }
    if (!bulunan) continue;
    const uyeler = [...new Set(olaylar.map((o) => o.k))];
    const tiklamalar = olaylar.map((o) => ({ z: new Date(o.z).toISOString() }));
    bloklar.push({
      anahtar: `b:${maske}`,
      ip: maske,
      goster: `${maske} (${uyeler.length} adres)`,
      sebep: `Sıralı adres: ${BLOK_DK} dakikada ${bulunan.adet} farklı adres`,
      son: tiklamalar[tiklamalar.length - 1].z,
      toplam: tiklamalar.length,
      gunSayisi: new Set(tiklamalar.map((t) => t.z.slice(0, 10))).size,
      tiklamalar,
      gunler: {},
      operator: uyeler[0].operator,
      sehir: uyeler[0].sehir,
      ulke: uyeler[0].ulke,
      mobil: false,
    });
  }
  return bloklar;
}

async function rapor(env) {
  if (!env.TIKLAMA) {
    return sayfa('<h1>Tıklama sayacı</h1><p>KV bağlanmamış. wrangler.jsonc → kv_namespaces kaydını kontrol edin.</p>');
  }

  /*
    Üç önek: `h:` tıklama kayıtları, `b:` blok işaretleri, `ip:` 02.10.2026
    öncesinin tam IP'li kayıtları (en geç 09.10'da kendiliğinden silinir;
    o zamana kadar aynı kuralla maskelenip basılıyor).
  */
  const okunan = await topluOku(env.TIKLAMA, [
    ...(await hepsiniListele(env.TIKLAMA, 'h:')),
    ...(await hepsiniListele(env.TIKLAMA, 'ip:')),
  ]);
  const kayitlar = [];

  for (const [ad, veri] of okunan) {
    if (!veri) continue;
    const gunler = ayiklanmisGunler(veri);
    const toplam = Object.values(gunler).reduce((a, b) => a + b, 0);
    if (toplam === 0) continue;
    const tamIp = veri.ip || (ad.startsWith('ip:') ? ad.slice(3) : null);
    // Spread ÖNCE: sonra gelirse veri.gunler budanmış listenin üzerine yazar
    // ve döküm sütunu pencere dışındaki günleri gösterir.
    const satir = {
      ...veri,
      anahtar: ad,
      gunler,
      toplam,
      gunSayisi: Object.keys(gunler).length,
      mobil: paylasimliMi(veri),
      google: googleMi(veri),
      maske: veri.maske || maskele(tamIp),
    };
    const { kademe, sebep } = siniflandir(satir);
    satir.kademe = kademe;
    satir.sebep = sebep;
    // Kural 4 rapor tarafında da geçerli: tam adres yalnızca Ads'e
    // yapıştırılacak satırda basılır, geri kalan her yerde kısaltılmış hâli.
    // Tek istisna: daha önce Ads'e eklenmiş ama artık şüphe taşımayan adres.
    // Tam adres onu Ads'ten SİLEBİLMEK için gerekiyor ve zaten Ads'te duruyor.
    satir.ip = ENGELLENECEK.has(kademe) || veri.engellendi ? tamIp : null;
    satir.goster = satir.ip || satir.maske;
    kayitlar.push(satir);
  }

  const bloklar = bloklariBul(kayitlar);
  const blokIsaretleri = await topluOku(
    env.TIKLAMA,
    bloklar.map((b) => ({ name: b.anahtar })),
  );
  bloklar.forEach((b, i) => {
    b.engellendi = Boolean(blokIsaretleri[i][1]?.engellendi);
  });
  const blokMaskeleri = new Set(bloklar.map((b) => b.ip));

  const sonAn = (k) => k.son || k.ilk || '';
  const enYeniUstte = (a, b) => sonAn(b).localeCompare(sonAn(a));

  // Bloğu zaten listede olan tek adres ayrıca yazılmaz: `a.b.c.*` onu kapsıyor.
  // Tam adresi olmayan satır (02.10.2026 öncesi tek tıklamalık sunucu
  // merkezi kaydı) yine basılır ama kutusu olmaz; bir sonraki tıklamada
  // tam adres yazılır ve yapıştırma listesine girer.
  const tekler = kayitlar
    .filter((k) => ENGELLENECEK.has(k.kademe) && !blokMaskeleri.has(k.maske))
    .sort((a, b) => b.toplam - a.toplam || enYeniUstte(a, b));
  const engellenecek = [...tekler, ...bloklar.sort(enYeniUstte)];

  /*
    Ads'te engelli ama şüphe kalmamış adresler. 02.10.2026'da yaşandı: çift
    sayım yüzünden 4 sabit hat adresi "şüpheli" göründü ve sahibi onları Ads'te
    engelledi; düzeltmeden sonra hepsi tek ziyaretlik gerçek müşteri çıktı.
    Bu bölüm o yanlışı geri almanın yolu. Diğer bölümlerde tekrar basılmazlar.
  */
  const kaldirilacak = kayitlar
    .filter((k) => k.engellendi && !ENGELLENECEK.has(k.kademe))
    .map((k) => ({ ...k, sebep: kaldirmaSebebi(k) }))
    .sort(enYeniUstte);
  const kalanlar = kayitlar.filter((k) => !k.engellendi);

  const gercek = kalanlar.filter((k) => k.kademe === 'gercek').sort(enYeniUstte);
  const mobil = kalanlar.filter((k) => k.kademe === 'mobil').sort(enYeniUstte);
  const dogrulama = kalanlar.filter((k) => k.kademe === 'google').sort(enYeniUstte);
  const normal = kalanlar
    .filter((k) => k.kademe === 'normal' && !blokMaskeleri.has(k.maske))
    .sort(enYeniUstte);

  // Yapıştırma kutusunda YALNIZCA henüz Ads'e eklenmemiş adresler durur.
  const kalan = engellenecek.filter((k) => k.ip && !k.engellendi);
  const eklenmis = engellenecek.filter((k) => k.engellendi);

  return sayfa(`
    <h1>Ücretli tıklama sayacı</h1>
    <p class="not">Son <strong>${UZUN_GUN} günün</strong> <code>gclid</code>
    taşıyan istekleri — yani reklamdan gelen ve <strong>parası ödenen</strong>
    tıklamalar. Normal sayfa ziyaretleri buraya girmez. Aynı adresten
    ${TEKRAR_SN / 60} dakika içinde gelen tekrarlar <strong>tek tıklama</strong> sayılır.</p>
    <p class="not"><strong>Listeye girme sebepleri:</strong> sunucu merkezinden ya da yurt
    dışından tıklama · aynı adres bloğundan ${BLOK_DK} dakikada ${BLOK_ESIK} farklı adres ·
    ${KISA_GUN} günde ${KISA_ESIK} ya da ${UZUN_GUN} günde ${UZUN_ESIK} tıklama.
    Sitede <strong>ara, WhatsApp ya da form</strong> düğmesine basan hiçbir adres listeye girmez.</p>
    <p class="not">Gizlilik: tam IP adresi yalnızca Ads'e eklenecek adreslerde tutulur.
    Diğer ziyaretçilerde son bölümü silinmiş hâli görünür (<code>88.242.196.*</code>).</p>

    <h2>Engellenecek — ${engellenecek.length}</h2>
    ${
      engellenecek.length
        ? `<p class="not">Bir adresi Ads'te <strong>IP hariç tutmalarına</strong> ekledikten
           sonra <strong>“Ads'e eklendi”</strong> kutusunu işaretleyin: adres aşağıdaki
           yapıştırma listesinden düşer, satır soluklaşır. <code>*</code> ile biten satır
           bir adres bloğudur; Ads'e olduğu gibi yapıştırın.</p>
           ${tablo(engellenecek, { secilebilir: true, sebep: true, liste: true })}
           <h3>Ads'e yapıştırmaya hazır (<span id="kalanSayi">${kalan.length}</span>)</h3>
           <div id="listeKutusu"${kalan.length ? '' : ' hidden'}>
             <pre id="liste">${kalan.map((k) => kacir(k.ip)).join('\n')}</pre>
             <p><button type="button" id="kopyala">Listeyi kopyala</button>
             <span id="kopyaNot" class="not"></span></p>
           </div>
           <p id="hepsiTamam" class="tamam"${kalan.length ? ' hidden' : ''}>
             Listedeki bütün adresler Ads'e eklenmiş. Yeni bir adres çıkarsa
             burada belirir.</p>
           <p class="not">Ads → kampanya → <strong>Ayarlar → Ek ayarlar → IP hariç tutmaları</strong>.
           Kampanya başına 500 satır sınırı var.
           ${eklenmis.length ? `Şu ana kadar <strong>${eklenmis.length}</strong> satırı eklediğinizi işaretlediniz.` : ''}</p>`
        : '<p class="not">Engellenecek adres yok.</p>'
    }

    ${
      kaldirilacak.length
        ? `<h2 class="uyari">Ads'te engelli ama şüphe kalmadı — kaldırın (${kaldirilacak.length})</h2>
           <p class="not">Bu adresleri daha önce Ads'e eklendi diye işaretlediniz, ama artık
           şüpheli görünmüyorlar; büyük ihtimalle <strong>gerçek müşteri</strong>. Ads'te
           <strong>IP hariç tutmaları</strong> listesinden silin, sonra buradaki kutunun
           işaretini kaldırın: satır bu bölümden düşer.</p>
           ${tablo(kaldirilacak, { secilebilir: true, sebep: true })}`
        : ''
    }

    ${
      gercek.length
        ? `<h2 class="iyi">Gerçek müşteri — ENGELLEMEYİN (${gercek.length})</h2>
           <p class="not">Reklama tıklayıp sitede bir düğmeye basmış adresler. Kaç kez
           tıklamış olurlarsa olsunlar listeye girmezler.</p>
           ${tablo(gercek, { sebep: true })}`
        : ''
    }

    ${
      mobil.length
        ? `<h3 class="uyari">Tekrar tıkladı ama ENGELLEMEYİN — mobil hat ya da paylaşımlı adres (${mobil.length})</h3>
           <p class="not">Mobil operatörlerde tek genel IP binlerce aboneye paylaştırılıyor;
           iPhone'ların Özel Geçiş adresleri de öyle. Engellersen o an o adresi kullanan
           <strong>gerçek müşteriler</strong> de reklamı göremez. Ayrıca mobil adresler
           saatlik değişiyor.</p>
           ${tablo(mobil, { sebep: true })}`
        : ''
    }

    ${
      dogrulama.length
        ? `<h2>Google'ın kendi denetimi — ${dogrulama.length}</h2>
           <p class="not"><strong>Bunlar müşteri değil, Google'ın kendi sunucuları.</strong>
           Reklam incelemesi sırasında sayfayı açıyorlar; <code>gclid</code> taşıdıkları için
           sayaca düşüyorlar ama <strong>parasını ödemiyorsunuz</strong>. Engellemeyin.</p>
           ${tablo(dogrulama)}`
        : ''
    }

    <h2>Şüphe yok — ${normal.length}</h2>
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
 * @param secenek.secilebilir  "Ads'e eklendi" işaret sütunu basılır.
 * @param secenek.sebep  "Sebep" sütunu basılır.
 * @param secenek.liste  kutular yapıştırma listesini besler (yalnızca
 *   "Engellenecek" tablosu; "kaldırın" bölümündeki kutu listeye ekleme yapmaz).
 */
function tablo(satirlar, { secilebilir = false, sebep = false, liste = false } = {}) {
  return `<div class="kaydir"><table>
    <tr>${secilebilir ? "<th>Ads'e eklendi</th>" : ''}<th>IP</th>${sebep ? '<th>Sebep</th>' : ''}<th>Son tıklama</th><th>Toplam</th><th>Gün</th><th>Tıklama saatleri</th><th>Operatör</th><th>Konum</th></tr>
    ${satirlar
      .map(
        (k) => `<tr class="${k.mobil ? 'mobil' : ''}${k.engellendi ? ' eklendi' : ''}">
          ${
            !secilebilir
              ? ''
              : k.ip
                ? `<td class="isaret"><label><input type="checkbox" data-ip="${kacir(k.ip)}" data-anahtar="${kacir(k.anahtar)}" data-eklenebilir${liste ? ' data-liste' : ''}${k.engellendi ? ' checked' : ''}><span>eklendi</span></label></td>`
                : '<td class="kucuk">tam adres bir sonraki tıklamada</td>'
          }
          <td><code>${kacir(k.goster)}</code></td>
          ${sebep ? `<td class="kucuk sebep">${kacir(k.sebep || '—')}</td>` : ''}
          <td class="kucuk zaman">${kacir(anBicimi(k.son || k.ilk))}</td>
          <td class="adet">${k.toplam}</td>
          <td>${k.gunSayisi}</td>
          <td class="kucuk">${saatDokumu(k)}</td>
          <td class="kucuk">${kacir(k.operator || '—')}${k.mobil ? ` <strong class="uyari">· ${korunanMi(k) ? 'PAYLAŞIMLI' : 'MOBİL'}</strong>` : ''}</td>
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
    return Object.entries(k.gunler || {})
      .sort()
      .reverse()
      .map(([g, a]) => `${kacir(g)}: ${a}`)
      .join('<br>');
  }
  // Tek adresin saatleri kural 5'e göre birleştirilir (eski kayıtta aynı
  // dakika 4 kez yazılıydı). Blok satırı farklı adreslerden oluşur, birleştirilmez.
  const zamanlar = String(k.anahtar).startsWith('b:')
    ? liste.map((t) => Date.parse(t.z)).sort((a, b) => a - b)
    : ayriZamanlar(liste);
  const gosterilen = zamanlar.reverse().slice(0, 8);
  const gizli = k.toplam - gosterilen.length;
  return (
    gosterilen.map((z) => kacir(anBicimi(new Date(z).toISOString()))).join('<br>') +
    (gizli > 0 ? `<br><span class="soluk">+${gizli} daha</span>` : '')
  );
}

function kacir(s) {
  return String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

/*
  Yalnızca bu yönetim ekranında çalışan birkaç satır. Siteye inmiyor:
  sayfa Worker tarafından üretiliyor, dist/ içinde yok, sitemap'te yok.

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
      body: 'anahtar=' + encodeURIComponent(kutu.dataset.anahtar) + '&durum=' + (istenen ? '1' : '0')
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
    document.querySelectorAll('input[data-liste]').forEach(function (k) {
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
      .iyi{color:#166534}
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
      .sebep{min-width:150px;word-break:normal}
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
