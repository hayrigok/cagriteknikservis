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
| JS (gzip) | < 40 KB | **~1,63 KB** |
| Sayfa toplamı | < 500 KB | ana sayfa **78,6 KB** (gzip 15,9 KB), hizmet sayfası ~81 KB |

**Dış kaynak isteği sıfır**: CSS tamamen inline, yazı tipi indirilmiyor, ikonlar
satır içi SVG, üçüncü taraf script yok. HTML içindeki tek `https://` referansı
canonical etiketi — o bir kaynak yüklemesi değil.

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
| `[eksik-veri]` raporundaki alan | **16** | 0 |
| Ölçümleme | **hiç çalışmıyor** (bkz. B3) | GA4 + Ads dönüşümleri |
| Commit'lenmemiş dosya | **44** | 0 |
| Son commit | `8dca6c0` (Faz 0) | — |

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
- [ ] **A4. Ünvan, adres, vergi dairesi, vergi no** (`firma.json`) — footer künyesi
      ve KVKK veri sorumlusu bölümü buna bağlı. **KVKK için hukuken zorunlu** (E2).
- [ ] **A5. Google işletme profili URL** (`firma.json`) — yorumlar bloğu tamamen
      buna bağlı, yoksa blok hiç basılmıyor. Sahte yorum alternatifi **yok** (yasak 3).
- [ ] **A6. Hizmet verilen marka listesi** (`firma.json`) — "Hangi markalara
      bakıyorsunuz?" SSS'i şu an gizli. **Ayrıca D4'e bakın: markaların görüneceği
      bir yüzey henüz yazılmadı.**
- [ ] **A7. GA4 ölçüm kimliği + Google Ads dönüşüm kimlikleri** (`firma.json`) —
      **tek başına yetmez**, B3 yapılmadan hiçbir şey ölçülmez.
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
- [ ] **B3. `gtag.js` yükleyicisi yok — ölçümleme hiç çalışmıyor.**
      `analytics.ts` Consent Mode varsayılanını kuruyor, olayları kuyruğa alıyor ve
      `dataLayer`'a yazıyor; ama **`googletagmanager.com/gtag/js` hiçbir yerde
      yüklenmiyor ve `firma.gaOlcumKimligi` kodda hiç okunmuyor.** Yani kimlik
      girilse bile tek bir olay gitmez. Yapılacak: onay verildikten **sonra**
      (önce değil) script'i enjekte eden bir yükleyici + `gtag('config', kimlik)`.
      Bütçeye etkisi ölçülüp bu dosyaya yazılmalı — gtag.js tek başına ~90 KB,
      **mevcut 1,63 KB'lik JS bütçesinin dışında ve en büyük performans riski.**
      Onay gerektirir: üçüncü taraf script (yasak 5).
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
- [ ] **B6. Commit** — **43 dosya** commit'lenmemiş, son commit `8dca6c0` (Faz 0).
      Arayüz katmanının tamamı, yayın yapılandırması (alan adı, sitemap, 404) ve
      arıza rehberi yalnızca çalışma ağacında duruyor. Deploy'dan (B7) önce
      alınmalı, aksi halde Cloudflare'e bağlanacak repoda bunların hiçbiri yok.
      (`.gitignore` var, repo git — bu maddenin eski hâli yanlıştı.)
- [ ] **B7. Cloudflare Pages deploy** — build komutu `npm run build`, çıktı `dist/`.
      Ayrıca: `trailingSlash: 'always'` olduğu için yönlendirme davranışı
      doğrulanmalı, aksi halde `/klima-servisi` → `/klima-servisi/` çift yönlendirme
      yapıp LCP'yi geciktirir.
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
- [ ] **E2. Veri sorumlusunun kimliği** (A4'e bağlı) — aydınlatma metninde
      **zorunlu unsurdur**. Ünvan/adres/vergi boş olduğu için o satırlar
      basılmıyor; sayfa şu an **hukuken eksik**, yalnızca görsel olarak düzgün.

---

### F. Yayına çıkış kontrol listesi

Sırayla, hepsi işaretlenmeden yayına çıkılmaz:

1. [ ] `npm run build` → `[eksik-veri]` raporu **boş**
2. [x] `npm run build` → `[ilce-kapisi]` uyarısı **yok** (4/4 ilçe geçiyor)
3. [ ] `[seo]` uyarısı yok (title ≤60, description ≤155)
4. [x] 51 sayfa üretiliyor (19 + 32 para sayfası)
5. [ ] `dist/` içinde `{PLACEHOLDER` araması **0 sonuç**
6. [x] Canonical'lar gerçek alan adını gösteriyor (`dist/` üzerinde doğrulandı)
7. [ ] Telefon ve WhatsApp bağlantıları gerçek cihazda test edildi
8. [ ] Form gönderimi WhatsApp'ı doğru ön-doldurulmuş mesajla açıyor
9. [ ] Çerez bandı: ret → hiçbir olay gitmiyor; kabul → kuyruk akıyor
10. [ ] Mobil Lighthouse: LCP < 2,0 sn · INP < 200 ms · CLS < 0,1
11. [ ] KVKK metni avukat onaylı (E1) ve veri sorumlusu dolu (E2)
12. [ ] 404 sayfası çalışıyor

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
