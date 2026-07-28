/**
 * Olay katmanı. Çerez onayı verilmeden HİÇBİR olay gönderilmez;
 * onay öncesi tetiklenenler kuyrukta bekler, onay gelince sırayla akar.
 * Onay reddedilirse kuyruk atılır.
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

function gtag(...args: unknown[]): void {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(args);
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

  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });

  for (const olay of kuyruk) gonder(olay);
  kuyruk = [];
}

/**
 * data-olay nitelikli öğeleri tek bir delege dinleyiciyle bağlar.
 * Her bileşene ayrı script koymamak için: JS bütçesini burada tutuyoruz.
 */
export function baglat(sayfa: string): void {
  consentVarsayilani();

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
