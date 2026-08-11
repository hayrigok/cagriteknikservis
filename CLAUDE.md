# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projenin amacı

> **Sahibinin sözleriyle (29.07.2026):** *"Bizim amacımız arama motorunda en
> üste çıkıp işleri kapmak. Tüm her şeyimizi bu kurala göre uyduracağız."*

Beyaz eşya ve klima tamir/bakım firması için **Adana'da arama sonuçlarının
tepesini hedefleyen yerel hizmet sitesi**. Kurumsal tanıtım sitesi değil,
dönüşüm makinesi. Başarı ölçütü tıklama değil, **çalan telefon**.

**Karar kuralı — her tartışma buradan çözülür:** bir değişiklik önerildiğinde
sorulacak tek soru, *"bu, Adana'da arayan kişinin bizi bulup aramasını
artırıyor mu?"* Cevap net evet değilse yapılmaz. Süsleme, kurumsal dil,
"güzel dursun" diye eklenen bölüm yok.

### Amaç üç ayrı kanaldan yürüyor — üçü aynı şey değil

| Kanal | Ne zaman sonuç verir | Neye bağlı |
|---|---|---|
| **Google Ads** | Yayına aldığın **gün** | Kalite Puanı × teklif |
| **Google İşletme Profili / Haritalar** | Haftalar | Yorum sayısı ve tazeliği, mesafe, kategori |
| **Organik arama** | **Aylar** | İçerik, teknik sağlık, otorite |

Bu ayrım karıştırılırsa yanlış yerde çözüm aranır. **Organik sıralamada "en
üst" garanti edilemez ve hızlı gelmez.** İlk haftalarda telefonu çaldıracak
olan reklam ve Haritalar'dır; organik onun üstüne uzun vadeli ve ucuz bir
katmandır. Sahibine bu beklenti net söylendi.

### Mimarinin tamamı bu amaçtan türüyor

Üst sıra = teklif × Kalite Puanı; Kalite Puanının en büyük bileşeni de açılış
sayfası alaka düzeyi. Organik tarafta da aynı şey geçerli: arayanın yazdığı
kelimeyi karşılayan sayfa kazanır. Bu yüzden her hizmet × ilçe kombinasyonunun
**ayrı sayfası** var ve her sayfanın H1'i aranan ifadeyle birebir aynı
kelimeleri taşıyor.

### Kısayolların hepsi bu amacı ÖLDÜRÜR — yasaklar bu yüzden var

"Her şeyi bu kurala uyduracağız" cümlesi, sıralama için ne gerekiyorsa
yapılacak demek **değildir**. Tam tersi: en üste çıkmanın önündeki en büyük
risk, hızlı sonuç vaat eden kısayollardır. Bu dosyadaki yasaklar birer ahlak
dersi değil, **amacın kendisini korumak için var:**

- **İçi boş ilçe sayfası** → doorway page cezası, **tüm siteye** işler. Bu
  yüzden ilçe kapısı var ve gevşetilmez.
- **Sahte yorum / sahte puan** → Google'ın sahte içerik politikası ihlali;
  yaptırım siteye değil **reklam hesabına** işler, yani en hızlı kanalı
  kapatır. Üstelik gömülü yerel puanları Google zaten göstermiyor: sıfır
  kazanç, hesap kapatacak risk.
- **"Yetkili servis" ibaresi** → marka şikâyeti, bütün reklamlar yayından
  kalkar.
- **Uydurma rakam, tarih, referans** → yanlış ama inandırıcı; tespit edilince
  hem hukuki hem sıralama riski.
- **Yavaş sayfa** → hem Kalite Puanını hem organik sıralamayı düşürür, hem de
  kısıtlı 4G'de acil arama yapan kişiyi kaybettirir.

Bir öneri "sıralama için iyi olur" gerekçesiyle gelip yukarıdakilerden birine
dokunuyorsa, o öneri amaca **hizmet etmiyor, amacı riske atıyordur.**

### Sıralamayı gerçekten yükselten şeyler

Teknik SEO 29.07.2026'da ölçüldü ve **bitti** (50/50 sayfa temiz, LCP 0,9 sn,
dış istek 0). Bundan sonra sıralamayı değiştirecek olan teknik değil, şunlar:

1. **Google İşletme Profili'ne gerçek yorum toplamak** — yerel aramanın en
   güçlü sinyali, reklam bütçesinden bağımsız çalışır (A5 · D4).
2. **Arıza rehberine yazı eklemek** — "makine su boşaltmıyor", "E10 hatası"
   gibi şikâyet aramalarını karşılar (D5).
3. **Sahadan gelen ilçe ayrıntısı** — mahalle bazlı bilgi, pratik kısıtlar;
   rakibin kopyalayamayacağı tek içerik budur (A1 notunda yazılı).
4. **Zaman.** Yeni alan adı için organik sıralama aylar sürer.

### İş kapma hunisi — "işleri kapmak" nerede kazanılır, nerede kaybedilir

Sahibinin hedefi tek bir yerde kazanılmıyor; altı halkalı bir zincir ve
**zincir en zayıf halkasından kopuyor.** "Daha çok tıklanma" istendiğinde ilk
bakılacak yer daha fazla sayfa değil, **kopan halka**.

| # | Halka | Neye bağlı | Şu an |
|---|---|---|---|
| 1 | **Görünmek** | Ads (gün) · Haritalar (hafta) · organik (ay) | Ads kapalı · Haritalar yorumsuz · organik yeni |
| 2 | **Tıklanmak** | Başlık/açıklama · yıldız · mesafe | Başlıklar benzersiz ✔ · **yıldız yok** |
| 3 | **İkna olmak** | Sayfanın kendisi | Ölçüldü, hazır ✔ |
| 4 | **Aramak** | Numaranın her yüzeyde olması | Hazır ✔ (6 yüzey) |
| 5 | **Cevap vermek** | **Telefonu açan kişi** | Ölçülmüyor |
| 6 | **İşi almak** | Telefondaki konuşma | Ölçülmüyor |

**3 ve 4 bitti — site orada yapabileceğini yaptı.** Kayıp artık 1, 2, 5 ve
6'da. **En pahalısı 5:** açılmayan telefon, reklam parası ödenmiş, sayfa ikna
etmiş, iş rakibe gitmiş demektir — ve hiçbir raporda görünmez. Aynı kişi
ikinci kez aramaz.

Sıra bu yüzden şöyle: **yorum** (2'yi açar) → **kapsam** (1'i genişletir) →
**reklam** (1'i satın alır) → **cevap disiplini** (5'i onarır). Eyleme dönmüş
hâli G bölümünde.

## Komutlar

```bash
npm run dev       # geliştirme sunucusu
npm run build     # statik çıktı → dist/  (ilçe kapısı uyarıları burada basılır)
npm run preview   # dist/ önizleme
```

Test altyapısı yok. `npm run check` tanımlı ama **`@astrojs/check` kurulu değil** —
çalıştırmak paket kurulumu ister, bu onay gerektirir (aşağıdaki paket kuralına bakın).
Tip hataları şu an yalnızca build sırasında derleme düzeyinde yakalanır.

## Stack

Astro 5 (statik) + Tailwind 4 + TypeScript strict. Cloudflare Pages'e deploy edilir.
Etkileşim **vanilla JS**. Tailwind 4 CSS-first yapılandırma kullanır: renk ve font
belirteçleri `src/styles/global.css` içindeki `@theme` bloğunda tanımlanır,
`tailwind.config.mjs` yok.

## Tasarım sistemi

Bütün görsel kararlar **`design-system/MASTER.md`** içinde — renk oranları,
tip ölçeği, ölçü sistemi, ikon kuralları ve `ui-ux-pro-max`'in bu projede
neden iki kez yanlış yön önerdiği orada yazılı. Bileşen yazmadan önce okuyun.

Özet: **Flat Design + Trust & Authority.** Hiyerarşi çizgiyle değil **tam
genişlikte renk bloklarıyla** kurulur (lacivert → beyaz → zemin → lacivert).
Gölge yok, gradient yok, tek vurgu rengi (turuncu), köşe yalnızca 6/12 px,
ikonlar dolu renk kaplarında.

Bölüm kabı `Bolum.astro`, sayfa kabı `.kap` yardımcı sınıfı. Elle `max-w-*`
kabı yazılmaz. İkonlar `Ikon.astro` içinde tek yerde; hizmet → ikon eşlemesi
`hizmetIkonu()` (lib/veri.ts).

## Mimari — bilinmesi gerekenler

### Tek generic rota

Bütün para sayfaları `src/pages/[hizmet]/[ilce].astro` tarafından üretilir.
`getStaticPaths` aktif hizmetler × geçerli ilçeler çaprazını kurar.
**Yeni hizmet eklemek = yalnızca `hizmetler.json`'a kayıt eklemek.** Yeni sayfa
dosyası açılmaz.

### `tur` — sayfa iskeleti sabit, SABİT METİNLERİN dili değişken

`Hizmet.tur` iki değer alır: **`'tamir'` (varsayılan) · `'montaj'`**.
30.07.2026'da `klima-montaji` eklenirken doğdu ve **gerçek bir sorunu** çözüyor:
sitenin sabit metinlerinin tamamı arıza dili konuşuyordu. Montaj sayfasında
şunlar üretiliyordu:

- başlık: *"Klima Montajı Adana — **Yerinde Arıza Tespiti**"*
- meta: *"klima montajı: **arızayı yerinde tespit eder**…"*
- süreç adımı: *"**Arızayı görür**, ne yapılacağını söyleriz"*
- rozet: *"**Arızayı** yerinde belirler…"*

Montajın arızası yoktur. Bunlar yalnızca üslup hatası değil: **başlık ve meta
arama sonucunda okunan metindir**, alakasız kelime hem tıklanmayı hem Kalite
Puanını düşürür.

**Kural: `tur` blok sırasını, bileşen setini veya veri şemasını DEĞİŞTİRMEZ.**
Yalnızca şu beş yerde kelime seçer — hepsi "yerinde bakılan şeyin adı":

| Yer | tamir | montaj |
|---|---|---|
| `seo.ts` para title (4. kalıp) | Yerinde Arıza Tespiti | Yerinde Keşif |
| `seo.ts` hub title (3. kalıp) | Yerinde Arıza Tespiti | Söküm ve Taşıma |
| `seo.ts` para description havuzu | arıza / şikâyet dili | keşif / mesafe dili |
| `GuvenRozetleri` 2. rozet | tespit ücretsiz | keşif ücretsiz |
| `Surec` 4 adım | arıza görülür | yer ve mesafe görülür |

`FiyatTablosu.aciklamaBos` ve `ArizaCozum.etiket` zaten prop'tu, sayfadan
geçiliyor — bileşene dokunulmadı. Yeni bir `tur` eklenecekse (örn. `'kurulum'`)
aynı beş yer gözden geçirilir; **başka yere `tur` kontrolü serpiştirmeyin**,
mekanizma o anda anlaşılmaz hale gelir.

### İlçe kapısı — sitenin en kritik kuralı

`src/lib/veri.ts` içindeki `gecerliIlceler()` her ilçeyi iki testten geçirir:
`yerelNotlar` en az 200 karakter olmalı **ve** içinde `{PLACEHOLDER` kalmamalı.
Geçemeyen ilçe `getStaticPaths`'e hiç girmez, o kombinasyon için HTML üretilmez ve
build sırasında `[ilce-kapisi]` başlıklı uyarı basılır.

Neden: şablon doldurulmuş içi boş ilçe sayfaları Google tarafından doorway page
sayılır ve ceza tek sayfaya değil **tüm siteye** işler. Uzunluk testine ek olarak
`{PLACEHOLDER` kontrolü var ki 200 karakterlik jenerik metin yapıştırarak kapı
atlatılamasın.

**Bu kapıyı gevşetmeyin, atlamayın, eşiği düşürmeyin.** Şu anda hiçbir ilçenin
`yerelNotlar` alanı dolu olmadığı için build sadece ana sayfayı üretiyor — bu
beklenen davranıştır, bozukluk değil.

### {PLACEHOLDER} sözleşmesi

`{PLACEHOLDER — ...}` yalnızca not değil, işleyen bir mekanizma. Tek kural:

> **Doldurulmamış değer ekrana BASILMAZ; ilgili satır/kutu/blok tamamen kaldırılır.**
> Eksikler ziyaretçiye değil, build çıktısındaki `[eksik-veri]` raporuna gider.

Kapı bu sözleşmenin merkezi `lib/veri.ts` içinde:

- **`deger(v)`** doldurulmuş metni, doldurulmamışsa `null` döner. Bileşenler
  `null` gelen öğeyi hiç basmaz. `degerListesi()` aynısını dizi için yapar.
- `schema.ts` içindeki `temiz()` doldurulmamış alanları JSON-LD'den siler
- `telLink()` / `whatsappLink()` numara dolu değilse `null` döner, butonlar
  `pointer-events-none` ile pasifleşir, form submit butonu `disabled` olur
- `eksikVeriRaporu()` her build'de eksik alanları tek listede basar

Bunun somut karşılıkları:

| Eksik veri | Sayfada olan |
|---|---|
| `googleIsletmeUrl` | Yorumlar bloğunun tamamı basılmaz |
| Bir hizmetin **tüm** fiyat satırları | Tablo yerine **işlem listesi** basılır |
| Bir hizmetin **bazı** fiyat satırları | O satırda `—` |
| `unvan` / `adres` / vergi | Footer ve KVKK künyesinde o satır yok |
| `ulasimDk` / `mahalleler` | `IlceBlogu` yan sütunu düşer, not tam genişliğe yayılır |
| Bir SSS cevabı | Soru hem sayfadan hem `FAQPage` şemasından çıkar |

**Yan koşul — eksik veri UYDURMA VAADE dönüşmesin.** `seo.ts` içindeki meta
açıklama kalıp havuzuna yalnızca verisi olan kalıp girer: `ulasimDk = 0` iken
"Ortalama 0 dakikada adresinizdeyiz" kalıbı havuzdan düşer. Yeni kalıp
eklerken aynısını yapın — boş veriyle cümle kurmak `{PLACEHOLDER}` basmaktan
daha zararlıdır, çünkü yanlış ama inandırıcı görünür.

Bir değeri "geçici olarak" gerçekçi bir uydurmayla doldurmayın; `{PLACEHOLDER}`
bırakın, mekanizma zaten doğru davranıyor.

### Ölçümleme ve çerez onayı

