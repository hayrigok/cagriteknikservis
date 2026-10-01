# Hukuki metinler — avukat inceleme brifingi

**Bu belge hukuki görüş değildir.** Sitedeki hukuki metinler, kanunun aradığı
başlıkları karşılamak üzere yazılmış **taslaklardır**. Avukatın neye bakması
gerektiğini kolaylaştırmak için hazırlandı: metinlerin hangi varsayımlara
dayandığı, hangi kısımlarının bilerek eksik bırakıldığı ve firmanın gerçek
uygulamasıyla doğrulanması gereken noktalar aşağıda.

| Metin | Adres | Kaynak dosya |
|---|---|---|
| KVKK aydınlatma metni | <https://cagribeyazesyatamir.com/kvkk/> | `src/pages/kvkk.astro` |
| Kullanım koşulları | <https://cagribeyazesyatamir.com/kullanim-kosullari/> | `src/pages/kullanim-kosullari.astro` |
| Footer — yalnızca "Kullanım koşulları" ve "KVKK" bağlantıları | her sayfanın altı | `src/components/Footer.astro` |

> **En önemli yeni konu 8. bölümde (01.10.2026):** işlerin bir kısmı dışarıdaki
> ustalara veriliyor ve işletme sahibi bu işlerde sorumluluğun ustada
> olduğunun yazılmasını istedi.

---

## 1. Sitenin gerçekte ne veri işlediği

Avukatın en çok yanılabileceği nokta burası: site bir e-ticaret sitesi **değil**,
arkasında sunucu veya veritabanı **yok**.

**Toplanan veri, tamamı:** ad · telefon numarası · arıza açıklaması.
Formda adres, kimlik numarası, e-posta veya ödeme bilgisi **istenmiyor**.
Üyelik, hesap oluşturma, giriş **yok**.

**Verinin izlediği yol — teknik olarak doğrulanmış:**

1. Ziyaretçi formu doldurur. Veri **yalnızca tarayıcısında** durur.
2. "Gönder"e bastığında tarayıcı `wa.me` adresine yönlendirilir; form alanları
   ön-doldurulmuş bir WhatsApp mesajına dönüşür.
3. Mesajı ziyaretçi kendi WhatsApp hesabından **kendisi gönderir**.

Yani firmanın sunucusuna hiçbir veri gitmiyor; veri firmaya **WhatsApp
üzerinden** ulaşıyor. Metin bunu 4. bölümde açıklıyor.

**Avukata sorulacak:** Bu akışta veri sorumlusu–aktarım ilişkisi metinde doğru
kurulmuş mu? Ziyaretçinin kendi başlattığı bir yönlendirme "aktarım" mı yoksa
ilgili kişinin kendi eylemi mi sayılır? Meta Platforms'un konumu doğru mu
tarif edilmiş?

---

## 2. Bilerek eksik bırakılan zorunlu unsurlar — işletme sahibinin kararı

Bunlar unutulmuş değil, **karar verilerek** boş bırakıldı (29.07.2026).
Avukatın öncelikli bakacağı yer burasıdır.

### 2.1 Veri sorumlusunun kimliği (KVKK m.10)

Ticari ünvan, adres ve vergi bilgisi **yayımlanmıyor**. Sayfada kimlik olarak
yalnızca sitenin kısa adı ("Adana Klima & Beyaz Eşya Servisi") ve telefon
numarası görünüyor.

> Not: Google İşletme Profili'ndeki gerçek işletme adı **"Çağrı Teknik
> Servis"**. Site ile profil arasındaki bu ad farkı avukatın bilgisi dahilinde
> olsun.

**Avukata sorulacak:** Ticari ünvan olmadan m.10'daki "veri sorumlusunun
kimliği" şartı karşılanmış sayılır mı? Karşılanmıyorsa asgari olarak ne
yazılmalı?

### 2.2 Başvuru kanalı (Başvuru Usul ve Esasları Tebliği m.5)

Sitede **yazılı başvuru kanalı yok** — ne adres ne e-posta.

Metnin ilk hâli "taleplerinizi numarayı arayarak iletebilirsiniz" diyordu;
tebliğ telefonu geçerli başvuru kanalı saymadığı için bu **düzeltildi**. Şu an
numara, başvurunun kendisi için değil **başvuru adresini öğrenmek için**
gösteriliyor ve telefonun resmî başvuru yerine geçmediği açıkça yazıyor.

**Avukata sorulacak:** Bu geçici çözüm yeterli mi, yoksa mutlaka bir yazılı
kanal mı açılmalı? Açılacaksa en az yükümlülük getiren biçim hangisi
(KEP · normal e-posta · posta adresi)?

---

## 3. Firmanın gerçek uygulamasıyla doğrulanması gereken iki bölüm

Bu iki bölüm **varsayımla** yazıldı. Firmanın fiilî uygulaması sorulmadı;
avukatın işletme sahibiyle teyit etmesi gerekiyor.

### 3.1 Saklama süresi (metin 6. bölüm)

