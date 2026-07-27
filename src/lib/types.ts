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
  /** Alt sınır TL. Bilinmiyorsa null bırakılır, tabloda {PLACEHOLDER} basılır. */
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
  ariza: Ariza[];
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
  garantiSuresi: string;
  markalar: string[];
  gaOlcumKimligi: string;
}
