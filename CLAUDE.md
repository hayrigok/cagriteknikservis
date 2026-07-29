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
düğmeleri, `YanButonlar.astro`). **`yan_buton` yalnızca md ve üstünde görünür:**
mobilde `MobilBar` zaten aynı iki eylemi tam genişlikte basıyor, üstte de
`StickyUstCubuk`'un Ara düğmesi var; üçüncü kopya küçük ekranda içeriği kapatır.
Reklam raporlarında hangi yüzeyin çalıştığını bu ayrımla göreceksiniz.

Google Ads tarafında birincil dönüşüm form + 60 sn üzeri çağrı olacak, `tel_click`
ikincil kalacak — aksi halde akıllı teklif yanlış tıklamalara optimize eder.

### Form → WhatsApp

Backend yok. Form 3 alan + KVKK onayı toplar, doğrular, sonra `wa.me` adresine
ön-doldurulmuş mesajla yönlendirir. `form_submit` **yönlendirmeden hemen önce**
tetiklenir; yani "WhatsApp açıldı" demektir, "mesaj ulaştı" demez. Bu ayrımı
dönüşüm kurulumunda akılda tutun.

### Para sayfası iskeleti

Sıra sabittir, her blok ayrı bileşendir: sticky üst çubuk → H1 → alt başlık →
ana CTA → 3 güven rozeti → fiyat tablosu → arıza/çözüm → 4 adım süreç → ilçeye özgü
blok → yorumlar → SSS → form → alt CTA + footer → mobil sabit alt çubuk.
Blok eklerken veya sıra değiştirirken önce sorun.

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

---

## Yapılacaklar

### Durum tablosu

| Ölçüt | Şu an | Hedef |
|---|---|---|
| Üretilen sayfa | **61** (29 sabit/blog + 32 para sayfası) | ✔ |
| Geçerli ilçe (`yerelNotlar`) | **4 / 4** ✔ | 4 / 4 |
| Fiyat yayını | **yok — karar** (A3) | — |
| Künye yayını | **yok — karar** (A4) | — |
| `[eksik-veri]` raporundaki satır | **10** — 5'i karar, **5'i gerçek eksik** (yalnızca `mahalleler` + A7) | 5 |
| Ölçümleme | **yükleyici hazır, kimlik bekliyor** (B3 ✔ / A7) | GA4 + Ads dönüşümleri |
| JS (gzip) | **2,07 KB** | < 40 KB ✔ |
| Dış istek | **0** (kimlik girilene kadar) | — |
| Commit'lenmemiş dosya | **0** ✔ | 0 |
| Push bekleyen commit | **0** ✔ (29.07.2026) | 0 |
| Son commit | bkz. `git log` | — |
| Yayın | **canlı** — https://cagribeyazesyatamir.com | ✔ |
| Canlı SEO denetimi | **50/50 temiz · açık yok** ✔ | 0 açık |
| HTTPS | `http://` → **301** → `https://` ✔ | — |
| **Mobil LCP** (ölçüldü) | **0,50–0,91 sn** ✔ | < 2,0 sn |
| **Mobil CLS** (ölçüldü) | **0,000** ✔ | < 0,1 |
| Sayfa ağırlığı (mobil, ölçüldü) | **18,6–21,3 KB** ✔ | < 500 KB |
| Dış istek | **0** ✔ (B10 kapatıldı) | 0 |
| Blog yazısı | **16** — 8 hizmetin hepsi kapsandı | — |

**Rapordaki 10 satırın 5'i karara bağlı ve asla dolmayacak:** 4 × `ulasimDk`
(A2) + 1 × künye (A4). Gerçekten bekleyen 5 satır: **4 × `mahalleler`** (A2) ve
**`gaOlcumKimligi`/`adsKimligi`** (A7, tek satırda raporlanıyor). Rapor
okunurken bu ayrım kaybolursa liste işe yaramaz hale gelir.

**Rapor 16 → 10'a indi**, çünkü A5 (işletme profili) dolduruldu ve A6 (marka
listesi) kararla kapatılıp alanı kaldırıldı. Bir alan "asla dolmayacak"
hâle geldiğinde raporda tutulmaz — gürültülü rapor okunmaz olur.

Her `npm run build` üç rapor basar: `[ilce-kapisi]` (kaç ilçe elendi),
`[eksik-veri]` (hangi alan boş, sonucu ne) ve `[olcum]` (kimlik biçimi bozuksa).
**Bu raporlar bu listenin canlı hâlidir** — burası bayatlarsa build çıktısı
doğruyu söyler.

---

## ⭐ ÖNCELİK SIRASI — 29.07.2026 sonu

