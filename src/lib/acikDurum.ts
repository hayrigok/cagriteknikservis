/*
  Açık/kapalı çipinin mantığı (Hero). Saf fonksiyonlar: build sırasında saat
  metnini ayrıştırmak için, tarayıcıda o anki durumu hesaplamak için aynı kod
  kullanılıyor; tests/acik-durum.test.ts denetliyor.

  Bu dosya `@/` takma adıyla import YAPMAZ: testler Node'da doğrudan
  çalıştırıyor, orada takma ad yok.

  Neden ayrıştırma bu kadar katı: çip ziyaretçiye "şu an açığız" diye bir
  İDDİA basıyor. Saat metni beklenen kalıpta değilse (örn. "Hafta içi
  09:00–18:00", ya da {PLACEHOLDER}) çip HİÇ basılmaz — yanlış "açığız"
  demek, hiç dememekten pahalıdır ({PLACEHOLDER} sözleşmesinin mantığı).
*/

export interface CalismaAraligi {
  /** Gece yarısından itibaren dakika, 0–1439. */
  acilisDk: number;
  kapanisDk: number;
  /** Ekranda yazılan hâli, "08:00". */
  acilis: string;
  kapanis: string;
}

const KALIP = /^Her gün (\d{2}):(\d{2})\s*[–-]\s*(\d{2}):(\d{2})$/;

export function calismaAraligi(metin: string): CalismaAraligi | null {
  const m = KALIP.exec(metin.trim());
  if (!m) return null;
  const [sa1, dk1, sa2, dk2] = [m[1], m[2], m[3], m[4]].map(Number) as [number, number, number, number];
  if (sa1 > 23 || sa2 > 24 || dk1 > 59 || dk2 > 59) return null;
  const acilisDk = sa1 * 60 + dk1;
  const kapanisDk = (sa2 * 60 + dk2) % 1440;
  // Açılış = kapanış belirsiz (7/24 mü, hiç mi?) — iddia basmayız.
  if (acilisDk === kapanisDk) return null;
  return { acilisDk, kapanisDk, acilis: `${m[1]}:${m[2]}`, kapanis: `${m[3]}:${m[4]}` };
}

export function acikMi(simdiDk: number, a: Pick<CalismaAraligi, 'acilisDk' | 'kapanisDk'>): boolean {
  return a.acilisDk < a.kapanisDk
    ? simdiDk >= a.acilisDk && simdiDk < a.kapanisDk
    : simdiDk >= a.acilisDk || simdiDk < a.kapanisDk; // gece yarısını aşan aralık
}

/*
  Kalıp bilerek EK gerektirmiyor: "23:00'e kadar" / "20:00'ye kadar" gibi
  saat ekleri saat değişince sessizce yanlışlaşır.
*/
export function durumMetni(acik: boolean, a: Pick<CalismaAraligi, 'acilis' | 'kapanis'>): string {
  return acik ? `Şu an açığız · kapanış ${a.kapanis}` : `Şu an kapalıyız · açılış ${a.acilis}`;
}

/** Türkiye saatiyle gece yarısından itibaren dakika — ziyaretçinin telefonunun saat dilimi değil. */
export function istanbulDakikasi(tarih: Date = new Date()): number {
  const parca = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Istanbul',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(tarih);
  const sa = Number(parca.find((p) => p.type === 'hour')?.value ?? 0);
  const dk = Number(parca.find((p) => p.type === 'minute')?.value ?? 0);
  return sa * 60 + dk;
}
