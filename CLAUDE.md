# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projenin amacı

Beyaz eşya ve klima tamir/bakım firması için **Google Ads odaklı yerel hizmet sitesi**.
Kurumsal tanıtım sitesi değil, dönüşüm makinesi. Başarı ölçütü tıklama değil,
**düşük maliyetli telefon araması**.

Mimarinin tamamı tek bir varsayımdan türüyor: Google'da üst sıra = teklif × Kalite
Puanı, Kalite Puanının en büyük bileşeni de açılış sayfası alaka düzeyi. Bu yüzden
her hizmet × ilçe kombinasyonunun **ayrı sayfası** var ve her sayfanın H1'i reklam
başlığıyla birebir aynı kelimeleri taşıyor.

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
ucuz. Markdown'da `> ` **uyarı kutusu** basar; güvenlik sınırları (elektrik,
basınçlı gaz devresi, su tesisatı) orada yazılıyor ve her yazıda bulunmalı.

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

### Türkçe yerelleştirme

Küçük harfe çevirirken **daima** `toLocaleLowerCase('tr-TR')` kullanın — aksi halde
"I/ı" bozulur. Slug'lar ASCII ve tireli, URL'ler sonda `/` ile biter
(`trailingSlash: 'always'` + `build.format: 'directory'`).

## Performans bütçesi — tavsiye değil, kabul kriteri

| Ölçüt | Sınır | Şu an |
|---|---|---|
| LCP | < 2,0 sn | görsel yok, LCP metin |
| INP | < 200 ms | — |
| CLS | < 0,1 | — |
| JS (gzip) | < 40 KB | **~2,07 KB** (+ onay verilirse gtag.js ~90 KB) |
| Sayfa toplamı | < 500 KB | ana sayfa **78,6 KB** (gzip 15,9 KB), hizmet sayfası ~81 KB |

**Dış kaynak isteği sıfır**: CSS tamamen inline, yazı tipi indirilmiyor, ikonlar
satır içi SVG. HTML içindeki tek `https://` referansı canonical etiketi — o bir
kaynak yüklemesi değil.

**Tek istisna gtag.js** (B3) ve o da iki kapıdan geçiyor: kimlik girilmemişse
hiç yüklenmez, girilmişse yalnızca **onay veren** ziyaretçide `async` iner.
Reddeden veya karar vermeyen ziyaretçi için dış istek hâlâ sıfır. Bu istisnayı
genişletmeyin — başka üçüncü taraf script eklemek yasak 5'e tabidir.

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
| Üretilen sayfa | **51** | 51 ✔ |
| Geçerli ilçe (`yerelNotlar`) | **4 / 4** ✔ | 4 / 4 |
| Fiyat yayını | **yok — karar** (A3) | — |
| Künye yayını | **yok — karar** (A4) | — |
| `[eksik-veri]` raporundaki satır | **13** — 5'i karar, **8'i gerçek eksik** | 5 |
| Ölçümleme | **yükleyici hazır, kimlik bekliyor** (B3 ✔ / A7) | GA4 + Ads dönüşümleri |
| JS (gzip) | **2,07 KB** | < 40 KB ✔ |
| Dış istek | **0** (kimlik girilene kadar) | — |
| Commit'lenmemiş dosya | **0** ✔ | 0 |
| Push bekleyen commit | **0** ✔ (29.07.2026) | 0 |
| Son commit | `a1e27a1` | — |
| Yayın | **henüz yok** (B7) | Cloudflare Pages |

**Rapordaki 13 satırın 5'i karara bağlı ve asla dolmayacak:** 4 × `ulasimDk`
(A2) + 1 × künye (A4). Kalan 8 satır gerçekten bekliyor: `googleIsletmeUrl` (A5),
`gaOlcumKimligi` (A7), `markalar` (A6) + ona bağlı gizlenmiş SSS, 4 × `mahalleler`
(A2). Rapor okunurken bu ayrım kaybolursa liste işe yaramaz hale gelir.