Metinde yazan: *"ilgili mevzuatta öngörülen zorunlu saklama süreleri boyunca
tutulur… Onarım yaptırmadıysanız iletişim bilgileriniz talebinizin
sonuçlanmasının ardından makul süre içinde silinir."*

**Sorun:** "makul süre" belirsiz. Ayrıca firma pratikte WhatsApp geçmişini
siliyor mu, ne kadar tutuyor, bir imha politikası var mı — bilinmiyor.

### 3.2 Hukuki sebep (metin 3. bölüm)

Metinde iki dayanak birlikte gösteriliyor: KVKK 5/2-c (sözleşmenin kurulması
veya ifası) **ve** açık rıza.

**Avukata sorulacak:** İkisini birlikte göstermek doğru mu, yoksa tek bir
dayanak mı seçilmeli? Servis talebi için sözleşme ilişkisi yeterliyse ayrıca
rıza aramak gereksiz ve karışıklık yaratıyor olabilir.

---

## 4. Çerez ve ölçümleme bölümü — 12.08.2026'da değişti

Brifingin ilk hâlindeki bilgi artık geçerli değil. Bugünkü durum:

- **Cloudflare'in analitik script'i 29.07.2026'da kapatıldı.** Sitede onaydan
  bağımsız çalışan başka bir üçüncü taraf script kalmadı.
- **Google'ın ölçüm kodu 12.08.2026'dan beri her ziyaretçiye yükleniyor**,
  onay verilmeden de. Bu, işletme sahibinin kararı; Google Ads'in etiket
  doğrulaması başka türlü geçmiyordu. İzinler "reddedildi" durumunda başlıyor:
  onay verilmeden **çerez yazılmıyor** ve tıklama olayı gönderilmiyor (ölçülerek
  doğrulandı). Google'a yalnızca kimliksiz bir sayfa kaydı ulaşıyor. Metnin 5.
  bölümü bunu açıkça yazıyor.
- **Reklamdan gelen ziyaretlerde IP adresi 7 gün saklanıyor** (14.08.2026).
  Amaç geçersiz tıklama tespiti; hukuki sebep olarak meşru menfaat (m.5/2-f)
  gösterildi.

**Avukata sorulacak:** Onay verilmeden yüklenen ama çerez yazmayan ölçüm kodu
metinde doğru anlatılmış mı? IP kaydı için meşru menfaat dayanağı ve 7 günlük
süre uygun mu?

---

## 5. Doğru olduğu teyit edilmiş, dokunulmasına gerek olmayan kısımlar

- **KVKK m.11 hakları listesi** — kanun metninden birebir alındı, dokuz madde tam.
- **Otuz günlük yanıt süresi** — m.13/2 ile uyumlu.
- **Başvuruda bulunması gereken bilgiler** — Tebliğ m.5/2 ile uyumlu.
- **Toplanan veri listesi** — koddaki form alanlarıyla birebir aynı; metin
  gerçekte toplanandan fazlasını saymıyor.

---

## 6. Avukata sorulacakların özeti

1. Ticari ünvan yayımlanmadan m.10 karşılanmış sayılır mı?
2. Yazılı başvuru kanalı olmadan Tebliğ m.5 karşılanmış sayılır mı? Asgari
   çözüm ne?
3. Saklama süresi nasıl yazılmalı — firmanın fiilî uygulaması nedir?
4. Hukuki sebep olarak sözleşme mi, açık rıza mı, ikisi mi?
5. WhatsApp'a yönlendirme "aktarım" olarak doğru tarif edilmiş mi?
6. Onaysız yüklenen ölçüm kodu ve 7 günlük IP kaydı metinde doğru anlatılmış mı?
7. Sitede ayrıca **çerez politikası** ve **gizlilik politikası** gerekir mi,
   yoksa bu tek metin yeterli mi?
8. **Dışarıya verilen işler — 8. bölümdeki yedi soru.** En öncelikli olanlar
   bunlar.

---

## 7. Kapsam dışı — bu belgede kasten yer almayan konular

- **6563 sayılı E-Ticaret Kanunu künye yükümlülüğü.** Sitede satış ve sipariş
  yok; kapsama girip girmediği avukatın takdirinde, burada bir görüş
  belirtilmedi.
- **Mesafeli satış / cayma hakkı.** Site üzerinden satış yapılmıyor.
- **Ticari elektronik ileti (İYS).** Site pazarlama mesajı göndermiyor; form
  yalnızca servis talebi için kullanılıyor.

Bu üçü gündeme gelirse metin yeniden ele alınmalıdır.

---

## 8. Yeni konu (01.10.2026): işlerin bir kısmı dışarıdaki ustalara veriliyor

**İşletme sahibinin bildirdiği:** Servis işlerinin bir kısmını kendi ekibi
yapıyor, bir kısmını dışarıdaki bağımsız ustalara veriyor. Sahibi, dışarı
verilen işlerde sorumluluğun **firmada değil, işi yapan ustada** olduğunun
sitede yazılmasını istedi.

### 8.1 Sitede şu an yazan (taslak)

