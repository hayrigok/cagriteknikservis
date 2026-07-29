/**
 * Olay katmanı. Çerez onayı verilmeden HİÇBİR olay gönderilmez;
 * onay öncesi tetiklenenler kuyrukta bekler, onay gelince sırayla akar.
 * Onay reddedilirse kuyruk atılır.
 *
 * gtag.js YÜKLEYİCİSİ de burada. İki sert kural var:
 *
 *  1. Script yalnızca ONAY VERİLDİKTEN SONRA enjekte edilir, önce değil.
 *     Reddeden veya karar vermeyen ziyaretçi googletagmanager.com'a hiçbir
 *     istek yapmaz — Consent Mode'un "denied" başlaması tek başına yetmez,
 *     script'in kendisi de yüklenmemeli.
 *  2. Kimlik yoksa hiçbir şey yüklenmez. firma.json'daki alanlar boşken bu
 *     dosyanın maliyeti birkaç yüz bayt, dış istek SIFIR kalır.
 *
 * Kimlikler bu modüle IMPORT EDİLMEZ, <html> üzerindeki data- niteliklerinden
 * okunur. Sebep bütçe: analytics.ts istemci paketine giriyor, buradan
 * `@/lib/veri` import etmek ilceler.json + hizmetler.json'ın tamamını da
 * tarayıcıya indirirdi. Aynı gerekçeyle sayfa kimliği de data-sayfa'dan geliyor.
 */

export type Konum = 'header' | 'hero' | 'sticky' | 'footer' | 'mobil_bar' | 'yan_buton';

export type Olay =
  | { ad: 'tel_click'; konum: Konum }
  | { ad: 'whatsapp_click'; konum: Konum }
  | { ad: 'form_start'; sayfa: string }
  | { ad: 'form_submit'; sayfa: string };

const ONAY_ANAHTARI = 'cs_onay';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let kuyruk: Olay[] = [];

function gtag(..._args: unknown[]): void {
  window.dataLayer = window.dataLayer ?? [];
  // gtag.js komut kuyruğu `arguments` nesnesi bekler — resmî snippet'in
  // sözleşmesi bu. Rest dizisi göndermiyoruz ki davranış birebir aynı olsun.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

/** <html data-ga> / <html data-ads>. Yoksa boş string döner. */
function kimlik(ad: 'ga' | 'ads'): string {
  return document.documentElement.dataset[ad] ?? '';
}

let gtagYuklendi = false;

/**
 * gtag.js'i enjekte eder. YALNIZCA onay verildikten sonra çağrılır.
 *
 * Bütçe notu: bu script ~90 KB ve sitenin geri kalanının (~1,8 KB JS, sıfır dış
 * istek) tamamından büyük. Bilerek kabul edildi — ölçülmeyen reklam harcaması
 * kör harcamadır. Zararı sınırlayan üç şey: onay öncesi hiç yüklenmiyor,
 * `async` ile yükleniyor (render'ı bloklamaz) ve LCP metin olduğu için ilk
 * boyamaya girmiyor.
 */
function gtagYukle(): void {
  if (gtagYuklendi) return;

  const ga = kimlik('ga');
  const ads = kimlik('ads');
  // İkisi de boşsa yükleyecek bir şey yok: dış istek yapılmaz.
  const ilk = ga || ads;
  if (!ilk) return;

  gtagYuklendi = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ilk)}`;
  document.head.appendChild(s);

  gtag('js', new Date());
  // Her kimlik ayrı config ister. GA4 ve Ads birbirinin yerine geçmez:
  // biri davranışı, diğeri dönüşümü ölçer.
  if (ga) gtag('config', ga);
  if (ads) gtag('config', ads);
}

export function onayDurumu(): 'kabul' | 'ret' | null {
  try {
    const d = localStorage.getItem(ONAY_ANAHTARI);
    return d === 'kabul' || d === 'ret' ? d : null;
  } catch {
    return null;
  }
}

/** Consent Mode varsayılanı: her şey reddedilmiş başlar. Script'ten önce çağrılır. */
export function consentVarsayilani(): void {
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });
}

function gonder(olay: Olay): void {
  const { ad, ...parametreler } = olay;
  gtag('event', ad, parametreler);
}

export function izle(olay: Olay): void {
  if (onayDurumu() !== 'kabul') {
    // Onay yoksa beklet. Kullanıcı bandı kapatmadan tıklamış olabilir.
    kuyruk.push(olay);
    return;
  }
  gonder(olay);
}

export function onayVer(kabul: boolean): void {
  try {
    localStorage.setItem(ONAY_ANAHTARI, kabul ? 'kabul' : 'ret');
  } catch {
    /* localStorage kapalıysa oturum boyunca bellekte kalır */
  }

  if (!kabul) {
    kuyruk = [];
    return;
  }

  /*
    Sıra önemli: önce consent update dataLayer'a yazılır, SONRA script yüklenir.
    Böylece gtag.js açıldığı anda izni verilmiş halde başlar; tersi sırada ilk
    isteği "denied" durumunda atıp sonra düzeltirdi.
  */
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });

  gtagYukle();

  for (const olay of kuyruk) gonder(olay);
  kuyruk = [];
}

/**
 * data-olay nitelikli öğeleri tek bir delege dinleyiciyle bağlar.
 * Her bileşene ayrı script koymamak için: JS bütçesini burada tutuyoruz.
 */
export function baglat(sayfa: string): void {
  consentVarsayilani();

  /*
    Daha önce onay vermiş ziyaretçi: bant hiç görünmez, o yüzden onayVer()
    çağrılmaz ve script bu satır olmadan hiç yüklenmezdi. İkinci ziyaretten
    itibaren ölçüm ancak burada açılıyor.
  */
  if (onayDurumu() === 'kabul') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    });
    gtagYukle();
  }

  document.addEventListener(
    'click',
    (e) => {
      const hedef = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-olay]');
      if (!hedef) return;
      const ad = hedef.dataset.olay;
      const konum = (hedef.dataset.konum ?? 'hero') as Konum;
      if (ad === 'tel_click' || ad === 'whatsapp_click') {
        izle({ ad, konum });
      }
    },
    { passive: true }
  );

  const form = document.querySelector<HTMLFormElement>('[data-form]');
  if (form) {
    let basladi = false;
    form.addEventListener(
      'input',
      () => {
        if (basladi) return;
        basladi = true;
        izle({ ad: 'form_start', sayfa });
      },
      { passive: true, once: false }
    );
  }
}