`src/lib/analytics.ts` dört olay tanımlar: `tel_click{konum}`, `whatsapp_click{konum}`,
`form_start{sayfa}`, `form_submit{sayfa}`.

Consent Mode varsayılanı **denied**. Onay verilmeden hiçbir olay gönderilmez; onay
öncesi tetiklenenler bellekte kuyruğa girer, kabul gelince akar, ret gelince atılır.
Tıklama olayları tek bir delege dinleyiciyle toplanır: bileşenlere `data-olay` ve
`data-konum` nitelikleri konur, ayrı script yazılmaz. JS bütçesi bu şekilde korunuyor.

`konum` değerleri: `header` (üst çubuk) · `hero` · `sticky` · `footer` ·
`mobil_bar` (mobilde alt çubuk) · `yan_buton` (sağ kenarda sabit ara/WhatsApp
düğmeleri, `YanButonlar.astro`) · `tesekkur` (`/tesekkurler/` sayfasındaki iki
düğme). **`tesekkur` bir teşhis sinyali:** oradaki tıklama, WhatsApp'ın
kendiliğinden açılmadığı anlamına gelir. Sayısı artıyorsa otomatik açma
bozulmuş demektir — o yüzden ayrı tutuluyor, `hero`'ya karıştırmayın.
**`yan_buton` yalnızca md ve üstünde görünür:**
mobilde `MobilBar` zaten aynı iki eylemi tam genişlikte basıyor, üstte de
`StickyUstCubuk`'un Ara düğmesi var; üçüncü kopya küçük ekranda içeriği kapatır.
Reklam raporlarında hangi yüzeyin çalıştığını bu ayrımla göreceksiniz.

Google Ads tarafında birincil dönüşüm form + 60 sn üzeri çağrı olacak, `tel_click`
ikincil kalacak — aksi halde akıllı teklif yanlış tıklamalara optimize eder.

### Form → /tesekkurler/ → WhatsApp

Backend yok. Form 3 alan + KVKK onayı toplar, doğrular, mesajı kurar — sonra
**doğrudan `wa.me`'ye gitmez**, önce `/tesekkurler/` sayfasına uğrar. O sayfa
WhatsApp'ı kendiliğinden açar.

**Ara sayfa 11.08.2026'da eklendi ve iki ayrı işi birden yapıyor:**

1. **Dönüşümün bir adresi oldu.** Google Ads kampanya sihirbazı "müşteri
   iletişim isteğinde bulundu" işlemi için *"iletişim alındı sayfasının
   adresi"* istiyor ve alan adı kökünü kabul etmiyor. Formumuz POST etmediği
   için böyle bir adres **yoktu**; sihirbaz geçilemiyordu. Sayfa o adresi
   veriyor ve uydurma değil: buraya yalnızca formu geçerli şekilde gönderen
   düşer. `/iletisim/` adresini dönüşüm olarak vermek alternatifti ve **yanlış
   olurdu** — o sayfayı açan herkes "müşteri adayı" sayılır, akıllı teklif
   yanlış veriyle eğitilirdi.
2. **Kurtarma noktası.** Eskiden wa.me yönlendirmesi açılmazsa (uygulama yok,
   tarayıcı engelledi, bağlantı koptu) ziyaretçi **elinde hiçbir şey olmadan**
   kalıyordu: form dolduruldu, mesaj gitmedi, kimsenin haberi yok. Sessiz
   kaybın ta kendisi. Artık düşülecek bir yer var — buton ve numara duruyor.

**Mesaj `sessionStorage` ile taşınıyor, sorgu dizesiyle DEĞİL.** Ad, telefon ve
arıza açıklaması kişisel veri; sorgu dizesine konsaydı adres çubuğunda görünür,
Cloudflare erişim kayıtlarına ve onay verilmişse ölçüm raporlarına düşerdi.
Yan fayda: dönüşüm adresi sabit kalıyor, Ads tarafında tek kural yetiyor.

**Üç davranış kuralı — üçü de test edildi, bozmayın:**

| Kural | Neden |
|---|---|
| Otomatik açma **tek seferlik** (`cs_wa_oto` bayrağı okunur okunmaz silinir) | Bayrak kalsaydı ziyaretçi WhatsApp'tan geri tuşuyla döndüğünde tekrar fırlatılır, çıkamadığı bir döngüye girerdi |
| `sessionStorage` yazılamazsa **eski akışa düşülür** (doğrudan wa.me) | Ölçüm kaybolur ama mesaj gider. Sıra bilinçli: **mesaj ölçümden önce gelir** |
| Gecikme ölçüm kimliğine bağlı: kimlik yoksa 500 ms, varsa **1800 ms** | Bu sayfaya ulaşmak Ads tarafında dönüşümün kendisi. Etiket yüklenmeden sayfayı terk etmek = para ödenir, dönüşüm görünmez |

Sayfa **noindex** ve sitemap'ten hariç (`integrations/site-haritasi.mjs` →
`HARIC`): arama sonucunda görünmesi hem ziyaretçiye anlamsız gelir hem de
dönüşüm adresine organik trafik akıtıp Ads raporunu kirletir.

`form_submit` olayı **hâlâ yönlendirmeden hemen önce**, para sayfasında
tetikleniyor; yani "WhatsApp'a gönderildi" demektir, "mesaj ulaştı" demez. Bu
ayrımı dönüşüm kurulumunda akılda tutun.

**Uçtan uca test edildi (11.08.2026, headless Chrome + CDP, 21/21):** form
doğrulaması (boş form ve KVKK onaysız gönderim tutuluyor), yönlendirme, mesajın
eksiksiz gitmesi, adres çubuğunda kişisel veri olmaması, geri tuşu döngüsü
olmaması, doğrudan gelen ziyaretçinin fırlatılmaması, kimlik varken gecikmenin
uzaması, noindex. Betik scratchpad'de kaldı, repoya girmedi.

**Testte iki tuzak yaşandı, tekrarlanmasın:** (1) ara durumu ölçmek için
otomatik açılmayı beklemek yetmiyor — 500 ms'de sayfa terk ediliyor, ölçüm
boşa çıkıyor; kontroller **500 ms'den önce** yapılmalı. (2) wa.me isteğini
CDP'de askıda tutmak işe yaramıyor: **askıdaki navigasyon `Runtime.evaluate`'i
de kilitliyor**, o andan sonra hiçbir komut cevap dönmüyor.

### Para sayfası iskeleti

Sıra sabittir, her blok ayrı bileşendir: sticky üst çubuk → H1 → alt başlık →
ana CTA → 3 güven rozeti → fiyat tablosu → arıza/çözüm → 4 adım süreç → ilçeye özgü
blok → yorumlar → SSS → form → alt CTA + footer → mobil sabit alt çubuk.
Blok eklerken veya sıra değiştirirken önce sorun.

**`<main id="icerik">` sayfalarda, BaseLayout'ta DEĞİL** (10.08.2026). Her sayfa
`StickyUstCubuk → <main> … </main> → Footer → MobilBar → YanButonlar` sırasında.
Gerekçe: `slot`'un tamamı BaseLayout içinde sarılsaydı `<header>`, `<footer>` ve
`<nav>` main'in **içinde** kalırdı — Lighthouse'un tek uyarısı (`main landmark
yok`) üçe çıkardı (`banner`/`contentinfo` üst düzeyde değil). "İçeriğe atla"
bağlantısının hedefi de bu `id`; Hero'dan ve `kvkk.astro`'dan alındı, **iki
yerde birden tanımlamayın.**

Ana sayfa bunun kısaltılmışı: fiyat tablosu ve ilçe bloğu yok, yerine hizmet ×
ilçe hub listesi var. Sahibinin onayıyla arıza kartları ve SSS eklendi.

**Ana sayfa SSS'i bilerek `hizmetler.json`'daki sorulardan farklı.** Oradaki
"garanti / ödeme / tespit ücreti" cevapları iki hizmette de birebir aynı metin;
ana sayfaya da konsaydı aynı paragraf sitede üç kez geçer ve para sayfalarının
kendine ait içeriği zayıflardı. Ana sayfa SSS'i `index.astro` içinde duruyor ve
cevaplar `firma.json` / `ilceler.json`'dan türetiliyor — çalışma saati veya ilçe
listesi değişince kendiliğinden güncellenir. Arıza kartlarında ise her hizmetten
yalnızca ilk 3'ü basılıyor (`ariza.slice(0, 3)`), tamamı para sayfasında kalıyor.

### Arıza rehberi (blog)

`/blog/` **organik arama katmanıdır, reklam değil.** "çamaşır makinesi su
boşaltmıyor", "E10 hatası" gibi şikâyet aramaları için yazılıyor. Bu trafiğin
niyeti bilgi almaktır ve sıralamaya girmesi aylar sürer — **ilk aramaların
buradan geleceğini beklemeyin.** Telefonu çaldıracak olan reklam + para
sayfalarıdır; blog onun üstüne uzun vadeli ve ucuz bir katman.

Yazılar markdown: `src/content/yazilar/`, şema `src/content.config.ts`.
Astro'nun koleksiyon katmanı çekirdekte geliyor, **paket kurulmadı**.

Para sayfalarının aksine burada **`{PLACEHOLDER}` sözleşmesi geçerli değil**:
şema alanları zorunlu, eksikse build **kırılır**. Gerekçe: özeti olmayan bir
yazı meta açıklamasız yayına çıkar. Yazı ya tamdır ya yoktur. `baslik` 60,
`ozet` 155 karakterle şemada sınırlı — blog başlıkları `seo.ts`'in title
denetiminden geçmiyor (oraya kalıpla değil doğrudan giriyor), tek bekçi şema.

`hizmet` alanı isteğe bağlı: doluysa yazı sonunda o hizmetin para sayfasına
geçiş bloğu basılır ve ikon oradan gelir, boşsa blok hiç basılmaz.

**Tarih basılmıyor.** İçerik eskimeyen tipte; tarih altı ay sonra yazıyı bayat
gösterir, uydurma "güncellendi" tarihi ise zaten yasak.

Düzyazı stilleri `global.css` sonundaki `.yazi` bloğunda —
`@tailwindcss/typography` onaylı listede yok, otuz satır CSS bir bağımlılıktan
ucuz. Markdown'da `> ` **uyarı kutusu** basar.

**Uyarı kutusu kuralı:** okuyucuya elle bir kontrol yaptıran her yazıda
bulunmalı ve giriş paragrafından hemen sonra gelmeli. İçinde o cihaza özgü
somut sınır yazılır — elektrik, basınçlı gaz devresi, su tesisatı, sıcak
yüzey. Jenerik "dikkatli olun" cümlesi işe yaramaz; okuyucunun tam da yapmaya
niyetlendiği yanlış hareket adıyla yazılır (buzu bıçakla kazımak, kapağı
zorlamak, gaz kokusu varken elektrik anahtarına dokunmak gibi).

Elle iş yaptırmayan yazıda (örn. `tamir-ne-kadar-tutar`) kutu **aranmaz** —
söyleyecek güvenlik sınırı yokken kutu koymak kuralı ezberden uygulamak olur
ve gerçek uyarıların ağırlığını düşürür. Kuralın eski hâli "her yazıda"
diyordu; 29.07.2026'da bu ayrım netleştirildi ve aynı denetimde
`buzdolabi-sogutmuyor` yazısındaki gerçek eksik kapatıldı.

Yetim sayfa yok: her yazı bağlı olduğu hizmet sayfasına ve üç yazıya link
verir, `/blog/` hub'dır, footer ile üst çubuk oraya bağlanır.

### SEO

Her sayfa benzersiz title (≤60) ve description (≤155). `seo.ts` tek kalıp kullanmaz;
slug'dan türeyen deterministik indeksle 4 kalıp arasından seçer, böylece sadece ilçe
adı değişen yakın-kopya başlıklar oluşmaz. Sınır aşılırsa build uyarı basıp kırpar.

JSON-LD: ana sayfada `HVACBusiness`, para sayfalarında `Service` + `FAQPage` +
`BreadcrumbList`.

**`AggregateRating` şeması bilerek üretilmiyor.** Google kendi sitesine gömülen yerel
işletme puanlarını göstermiyor, uydurma puan ise ceza riski. Eklemeyin.

Yetim sayfa bırakılmaz: ana sayfa hub'dır, her para sayfası `KomsuIlceler` ile komşu
ilçelere ve aynı ilçedeki diğer hizmetlere link verir. `komsuIlceler()` listeyi
döngüsel gezer, tek yönlü link yığılması olmaz.

#### Canlı SEO denetimi — 29.07.2026

Yayına girdikten sonra **50 sayfanın tamamı canlıdan indirilip** denetlendi.
`dist/` üzerinde değil, gerçekten servis edilen HTML üzerinde:

| Kontrol | Sonuç |
|---|---|
| Benzersiz title / description / H1 | 50/50 · **kopya grubu 0** · sınır aşımı 0 |
| H1 sayısı | her sayfada **tam 1** |
| Canonical | 50/50 kendi adresini doğru gösteriyor |
| JSON-LD | 137 blok, **0 bozuk** (49 Breadcrumb · 41 FAQPage · 40 Service · 6 BlogPosting · 1 HVACBusiness) |
| Yetim sayfa | **0** · sayfa başına ortalama 24 benzersiz iç link |
| Başlık hiyerarşisi | atlama **0** · boş link 0 · alt'sız görsel 0 |
| `{PLACEHOLDER` sızıntısı | 0 |
| Sıkıştırma / ağırlık | **Brotli** · sayfa başına **13–15 KB** |
| Dış kaynak isteği | **0** (tek `https://` bağlantı WhatsApp linki — kaynak yüklemesi değil) |

**Teknik SEO tarafı bitti.** Bundan sonra sıralamayı belirleyecek olan teknik
değil içerik ve otorite: Google İşletme Profili (A5), blog yazıları (D5) ve
zaman. Yeni alan adında organik sıralama **aylar** sürer — ilk haftalarda
trafik gelmemesi bozukluk değildir, telefonu yakın vadede reklam çaldırır.

**Denetimi tekrarlamak gerekirse** yöntem: `sitemap.xml`'den adres listesi
çek, hepsini indir, title/description/H1'i Map'te toplayıp çakışma ara. Sitede
düzenli çalışan bir betik olarak durmuyor — build zaten `[seo]` uyarısıyla
sınırları koruyor, benzersizliği de `seo.ts` içindeki `benzersizMi()` bekçisi
build sırasında yakalıyor.