**Site yayında ve teknik iş bitti.** Yayın engeli kalmadı, performans bütçesi
ölçümle doğrulandı, SEO denetiminde açık yok. Bu listenin geri kalanı artık
"yayına çıkma" listesi değil, **"en üste çıkma" listesidir** ve ağırlığı
sahibinin tarafına kaydı.

Amaca (arama sonuçlarında üst sıra → çalan telefon) hizmet sırasına göre:

| # | İş | Kimde | Neden bu sırada |
|---|---|---|---|
| **1** | **D4 — yorum toplamak** | **Sahibi** | Yerel aramanın en güçlü sinyali, para maliyeti sıfır, reklamdan bağımsız çalışır. Profil bağlı ama **yorum yok**. |
| **2** | **D5 — blog yazısı eklemek** | Claude | Organik trafiğin tek kaynağı. 16 yazı var, sekiz hizmet de kapsandı; buradan sonrası derinleşme. |
| **3** | **A2 — mahalle listeleri** | **Sahibi** | Rakibin kopyalayamayacağı tek içerik türü. İlçe başına 5–8 mahalle yeter. |
| **4** | **A7 + C — Google Ads** | **Sahibi** | Telefonu **en hızlı** çaldıracak kanal, ama sahibi erteledi ("zamanı gelince söylerim"). Altyapı hazır. |
| **5** | **E1 — KVKK avukat** | **Sahibi** | Hukuki risk; yayını engellemiyor ama açık. Brifing hazır. |

**Karar bekleyen iki soru** (ikisi de sahibine soruldu, cevap gelmedi):
- Şemadaki işletme adı gerçek ada (`Çağrı Teknik Servis`) çekilsin mi? Görünen
  metin değişmez, Google eşleştirmesi düzelir. Bkz. A5.
- Push'lar doğrudan canlıya mı gitsin, yoksa önce önizleme mi? Site yayında
  olduğu için artık her push canlıyı değiştiriyor.

---

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

      **⚠️ Ad uyuşmazlığı — karar bekliyor.** Profil "Çağrı Teknik Servis",
      şemadaki `name` ise `kisaAd` yani "Adana Klima & Beyaz Eşya Servisi".
      Google bu ikisini eşleştirmeye çalışır, uyuşmazlık bağı zayıflatır.
      Önerilen: şemadaki `name` gerçek işletme adı olsun, **görünen metinler
      değişmesin**. Sahibine soruldu, cevap gelmedi.

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
- [x] Telefon + WhatsApp — `0533 667 53 44` / `905336675344` (sahibi aynı numara
      olduğunu doğruladı). CTA'lar ve form aktif.
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
      Şu an **12 adres**; ilçeler açılınca kendiliğinden 44'e çıkar.
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

**ERTELENDİ — sahibinin kararı, 29.07.2026: "google ads şimdi değil, yapacağımız
zaman söyleyeceğim."** Teknik taraf hazır (B3 yükleyicisi + biçim kapısı); eksik
olan yalnızca `AW-…` / `G-…` kimlikleri (A7). **Sahibinden kimlik istemeyin,
kendisi gündeme getirecek.**

Aşağıdakiler o gün için duruyor:

- [ ] **C1. Dönüşümler:** birincil = form gönderimi + **60 sn üzeri** çağrı,
      ikincil = `tel_click`. Sıralama önemli: `tel_click` birincil yapılırsa akıllı
      teklif yanlış tıklamalara optimize eder.
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

      Sıradaki adaylar: bulaşık makinesi koku yapıyor, çamaşır makinesi
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

### F. Yayına çıkış kontrol listesi — TAMAMLANDI (E1 hariç)

Bu liste yayın öncesi kapıydı; **site 29.07.2026'da yayına girdi ve E1 hariç
hepsi kapandı.** Artık geçmiş kaydı olarak duruyor — sonraki büyük değişiklikte
(örn. yeni hizmet, tema değişikliği) yeniden gözden geçirilir.

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

**Site 29.07.2026'da yayına girdi; teknik kontrol listesinin tamamı aynı gün
kapandı, performans bütçesi ölçümle doğrulandı.**

**Açık kalan tek madde 20 — hukuki inceleme, yayını engellemiyor.**

Bundan sonrası teknik değil içerik işi: yorum toplamak (A5 profili bağlandı
ama yorum yok), blog yazıları (D5) ve zaman.

**Bundan sonrası teknik değil içerik işi:** yorum toplamak (A5 profili bağlandı
ama yorum yok), blog yazıları (D5) ve zaman. Sıralamayı bunlar belirleyecek.

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
