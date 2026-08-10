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

/*
  Benzersizlik nöbeti.

  Aynı meta açıklamayı iki sayfada görmek Google için "bu iki sayfa aynı"
  demektir ve para sayfalarının birbirini yemesine yol açar. Bir kez oldu:
  kalıplardan ikisi yalnızca `cihaz` kullanıyordu, `ulasimDk` ve `mahalleler`
  boş olduğu için diğer iki kalıp havuzdan düşüyordu ve cihazı paylaşan üç
  klima hizmeti aynı ilçede birebir aynı açıklamayı basıyordu.

  Kalıplar artık hizmet adını taşıdığı için çarpışma yapısal olarak imkânsız;
  bu nöbet, ileride bir kalıp değişirse sessizce geri gelmesin diye duruyor.
*/
const gorulenAciklama = new Map<string, string>();

function benzersizMi(metin: string, sayfa: string): void {
  const onceki = gorulenAciklama.get(metin);
  if (onceki !== undefined && onceki !== sayfa) {
    console.warn(
      `[seo] AYNI description iki sayfada: ${onceki} + ${sayfa}\n      "${metin}"`
    );
    return;
  }
  gorulenAciklama.set(metin, sayfa);
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
    // Montajın arızası yok — hash bu kalıbı seçtiğinde başlık "Klima Montajı |
    // Yerinde Arıza Tespiti" oluyordu. Başlık arama sonucunda okunan ilk şey;
    // alakasız kelime hem tıklanmayı hem Kalite Puanını düşürür.
    `${ilce.ad} ${hizmet.ad} | ${hizmet.tur === 'montaj' ? 'Yerinde Keşif' : 'Yerinde Arıza Tespiti'}`,
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
    // Montajda "arıza tespiti" yanlış; yerine aramada gerçekten yazılan iki
    // kelime konuyor ("söküm", "taşıma") — hem doğru hem kapsam genişletiyor.
    `${hizmet.ad} ${sehir} — ${hizmet.tur === 'montaj' ? 'Söküm ve Taşıma' : 'Yerinde Arıza Tespiti'}`,
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
  const sonuc = kirp(metin, DESC_MAX, `description hub/${hizmet.slug}`);
  benzersizMi(sonuc, `/${hizmet.slug}/`);
  return sonuc;
}

export function paraSayfasiDescription(hizmet: Hizmet, ilce: Ilce): string {
  /*
    Kalıpların TAMAMI hizmet adını taşır, `cihaz` tek başına kullanılmaz.
    Sebep: "klima servisi", "klima bakımı" ve "klima gaz dolumu" aynı cihazı
    paylaşıyor; cihaz üzerinden kurulan cümle üçünde de birebir aynı çıkıyor.
    Hizmet adı benzersiz olduğu için açıklama da benzersiz oluyor — bu, hash'in
    kalıpları dağıtmasına bel bağlamadan, yapısal olarak garanti.
  */
  const ad = hizmet.ad.toLocaleLowerCase('tr-TR');
  const mahalle = degerListesi(ilce.mahalleler)[0];

  /*
    Havuza yalnızca VERİSİ OLAN kalıp girer. Kapı sadece yerelNotlar'ı zorunlu
    tutuyor, mahalle ve ulasimDk ondan bağımsız boş kalabiliyor — filtre olmadan:
      - mahalle boşken meta açıklamaya "{PLACEHOLDER — mahalle adı}" yazılıyordu,
      - ulasimDk=0 iken "Ortalama 0 dakikada adresinizdeyiz" gibi YANLIŞ bir
        vaat üretiliyordu ki bu iskele metninden daha kötüdür.
    İkisi de kalıbı havuzdan düşürür; seçim kalanlar arasından yapılır.
  */
  /*
    Montajın arızası yoktur. Aynı havuzu kullanmak "klima montajı: arızayı
    yerinde tespit eder" gibi YANLIŞ bir cümle üretiyordu — meta açıklama arama
    sonucunda okunan metin olduğu için bu doğrudan tıklanma kaybı demek.
    Kalıp SAYISI ve mantığı aynı (aynı gün · onaysız işlem yok · kapıda ödeme),
    yalnızca yerinde yapılan işin adı değişiyor.
  */
  const kaliplar = (
    hizmet.tur === 'montaj'
      ? [
          `${ilce.ad} ve çevresinde ${ad} için aynı gün gidiyoruz. Yerinde keşif, kapıda ödeme, montaj işçiliğinin arkasındayız. Hemen arayın.`,
          ilce.ulasimDk > 0
            ? `${ilce.sehir} ${ilce.ad}'de ${ad}. Ortalama ${ilce.ulasimDk} dakikada adresinizdeyiz, ücret onayı almadan işleme başlamayız.`
            : null,
          `${ilce.ad} ${ad}: yeri ve mesafeyi yerinde görür, fiyatı önce söyler, onay alınca başlarız. Kapıda nakit veya kart.`,
          mahalle
            ? `${mahalle} dahil ${ilce.ad} genelinde ${ad}, söküm ve taşıma. Aynı gün randevu, şeffaf fiyat.`
            : null,
          `${ilce.ad} için ${ad}, söküm ve taşıma. Klimanın yerini telefonda anlatın; kesin tutar yerinde keşiften sonra, onayınızla.`,
        ]
      : [
          `${ilce.ad} ve çevresinde ${ad} için aynı gün gidiyoruz. Yerinde arıza tespiti, kapıda ödeme, değişen parçaya garanti. Hemen arayın.`,
          ilce.ulasimDk > 0
            ? `${ilce.sehir} ${ilce.ad}'de ${ad}. Ortalama ${ilce.ulasimDk} dakikada adresinizdeyiz, ücret onayı almadan işleme başlamayız.`
            : null,
          `${ilce.ad} ${ad}: arızayı yerinde tespit eder, fiyatı önce söyler, onay alınca başlarız. Kapıda nakit veya kart.`,
          mahalle
            ? `${mahalle} dahil ${ilce.ad} genelinde ${ad}. Aynı gün randevu, şeffaf fiyat, değişen parçaya garanti.`
            : null,
          `${ilce.ad} için ${ad}: şikâyeti telefonda anlatın, yaklaşık aralığı söyleyelim. Kesin tutar yerinde tespitten sonra, onayınızla.`,
        ]
  ).filter((k): k is string => k !== null);

  const i = kalipIndeksi(`${ilce.slug}:${hizmet.slug}`, kaliplar.length);
  const metin = kirp(kaliplar[i] as string, DESC_MAX, `description ${hizmet.slug}/${ilce.slug}`);
  benzersizMi(metin, `/${hizmet.slug}/${ilce.slug}/`);
  return metin;
}
