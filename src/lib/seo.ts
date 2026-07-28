import type { Hizmet, Ilce } from './types';
import { degerListesi } from './veri';

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

/**
 * Hizmet hub sayfası (/klima-servisi/). Şehir düzeyinde, ilçeden bağımsız —
 * ilçe kapısı bunları engellemez, `yerelNotlar` boşken de üretilirler.
 */
export function hubTitle(hizmet: Hizmet, sehir: string): string {
  const kaliplar = [
    `${sehir} ${hizmet.ad} — Aynı Gün Servis`,
    `${sehir} ${hizmet.ad} | 2 Saatte Kapınızda`,
    `${hizmet.ad} ${sehir} — Yerinde Arıza Tespiti`,
    `${sehir} ${hizmet.ad} | Servis Hattı`,
  ];
  const i = kalipIndeksi(`hub:${hizmet.slug}`, kaliplar.length);
  return kirp(kaliplar[i] as string, TITLE_MAX, `title hub/${hizmet.slug}`);
}

export function hubDescription(hizmet: Hizmet, sehir: string): string {
  // Önce özet, sonra YER KALIRSA çağrı cümlesi. Sabit kuyruk eklemek uzun
  // özetli hizmetlerde açıklamayı sınıra dayayıp yarım cümle kırpılmasına
  // yol açıyordu — arama sonucunda "…" ile biten açıklama güven kaybettirir.
  const taban = `${sehir} genelinde ${hizmet.ad.toLocaleLowerCase('tr-TR')}. ${hizmet.ozet}`;
  const kuyruk = ' Hemen arayın.';
  const metin = taban.length + kuyruk.length <= DESC_MAX ? taban + kuyruk : taban;
  return kirp(metin, DESC_MAX, `description hub/${hizmet.slug}`);
}

export function paraSayfasiDescription(hizmet: Hizmet, ilce: Ilce): string {
  const cihaz = hizmet.cihaz.toLocaleLowerCase('tr-TR');
  const mahalle = degerListesi(ilce.mahalleler)[0];

  /*
    Havuza yalnızca VERİSİ OLAN kalıp girer. Kapı sadece yerelNotlar'ı zorunlu
    tutuyor, mahalle ve ulasimDk ondan bağımsız boş kalabiliyor — filtre olmadan:
      - mahalle boşken meta açıklamaya "{PLACEHOLDER — mahalle adı}" yazılıyordu,
      - ulasimDk=0 iken "Ortalama 0 dakikada adresinizdeyiz" gibi YANLIŞ bir
        vaat üretiliyordu ki bu iskele metninden daha kötüdür.
    İkisi de kalıbı havuzdan düşürür; seçim kalanlar arasından yapılır.
  */
  const kaliplar = [
    `${ilce.ad} ve çevresinde ${cihaz} arızalarına aynı gün gidiyoruz. Yerinde arıza tespiti, kapıda ödeme, işçilik garantisi. Hemen arayın.`,
    ilce.ulasimDk > 0
      ? `${ilce.sehir} ${ilce.ad}'de ${cihaz} tamiri ve bakımı. Ortalama ${ilce.ulasimDk} dakikada adresinizdeyiz, ücret onayı almadan işleme başlamayız.`
      : null,
    `${ilce.ad} ${hizmet.ad.toLocaleLowerCase('tr-TR')}: arızayı yerinde tespit eder, fiyatı önce söyler, onay alınca başlarız. Kapıda nakit veya kart.`,
    mahalle
      ? `${mahalle} dahil ${ilce.ad} genelinde ${cihaz} servisi. Aynı gün randevu, şeffaf fiyat, değişen parçaya garanti.`
      : null,
  ].filter((k): k is string => k !== null);

  const i = kalipIndeksi(`${ilce.slug}:${hizmet.slug}`, kaliplar.length);
  return kirp(kaliplar[i] as string, DESC_MAX, `description ${hizmet.slug}/${ilce.slug}`);
}