- **`/kullanim-kosullari/`** — kapsam · işi kim yapar · sorumluluk · ücret ve
  onay · marka adları · arıza rehberindeki bilgilerin niteliği · "bir sorun
  olursa önce bizi arayın" · kişisel veriler. Sayfanın
  özü: *"Firmamız aracı kurum olarak hizmet verir … Sorumluluk firmamıza
  değil, işi yapan ustaya aittir."*
- **Footer** — metin footer'da **görünmüyor**, her sayfanın altında yalnızca
  "Kullanım koşulları" bağlantısı var (işletme sahibinin tercihi).
- **`/kvkk/` 4. bölüm** — ustaya veri aktarımı paragrafı eklendi. Eski
  *"verilerinizi hiçbir üçüncü kişiye devretmiyoruz"* cümlesi kaldırıldı;
  usta müşterinin adını, telefonunu ve adresini aldığı için artık yanlıştı.

### 8.2 İşletme sahibinin tercihleri

Metin işletme sahibinin istediği ifadelerle yazıldı:

- **"Aracı kurum" ifadesi** açıkça kullanılıyor.
- **Sorumluluk reddi bütün işleri kapsıyor:** kendi ekibin yaptığı işler de
  dahil, sorumluluk "işi yapan ustaya" bırakılıyor.
- Metinde **"tüketici haklarınız saklıdır"** gibi bir çekince yok.

### 8.3 Avukata sorulacak

1. **Sorumluluk cümlesi müşteriye karşı hüküm doğurur mu?** Müşteri firmanın
   numarasını arıyor, ustayı firma gönderiyor. Borçlar Kanunu m.116 (yardımcı
   kişilerin fiillerinden sorumluluk), m.115 (sorumsuzluk anlaşmaları) ve 6502
   sayılı Kanun m.5 (haksız şartlar) karşısında durumu nedir? Hüküm
   doğurmuyorsa, sitede durması ayrı bir risk yaratır mı?
2. **Ustalarla yazılı sözleşme** — sorumluluk, garanti, firmaya rücu, sigorta
   ve kişisel verinin korunması nasıl düzenlenmeli? Asıl korumanın sitedeki
   cümlede değil bu sözleşmede olduğunu düşünüyoruz.
3. **KVKK:** Usta veri işleyen mi, ayrı veri sorumlusu mu? Aktarımın dayanağı
   olarak m.5/2-c (sözleşmenin ifası) yeterli mi? Formdaki onay kutusu
   (*"bilgilerimin bana dönüş yapılması amacıyla işlenmesini onaylıyorum"*)
   ustaya aktarımı kapsayacak şekilde değişmeli mi?
4. **Önceden bildirim:** Şu an müşteriye söylenmiyor; işletme sahibi
   müşterinin bunu siteden öğrendiğini varsayıyor (bkz. 8.4). Footer'daki
   bağlantının arkasındaki kullanım koşulları sayfası yeterli bir bildirim
   sayılır mı? Siteyi hiç
   görmeden, **Google reklamındaki arama düğmesinden veya Google Haritalar'dan
   doğrudan arayan** müşteriler için durum nedir?
5. **"Aracı kurum" ifadesi** başka bir yükümlülük doğurur mu? Bu terim
   sermaye piyasası mevzuatında SPK lisanslı kuruluşlar için kullanılıyor;
   6563 sayılı Kanun'da da "aracı hizmet sağlayıcı" tanımı var. Site üzerinden
   sözleşme kurulmuyor, yalnızca WhatsApp'a yönlendiriliyor.
   Kendi ekibin yaptığı işleri de kapsayan sorumluluk reddi ayrıca
   değerlendirilmeli (1. soru).
6. **Şikâyet yolları:** Sayfada tüketici hakem heyeti / tüketici mahkemesi
   bilgisi **yok**; ilk taslakta vardı, işletme sahibinin isteğiyle
   kaldırıldı. Sitede bulunması gerekiyor mu? Gerekiyorsa metni sizin
   yazmanızı istiyoruz.
7. **Komisyon:** Firma dışarı verilen işlerden yalnızca komisyon alıyor.
   Sitede komisyon yazmıyor. Bunun müşteriye açıklanması gerekir mi?

### 8.4 İşletme sahibinin cevapları (01.10.2026)

| Soru | Cevap |
|---|---|
| Faturayı kim kesiyor? | **Usta.** Firma yalnızca komisyon alıyor. |
| Parça garantisini kim veriyor? | **Usta.** Sitedeki *"Değişen parça garantili"* sözü bu yüzden dışarı verilen işlerde de doğru. |
| Müşteriye dışarıdan usta geleceği söyleniyor mu? | **Hayır.** Müşterinin bunu siteden öğrendiği varsayılıyor. |

**Hâlâ bilinmeyen:** Ustalarla **yazılı bir anlaşma** var mı?

> **Kapsam dışı ama gündeme gelebilir:** komisyon gelirinin ve kendi ekibin
> yaptığı işlerin fatura/vergi düzeni bu brifingin konusu değil. Mali
> müşavirle ayrıca konuşulmalı.