Her `npm run build` iki rapor basar: `[ilce-kapisi]` (kaç ilçe elendi) ve
`[eksik-veri]` (hangi alan boş, sonucu ne). **Bu iki rapor bu listenin canlı
hâlidir** — burası bayatlarsa build çıktısı doğruyu söyler.

Sıra önemli: **A bitmeden yayına çıkılmaz**, B bitmeden reklam açılmaz.

---

### A. Sahibinden beklenen veri — yayın engeli

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
- [ ] **A2. `mahalleler` × 4 ilçe** (`ilceler.json`) — kapıdan bağımsız.
      Boşken ilçe bloğunun mahalle kutusu basılmıyor.
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
- [ ] **A5. Google işletme profili URL** (`firma.json`) — yorumlar bloğu tamamen
      buna bağlı, yoksa blok hiç basılmıyor.

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

      **Gerçek çözüm — sahibine anlatıldı, henüz yapılmadı:** Google İşletme
      Profili açmak. Ücretsiz, **servis alanı işletmesi** olarak kurulabildiği
      için adres göstermeyi gerektirmez (A4 kararıyla çelişmez), telefonla
      doğrulanır. Yerel hizmet reklamı veren bir firma için bu muhtemelen listedeki
      en yüksek getirili tek iş: Haritalar görünürlüğü + reklamlara konum/arama
      uzantısı + gerçek yorum birikimi. Profil açılınca URL girilir, blok
      kendiliğinden açılır (D4 yorum toplama akışı da buna bağlı).

      **Yorumlar bloğu boşken sayfada boşluk bırakmıyor**, hiç basılmıyor —
      yani bu bir görsel sorun değil, eksik bir güven katmanı. Sahibine yorum
      yerine geçmeyen ama uydurma da olmayan bir "verdiğimiz sözler" bloğu
      önerildi (aynı gün ~2 saat · parça garantisi · onaysız işlem yok · onarım
      yapılırsa tespit ücreti yok); para sayfasının blok sırasını değiştireceği
      için **onay bekliyor**, kendiliğinden eklenmedi.
- [ ] **A6. Hizmet verilen marka listesi** (`firma.json`) — "Hangi markalara
      bakıyorsunuz?" SSS'i şu an gizli. **Ayrıca D4'e bakın: markaların görüneceği
      bir yüzey henüz yazılmadı.**
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

### B. Yayın öncesi zorunlu teknik işler

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
- [ ] **B7. Cloudflare Pages deploy — sıradaki iş, sahibinin tarafında.**
      Ayarlar: framework preset **Astro**, build komutu `npm run build`, çıktı
      dizini `dist`, kök dizin boş. Sonra Custom domains → `cagribeyazesyatamir.com`.

      Deploy sonrası **iki şey doğrulanacak**:
      1. `trailingSlash: 'always'` olduğu için `/klima-servisi` → `/klima-servisi/`
         yönlendirmesi **tek adımda** olmalı; çift yönlendirme reklam tıklamasında
         LCP'yi geciktirir, doğrudan para yakar.
      2. Olmayan bir adres gerçekten `dist/404.html`'i **404 statüsüyle** mi
         veriyor, yoksa Cloudflare kendi hata sayfasını mı basıyor. İkincisi olursa
         B4'te yazılan kurtarma sayfası hiç devreye girmez, o tıklama tamamen kayıp.
- [ ] **B8. Gerçek cihazda Lighthouse** — performans tablosundaki LCP/INP/CLS
      hücreleri hâlâ boş. Kısıtlı 4G profiliyle, masaüstü değil mobil.

---

### C. Reklam tarafı — B3 bitmeden başlanamaz

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

### D. İyileştirmeler — yayını engellemez

- [ ] **D1. Self-hosted font:** 2 woff2 → `public/fonts/` (klasör henüz yok),
      `global.css` içindeki hazır `@font-face` bloğunu aç, `--font-sans` başına ekle.
