# KVKK metni — avukat inceleme brifingi

**Bu belge hukuki görüş değildir.** `/kvkk/` sayfasındaki metin, kanunun aradığı
başlıkları karşılamak üzere yazılmış bir **taslaktır**. Avukatın neye bakması
gerektiğini kolaylaştırmak için hazırlandı: metnin hangi varsayımlara dayandığı,
hangi kısımlarının bilerek eksik bırakıldığı ve firmanın gerçek uygulamasıyla
doğrulanması gereken noktalar aşağıda.

Metnin canlı hâli: <https://cagribeyazesyatamir.com/kvkk/>
Kaynak dosya: `src/pages/kvkk.astro`

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

## 4. Çerez ve ölçümleme bölümü — güncelliğini yitirebilir

Metin 5. bölümde: *"ölçümleme çerezleri **yalnızca siz onay verirseniz**
çalışır."*

Bu, sitenin kendi ölçüm katmanı için **doğru**: Consent Mode varsayılanı
"denied", onay verilmeden hiçbir olay gönderilmiyor ve Google script'i
**onaydan sonra** yükleniyor. Bu davranış test edildi.

**Ancak:** Cloudflare, sunucu tarafında sayfaya kendi analitik script'ini
(`cloudflareinsights.com`) enjekte ediyor ve bu **onaydan bağımsız** çalışıyor.
Çerezsiz olduğu ve cihazda veri saklamadığı belirtiliyor.

**Avukata sorulacak:** Çerezsiz, cihazda veri saklamayan bu ölçüm için onay
gerekir mi? Gerekmiyorsa bile metindeki "yalnızca onay verirseniz" ifadesi
düzeltilmeli mi?

> Bu script kapatılırsa (bkz. CLAUDE.md → B10) soru tamamen ortadan kalkar.

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
6. Çerezsiz analitik için onay ifadesi düzeltilmeli mi?
7. Sitede ayrıca **çerez politikası** ve **gizlilik politikası** gerekir mi,
   yoksa bu tek metin yeterli mi?

---

## 7. Kapsam dışı — bu belgede kasten yer almayan konular

- **6563 sayılı E-Ticaret Kanunu künye yükümlülüğü.** Sitede satış ve sipariş
  yok; kapsama girip girmediği avukatın takdirinde, burada bir görüş
  belirtilmedi.
- **Mesafeli satış / cayma hakkı.** Site üzerinden satış yapılmıyor.
- **Ticari elektronik ileti (İYS).** Site pazarlama mesajı göndermiyor; form
  yalnızca servis talebi için kullanılıyor.

Bu üçü gündeme gelirse metin yeniden ele alınmalıdır.
