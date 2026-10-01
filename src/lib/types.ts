/** Ikon.astro içindeki set. Yeni ikon eklerken ikisini birlikte güncelleyin. */
export type IkonAdi =
  | 'klima'
  | 'camasir'
  | 'bulasik'
  | 'buzdolabi'
  | 'kurutma'
  | 'firin'
  | 'televizyon'
  | 'kombi'
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
 * Verilmezse 'tamir' — klima montajı dışındaki hizmetlerin hepsi tamir/bakım.
 * Buraya hizmet SAYISI yazmayın: her hizmet eklendiğinde sessizce yanlışlaşır.
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
  /**
   * Bu hizmete özgü marka listesi. Verilmezse `firma.markalar` kullanılır.
   *
   * 01.10.2026'da televizyon için doğdu: genel liste beyaz eşya markalarından
   * oluşuyor ve TV sayfasında "Baktığımız televizyon markaları: Bosch, Miele…"
   * basılıyordu — televizyon üretmeyen markalar. Doluysa marka şeridi,
   * `{markalar}` SSS'i ve meta kalıbı bu listeyi kullanır. Kapanış yine
   * "… dahil bütün markalar" (A6). Yalnızca o cihazı GERÇEKTEN üreten markalar
   * yazılır; ilk dördü meta açıklamaya girer.
   */
  markalar?: string[];
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
   * - `kisaAd` ("Adana Beyaz Eşya TV Klima Kombi Servisi") ziyaretçiye ne iş
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
  /**
   * WhatsApp hattının erişilebilirliği — `calismaSaatleri`'nden AYRI alan.
   *
   * Sahibi 12.08.2026'da *"7/24 WhatsApp'tan ulaşabilirler"* dedi. Servis
   * saatiyle (08:00–20:00) aynı kutuya yazılamaz, ikisi farklı şey: biri
   * "ne zaman geliriz", diğeri "ne zaman yazabilirsiniz".
   *
   * ⚠️ Metin bilerek "7/24 açık — gece de yazabilirsiniz"; **"7/24 cevap
   * veriyoruz" DEĞİL.** İkincisi gece dönülmediğinde olumsuz yoruma dönüşür
   * ve yerel sıralamada en pahalı kayıp odur (G5). Hat açık olmak doğru,
   * anında cevap sözü vermek risktir.
   *
   * Boşsa kutu hiç basılmaz. Numara doldurulmamışsa da basılmaz.
   */
  whatsappSaatleri: string;
  googleIsletmeUrl: string;
  /**
   * Garanti ifadesi. Bilerek "süre" değil: sahibi tek bir süre vermiyor,
   * garanti takılan parçaya göre değişiyor. Rozette olduğu gibi basılır.
   */
  garantiIfadesi: string;
  /**
   * Örnek marka adları. 29.07.2026'da KALDIRILMIŞTI (A6: sahibi liste
   * vermiyordu, asla dolmayacak alan raporu kirletir), **12.08.2026'da
   * sahibinin isteğiyle GERİ EKLENDİ** — bu sefer dolu geliyor, yani
   * kaldırılma gerekçesi ortadan kalktı.
   *
   * A6'nın ASIL uyarısı hâlâ geçerli ve mimariyle karşılanıyor: listede adı
   * geçmeyen bir markanın sahibi "bakmıyorlar" sanıp aramazsa liste, kapsayıcı
   * cevaptan DAHA AZ iş getirir. Bu yüzden liste hiçbir yerde tek başına
   * basılmaz; her geçtiği cümle "… dahil BÜTÜN markalar" kalıbıyla biter.
   * Kalıbı bozmayın — marka adları arama için, kapsayıcı cümle iş için.
   *
   * Tek kaynak: burası. SSS cevaplarına `{markalar}` belirteciyle giriyor
   * (`veri.ts` → `sssCoz()`), 11 hizmete elle kopyalanmıyor. Telefon
   * numarasındaki dersin aynısı: ikinci bir yere yazılan değer, sonraki
   * değişimde sessizce geride kalır.
   *
   * ⚠️ "Yetkili servis" ibaresi yasak (yasak 2) — marka adı geçmesi bunu
   * DEĞİŞTİRMEZ. İzinli kalıp: "{Marka} ürünlerinde tamir ve bakım hizmeti".
   */
  markalar: string[];
  /**
   * Hizmet verilen ilçelerdeki mahalle kapsamı — TEK CÜMLE, liste değil.
   *
   * 12.08.2026'da sahibinin beyanıyla dolduruldu: *"Seyhan, Yüreğir, Çukurova,
   * Sarıçam'daki tüm mahalleler semtler hepsine gidiyoruz."* Mahalle ADLARINI
   * ayrı ayrı yazmayı istemedi (A2), ama kapsamı net söyledi — ikisi farklı
   * şey: A2 bir liste kararıydı, bu bir kapsam beyanı.
   *
   * `Ilce.mahalleler` (ad listesi) doluysa O basılır, bu alan yedeğe düşer;
   * ikisi de boşsa mahalle kutusu hiç basılmaz. Yani {PLACEHOLDER} sözleşmesi
   * aynen işliyor, yalnızca bir kademe daha kazandı.
   *
   * ⚠️ Bu alan bir VAATTİR. Kapsam daralırsa (örn. bir ilçenin uzak
   * mahallelerine gidilmiyorsa) burası hemen güncellenir — yasak 1.
   */
  mahalleKapsami: string;
  /**
   * Yedek parça politikası — `Markalar.astro` şeridinde basılır.
   *
   * 12.08.2026'da sahibinin cevabıyla dolduruldu: **"önce orijinal, yoksa
   * muadil."** Sahibi başta *"tüm marka orijinal tamiri yapılır"* yazılmasını
   * istemişti; sorulduğunda gerçek işleyişin bu olduğu ortaya çıktı.
   *
   * **Koşulsuz "orijinal parça" iddiası BİLEREK yazılmadı.** Bağımsız bir
   * servis için 11 markanın tamamında orijinal parça garantisi vermek güçlü
   * bir iddiadır; bir müşteri muadil çıktığını söylerse savunması yok ve
   * yanıltıcı reklam (Ticari Reklam Yönetmeliği) kapsamına girer — sahte yorum
   * yasağıyla (yasak 3) aynı yönetmelik. Şu anki metin hem doğru hem de
   * sitenin "önce söyleriz" çizgisiyle tutarlı.
   *
   * Boşsa parça kutusu hiç basılmaz, şerit yalnızca marka adlarını gösterir.
   */
  parcaPolitikasi: string;
  /** GA4 ölçüm kimliği, `G-` ile başlar. Boşken gtag.js hiç yüklenmez. */
  gaOlcumKimligi: string;
  /**
   * Google Ads dönüşüm kimliği, `AW-` ile başlar. GA4'ten bağımsız: yalnızca
   * bu doluysa da gtag.js yüklenir, çünkü Ads dönüşümleri GA4 olmadan da ölçülür.
   */
  adsKimligi: string;
}
