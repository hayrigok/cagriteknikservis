import type { Hizmet, Ilce } from './types';

export const TITLE_MAX = 60;
export const DESC_MAX = 155;

/** Slug'dan deterministik indeks — aynı sayfa her build'de aynı kalıbı alır. */
function kalipIndeksi(tohum: string, adet: number): number {
  let h = 0;
  for (let i = 0; i < tohum.length; i++) {
    h = (h * 31 + tohum.charCodeAt(i)) >>> 0;
  }
  return h % adet;
}

function kirp(metin: string, sinir: number, etiket: string): string {
  if (metin.length <= sinir) return metin;
  console.warn(`[seo] ${etiket} ${metin.length} karakter, sınır ${sinir}: "${metin}"`);
  return metin.slice(0, sinir - 1).trimEnd() + '…';
}

/**
 * Her hizmet × ilçe için benzersiz title. Sadece ilçe adı değişen tek kalıp
 * yerine birkaç kalıp arasında dönerek yakın-kopya başlık üretmeyi önler.
 */
export function paraSayfasiTitle(hizmet: Hizmet, ilce: Ilce): string {
  const kaliplar = [
    `${ilce.ad} ${hizmet.ad} — Aynı Gün | ${ilce.sehir}`,
    `${ilce.ad} ${hizmet.ad} | 2 Saatte Kapınızda`,
    `${hizmet.ad} ${ilce.ad} — ${ilce.sehir} Servis Hattı`,
    `${ilce.ad} ${hizmet.ad} | Yerinde Arıza Tespiti`,
  ];
  const i = kalipIndeksi(`${hizmet.slug}:${ilce.slug}`, kaliplar.length);
  return kirp(kaliplar[i] as string, TITLE_MAX, `title ${hizmet.slug}/${ilce.slug}`);
}

export function paraSayfasiDescription(hizmet: Hizmet, ilce: Ilce): string {
  const cihaz = hizmet.cihaz.toLocaleLowerCase('tr-TR');
  const mahalle = ilce.mahalleler[0];
  const kaliplar = [
    `${ilce.ad} ve çevresinde ${cihaz} arızalarına aynı gün gidiyoruz. Yerinde arıza tespiti, kapıda ödeme, işçilik garantisi. Hemen arayın.`,
    `${ilce.sehir} ${ilce.ad}'de ${cihaz} tamiri ve bakımı. Ortalama ${ilce.ulasimDk} dakikada adresinizdeyiz, ücret onayı almadan işleme başlamayız.`,
    `${ilce.ad} ${hizmet.ad.toLocaleLowerCase('tr-TR')}: arızayı yerinde tespit eder, fiyatı önce söyler, onay alınca başlarız. Kapıda nakit veya kart.`,
    `${mahalle ?? ilce.ad} dahil ${ilce.ad} genelinde ${cihaz} servisi. Aynı gün randevu, şeffaf fiyat, değişen parçaya garanti.`,
  ];
  const i = kalipIndeksi(`${ilce.slug}:${hizmet.slug}`, kaliplar.length);
  return kirp(kaliplar[i] as string, DESC_MAX, `description ${hizmet.slug}/${ilce.slug}`);
}