**Denetimde çıkan tek yapısal zayıflık ve YANLIŞ ÇIKAN TAHMİN:** iki blog
yazısı yalnızca 1 iç link alıyordu. O sırada "yazı sayısı artınca dağılım
kendiliğinden dengelenir, kod değişikliği gerekmez" denmişti.

**Bu tahmin ölçüldü ve yanlış çıktı.** 5 yazı eklenince (6 → 11) dağılım
dengelenmedi, **daha da bozuldu: 1'e karşı 11.** Sebep içerik azlığı değil
algoritmaydı — `blog/[slug].astro` ilgili yazı listesini her yazıda **baştan**
tarıyordu, sıralama deterministik olduğu için hep aynı ilk yazılar seçiliyordu.

Çözüm, ilçelerde zaten kullanılan yöntemin aynısı: liste yazının **kendi
konumundan sonra başlatılıp döngüsel geziliyor** (`komsuIlceler()` ile aynı
mantık). Aynı hizmete ait yazılar yine önce geliyor, alaka düzeyi korunuyor.

Sonuç: dağılım **1–11 aralığından 2–6'ya** indi, her yazı en az iki iç link
alıyor. **Ders:** "içerik artınca düzelir" varsayımı ölçülmeden yazılmamalı;
tek yönlü link yığılması içerik sorunu değil algoritma sorunudur.

### Türkçe yerelleştirme

Küçük harfe çevirirken **daima** `toLocaleLowerCase('tr-TR')` kullanın — aksi halde
"I/ı" bozulur. Slug'lar ASCII ve tireli, URL'ler sonda `/` ile biter
(`trailingSlash: 'always'` + `build.format: 'directory'`).

## Performans bütçesi — tavsiye değil, kabul kriteri

**Ölçüldü — 29.07.2026, canlı siteden.** Chrome DevTools Protocol, 412×823
mobil, **4× CPU yavaşlatma + kısıtlı 4G** (1,6 Mbps / 150 ms). Ölçüm betiği
scratchpad'de kaldı, repoya girmedi (tek seferlik iş, `ws` gerektirmiyor —
Node 22+ yerleşik WebSocket ile CDP sürülüyor, paket kurulmadı).

| Ölçüt | Sınır | Ana sayfa | Para sayfası | Blog yazısı |
|---|---|---|---|---|
| **LCP** | < 2,0 sn | **0,91 sn** ✔ | **0,91 sn** ✔ | **0,50 sn** ✔ |
| **CLS** | < 0,1 | **0,000** ✔ | **0,000** ✔ | **0,000** ✔ |
| FCP | — | 0,91 sn | 0,54 sn | 0,50 sn |
| TTFB | — | 0,59 sn | 0,11 sn | 0,10 sn |
| Uzun görev toplamı | — | 421 ms | 379 ms | 319 ms |
| Sayfa toplamı | < 500 KB | **21,3 KB** | 19,6 KB | 18,6 KB |
| JS (gzip) | < 40 KB | **~2,07 KB** (+ onay verilirse gtag.js ~90 KB) | | |

LCP bütçenin **yarısından az**, CLS tam sıfır. Uzun görev süresi JS'ten değil
(2 KB), satır içi CSS'in ayrıştırılıp uygulanmasından geliyor; 4× yavaşlatılmış
CPU'da beklenen değer. INP ölçülemedi — gerçek etkileşim gerektiriyor, sentetik
ortamda üretilemez.

**Bu rakamlar ölçüm kimliği girilmeden önceki hâlin.** gtag.js ~90 KB ve onay
veren her ziyaretçide iniyor; A7'den sonra ölçüm **tekrarlanmalı**.

**Dış kaynak isteği sıfır**: CSS tamamen inline, yazı tipi indirilmiyor, ikonlar
satır içi SVG. HTML içindeki tek `https://` referansı canonical etiketi — o bir
kaynak yüklemesi değil.

**Tek planlı istisna gtag.js** (B3) ve o da iki kapıdan geçiyor: kimlik
girilmemişse hiç yüklenmez, girilmişse yalnızca **onay veren** ziyaretçide
`async` iner. Bu istisnayı genişletmeyin — başka üçüncü taraf script eklemek
yasak 5'e tabidir.

**Bir kez bozuldu ve düzeltildi — Cloudflare RUM beacon'ı (29.07.2026, B10).**
Cloudflare, ürettiğimiz HTML'e **kenar sunucuda**
`static.cloudflareinsights.com/beacon.min.js` enjekte ediyordu. Kodumuzda
yoktu, `dist/` içinde yoktu; **yalnızca tarayıcı user-agent'ıyla** ekleniyordu.
Panelden kapatıldı (Web Analytics → Manage site → RUM → **Disable**), gerçek
Chrome ile doğrulandı: **dış istek 0**.

**Denetim yaparken iki tuzak — ikisi de bu olayda yaşandı:**
1. **`curl` yetmez.** Beacon yalnızca tarayıcı UA'sına gönderiliyordu; `curl`
   ve `dist/` üzerinde yapılan bütün önceki denetimlerden kaçmıştı. Dış istek
   saymak için **gerçek tarayıcı** kullanın.
2. **Kenar önbelleği yanıltır.** Ayar kapatıldıktan sonra bazı adresler hâlâ
   beacon'lı HTML döndürdü (`CF-Cache-Status: HIT`). Değişikliği doğrularken
   birkaç farklı sayfaya bakın; tek bir `curl` sonucuna göre "hâlâ duruyor"
   veya "kalktı" demeyin.

Renk belirteçlerinin tamamı WCAG oranı **hesaplanarak** seçildi, gözle değil;
oranlar `global.css` içinde her belirtecin yanında ve `design-system/MASTER.md`
tablosunda yazılı.

Bu aramalar acil ve mobil (kısıtlı 4G); yavaş sayfa doğrudan reklam parası yakar.
Görsel eklenirse: AVIF + WebP yedek, `width`/`height` zorunlu, hero `fetchpriority="high"`,
diğerleri `loading="lazy"`. Font: 2 varyant, self-hosted, `font-display: swap`
(`global.css` içinde hazır blok yorum satırında bekliyor).

Etkileşimi mümkün olduğunca CSS ile çözün — SSS `<details>` ile, sticky çubuklar saf
CSS ile yapıldı. Bir şey için JS yazmadan önce CSS'le olur mu diye bakın.

## Bot ve geçersiz tıklama (click fraud) savunması

**Risk penceresi reklamla açılır, önce değil.** Site statik ve Cloudflare
kenarında duruyor; organik tarafa gelen bot trafiği bize para kaybettirmez
(sayfa 19 KB, sunucu yok, veritabanı yok). Reklam yayına girdiği gün ise
**her tıklama para** demektir. Bu bölüm C ile birlikte devreye girer,
reklamdan önce yapılacak bir şey yoktur.

**Formun spam bağışıklığı mimariden geliyor.** Form bir sunucuya POST etmiyor,
`wa.me` adresine yönlendiriyor. Yani sahte gönderim yapmak isteyen kişi mesajı
**kendi WhatsApp numarasından** yazmak zorunda; otomatik doldurma bize hiç
ulaşmaz. Backend'siz olmanın planlanmamış ama gerçek faydası bu — CAPTCHA
eklemeye gerek yok, zaten yasak 5'e takılırdı.

### Google zaten filtreliyor — ilk refleks panik değil, ölçmek

Google geçersiz tıklamaları otomatik tespit edip faturaya yansıtmaz veya kredi
olarak iade eder. Bu yüzden "tıklama arttı" tek başına saldırı kanıtı değildir.
Bizim elimizde Google'ın raporundan **daha erken** bir sinyal var:

> **Ads tıklaması artıyor ama `tel_click` + `whatsapp_click` + `form_submit`
> artmıyorsa, gelen insan değildir.** Bu oran A7 kimliği girilir girilmez
> çalışır; ayrı kurulum gerektirmiyor.

Destekleyici sinyaller: tek IP veya tek konumdan yığılma · çalışma saati
dışında patlama · tek anahtar kelimede aniden fırlayan TO · oturum süresi ~0.

### Saldırıyı en çok engelleyen şey KURULUM — sonradan müdahale değil

Bunlar kampanya açılırken **bir kez** yapılır; saldırı başladıktan sonra
yapılınca yanan para geri gelmez (C6):

1. **Konum hedeflemesi "bulunma" (presence)** olsun, "ilgi" değil. Adana
   dışından gelen trafiğin büyük kısmı baştan kesilir.
2. **Arama ortakları (Search Partners) ve Görüntülü ağ kapalı.** Kurulum
   sihirbazında işaretli gelirler — kontrol edin. Yerel bir servis için
   karşılığı düşük, trafiğin nereden geldiğini de tam göremiyoruz.
3. **Geniş eşleme ile başlanmaz** — tam/öbek eşleme + ilk günden negatif
   kelime listesi.
4. **Reklam programı 08:00–20:00** (gerçek çalışma saatimiz). Gece gelen
   tıklama iki kere kayıp: hem bot yoğunluğu yüksek hem telefon açılmıyor.
5. **Günlük bütçe düşük başlatılır.** Bütçe, bir saldırının bize
   verebileceği günlük zararın **tavanıdır** — asıl koruma budur.
6. **İlk hafta konum / IP / cihaz raporları her gün okunur.**

### Saldırı tespit edilirse — sıra bu

1. **Kampanya IP hariç tutma listesi** (Ads → kampanya ayarları). Kampanya
   başına **500 adres/aralık** sınırı var ve mobil IP'ler döner; bu yüzden tek
   başına çözüm değil, **ilk hamledir**.
2. **Coğrafyayı daralt, saatleri daralt, bütçeyi indir.** Saldırı sürerken
   kampanyayı **tamamen durdurmak da meşru** — reklamı durdurmanın organik
   sıralamaya zararı yok, para yanmasının var.
3. **Google'a geçersiz tıklama incelemesi bildir:** tarih aralığı, kampanya,
   şüphe gerekçesi ve elimizdeki olay verisi (tıklama var, `tel_click` yok).
   Otomatik kredi yetmediğinde iade bu yoldan yürür.
4. **Olayı bu dosyaya yaz** — tarih, belirti, yapılan, sonuç. İkinci kez
   olduğunda hafızadan değil kayıttan hareket edilir.

### Bu projede YAPILMAYACAKLAR

- **Üçüncü taraf tıklama koruma script'i (ClickCease vb.) eklenmez.** Yasak 5
  ve sıfır-dış-istek hedefini bozar; üstelik yaptığı iş Ads'in aynı **500 IP**
  listesini otomatik doldurmaktır — elle yapabileceğimizin ötesinde sihir
  satmıyor. Gerçekten gerekiyorsa ayrı bir karar olarak tartışılır ve buraya
  yazılır, sessizce eklenmez.
- **Cloudflare "Bot Fight Mode" düşünmeden açılmaz.** Sayfaya challenge JS
  enjekte eder ve meşru trafiği de zorlayabilir; B10'da beacon'ı tam bu yüzden
  kapattık. Gerekirse sayfaya kod ekletmeyen WAF kuralı / hız sınırı kullanılır.
- **Numarayı gizlemek veya dinamik değiştirmek** savunma sayılmaz — C2'deki
  aynı çelişki, numara sayfanın en değerli pikselidir.

## Kesin yasaklar

1. **Rakam, tarih, yorum, sertifika, referans uydurmayın.** Bilinmeyen her değer
   `{PLACEHOLDER}` kalır ve tur sonunda listelenir.
2. **"Yetkili servis" ibaresi kullanmayın** — yazılı marka yetkisi olmadan haksız
   rekabet ve marka şikâyeti demek, bu da tüm Google Ads reklamlarını yayından
   kaldırır. İzinli kullanım: "{Marka} ürünlerinde tamir ve bakım hizmeti".
   Footer'daki reddi beyan bu ibareyi kullanmadan yazılmıştır, öyle kalsın.
3. **Sahte yorum, sahte yıldız, sahte müşteri sayacı yazmayın.** Uydurma müşteri
   yorumu Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği kapsamında
   yanıltıcı reklamdır (idari para cezası + erişim engeli) ve Google'ın sahte
   içerik politikasının doğrudan ihlalidir — yaptırımı reklam hesabına işler.
   Yorumlar bloğu Google işletme profiline **link verir**, metin kopyalamaz;
   profil URL'i yoksa blok hiç basılmaz. Bu istenirse gerekçesiyle reddedilir.