- [ ] **D2. Hero görseli:** AVIF + WebP yedek, `width`/`height` zorunlu,
      `fetchpriority="high"`. LCP şu an metin; görsel eklenirse LCP'yi o devralır.
      `sharp` zaten kurulu.
- [ ] **D3. Marka listesi için görünür yüzey** (A6'nın ikinci yarısı) — marka
      adları geldiğinde basılacak bir bileşen **yok**. Yazılırken "yetkili servis"
      ibaresi kullanılmayacak (yasak 2), izinli kalıp: "{Marka} ürünlerinde tamir
      ve bakım hizmeti".
- [ ] **D5. Arıza rehberine yazı ekle.** İlk 6 yazı yayında (çamaşır makinesi su
      boşaltmıyor · E10 · bulaşık makinesi su almıyor · buzdolabı soğutmuyor ·
      klima soğutmuyor · ne kadar tutar). Sıradaki adaylar: çamaşır makinesi
      sıkma yapmıyor, kurutma makinesi kurutmuyor, fırın ısınmıyor, klima su
      damlatıyor, bulaşık makinesi kurulamıyor. Yazı eklemek = `src/content/yazilar/`
      içine tek markdown dosyası; rota, sitemap ve liste kendiliğinden güncellenir.
- [ ] **D4. Yorum akışı:** A5 geldikten sonra sahibinden Google profiline yorum
      isteme akışı (iş sonrası SMS/WhatsApp şablonu). Site tarafı hazır.

---

### E. Hukuk

- [ ] **E1. `/kvkk/` metnini avukata okutun.** Kanunun istediği başlıkları
      karşılayan bir **taslak**, hukuki mütalaa değil. Özellikle saklama süresi ve
      aktarım bölümleri firmanın gerçek uygulamasına göre düzeltilmeli. Uyarı
      `kvkk.astro` dosya başındaki yorumda duruyor.
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

### F. Yayına çıkış kontrol listesi

Sırayla, hepsi işaretlenmeden yayına çıkılmaz:

1. [x] `npm run build` → `[eksik-veri]` raporunda **karar dışı sürpriz yok**
    (13 satır: 5 karar + 8 bilinen bekleyen alan). *Maddenin eski hâli "rapor
    boş" diyordu; A3 ve A4 kararlarından sonra bu hedef ulaşılamaz oldu ve
    ulaşılamaz hedef kontrol listesini işlevsizleştirir.*
2. [x] `npm run build` → `[ilce-kapisi]` uyarısı **yok** (4/4 ilçe geçiyor)
3. [x] `[seo]` uyarısı yok (title ≤60, description ≤155)
4. [x] 51 sayfa üretiliyor (19 + 32 para sayfası)
5. [x] `dist/` içinde `{PLACEHOLDER` araması **0 sonuç**
6. [x] Canonical'lar gerçek alan adını gösteriyor (`dist/` üzerinde doğrulandı)
7. [x] Kod GitHub'da, Cloudflare çekebilir (B6)
8. [ ] **Cloudflare deploy tamam, alan adı bağlı** (B7)
9. [ ] Telefon ve WhatsApp bağlantıları **gerçek cihazda** test edildi
10. [ ] Form gönderimi WhatsApp'ı doğru ön-doldurulmuş mesajla açıyor
11. [ ] Çerez bandı: ret → hiçbir olay gitmiyor; kabul → kuyruk akıyor
12. [ ] 404 sayfası canlıda **404 statüsüyle** çalışıyor (B7-2)
13. [ ] Yönlendirme tek adımda (`/x` → `/x/`, çift yönlendirme yok) (B7-1)
14. [ ] Mobil Lighthouse: LCP < 2,0 sn · INP < 200 ms · CLS < 0,1
15. [ ] KVKK metni avukat onaylı (E1). **Veri sorumlusu kimliği bilerek eksik —
    sahibinin kararı, yayını engellemiyor (A4/E2).**

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
