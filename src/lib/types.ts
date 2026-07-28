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

export interface Hizmet {
  slug: string;
  ad: string;
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
  adres: string;
  sehir: string;
  vergiDairesi: string;
  vergiNo: string;
  calismaSaatleri: string;
  googleIsletmeUrl: string;
  /**
   * Garanti ifadesi. Bilerek "süre" değil: sahibi tek bir süre vermiyor,
   * garanti takılan parçaya göre değişiyor. Rozette olduğu gibi basılır.
   */
  garantiIfadesi: string;
  markalar: string[];
  gaOlcumKimligi: string;
}