4. **Slider, carousel, otomatik oynayan video, giriş animasyonu, pop-up chatbot yok.**
5. **Onaysız npm paketi veya üçüncü taraf script eklemeyin.** Onaylı liste:
   `astro`, `sharp`, `tailwindcss`, `@tailwindcss/vite`, `typescript`.
   (`sharp` ve `esbuild` install script'leri `package.json` → `allowScripts` ile onaylı.)

## Metin kuralları

Sade Türkçe, kısa cümle, etken çatı. "Müşteri memnuniyeti odaklı çözüm ortağınız"
gibi içi boş kurumsal dil yasak. Somut olun. Aynı eylem her yerde aynı adla anılır —
"Hemen Ara" ve "WhatsApp'tan Yaz" metinleri `AraButonu.astro` içinde tek yerde tanımlı,
oradan değiştirin.

## Çalışma şekli

Parça parça ilerleyin, tek seferde her şeyi yapmayın. Her turun sonunda tek paragraf:
ne değişti, neden, performans bütçesine etkisi ne. İş bilgisi (fiyat, garanti süresi,
hizmet bölgesi, çalışma saati) konusunda **tahmin etmeyin, sorun**.

### Push politikası — doğrudan canlıya (sahibinin kararı, 29.07.2026)

Dal ve önizleme yok. `main`'e her push **1–2 dakikada canlıya çıkar**;
Cloudflare repoya bağlı ve otomatik derleyip yayınlıyor. Sahibine dal + onay
seçeneği sunuldu, doğrudan canlıyı seçti.

**Bu karar hız kazandırıyor ama arada onay yok — bu yüzden kontrol push
ÖNCESİNE alındı.** Aşağıdakiler tavsiye değil, bu politikanın bedeli:

1. **Push etmeden önce `npm run build` çalıştırın ve çıktısını okuyun.**
   Build kırılırsa Cloudflare eski sürümü canlıda tutar — yani ziyaretçi
   bozuk sayfa görmez. Asıl tehlike build'in **geçtiği** ama içeriğin
   bozulduğu durumlardır.
2. **Şu dört yüzeye dokunan her değişiklikten sonra canlıyı doğrulayın:**
   telefon linki · WhatsApp linki · form · ölçüm (`data-olay`). Bunlar
   bozulursa site açılır, düzgün görünür ve **hiçbir hata vermez** — sadece
   telefon çalmaz. Sessiz kayıp en pahalısıdır.
3. **Doğrulama `curl` ile yapılmaz.** Cloudflare kenar önbelleği eski HTML
   döndürebiliyor ve bazı script'ler yalnızca gerçek tarayıcı user-agent'ına
   gönderiliyor (B10'da yaşandı). Gerçek tarayıcı kullanın.
4. **Geri alma yolu hazır:** Cloudflare → proje → Deployments → önceki sürüm →
   Rollback. Bir şey ters giderse tartışmadan geri alın, sonra bakın.

---

## Yapılacaklar

> **Bu bölüm üç katmanlı, karıştırmayın:**
> **1. Panel** — ne yapılacak, tek satırlık maddeler. Günlük iş buradan yürür.
> **2. Durum tablosu** — ölçülen değerler.
> **3. A–G bölümleri** — her maddenin gerekçesi ve karar kaydı; panelin uzun hâli.
> Panel bayatlarsa `npm run build` çıktısı doğruyu söyler.

---

## PANEL — açık işlerin tamamı (29.07.2026)

**Site yayında, teknik iş bitti.** Bu artık "yayına çıkma" listesi değil,
**"en üste çıkma" listesi** — ve ağırlığı sahibinin tarafında. Sıralama,
amaca (üst sıra → çalan telefon) hizmet ettikleri ölçüde yapıldı.

### ▶ Sırayla yapılacaklar

| # | İş | Kimde | Tek cümlede |
|---|---|---|---|
| 1 | **Yorum toplamak** · D4 | Sahibi | Profil bağlı ama **yorum yok**; yerel aramanın en güçlü sinyali, maliyeti sıfır. |
| 2 | **İşletme profilini doldurmak** · G6 | Sahibi | Fotoğraf · hizmet listesi · hizmet alanı · çalışma saati · S&C · gönderi. |
| 3 | **Blog yazısı eklemek** · D5 | Claude | 16 yazı var ama **`klima-montaji`'nin yazısı yok** — 9 hizmetin 8'i kapsanıyor. Sıradaki yazı buradan. |
| 4 | **Mahalle listeleri** · A2 | Sahibi | İlçe başına 5–8 mahalle adı; rakibin kopyalayamayacağı tek içerik. |
| 5 | **KVKK metnini avukata okutmak** · E1 | Sahibi | Brifing hazır: `docs/kvkk-avukat-brifingi.md`. |

### ❓ Cevap bekleyen sorular — cevapsız uygulanmaz

Hizmet bölgesi **tahmin edilmesi yasak** alan; liste gelmeden sayfa açılmaz.
**G4 kapandı** (30.07.2026): kapasite yeterli, kapsam büyütmenin önünde engel yok.

| Soru | Madde | Cevabın etkisi |
|---|---|---|
| Kalan **11 ilçeden hangilerine** gidiyorsunuz? ("çoğu" dendi — ad ad liste gerek) | G2 | Her ilçe **8 para sayfası**. Kapsamı en çok büyütecek cevap bu. |
| Hangisine **aynı gün**, hangisine **randevuyla** gidiliyor? | G2 | Uzak ilçeye "aynı gün" vaadi basılamaz (yasak 1). Liste ikiye ayrılmalı. |
| Aday listesinden hangi hizmetleri **gerçekten yapıyorsunuz**? | G3 | Her hizmet **1 hub + N para sayfası**, kod yazılmadan. |

### ⏸ Tetiği sahibi çekecek — altyapı hazır, bekliyor

| İş | Madde | Durum |
|---|---|---|
| Search Console raporunu okumak | G1 | **Kurulum bitti** (doğrulama + sitemap 60 adres ✔). Rapor için **1–2 hafta** gerek; site 29.07.2026'da yayına girdi, şu an boş olması normal. |
| Google Ads'i açmak | A7 · C1–C5 | **Başladı** (11.08.2026, sahibi sihirbazı açtı). Dönüşüm adresi `/tesekkurler/` hazır; **eksik olan `AW-…` kimliği** — o girilmeden hiçbir dönüşüm ölçülmez. |
| Bot / geçersiz tıklama savunması | **C6 · C7** | Kurulum kapıları yazılı; **kampanya açılırken** uygulanacak, sonradan değil. |
| Performans ölçümünü tekrarlamak | B8 | A7'den sonra — gtag.js ~90 KB, mevcut rakamlar kimliksiz hâlin. |
| Tip denetimi | B5 | `@astrojs/check` kurulu değil; kurulum **onay ister**. |
| Self-hosted font | D1 | **Tavsiye: yapmayın** — LCP metin, ölçülmüş avantajı bozar. Karar sahibinde. |

### 🔁 Süregelen disiplin — biten iş değil, her gün geçerli

- **G5 — kaçan çağrı = kaçan iş.** 08:00–20:00 arası açılmayan telefon,
  hunideki **en pahalı sessiz kayıp**; hiçbir raporda görünmez.
- **D4 akışı.** Yorum tek seferlik iş değil; tazelik de sinyal. Her iş bitiminde
  aynı mesaj, **herkese** (seçerek istemek politika ihlali).
- **Push öncesi kontrol.** `npm run build` çıktısını oku · dört yüzeyi gerçek
  tarayıcıyla doğrula (telefon · WhatsApp · form · `data-olay`). Ayrıntı
  "Çalışma şekli"nde.
- **E2 — künye riski.** Kapatılmadı, sahibi bilerek kabul etti. **Tekrar sormayın.**

### ✔ Kapanmış — tekrar açmayın, sormayın

| Madde | Karar / sonuç |
|---|---|
| A1 | `yerelNotlar` yazıldı, sahibi olduğu gibi kabul etti → ilçe kapısı açık, 32 para sayfası |
| A3 | **Fiyat yayımlanmayacak** — fiyat istemeyin |
| A4 | **Künye yayımlanmayacak** — ünvan/adres/e-posta/vergi istemeyin (riski E2'de) |
| A5 | Google işletme profili **bağlandı**; şema adı gerçek işletme adına çekildi |
| A6 | **Marka listesi tutulmayacak** — marka adı istemeyin |
| A8 | Alan adı: `cagribeyazesyatamir.com` |
| D2 | **Hero görseli yok** — fotoğraf istemeyin (profil fotoğrafı ayrı konu, G6) |
| D3 | Marka yüzeyi gereksiz (A6'nın sonucu) |
| B1–B4 · B6–B10 | Teknik iş bitti: alan adı · sitemap/robots · gtag yükleyici · 404 · deploy · HTTPS · performans ölçümü · RUM beacon kapatıldı |
| F | Yayına çıkış listesi — **madde 20 (E1) hariç** hepsi kapandı |

---

## Durum tablosu

**Yayın ve içerik**

| Ölçüt | Şu an | Hedef |
|---|---|---|
| Yayın | **canlı** — https://cagribeyazesyatamir.com | ✔ |
| Üretilen sayfa | **67** (31 sabit/blog + 36 para sayfası) | ✔ |
| Kapsam | **4 ilçe × 9 hizmet** (klima montajı eklendi 30.07.2026) | G2 / G3 cevabına bağlı |
| Geçerli ilçe (`yerelNotlar`) | **4 / 4** ✔ | 4 / 4 |
| Blog yazısı | **16** — 8 hizmetin hepsi kapsandı | — |

**Ölçüm ve sıralama**

| Ölçüt | Şu an | Hedef |
|---|---|---|
| Canlı SEO denetimi | **50/50 temiz · açık yok** ✔ | 0 açık |
| Search Console | **doğrulandı** ✔ (DNS TXT) · **sitemap gönderildi, 60 adres** ✔ | rapor okumak (G1) — 1–2 hafta sonra |
| Site haritası | **65 adres** (60 → 65, montaj) | push sonrası canlıda doğrulanacak |
| Ölçümleme | **yükleyici hazır, kimlik bekliyor** (B3 ✔ / A7) | GA4 + Ads dönüşümleri |
| Google yorumu | **0** (D4) | ilk aşamada 10–15 |
| Bot / click fraud savunması | **kurulum kapıları yazıldı** (C6 · C7) | reklam açılınca uygulanacak |

**Performans — ölçüldü, 29.07.2026**

| Ölçüt | Şu an | Sınır |
|---|---|---|
| Mobil LCP | **0,50–0,91 sn** ✔ | < 2,0 sn |
| Mobil CLS | **0,000** ✔ | < 0,1 |
| Sayfa ağırlığı | **18,6–21,3 KB** ✔ | < 500 KB |
| JS (gzip) | **2,07 KB** ✔ | < 40 KB |
| Dış istek | **0** ✔ (B10 kapatıldı, kimlik girilene kadar da 0) | 0 |
| HTTPS | `http://` → **301** → `https://` ✔ | — |

**Yayımlanmayan — karar, eksik değil:** fiyat (A3) · künye (A4) · marka listesi
(A6) · hero görseli (D2).

### Build raporları — listenin canlı hâli

Her `npm run build` üç rapor basar: `[ilce-kapisi]` (kaç ilçe elendi),
`[eksik-veri]` (hangi alan boş, sonucu ne), `[olcum]` (kimlik biçimi bozuksa).
**Panel bayatlarsa bu çıktı doğruyu söyler.**

`[eksik-veri]` şu an **10 satır** ve ikiye ayrılır — ayrım kaybolursa rapor
işe yaramaz hâle gelir:

| | Satır | Neden |
|---|---|---|
| **Asla dolmayacak** | 4 × `ulasimDk` + 1 × künye | Verilmiş karar (A2 · A4) |
| **Gerçekten bekliyor** | 4 × `mahalleler` + 1 × ölçüm kimliği | A2 · A7 |

Rapor 16 → 10'a indi: A5 dolduruldu, A6 kararla kapatılıp alanı kaldırıldı.
Bir alan "asla dolmayacak" hâle geldiğinde raporda tutulmaz — **gürültülü
rapor okunmaz olur.**

---

## A–G — ayrıntı ve karar kaydı

**Panelin uzun hâli.** Her madde o kararın **neden** verildiğini ve geri
alınırsa ne olacağını yazıyor; harf-numara (A2 · C6 · G1 …) panelden buraya
gönderir. Yeni karar alındığında gerekçe **buraya** yazılır, panele tek satır
düşer.

| Bölüm | İçerik | Açık maddeler |
|---|---|---|
| **A** | Sahibinden beklenen veri | A2 · A7 |
| **B** | Teknik işler | B5 |
| **C** | Reklam tarafı — **ertelendi** | C1–C7 |
| **D** | İçerik ve iyileştirme | D1 · D4 · D5 |
| **E** | Hukuk | E1 · E2 |
| **G** | İş kapma: kapsam · ölçüm · operasyon | G1–G6 |
| **F** | Yayına çıkış listesi | **arşiv** — yalnızca 20. madde açık |

### A. Sahibinden beklenen veri

- [x] **A1. `yerelNotlar` × 4 ilçe — yazıldı, sahibi olduğu gibi kabul etti
      (28.07.2026). Kapandı, tekrar açmayın.**
      İlçe kapısı açıldı, 32 para sayfası üretiliyor, `[ilce-kapisi]` uyarısı yok.

      **Notları sahibi değil Claude yazdı.** Sahibi soru cevaplamayı üç kez
      reddetti ("amacımız aratmak"), sonra doğrulamayı da reddetti ("bunların
      önemi yok"). Bu kayıt gizlemek için değil, ileride bir iddia yanlış
      çıkarsa nereden geldiğini bilmek için duruyor.

      Notlar iki kaynaktan kuruldu: **(1)** doğrulanabilir kamuya açık coğrafya
      (Seyhan merkez ilçe · Çukurova 2008'de Seyhan'dan ayrıldı, planlı site
      dokusu · Yüreğir nehrin doğusu, köprüyle bağlı · Sarıçam 2008'de kuruldu,
      yayvan yerleşim) ve **(2)** sahibinin zaten onayladığı servis bilgileri
      (08:00–20:00, ~2 saat, parça garantisi, ödeme, tespit ücreti ifadesi).
      Hiçbir rakam, tarih veya arıza istatistiği uydurulmadı.

      **Bilerek yazılmayanlar** — bunlar sahadan gelmeli: mahalle bazlı süre,
      "burada şu arıza daha sık çıkar", park/dar sokak gibi pratik kısıtlar,
      rakibin bilemeyeceği ayrıntı. Notlar kapıyı geçiyor ve dürüst, ama
      **rakiplerden ayrışma asıl bunlarla olurdu.** Kalite Puanı beklendiği
      kadar iyi gelmezse ilk bakılacak yer burasıdır.

      Bir dönem `[taslak-not]` uyarısı basılıyordu; sahibi doğrulamayacağını
      söyleyince kaldırıldı — asla eyleme dönüşmeyecek uyarı raporu gürültüye
      çevirir (aynı gerekçe A3'te ve `ulasimDk`'de de uygulandı).

      **30.07.2026'da notlara tek düzeltme yapıldı — yeni bilgi değil, bayat
      rakam.** İki not "sekiz hizmetin tamamı" diyordu; `klima-montaji`
      eklenince bu **yanlış rakam** oldu. Sayı yazmak yerine kaldırıldı
      ("hizmetlerin tamamı"), Seyhan notuna da montaj eklendi. Sahibine
      sorulmadı çünkü yeni bir iddia girmedi — var olan bir sayı düzeltildi.
      **Ders: ilçe notlarına hizmet SAYISI yazmayın**, her eklemede sessizce
      yanlışlaşır.
- [ ] **A2. `mahalleler` × 4 ilçe** (`ilceler.json`) — **öncelik 3, sahibinde.**
      Kapıdan bağımsız; boşken ilçe bloğunun mahalle kutusu basılmıyor.

      **Neden değerli:** mahalle adı, rakibin sitesinden kopyalayamayacağı
      türden bir yerel sinyal ve "Seyhan'da X mahallesi beyaz eşya servisi"
      aramalarını karşılar. A1 notunda yazan "sahadan gelmeli" içeriğin en
      kolay parçası bu — ilçe başına **5–8 mahalle adı** yeter, cümle
      kurmasına gerek yok.
      **`ulasimDk` bilerek `0` bırakıldı — 28.07.2026, sahibinin kararı.**
      Gerçek varış süresi ~2 saat, ama `IlceBlogu` bu sayıyı büyük puntoyla
      basıyor ve meta "Ortalama 120 dakikada adresinizdeyiz" oluyor; acil arama
      işinde bu rakam dönüşümü artırmaz, düşürür. Süre kutusu hiç gösterilmiyor.
      "Aynı gün gidiyoruz" vaadi `seo.ts` kalıp havuzunda zaten var ve 2 saatle
      uyumlu. Bu bir eksik veri değil, **verilmiş karar** — `[eksik-veri]`
      raporunda görünmeye devam eder, doldurmak için tekrar sormayın.
- [x] **A3. Fiyat yayımlanmayacak — karar, 28.07.2026.** Sitenin amacı aramayı
      başlatmak; tutar telefonda söyleniyor. 48 satırın tamamı `null` kalıyor ve
      bu **eksik veri değil, uygulanan politikadır.** Sahibinden fiyat istemeyin.

      `[eksik-veri]` raporundan çıkarıldı (`veri.ts`): asla dolmayacak 48 satırı
      her build'de saymak raporu gürültüye çevirir, gürültülü rapor okunmaz olur.
      Rapor artık yalnızca **kısmen dolu** hâli bildiriyor — o hâl gerçekten
      bozuktur, kimi satırda rakam kimi satırda "—" çıkar ve ziyaretçi bunu
      "fiyatı gizliyorlar" diye okur.

      Sayfalara yansıması: para sayfaları ve hizmet hub'ları tablo yerine
      **işlem listesi** basıyor. **`/fiyatlar/` sayfası kaldırıldı** (sahibinin
      kararı, 28.07.2026): fiyat verilmeyecekse fiyat sayfası tutmuyordu.
      İçeriği kaybolmadı — "Önce görürüz / Sonra söyleriz / Siz karar
      verirsiniz" üçlüsü ve fiyat SSS'i `/blog/tamir-ne-kadar-tutar/` yazısına
      taşındı. Böylece "ne kadar tutar" araması hâlâ karşılanıyor ama site
      fiyat listesi yayımlamış olmuyor.

      Karar alınırken düzeltilen üç çelişki — üçü de **söz veren metin, karşılığı
      olmayan içerik**:
      - `[hizmet]/index.astro` `baslikBos` geçmiyordu → 8 hizmet sayfasının
        hepsinde **"… fiyatları"** başlığı altında fiyatsız liste duruyordu.
        Reklamın gideceği sayfalar bunlar, en pahalı hataydı.
      - `index.astro` hizmet bölümü "kendi sayfasında … **fiyat aralıkları** var"
        diye söz veriyordu.
      - `/fiyatlar/` ilk SSS'i "Neden tek bir fiyat yerine **aralık**
        veriyorsunuz?" diye soruyordu; verilmeyen şeyi savunuyordu. Artık
        "Sitede neden fiyat listesi yok?".

      Karar geri alınırsa **kod değişmez**: `hizmetler.json`'a rakam girilince
      metinler, başlıklar ve ilk SSS kendiliğinden aralık diline döner
      (`fiyatVar` / `fiyatliVar`).
- [x] **A4. Künye yayımlanmayacak — karar, 29.07.2026. Sahibinden ünvan, adres,
      e-posta veya vergi bilgisi İSTEMEYİN.**

      Öncelik sırası açıkça anlatıldı (1. `unvan` — KVKK m.10 zorunlusu ·
      2. `adres` **veya** `eposta` — en az biri, çünkü Başvuru Tebliği m.5 yazılı
      kanal şart koşar · 3. vergi bilgisi — zorunlu değil), en ucuz çıkış yolu
      olarak "alan adı zaten sizin, ücretsiz bir e-posta yeter, hiçbir şey
      açıklamaz" önerildi. Sahibi **hiçbirini vermeyeceğini** söyledi.

      **Bu fiyat kararından (A3) farklı: politika değil, KABUL EDİLMİŞ RİSK.**
      Fiyat vermemek meşru bir ticari tercih; künye vermemek karşılanmamış bir
      yasal yükümlülük. Sonucu E2'de yazılı. Rapordan silinmedi, **tek satıra
      indirildi** — beş satır gürültü olurdu, sıfır satır riski görünmez yapardı.

      Yansıması: footer künyesi (adres/vergi satırları) basılmıyor, şemada
      `address` / `email` / `vatID` yok. KVKK "veri sorumlusu" kutusu adsız
      kalmasın diye `kisaAd`'a düşüyor — **uydurma değil**, sitenin her sayfasında
      zaten basılan ad; ama m.10'u karşılamaz.

      Karar geri alınırsa **kod değişmez**: `firma.json`'a değer girilince
      künye, KVKK kutusu ve şema alanları kendiliğinden açılır.
- [x] **A5. Google işletme profili BAĞLANDI — 29.07.2026.**
      `googleIsletmeUrl` = `https://share.google/8Kle71MrAvOuPlJS6`
      → işletme adı **"Çağrı Teknik Servis"**.

      Açılanlar: **41 sayfada** yorumlar bloğu (32 para sayfası + 8 hizmet
      hub'ı + ana sayfa; blog/kvkk/iletişim/404 bu bloğu zaten içermiyor) ve
      `HVACBusiness` şemasına **`sameAs`** — Google'a "bu site şu profile ait"
      demenin resmî yolu.

      **⚠️ Profilde henüz yorum YOK.** Blok bağlandı ama boş bir profile
      götürüyor. Asıl iş şimdi başlıyor: **D4**.

      **Ad uyuşmazlığı giderildi — 29.07.2026.** `firma.isletmeAdi` alanı
      eklendi (`"Çağrı Teknik Servis"`) ve şemadaki `name` artık oradan
      geliyor; `kisaAd` ise `alternateName` olarak basılıyor.

      **Sahibinin isteği korundu:** ekranda görünen ad her yerde "Adana Klima &
      Beyaz Eşya Servisi" kaldı. Gerekçesi kendi sözleriyle — *"gören direkt
      Adana klima beyaz eşya servisi desin, tıklasın"*. Haklı: o ad ne iş
      yaptığımızı anlatır ve tıklatır; gerçek işletme adı bunu yapmaz.

      **İki alan farklı iş görüyor, karıştırmayın:**
      | Alan | Kim okur | Ne yapar |
      |---|---|---|
      | `kisaAd` | **Ziyaretçi** | Ne iş yaptığımızı anlatır, tıklatır |
      | `isletmeAdi` | **Yalnızca Google** | Kim olduğumuzu söyler, Haritalar profiliyle eşleşir |

      Doğrulandı: 61 sayfanın **hiçbirinin görünür metninde** "Çağrı Teknik
      Servis" geçmiyor; yalnızca JSON-LD içinde. `isletmeAdi` boş bırakılırsa
      şema `kisaAd`'a düşer, adsız kalmaz.

      **29.07.2026: sahibi sahte yorum yazılmasını istedi ("bir şey olmaz"),
      reddedildi.** Yasak 3 zaten bunu söylüyor; talep tekrarlanırsa gerekçe
      şudur ve tartışmaya açık değildir:
      - Google'ın sahte içerik politikasının doğrudan ihlali, **yaptırım siteye
        değil reklam hesabına işler.** Sitenin tamamı o hesaba bağlı.
      - Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği kapsamında
        yanıltıcı reklam: idari para cezası + erişim engeli.
      - **Kazancı da sıfır:** Google kendi sitesine gömülen yerel işletme
        puanlarını arama sonucunda göstermiyor (aynı gerekçeyle `AggregateRating`
        de üretilmiyor). Yıldız çıkmaz. Sıfır kazanç, hesap kapatacak risk.

      Gerçek çözüm uygulandı: profil **servis alanı işletmesi** olarak açıldı,
      yani adres göstermiyor ve A4 kararıyla çelişmiyor.

      Sahibine ayrıca, yorum yerine geçmeyen ama uydurma da olmayan bir
      "verdiğimiz sözler" bloğu önerilmişti (aynı gün ~2 saat · parça garantisi
      · onaysız işlem yok · onarım yapılırsa tespit ücreti yok). Para
      sayfasının blok sırasını değiştireceği için **onay istendi, cevap
      gelmedi, eklenmedi.** Yorumlar bloğu artık basıldığına göre bu öneri
      büyük ölçüde gereksizleşti.
- [x] **A6. Marka listesi TUTULMAYACAK — karar, 29.07.2026. Sahibinden marka
      adı istemeyin.** Gerekçesi: *"tüm markaları yapıyoruz."*

      Bu bir eksik veri değil, **daha iyi bir cevap**. Liste tutmak iki türlü
      zarar verirdi: (1) asla dolmayacak bir alan her build'de raporlanır,
      (2) listede adı geçmeyen bir markanın sahibi "bakmıyorlar" diye düşünüp
      aramaz — yani **liste, kapsayıcı cevaptan daha az iş getirir.**

      Yapılanlar: `firma.markalar` alanı **kaldırıldı** (`firma.json`,
      `types.ts`, `veri.ts` raporu). Gizli duran marka SSS'i **açıldı** ve
      gerçek cevapla dolduruldu — marka ayrımı yapılmadığı, bağımsız servis
      olunduğu ve marka/model telefonda söylenirse uygun parçayla gelindiği
      yazıyor. Footer'daki reddi beyan da düzeltildi: sitede artık hiçbir marka
      adı geçmediği için "anılan markaların" ifadesi yanlış kalmıştı.

      "Yetkili servis" ibaresi hâlâ yasak (yasak 2) — kapsayıcı cevap yazılırken
      de kullanılmadı, kullanılmayacak.
- [ ] **A7. GA4 ölçüm kimliği (`gaOlcumKimligi`, `G-…`) + Google Ads dönüşüm
      kimliği (`adsKimligi`, `AW-…`)** — **B3 bitti (29.07.2026), artık tek
      eksik bu.** Kimlik girilir girilmez ölçüm çalışmaya başlar, kod
      değişikliği gerekmez.

      İkisinden **herhangi biri** yeterli: Ads dönüşümü GA4 olmadan da ölçülür.
      Reklam için kritik olan `AW-`, davranış raporu için `G-`.

      Kimlik girildikten sonra iki iş açılır: **C1** (dönüşüm tanımları) ve
      **B8** (Lighthouse'un tekrarı — gtag.js ~90 KB, mevcut ölçümler kimliksiz
      hâlin).

      **Biçim kapısı var (29.07.2026):** `olcumKimlikleri()` iki kimliği de
      doğrular; biçimsizse `[olcum]` uyarısı basar ve **kimliği sayfaya
      basmaz**. Gerekçe: bozuk kimlik SESSİZCE başarısız olur — gtag.js yine
      yüklenir, ~90 KB iner, hiçbir şey ölçmez ve sahibi çalıştığını sanır.
      Reklam parası bu sırada akmaya devam eder. Bozuk değeri basmamak
      `{PLACEHOLDER}` sözleşmesinin aynısıdır. Build **kırılmaz** — bir harf
      hatası yüzünden yayını engellemek uyarıyı görüp düzeltmekten zararlı olurdu.

      Beklenen biçimler: `G-XXXXXXXXXX` · `AW-123456789` (9–12 rakam).
      Yakalanan üç tipik hata: kod parçasının tamamını yapıştırmak · GA4 yerine
      eski `UA-…` vermek · `AW-` kimliği yerine dönüşüm **etiketini**
      (`AW-123/AbCd…` eğik çizgiden sonrası) vermek.
- [x] **A8. Gerçek alan adı** — `cagribeyazesyatamir.com` (28.07.2026). B1 ve B2 kapandı.
- [x] Telefon + WhatsApp — **`0545 375 11 08` / `905453751108`** (sahibi ikisinin
      de aynı numara olduğunu doğruladı). CTA'lar ve form aktif.

      **10.08.2026'da değişti** (önceki: `0533 667 53 44`). Numara mimaride
      **tek yerde** — `firma.json` — ve 66 sayfa oradan besleniyor; değişiklik
      tek satır oldu, hiçbir bileşene dokunulmadı. Bu yapıyı bozmayın: numarayı
      ikinci bir yere yazmak, sonraki değişimde birinin geride kalması demektir
      ve geride kalan yüzey **sessizce** ölü numaraya gider.

      Değiştirirken doğrulanan altı yüzey: `tel:` bağlantıları · `wa.me`
      bağlantıları · ekranda görünen ad · JSON-LD `telephone` · formun
      `data-numara` niteliği · `data-olay` ölçüm nitelikleri. Eski numaranın
      `dist/` içinde **sıfır kalıntısı** kaldığı ayrıca arandı.

      **Numara değişince site dışında da bir iş var:** Google İşletme
      Profili'ndeki numara aynı olmalı. Site ile profilin numarası ayrışırsa
      yerel sıralamada güven sinyali zayıflar (D4/G6 tam oradan yürüyor).
- [x] Sitede görünecek kısa ad — "Adana Klima & Beyaz Eşya Servisi"
- [x] Çalışma saatleri — "Her gün 08:00–20:00"
- [x] Garanti — sabit süre **yok**, parçaya göre değişiyor. Alan bu yüzden
      `garantiSuresi` değil **`garantiIfadesi`** ("Değişen parça garantili").
- [x] Tespit ücreti — sahibi "yazmaya gerek yok" dedi. Sitede **onarım kabul
      edilmezse ücret alınır ifadesi geçmiyor**; yalnızca kesin olan yazılı:
      "onarımı yaptırırsanız tespit için ayrıca ücret almayız". Koşulsuz
      "ücretsiz arıza tespiti" **denmedi** — ücret alınıyorsa yanıltıcı olurdu.

---

### B. Teknik işler — B5 hariç hepsi kapandı, site yayında

- [x] **B1. Alan adı artık TEK yerde** — `astro.config.mjs` → `SITE_URL` =
      `https://cagribeyazesyatamir.com`. Maddenin uyardığı "iki ayrı yer" riski
      kaynağından kaldırıldı: `public/robots.txt` **silindi**, robots.txt artık
      build sırasında SITE_URL'den üretiliyor (B2). Alan adı değişirse tek satır
      değişir. `dist/` içinde `ornek-alan-adi` araması **0 sonuç**, canonical'lar
      doğrulandı.
- [x] **B2. `sitemap.xml` + `robots.txt` üretimi** — `integrations/site-haritasi.mjs`,
      `astro:build:done` kancası. **Paket kurulmadı**, onaylı liste değişmedi.
      Adres listesi build çıktısından geliyor, elle tutulmuyor: ilçe kapısından
      geçemeyen ilçeler sitemap'e **kendiliğinden girmiyor** (üretilmemiş sayfayı
      Google'a bildirip 404 yedirmeyiz). `404` hariç tutuluyor, aksi halde
      noindex ile çelişirdi. `lastmod`/`changefreq`/`priority` bilerek yok:
      Google son ikisini yok sayıyor, her build'de bugünün tarihini basmak ise
      içerik değişmemişken sahte tazelik sinyali olurdu.
      Şu an **60 adres** (29.07.2026'da canlıdan sayıldı); ilçe veya yazı
      eklendikçe kendiliğinden büyür.
- [x] **B3. `gtag.js` yükleyicisi yazıldı — 29.07.2026, sahibinin onayıyla
      (yasak 5 istisnası).** `analytics.ts` içinde `gtagYukle()`.

      **İki sert kural, ikisi de test edildi:**
      1. Script yalnızca **onay verildikten sonra** enjekte edilir. Consent
         Mode'un "denied" başlaması tek başına yetmez — reddeden ziyaretçi
         `googletagmanager.com`'a **hiçbir istek yapmaz**.
      2. Kimlik yoksa hiçbir şey yüklenmez. `gaOlcumKimligi` ve `adsKimligi`
         boşken **dış istek sıfır kalır** — sitenin sıfır-dış-istek hedefi
         kimlikler girilene kadar bozulmuyor.

      **Kimlikler bu modüle import EDİLMEZ**, `<html data-ga>` / `<html data-ads>`
      niteliklerinden okunur. Sebep bütçe: `analytics.ts` istemci paketine
      giriyor, oradan `@/lib/veri` import etmek `ilceler.json` +
      `hizmetler.json`'ın tamamını tarayıcıya indirirdi. Aynı gerekçe `data-sayfa`
      için de geçerli. Nitelik, değer boşken hiç basılmıyor.

      `adsKimligi` alanı eklendi: Ads dönüşümü GA4 olmadan da ölçülür, bu yüzden
      **ikisinden herhangi biri** doluysa yükleyici çalışır.

      **Uçtan uca test (headless Chrome, HTTP üzerinden — `file://` altında ES
      modülleri CORS'a takılıyor, o yolla test etmeye çalışmayın):**

      | Yol | Sonuç |
      |---|---|
      | Onay öncesi | script **0**, `dataLayer` yalnızca `consent default` (hepsi denied) |
      | Kabul | script **1**, sıra doğru: `consent update` → `js` → `config G-` → `config AW-` → kuyruktaki `tel_click` |
      | Ret | script **0**, kuyruk atıldı, ret sonrası olay da gitmedi |
      | Dönen ziyaretçi (bant görünmüyor) | script yükleniyor — `baglat()` içindeki `onayDurumu() === 'kabul'` dalı olmasa ikinci ziyaretten sonra **hiç ölçüm olmazdı** |

      **Bütçe:** kendi JS'imiz 1,63 → **2,07 KB gzip** (sınır 40 KB). gtag.js'in
      ~90 KB'ı yalnızca onay veren ziyaretçide ve `async` iniyor; LCP metin
      olduğu için ilk boyamaya girmiyor. Kimlik girildikten sonra **B8'deki
      Lighthouse ölçümü tekrarlanmalı** — bu tablodaki rakamlar kimliksiz hâlin.
- [x] **B4. `404.astro`** — yazıldı. `dist/404.html` **kökte** üretiliyor, yani
      Cloudflare Pages onu eşleşmeyen adreslerde 404 statüsüyle servis eder.
      Ölü uç değil kısaltılmış satış sayfası: hero'daki ana CTA numarayı basar,
      altında 8 hizmet kartı ziyaretçiyi para sayfasına taşır.
      `BaseLayout`'a `dizinlenmesin` prop'u eklendi — `noindex, follow` basar ve
      canonical **basmaz**; hata sayfasının kendine canonical vermesi Google için
      soft-404 sinyali üretirdi. 57,7 KB (gzip 10,9 KB), yeni JS yok.
- [ ] **B5. Tip denetimi** — `npm run check` tanımlı ama **`@astrojs/check` kurulu
      değil**, komut çalışmıyor. Kurulum **onay gerektirir**. O zamana kadar tip
      hataları yalnızca build sırasında yakalanıyor.
- [x] **B6. Commit + push — tamam (29.07.2026).** `8dca6c0..a1e27a1`, 7 commit
      `origin/main`'e gönderildi (`github.com/hayrigok/cagriteknikservis`).
      Çalışma ağacı temiz, yerel ile uzak birebir aynı. B7 artık repodan çekebilir.
- [x] **B7. YAYINDA — https://cagribeyazesyatamir.com (29.07.2026).**

      **Pages DEĞİL, Workers.** Cloudflare yeni hesaplarda Pages oluşturmayı
      kapatmış; panel `/pages/new` adresinden bile "Create a Worker" akışına
      düşüyor. Bu yüzden repoya **`wrangler.jsonc`** eklendi — Deploy düğmesi
      onsuz hata veriyordu. Gerekçelerin tamamı o dosyanın başındaki yorumda.

      **Bağımlılık eklenmedi:** `wrangler` package.json'a girmiyor, Cloudflare'in
      build makinesinde `npx` ile iniyor. Onaylı paket listesi değişmedi.

      **Canlı doğrulama sonuçları:**

      | Kontrol | Sonuç |
      |---|---|
      | Sitemap'teki 50 adres | **50/50 → 200** |
      | Yanıt süresi | 0,28 sn · ana sayfa gzip **16,1 KB** |
      | `/klima-servisi` → `/klima-servisi/` | **tek adımda** (307) |
      | Olmayan adres | **gerçek 404** + B4 kurtarma sayfası |
      | Canonical · sitemap · robots · og.png · favicon | hepsi doğru |
      | `noindex` | yalnızca 404'te |

      **`workers_dev` ve `preview_urls` kapatıldı.** İlk deploy'da 51 sayfanın
      tamamı `cagriteknikservis.yks50bin.workers.dev` adresinden de servis
      ediliyordu (canlıda 200 dönüyordu) — kopya içerik. Kapatıldı, artık 404.
      **Sıra önemliydi:** özel alan adı bağlanmadan kapatılsaydı erişim kesilirdi.

      **Yönlendirme 307, 301 değil** — Cloudflare `force-trailing-slash` için
      geçici yönlendirme kullanıyor. 301'e çevirmek Worker script'i yazmayı
      gerektirirdi; sıfır sunucu mantığı ilkesinden sapmaya değmez. Canonical,
      sitemap ve iç linklerin hepsi zaten eğik çizgili sürümü gösteriyor.
      **Not olarak kalsın, aksiyon gerekmiyor.**
- [x] **B9. `Always Use HTTPS` açıldı — 29.07.2026, canlıda doğrulandı.**
      `http://` artık **301** ile `https://`'e yönlendiriyor, iç sayfalar dahil.
      Site tek protokolden yayınlanıyor. Cloudflare panel ayarıydı, kodla
      ilgisi yoktu.

      Doğrulaması: `curl -4 -sI http://cagribeyazesyatamir.com/` → **301**.

      **Bilinen ve kabul edilen tek çift yönlendirme:** `http://` + eğik
      çizgisiz adres iki adım atıyor (`301` protokol → `307` eğik çizgi).
      Yalnızca elle `http://alan.com/klima-servisi` yazan birini etkiler;
      canonical, sitemap, iç linkler ve reklam adresi hepsi `https://` + eğik
      çizgili sürümü kullandığı için normal akışta tek istek var. Tek adıma
      indirmek Worker script'i gerektirir, sıfır sunucu mantığı ilkesinden
      sapmaya değmez.
- [x] **B8. Mobil performans ölçüldü — 29.07.2026. LCP 0,50–0,91 sn · CLS 0,000
      · sayfa 18,6–21,3 KB.** Bütçenin tamamı karşılanıyor, ayrıntı ve yöntem
      "Performans bütçesi" bölümünde.

      PageSpeed Insights API kotaya takıldı (429, anahtarsız kullanımda olur);
      ölçüm Chrome DevTools Protocol ile yerel yapıldı — 4× CPU yavaşlatma +
      kısıtlı 4G. **INP ölçülemedi**, gerçek etkileşim gerektiriyor.

      **A7'den sonra tekrarlanmalı** (gtag.js ~90 KB).
- [x] **B10. Cloudflare RUM beacon'ı kapatıldı — 29.07.2026, doğrulandı.**
      B8 ölçümü sırasında yakalanmıştı: Cloudflare kenar sunucuda HTML'e
      `static.cloudflareinsights.com/beacon.min.js` enjekte ediyordu.

      Kapatma yeri (tekrar gerekirse): Cloudflare → **Analytics & Logs → Web
      Analytics** → siteyi seç → **Manage site** → *Real User Measurements
      (RUM)* → **Disable** → **Update**. Hesap seviyesinde bir ekran, alan
      adının içinde değil.

      **Neden kapatıldı — üçüncü gerekçe asıl olanı:**
      1. Sıfır-dış-istek özelliği bozuluyordu; yeni bir origin'e DNS + TLS +
         istek ekliyordu.
      2. Onaysız üçüncü taraf script (yasak 5) — biz eklemedik, sonuç aynı.
      3. **`/kvkk/` "ölçümleme çerezleri yalnızca siz onay verirseniz çalışır"
         diyor, beacon ise onaydan bağımsız çalışıyordu.** Çerezsiz olduğu için
         muhtemelen hukuken onay gerekmiyordu, ama metnin kesin ifadesi
         yanlışlanıyordu. Alternatif, beacon'ı bırakıp KVKK metnine yazmaktı;
         kapatmak seçildi çünkü GA4 zaten gelecek ve iki ayrı ölçüm katmanı
         tutmanın karşılığı yok.

      Doğrulama: gerçek Chrome, önbellek kapalı, iki sayfa → **dış istek 0**.

      **Bir daha açılmasın.** Cloudflare bu ayarı yeni sitelerde varsayılan
      açık getiriyor; alan adı taşınır veya proje yeniden kurulursa kontrol edin.

---

### C. Reklam tarafı

**ERTELEME KALKTI — sahibi 11.08.2026'da kampanya sihirbazını açtı** ve dönüşüm
adımında takıldı ("iletişim alındı sayfası" adresi isteniyordu). Sihirbazı
geçebilmek için `/tesekkurler/` sayfası eklendi (C1).

Teknik taraf hazır (B3 yükleyicisi + biçim kapısı + dönüşüm adresi); eksik olan
yalnızca `AW-…` / `G-…` kimlikleri (A7). Kimlik gelmeden **hiçbir dönüşüm
ölçülmez ve bu sessizce olur** — kampanya yayına girerse para akar, rapor boş
görünür. Artık kimlik istemek meşru: erteleme kararını sahibi kendisi kaldırdı.

**C6 bu yüzden şimdi kritik:** kurulum kapıları kampanya açılırken **bir kez**
uygulanır, sonradan telafisi yoktur.

Aşağıdakiler o gün için duruyor:

- [ ] **C1. Dönüşümler:** birincil = form gönderimi + **60 sn üzeri** çağrı,
      ikincil = `tel_click`. Sıralama önemli: `tel_click` birincil yapılırsa akıllı
      teklif yanlış tıklamalara optimize eder.

      **Form gönderiminin adresi hazır: `/tesekkurler/`** (11.08.2026'da
      eklendi, gerekçesi "Form → /tesekkurler/ → WhatsApp" bölümünde). Ads'in
      "sayfa ziyareti" tipindeki dönüşümü buraya kurulur.

      **Buraya `/iletisim/` YAZILMAZ.** Sihirbaz bir alt sayfa yolu dayattığı
      için akla ilk gelen o oluyor; yanlış olur — iletişim sayfasını **açan
      herkes** müşteri adayı sayılır, gerçekte kimse yazmamışken dönüşüm
      görünür ve akıllı teklif o yanlış veriyle eğitilir.

      Dönüşüm çalışmıyorsa ilk bakılacak yer **A7**: etiket olmadan sayfa
      ziyareti dönüşümü hiç tetiklenmez ve bu **sessizce** olur.
- [ ] **C2. Çağrı süresi ölçümü için karar gerekiyor.** 60 sn eşiği ancak Google'ın
      yönlendirme numarasıyla ölçülebilir; o da sayfadaki numarayı **dinamik olarak
      değiştirmeyi** gerektirir. Bu, "numara sayfanın en değerli pikseli" kuralıyla
      ve sıfır-dış-istek hedefiyle çelişir. Seçenekler tartılıp karar bu dosyaya
      yazılmalı — sessizce uygulanmamalı.
- [ ] **C3.** Reklam başlıklarını sayfa H1'leriyle **birebir** eşleştir.
      H1'ler `hizmetler.json` → `h1Sablonu` içinde, tek yerde.
- [ ] **C4.** Hizmet × ilçe bazında reklam grubu kurgusu (32 kombinasyon).
- [ ] **C5.** Yayına aldıktan sonra **test araması ve test formu** ile dönüşümlerin
      gerçekten düştüğünü doğrula. `form_submit` "WhatsApp açıldı" demektir,
      "mesaj ulaştı" demez — raporlarken bu ayrımı koru.
- [ ] **C6. Bot / geçersiz tıklama savunması — KAMPANYA AÇILIRKEN uygulanacak
      altı kurulum kapısı.** Gerekçeleriyle birlikte "Bot ve geçersiz tıklama
      savunması" bölümünde:
      konum **"bulunma"** (ilgi değil) · arama ortakları + görüntülü ağ
      **kapalı** · tam/öbek eşleme + ilk günden negatif kelime listesi ·
      reklam programı **08:00–20:00** · **düşük günlük bütçe** (zarar tavanı) ·
      ilk hafta konum/IP/cihaz raporlarını her gün oku.

      **Sonradan yapılamaz.** Saldırı başladıktan sonra kurulan kapı, o güne
      kadar yanan parayı geri getirmez. C4 ile aynı oturumda uygulanmalı.
- [ ] **C7. Saldırı anı protokolü — erken uyarı bizde hazır.** Ads tıklaması
      artarken `tel_click` / `whatsapp_click` / `form_submit` artmıyorsa gelen
      insan değildir; bu oran A7 kimliği girilince kendiliğinden çalışır ve
      Google'ın raporundan önce haber verir.

      Sıra: **IP hariç tutma** (kampanya başına 500 sınırı, ilk hamle) →
      **coğrafya/saat/bütçe daralt veya kampanyayı durdur** (reklamı durdurmanın
      organik sıralamaya zararı yok) → **Google'a geçersiz tıklama incelemesi
      bildir** → **olayı CLAUDE.md'ye yaz** (tarih, belirti, yapılan, sonuç).

      Üçüncü taraf tıklama koruma script'i **eklenmez** (yasak 5), Cloudflare
      Bot Fight Mode **düşünmeden açılmaz** (sayfaya JS enjekte eder, B10).

---

### D. İçerik ve iyileştirme — sıralamayı buradan yükselteceğiz

- [ ] **D1. Self-hosted font — ÖLÇÜM SONRASI TAVSİYE: YAPMAYIN.**
      Sahibi 29.07.2026'da istedi, B8 ölçümü gerekçesiyle geri bildirildi;
      karar sahibinde, ısrar ederse yapılır.

      Gerekçe rakamla: **LCP 0,50–0,91 sn ve LCP nesnesi METİN.** Web fontu
      eklenirse o metin fontun inmesini bekler — sitenin ölçülmüş en güçlü
      özelliği bilerek bozulur. `font-display: swap` ile bile ilk boyama sistem
      fontuyla olur, font gelince yeniden çizilir; kazanç görsel, kayıp
      ölçülebilir.

      Yine de yapılacaksa: 2 woff2 → `public/fonts/` (klasör henüz yok),
      `global.css` içindeki hazır `@font-face` bloğunu aç, `--font-sans` başına
      ekle, **B8 ölçümünü tekrarla ve LCP'yi bu dosyaya yaz.**
- [x] **D2. Hero görseli YAPILMAYACAK — karar, 29.07.2026: sahibi fotoğraf
      vermeyeceğini söyledi ("öyle bir amacımız yok"). Fotoğraf istemeyin.**

      **Bu karar siteye zarar vermiyor, aksine mevcut avantajı koruyor:**
      ölçülmüş LCP **0,50–0,91 sn** ve LCP nesnesi metin. Hero görseli konduğu
      anda LCP o dosyaya bağlanırdı — yani görsel eklemek burada bir
      iyileştirme değil, ölçülmüş bir kaybı göze almaktı.

      **Stok fotoğraf alternatifi yok.** Yerel servis sitesinde başkasının
      fotoğrafı "bu bizim aracımız / ekibimiz" izlenimi verir; yasak 3'ün
      (sahte yorum, sahte müşteri) aynı mantığı. İstenirse gerekçesiyle
      reddedilir.

      Karar değişir ve gerçek fotoğraf gelirse: AVIF + WebP yedek,
      `width`/`height` zorunlu, `fetchpriority="high"`, `sharp` ile üretilir
      (zaten kurulu, `tools/og-uret.mjs` örnek). **Eklendikten sonra B8
      tekrarlanmalı.**

      > Not: Google İşletme Profili'ne fotoğraf eklemek ayrı bir konu ve orada
      > gerçekten işe yarar (yerel sıralama sinyali). Sitedeki hero kararı onu
      > kapsamıyor; sahibi isterse profil tarafında ayrıca değerlendirilir.
- [x] **D3. Marka yüzeyi GEREKSİZ — A6 kararıyla kapandı (29.07.2026).**
      Marka listesi tutulmayacağı için basılacak marka adı yok; bileşen
      yazılmadı. Cevap SSS'te düz metin olarak duruyor, o yeterli.

      Karar geri alınır ve marka adları istenirse: "yetkili servis" ibaresi
      **kullanılmayacak** (yasak 2), izinli kalıp "{Marka} ürünlerinde tamir ve
      bakım hizmeti".
- [ ] **D5. Arıza rehberine yazı ekle — teknik SEO bittiğine göre artık
      sıralamayı gerçekten değiştirecek iki işten biri (diğeri A5).**

      **16 yazı yayında (29.07.2026'da 6 → 11 → 16).**
      **Sekiz hizmetin HEPSİ artık en az bir yazıyla temsil ediliyor** —
      ikinci turda bilerek `klima-bakimi` ve `klima-gaz-dolumu` boşlukları
      kapatıldı, çünkü yazısı olmayan hizmet organik aramada hiç görünmüyordu.

      | Hizmet | Yazı |
      |---|---|
      | çamaşır makinesi | 4 (su boşaltmıyor · E10 · sıkma yapmıyor · titriyor) |
      | klima servisi | 2 (soğutmuyor · su damlatıyor) |
      | bulaşık makinesi | 2 (su almıyor · kurutmuyor) |
      | buzdolabı | 2 (soğutmuyor · su akıtıyor) |
      | fırın/ocak | 2 (fırın ısınmıyor · ocak ateşleme yapmıyor) |
      | kurutma makinesi | 1 · klima bakımı | 1 (kötü kokuyor) |
      | klima gaz dolumu | 1 (gaz ne zaman biter) |
      | (hizmetsiz) | 1 (ne kadar tutar) |

      **⚠️ 30.07.2026'da dokuzuncu hizmet eklendi (`klima-montaji`) ve onun
      yazısı YOK.** Tablo artık 9 hizmetin 8'ini kapsıyor. Yazısı olmayan
      hizmet organik aramada görünmüyor; **sıradaki yazı buradan seçilmeli.**
      İki güçlü aday, ikisi de gerçek arama:
      - **"taşınırken klima nasıl sökülür"** — gazın dış ünitede toplanması
        anlatılır. Yapılmazsa gaz kaçar, yeni adreste dolum masrafı çıkar.
        `klima-gazi-ne-zaman-biter` yazısıyla aynı dürüst çizgide.
      - **"klima montajı nereye yapılmalı"** — iç ünitenin üfleme yönü, dış
        ünitenin havalandırması, boru mesafesi sınırı.

      Sıradaki diğer adaylar: bulaşık makinesi koku yapıyor, çamaşır makinesi
      kokuyor, buzdolabı çok ses yapıyor, kurutma makinesi hata veriyor,
      klima açılmıyor, fırın kapağı buğulanıyor.

      **`klima-gazi-ne-zaman-biter` yazısı bilerek sert bir doğruyu söylüyor:**
      gaz "bitmez", kaçar; kaçak bulunmadan yapılan dolum aynı parayı birkaç ay
      sonra tekrar harcatır. Bu, "her yıl gaz bastırın" diyen rakiplerin
      tersidir ve kısa vadede bir gaz dolumu işini kaçırabilir — ama sitenin
      tamamının dayandığı "önce bakarız, sonra söyleriz" duruşuyla tutarlı ve
      güven kuruyor. **Yumuşatmayın.**

      **İlk turda düzeltilen iki şey:** (1) ilgili yazı seçimi döngüsel hâle
      getirildi — iç link dağılımı 1–11'den 2–6'ya indi, ayrıntı ve yanlış
      çıkan tahminin kaydı "Canlı SEO denetimi" bölümünde. 16 yazıyla ölçüm
      tekrarlandı, dağılım **2–6 aralığında kaldı**, yetim yazı yok.
      (2) `buzdolabi-sogutmuyor` yazısında uyarı kutusu eksikti, eklendi (buzu
      sivri cisimle kazımak — borular buzun hemen altında).

      Yazı eklemek = `src/content/yazilar/`
      içine tek markdown dosyası; rota, sitemap ve liste kendiliğinden güncellenir.
- [ ] **D4. YORUM TOPLAMA — A5 bağlandı, bu artık listenin en yüksek getirili
      maddesi ve tamamı sahibinin elinde. Kod tarafında yapılacak hiçbir şey
      yok.**

      Profil bağlı ama **yorum yok**; blok şu an boş bir profile götürüyor.
      Yerel aramada sıralamayı belirleyen en güçlü sinyallerden biri yorum
      sayısı ve **tazeliğidir** — reklam bütçesinden tamamen bağımsız çalışır
      ve para maliyeti sıfırdır. Sahibinin "en üste çıkma" amacına en doğrudan
      hizmet eden iş budur.

      **Sahibine verilen şablon** (her iş bitiminde WhatsApp'tan):

      > Merhaba, bugünkü servisimizden memnun kaldıysanız Google'da kısa bir
      > yorum bırakabilir misiniz? Bizim için çok değerli.
      > https://share.google/8Kle71MrAvOuPlJS6

      Kurallar — **ihlali profili askıya aldırır**:
      - Yorum karşılığında **indirim, hediye veya para teklif edilmez.** Google
        bunu doğrudan yasaklıyor ve tespit edilirse yorumlar silinir.
      - **Sadece memnun müşteriye sorulmaz**, herkese aynı mesaj gider. Seçerek
        istemek ("review gating") politika ihlalidir.
      - Yorumlar **firma tarafından yazılmaz** (yasak 3). Toplu, tek seferde
        gelen yorum yığını da şüphe çeker — akış düzenli olmalı.
      - Gelen yorumlara, özellikle olumsuz olanlara **profilden cevap yazılsın**;
        cevaplanan profil daha aktif sayılıyor.

      Hedef: ilk aşamada **10–15 gerçek yorum**. Ondan sonrası düzenli akış.

---

### E. Hukuk

- [ ] **E1. `/kvkk/` metnini avukata okutun. Brifing hazır:
      `docs/kvkk-avukat-brifingi.md` — avukata bu dosyayı verin.**

      Metin kanunun istediği başlıkları karşılayan bir **taslak**, hukuki
      mütalaa değil. Uyarı `kvkk.astro` dosya başındaki yorumda da duruyor.

      Brifing 29.07.2026'da yazıldı ve avukatın en çok yanılabileceği noktayı
      en başa koyuyor: **site e-ticaret değil, arkasında sunucu ve veritabanı
      yok**; veri firmaya ziyaretçinin kendi WhatsApp'ından ulaşıyor. Bu
      anlaşılmadan metnin aktarım bölümü yanlış değerlendirilir.

      İçinde 7 somut soru var (ünvansız m.10 · yazılı kanal · saklama süresi ·
      hukuki sebep · WhatsApp aktarımı · çerezsiz analitik · ayrı çerez
      politikası gerekir mi) ve doğruluğu teyit edilmiş bölümler ayrıca
      işaretli ki avukat oraya vakit harcamasın.
- [ ] **E2. Veri sorumlusunun kimliği + başvuru kanalı — KARŞILANMIYOR, sahibi
      bilerek kabul etti (29.07.2026, bkz. A4). Tekrar sormayın; avukata
      danışılırsa gündeme gelecek madde budur.**

      İkisi de aydınlatma metninde zorunlu unsur. Ticari ünvan verilmediği için
      kimlik `kisaAd`'la karşılanıyor (m.10'u karşılamaz), adres ve e-posta
      verilmediği için de **geçerli yazılı başvuru kanalı yok**. Site formu ad +
      telefon + arıza açıklaması topluyor, yani veri işleme gerçekten var;
      yaptırım KVKK m.18 idari para cezası.

      İşleyişi engellemez — reklam yayınlanır, telefon çalar. Risk yalnızca
      ilgili kişi Kurul'a şikâyette bulunursa doğar. Kapatmanın maliyeti
      **tek bir e-posta adresidir**: alan adı zaten firmanın, adres veya vergi
      bilgisi açıklamadan yazılı kanalı tek başına karşılar.

      **29.07.2026'da düzeltilen gerçek hata:** sayfa taleplerin "numarayı
      arayarak" iletilebileceğini yazıyordu. Başvuru Tebliği m.5 telefonu
      başvuru kanalı saymaz — metin ilgili kişiye yanlış yol tarif ediyordu.
      Şimdi kanal yoksa numara **başvurunun kendisi için değil, başvuru adresini
      almak için** gösteriliyor ve telefonun resmî başvuru yerine geçmediği
      açıkça yazıyor. Tebliğ m.5/2'nin istediği başvuru içeriği (ad soyad, imza,
      T.C. kimlik no, tebligat adresi, talep konusu) de sayfaya eklendi.

---

### G. İş kapma — kapsam, ölçüm ve operasyon (29.07.2026'da açıldı)

> **Bölüm sırası hakkında:** F yukarıda değil aşağıda; **F bir arşiv**
> (yayına çıkış kapısı, kapandı), G ise **açık iş**. Açık olan önce geliyor.

Bu bölüm "İş kapma hunisi"nin eyleme dönmüş hâli. **Sitede yapılacak teknik iş
bitti**; buradaki maddeler ya kapsamı büyütür ya da zincirin kopan halkasını
onarır. G2–G4 sahibine sorudur ve cevap gelmeden uygulanmaz — hizmet bölgesi ve
kapasite tahmin edilecek şey değildir.

- [ ] **G1. Search Console — DOĞRULAMA ZATEN YAPILMIŞ, kalan iş raporu okumak.
      Ayrıntı: `docs/search-console-kurulum.md`.**

      **Düzeltme kaydı (29.07.2026):** bu madde ilk yazıldığında "kurulmadı"
      diyordu — **yanlıştı**. Sahibi "zaten yapmıştık" deyince dışarıdan
      kontrol edildi ve haklı çıktı: alan adında
      `google-site-verification=3o_8Oe38-…` TXT kaydı duruyor, hem Google hem
      Cloudflare DNS'i aynı değeri döndürüyor. Yani mülk **DNS yöntemiyle,
      alan adı seviyesinde** doğrulanmış — zaten önerilecek yöntem buydu.
      Canlı HTML'de `google-site-verification` meta etiketi **yok**, yani
      sıfır-dış-istek özelliği bozulmamış.

      **Ders: "yapılmadı" demeden önce ölçün.** Panel, sahibinin panelde
      yaptığı işleri göremez; dışarıdan doğrulanabilen her şey (DNS kaydı,
      canlı HTML, HTTP başlığı) iddia edilmeden önce kontrol edilmeli.

      **Site haritası da gönderilmiş — sahibi doğruladı (30.07.2026):
      Sitemaps ekranında 60 adres görünüyor.** Yani kurulum tarafında yapılacak
      hiçbir şey kalmadı; canlı sitemap'te de 60 adres var ve hepsi 200 dönüyor.

      **Kalan iş yalnızca rapor okumak — dışarıdan görülemez, panel gerekir:**
      1. **Dizine Ekleme → Sayfalar.** Kaç sayfa dizinde? Düşük sayı normal
         (site 29.07.2026'da yayına girdi); asıl bakılacak yer "Dizine
         eklenmedi" **gerekçeleri**.
      2. **Performans → Sorgular.** Asıl değerli kısım bu; ekran görüntüsü
         yeterli. **1–2 hafta beklemek gerekir** — bu kadar yeni bir sitede
         rapor büyük ihtimalle boştur ve bu bozukluk değildir.

      Claude bu raporla ne yapar: **D5 yazı sırasını tahminden ölçüme geçirir**
      (gösterimi olup tıklanmayan sorgu = yazılacak bir sonraki yazı) ve TO'su
      düşük sayfalarda `seo.ts` başlık kalıplarını ayarlar.

      **TXT kaydı silinmesin** — silinirse doğrulama iptal olur, veri durur.

- [ ] **G2. Kapsam genişliyor — sahibi 30.07.2026'da "Adana'nın çoğu ilçesine
      gidiyoruz" dedi. LİSTE BEKLENİYOR.**

      Site şu an **4 ilçe** (Seyhan, Çukurova, Yüreğir, Sarıçam) × 8 hizmet =
      32 para sayfası. Adana'nın kalan **11 ilçesi** kapsam dışı: Ceyhan,
      Kozan, İmamoğlu, Karaisalı, Karataş, Yumurtalık, Aladağ, Feke, Saimbeyli,
      Tufanbeyli, Pozantı. Her biri **8 yeni para sayfası** demek.

      **"Çoğu" yeterli değil, ad ad liste gerekiyor.** Sebep ilçe kapısı: her
      ilçe için gerçek `yerelNotlar` yazılacak ve gidilmeyen ilçeye sayfa açmak
      doorway page'dir — ceza tek sayfaya değil **tüm siteye** işler. Tahminle
      ilçe eklenmez.

      **İkinci soru, birincisi kadar önemli — VAAT UYUMU.** Site "aynı gün"
      diyor, A1 notları "~2 saat" diyor. Bu, merkez ilçeler için doğru; ama
      Adana'nın kuzey ilçeleri (Feke, Saimbeyli, Tufanbeyli, Aladağ, Pozantı)
      saatler süren mesafede. Oralara aynı gün gidilemiyorsa **aynı vaat
      basılamaz** — uydurma vaat, uydurma rakamla aynı yasağa girer (yasak 1).

      Bu yüzden liste **iki kümeye** ayrılmalı:
      - **Aynı gün gidilenler** → mevcut kalıpla açılır, `seo.ts` kalıp havuzu
        aynen çalışır.
      - **Randevuyla / ertesi gün gidilenler** → açılır ama vaat dili
        farklılaşır; `ilceler.json`'a bu ayrımı taşıyan bir alan gerekir.
        **Kod değişikliği bunu gerektirir, liste gelince yapılacak.**

      Notları A1'deki yöntemle Claude yazar (doğrulanabilir kamuya açık coğrafya
      + sahibinin onayladığı servis bilgileri); sahadan gelen ayrıntı eklenirse
      değeri artar ama şart değil.

- [ ] **G3. `klima-montaji` EKLENDİ (30.07.2026, sahibi onayladı: "bunu
      yapıyoruz"). Kalan adaylar için cevap bekleniyor.**

      Yayındaki **9 hizmet**: `klima-servisi` · `klima-bakimi` ·
      `klima-gaz-dolumu` · **`klima-montaji`** · `camasir-makinesi-tamiri` ·
      `bulasik-makinesi-tamiri` · `buzdolabi-tamiri` ·
      `kurutma-makinesi-tamiri` · `firin-ocak-tamiri`.

      **Montaj eklenirken çıkan ve düzeltilen üç şey — hepsi ders:**
      1. **Sabit metinler arıza dili konuşuyordu.** `tur` alanı bu yüzden
         doğdu; ayrıntı "Tek generic rota → `tur`" bölümünde.
      2. **İki ilçe notunda "sekiz hizmet" yazıyordu**, hizmet dokuza çıkınca
         yanlış rakama dönüştü. Düzeltilirken sayı **kaldırıldı**
         ("hizmetlerin tamamı") — sayı yazmak, her hizmet eklendiğinde sessizce
         yanlışlaşan bir bakım borcudur. Seyhan notuna da montaj eklendi.
      3. **Hub açıklaması 155 sınırını aştı** (`ozet` uzundu), `[seo]` uyarısı
         yakaladı, `ozet` kısaltıldı. Uyarıyı görmezden gelseydik arama
         sonucunda "…" ile biten açıklama çıkacaktı.

      **Sahibine sunulan aday listesinin kalanı — hâlâ soru, hiçbiri onaysız
      eklenmez.** Bunlar bu iş kolunda yaygın hizmetler, firmanın yaptığının
      iddiası değil:

      | Aday | Not |
      |---|---|
      | ~~Klima montajı / demontajı / taşıma~~ | **EKLENDİ** — 1 hub + 4 para sayfası. |
      | **Ticari soğutma** (vitrin dolabı, soğuk oda, sanayi tipi bulaşık makinesi) | Farklı müşteri (işletme), yüksek bilet, düşük rekabet. |
      | **Şofben / termosifon (elektrikli su ısıtıcısı)** | Beyaz eşya servislerinin sık yaptığı iş. |
      | **Davlumbaz / aspiratör** | Fırın-ocak ile aynı mutfakta, doğal ek. |
      | **Ankastre set montajı** | Montaj işi; tamirle aynı ekip. |
      | **Mikrodalga fırın** · **derin dondurucu** | Küçük hacim; ayrı sayfa değeri düşük olabilir. |
      | **Su arıtma / su sebili** | Ayrı uzmanlık; yapılıyorsa eklenir. |

      **⚠️ Kombi ve doğalgazlı cihazlar bilerek listede yok.** Doğalgaz işleri
      yetki belgesi gerektirir; belgesiz sayfa açmak "yetkili servis" ibaresiyle
      aynı türden bir risktir (yasak 2). Sahibi belgesi olduğunu söylerse ayrıca
      değerlendirilir.

      Onaylanan her hizmet `hizmetler.json`'a **tek kayıt** olarak girer →
      1 hub + (ilçe sayısı) para sayfası, **kod yazılmadan**. Kayda 6 arıza/çözüm
      ve 5–6 SSS gerekiyor; bunları Claude yazar, sahibi doğrular.

- [x] **G4. Kapasite yeterli — sahibinin cevabı, 30.07.2026:** *"günde tüm
      işlere yetebilecek kapasitemiz var."*

      Yani kapsam büyütmenin (G2 · G3) ve reklamın önünde **kapasite engeli
      yok**; hız kesmeye gerek kalmadı. Soru sorulma sebebi şuydu: talep
      kapasiteyi aşarsa geciken iş → olumsuz yorum → yerel sıralama düşüşü.
      Cevap "yetiyoruz" olduğuna göre bu risk şimdilik kapalı.

      **Bu cevap siteye hiçbir şey yazdırmaz.** "Sınırsız kapasite" gibi bir
      vaat sayfaya girmez — sözlü bir kapasite beyanı, ölçülmüş bir servis
      taahhüdü değildir (yasak 1). Yalnızca **bizim planlama kararımızı**
      etkiler: kapsamı ve reklamı temkinli açmak gerekmiyor.

      **Yeniden sorulacak tek durum:** yorumlarda "geç geldiler / gelmediler"
      şikâyeti görülürse. O zaman bu madde yeniden açılır — çünkü kapasitenin
      gerçek ölçüsü beyan değil, yorumlardır.

- [ ] **G5. Kaçan çağrı = kaçan iş — sahibinde, süregelen kural.**
      Site "her gün 08:00–20:00" diyor. O saatlerde telefon açılmıyorsa site
      yanlış söz veriyor demektir ve bu **en pahalı sessiz kayıptır**: reklam
      parası ödenmiş, sayfa ikna etmiş, iş rakibe gitmiş, hiçbir raporda
      görünmüyor.
      - Cevaplanamayan çağrı **aynı gün geri aranır** — WhatsApp'tan tek satır
        yeter.
      - Saatler gerçekte tutmuyorsa çözüm çabalamak değil, `firma.json`'daki
        saati **gerçeğe çekmek**. Yanlış çalışma saati olumsuz yorumla
        cezalanır, düzeltmek tek satırlık iş.

- [ ] **G6. Google İşletme Profili doldurulmalı — D4'ün yanındaki ikinci iş,
      tamamı sahibinde.** Yorum tek sinyal değil; profil ne kadar doluysa
      Haritalar'da o kadar üste çıkar:
      - **Fotoğraf** — gerçek iş fotoğrafı. Sitedeki hero kararı (D2) burayı
        **kapsamıyor**; profilde fotoğraf gerçekten sıralama sinyali.
      - **Hizmet listesi** — sitedeki 8 hizmetin aynısı.
      - **Hizmet alanı** — G2'nin cevabıyla aynı ilçeler.
      - **Çalışma saati** — 08:00–20:00, gerçek olan (bkz. G5).
      - **Soru & cevap** — sitedeki SSS'lerden birkaçı.
      - **Gönderi** — ara ara kısa not; aktif profil daha üste çıkar.

      Fotoğraf da gönderi de **gerçek olmalı**; stok görsel yasak 3'ün aynı
      mantığına girer.

---

### F. Yayına çıkış kontrol listesi — ARŞİV, 20/20'nin 19'u kapandı

Bu liste yayın öncesi kapıydı; **site 29.07.2026'da yayına girdi ve E1 hariç
hepsi kapandı.** Artık geçmiş kaydı olarak duruyor — sonraki büyük değişiklikte
(örn. yeni hizmet, tema değişikliği) yeniden gözden geçirilir.
**Açık kalan tek madde 20** (KVKK avukat incelemesi); yayını engellemiyor.

1. [x] `npm run build` → `[eksik-veri]` raporunda **karar dışı sürpriz yok**
    (13 satır: 5 karar + 8 bilinen bekleyen alan). *Maddenin eski hâli "rapor
    boş" diyordu; A3 ve A4 kararlarından sonra bu hedef ulaşılamaz oldu ve
    ulaşılamaz hedef kontrol listesini işlevsizleştirir.*
2. [x] `npm run build` → `[ilce-kapisi]` uyarısı **yok** (4/4 ilçe geçiyor)
3. [x] `[seo]` uyarısı yok (title ≤60, description ≤155)
4. [x] **61 sayfa** üretiliyor (29 sabit/blog + 32 para sayfası)
5. [x] `dist/` içinde `{PLACEHOLDER` araması **0 sonuç**
6. [x] Canonical'lar gerçek alan adını gösteriyor (`dist/` üzerinde doğrulandı)
7. [x] Kod GitHub'da, Cloudflare çekebilir (B6)
8. [x] **Cloudflare deploy tamam, alan adı bağlı** (B7) — 29.07.2026
9. [x] Telefon ve WhatsApp bağlantıları **gerçek cihazda** test edildi —
    sahibi doğruladı, 29.07.2026
10. [x] Form gönderimi WhatsApp'ı doğru ön-doldurulmuş mesajla açıyor —
    sahibi gerçek cihazda doğruladı, 29.07.2026
11. [x] Çerez bandı mantığı: ret → script yüklenmiyor, kuyruk atılıyor; kabul →
    sıra `consent update` → `js` → `config` → kuyruk. **Headless Chrome ile
    dört yol test edildi (B3).** *Maddenin eski hâli sahibinden canlıda olay
    akışını doğrulamasını istiyordu; kimlik girilmeden gidecek olay yok, yani
    o test A7'siz YAPILAMAZ. Canlı uçtan uca doğrulama C5'e taşındı.*
12. [x] 404 sayfası canlıda **404 statüsüyle** çalışıyor
13. [x] Yönlendirme tek adımda (`/x` → `/x/`)
14. [x] Sitemap'teki 50 adresin tamamı canlıda **200**
15. [x] Site **yalnızca** gerçek alan adından yayınlanıyor (`workers.dev` → 404)
16. [x] **`Always Use HTTPS` açık** (B9) — `http://` → **301** → `https://`
17. [x] Canlı SEO denetimi: 50/50 benzersiz title/description/H1, 0 bozuk
    JSON-LD, 0 yetim sayfa, 0 dış istek
18. [x] **Mobil performans ölçüldü** (B8): LCP **0,50–0,91 sn** · CLS
    **0,000** · sayfa **18,6–21,3 KB**. INP sentetik ortamda ölçülemez.
19. [x] **Cloudflare RUM beacon'ı kapatıldı** (B10) — gerçek Chrome ile
    doğrulandı, **dış istek 0**. `/kvkk/` metnindeki "yalnızca onay verirseniz"
    ifadesi tekrar tam doğru.
20. [ ] KVKK metni avukat onaylı (E1) — brifing hazır:
    `docs/kvkk-avukat-brifingi.md`. **Veri sorumlusu kimliği bilerek eksik —
    sahibinin kararı, yayını engellemiyor (A4/E2).**

**Bundan sonrası teknik değil içerik işi:** yorum toplamak (D4), işletme
profilini doldurmak (G6), blog yazıları (D5), kapsamı büyütmek (G2) ve zaman.
Sıralamayı bunlar belirleyecek.

---

### Tamamlananlar

**Faz 0** — proje iskeleti, veri şemaları, ilçe kapısı, para sayfası rotası.

**Faz 1** — arayüz katmanı sıfırdan:
- [x] `styles/global.css` (hesaplanmış renk belirteçleri), `layouts/BaseLayout.astro`,
      17 bileşen (`Bolum`, `Ikon`, `Hero`, `AraButonu`, `OlcuSeridi`, `HizmetKarti` …)
- [x] `pages/index.astro`, `pages/[hizmet]/index.astro` (hizmet hub'ı —
      **ilçe kapısından bağımsız**, `yerelNotlar` boşken de üretilir),
      `pages/[hizmet]/[ilce].astro` (para sayfası), `/iletisim/`, `/kvkk/`
      *(`/fiyatlar/` sonradan kaldırıldı — bkz. A3)*
- [x] Hizmet sayısı 2 → **8**; her birinde 6 arıza/çözüm ve 5–6 SSS
      (toplam 48 arıza, 42 SSS). Fiyat satırlarının tamamı `null`.
- [x] `public/favicon.svg`

**Eksik veri sözleşmesi** — doldurulmamış değer artık ekrana basılmıyor, ilgili
öğe kaldırılıyor; eksikler `[eksik-veri]` raporuna gidiyor. Ayrıntı yukarıdaki
"{PLACEHOLDER} sözleşmesi" bölümünde. Bu sırada düzeltilen iki hata:
`{PLACEHOLDER}` meta açıklamaya sızıyordu ve `ulasimDk = 0` iken **"Ortalama 0
dakikada adresinizdeyiz"** diye yanlış bir vaat üretiliyordu.
