/** Ikon.astro içindeki set. Yeni ikon eklerken ikisini birlikte güncelleyin. */
export type IkonAdi =
  | 'klima'
  | 'camasir'
  | 'bulasik'
  | 'buzdolabi'
  | 'kurutma'
  | 'firin'
  | 'kucuk-ev'
  | 'telefon'
  | 'whatsapp'
  | 'kalkan'
  | 'arama'
  | 'kart'
  | 'saat'
  | 'konum'
  | 'ok'
  | 'chevron'
  | 'dis-link'
  | 'onay'
  | 'arac';

export interface Ilce {
  slug: string;
  ad: string;
  sehir: string;
  mahalleler: string[];
  /** Merkez/atölyeden ortalama ulaşım süresi, dakika. */
  ulasimDk: number;
  /**
   * İlçeye özgü, elle yazılmış saha notu. En az 200 karakter olmalı.
   * Altındaysa build o ilçenin sayfalarını üretmez (doorway page koruması).
   */
  yerelNotlar: string;
  aktif: boolean;
}

export interface Ariza {
  baslik: string;
  /** İki cümle: belirti + çözüm. */
  cozum: string;
}

export interface FiyatSatiri {
  islem: string;
  /**
   * Alt sınır TL. Bilinmiyorsa null bırakılır — o satırda "—" basılır, bir
   * hizmetteki satırların HEPSİ boşsa tablo yerine işlem listesi basılır.
   * Rakam uydurulmaz.
   */
  altTl: number | null;
  ustTl: number | null;
  not?: string;
}

/**
 * Hizmetin niteliği. Sayfa iskeleti aynı kalır, yalnızca SABİT METİNLERİN dili
 * değişir: tamir sayfası "arıza"dan söz eder, montaj sayfasının arızası yoktur.
 * Verilmezse 'tamir' — mevcut 8 hizmetin hepsi tamir/bakım.
 */
export type HizmetTuru = 'tamir' | 'montaj';

export interface Hizmet {
  slug: string;
  ad: string;
  /** Bkz. HizmetTuru. Sabit metinlerin dilini seçer, blok sırasını değiştirmez. */
  tur?: HizmetTuru;
  /** "{ilce}" belirteci ilçe adıyla değiştirilir. Sayfadaki tek H1. */
  h1Sablonu: string;
  /** Somut vaat, H1 altındaki satır. */
  altBaslik: string;
  cihaz: string;
  /** Hizmet hub sayfasında ve meta açıklamasında kullanılan kısa tanıtım. */
  ozet: string;
  ariza: Ariza[];
  /**
   * Arıza bloğunun başlığı. Verilmezse "En sık çıkan {cihaz} arızaları"
   * kalıbı kullanılır — bakım gibi arıza odaklı olmayan hizmetlerde gerekiyor.
   */
  arizaBaslik?: string;
  fiyatAraligi: FiyatSatiri[];
  sss: { soru: string; cevap: string }[];
  aktif: boolean;
}

export interface Firma {
  unvan: string;
  kisaAd: string;
  telefon: string;
  /** E.164, boşluksuz — wa.me linki bundan kurulur. */
  whatsapp: string;
  /**
   * Google İşletme Profili'ndeki GERÇEK işletme adı. Yalnızca JSON-LD'de
   * kullanılır, ekranda hiçbir yerde basılmaz.
   *
   * `kisaAd`'dan ayrı tutulmasının sebebi ikisinin FARKLI İŞ GÖRMESİ:
   * - `kisaAd` ("Adana Klima & Beyaz Eşya Servisi") ziyaretçiye ne iş
   *   yaptığımızı anlatır ve tıklatır — sahibinin açık isteği (29.07.2026).
   * - `isletmeAdi` ("Çağrı Teknik Servis") Google'a KİM olduğumuzu söyler ve
   *   Haritalar profiliyle eşleşmesi gerekir.
   *
   * İkisi birbirine karıştırılırsa ya ziyaretçi ne iş yaptığımızı anlamaz ya
   * da Google site ile profili eşleştiremez. Boş bırakılırsa şema `kisaAd`'a
   * düşer — eskiden öyleydi.
   */
  isletmeAdi: string;
  adres: string;
  sehir: string;
  /**
   * KVKK başvuru e-postası. Bilerek ayrı bir alan: Veri Sorumlusuna Başvuru
   * Tebliği'ne göre başvuru YAZILI kanaldan gelmek zorunda, telefon geçerli
   * kanal değil. Adres yoksa tek yazılı kanal budur.
   */
  eposta: string;
  vergiDairesi: string;
  vergiNo: string;
  calismaSaatleri: string;
  googleIsletmeUrl: string;
  /**
   * Garanti ifadesi. Bilerek "süre" değil: sahibi tek bir süre vermiyor,
   * garanti takılan parçaya göre değişiyor. Rozette olduğu gibi basılır.
   */
  garantiIfadesi: string;
  /*
    `markalar: string[]` alanı 29.07.2026'da KALDIRILDI. Sahibi marka listesi
    vermeyeceğini, çünkü ayrım yapmadan **bütün markalara** baktıklarını
    söyledi. Liste tutmak bu durumda yanlış: hem asla dolmayacak bir alanı her
    build'de raporlar, hem de listede olmayan bir marka sahibini "bakmıyorlar"
    diye düşündürüp arama kaybettirir. Cevap artık `hizmetler.json` içindeki
    marka SSS'inde düz metin olarak duruyor.
  */
  /** GA4 ölçüm kimliği, `G-` ile başlar. Boşken gtag.js hiç yüklenmez. */
  gaOlcumKimligi: string;
  /**
   * Google Ads dönüşüm kimliği, `AW-` ile başlar. GA4'ten bağımsız: yalnızca
   * bu doluysa da gtag.js yüklenir, çünkü Ads dönüşümleri GA4 olmadan da ölçülür.
   */
  adsKimligi: string;
}
