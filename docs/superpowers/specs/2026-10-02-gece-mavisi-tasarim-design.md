# Gece Mavisi — görsel yenileme tasarımı

**Tarih:** 02.10.2026 · **Karar veren:** sahibi · **Durum:** onaylandı, uygulama planı bekliyor

## Neden

Sahibi siteyi "kalitesiz" buldu ve dört sorunun dördünü de işaretledi: renkler,
yazılar, düz ve boş kutular, telefonda dağınıklık. Canlı sitenin 390 ve 1280 px
ekran görüntülerinde görülen somut sebepler:

| Sorun | Kök neden |
|---|---|
| Renkler eski / soluk | Ana CTA `#9a3412` turuncu değil kiremit-kahve; etiketler `#7c2d12` kahverengi |
| Yazılar sıradan | Sistem yazı tipi (Windows'ta Segoe UI); monospace BÜYÜK HARF "plaka" etiketleri kod gibi duruyor |
| Kutular düz ve boş | Her şey aynı 1 px çizgili beyaz kutu, aynı koyu ikon karesi; hizmet kartlarında tekrarlanan ilçe adları gürültü |
| Telefonda dağınık | Ana sayfa 390 px'te 13.668 px boyunda; "Bölgeler" bölümü 40 satır alt alta; çerez bandı ekranın üçte birini kaplıyor |

Üç yön sahibine telefon önizlemesiyle gösterildi
(https://claude.ai/artifact/EmPRthpypnLZEzViz7YZtS), **A · Gece Mavisi** seçildi.

## Değişmeyenler — bu iş bunlara dokunmaz

- **Blok sırası** (para sayfası iskeleti) ve **metinler**. İstisnalar aşağıda tek tek yazılı.
- **Dönüşüm yüzeyleri:** her sayfada `tel:` / `wa.me` bağlantı sayısı, `data-olay` /
  `data-konum` nitelikleri, formun tek kopyası (`f-ad` ×1), form betiği.
- **SEO:** title, description, H1, canonical, JSON-LD, iç bağlantıların tamamı.
- **Yasaklar:** fotoğraf yok (D2), slider / carousel / giriş animasyonu yok (yasak 4),
  üçüncü taraf script veya npm paketi yok (yasak 5).
- **Erişilebilirlik:** dokunma hedefi ≥ 44 px, metin kontrastı ≥ 4.5:1, odak halkası her yerde.
- **Hız bütçesi:** LCP < 2,0 sn, CLS < 0,1, sayfa < 500 KB, JS < 40 KB.

## 1. Renk belirteçleri

Hepsi WCAG oranı hesaplanarak seçildi (`kontrast.py`, 02.10.2026).

| Belirteç | Değer | Rol | Ölçülen oran |
|---|---|---|---|
| `lacivert-900` | `#0a1f44` | Koyu bloklar, başlıklar | beyaz metinle **16.25** |
| `lacivert-800` | `#13306a` | Koyu blokta hover / ikinci zemin | beyaz metinle **12.66** |
| `lacivert-700` | `#1b3f86` | Hero'daki ışık lekesi (yalnızca zemin) | — |
| `lacivert-400` (yeni) | `#7a8ba8` | Form alanı kenarlığı | beyazda **3.45** (alan sınırı için gereken 3:1) |
| `lacivert-300` | `#a9bedf` | Koyu zeminde soluk metin | lacivert-900'de **8.60** |
| `lacivert-200` | `#c9d6ea` | Koyu zeminde gövde metni | lacivert-900'de **11.06** |
| `lacivert-100` | `#dce4f0` | Açık zeminde çizgi | — |
| `lacivert-50` | `#eef3fb` | Açık zeminde hover | metin **15.51**, kobalt **6.02** |
| **`kobalt-600`** (yeni) | `#1d4ed8` | Bağlantı, ikon, açık zeminde odak halkası | beyazda **6.70**, zeminde **6.13** |
| `kobalt-700` (yeni) | `#1e40af` | Bağlantı hover | beyazda **8.72** |
| `kobalt-50` (yeni) | `#e8effd` | İkon kabı | kobalt ikon **5.81** |
| **`turuncu-500`** (yeni) | `#ff7a1a` | **Yalnızca arama CTA dolgusu**, üstünde lacivert-900 metin | **6.23** |
| `turuncu-400` | `#ff8f3f` | CTA hover | lacivert metin **7.16** |
| `turuncu-300` | `#ffb27a` | Koyu zeminde vurgu metni / ikon | lacivert-900'de **9.21** |
| `turuncu-700` | `#b4410f` | Açık zeminde vurgu ikonu / metni (seyrek) | beyazda **5.67**, zeminde **5.19** |
| `yesil-600` | `#0e7a4f` | WhatsApp dolgusu (platform rengi) | beyaz metinle **5.36** |
| `yesil-700` | `#0b6341` | WhatsApp hover | **7.30** |
| `durum` (yeni) | `#22c55e` | "Şu an açığız" noktası (grafik) | lacivert-900'de **7.13** |
| `zemin` | `#f2f5fa` | Açık blok | — |
| `metin` / `metin-soluk` | `#0f1b2d` / `#4b5a70` | Gövde | zeminde **15.82** / **6.42** |

**Kaldırılan:** `turuncu-600` (`#9a3412`). Beyaz metinli turuncu düğme artık yok:
CTA'lar `bg-turuncu-500 text-lacivert-900`. Tailwind bilinmeyen sınıfı sessizce
yutar; bu yüzden işin sonunda `turuncu-600` / `lacivert-600` araması **0** olmalı.

**Tek vurgu kuralı sürüyor:** turuncu yalnızca arama eylemlerinde (CTA dolgusu,
mobil bar, "Ara" düğmesi) ve koyu zeminde küçük vurgu olarak. Açık zemindeki ikon
ve bağlantıların rengi **kobalt**. Yeşil WhatsApp'a, `durum` yeşili yalnızca açık/kapalı
noktasına ait.

**Odak halkası:** açık zeminde `kobalt-600` (turuncu-500 beyazda 2.61 — halka için
gereken 3:1'in altında), koyu blokta `turuncu-300`.

## 2. Yazı

- **Plus Jakarta Sans**, değişken ağırlık (400–800), SIL OFL 1.1.
- **Kendi sunucumuzdan** (`public/fonts/`): Google'a istek yok — sıfır-dış-istek ve
  KVKK kuralı korunuyor. Dosyalar Google Fonts'un `latin` (26 KB) ve `latin-ext`
  (21 KB) woff2 dilimleri; ğ ı ş İ `latin-ext`'te olduğu için **ikisi de gerekli**.
  Lisans metni `public/fonts/OFL.txt`.
- **Yükleme:** `font-display: swap` + iki dosya için `<link rel="preload">`. Metin
  önce yedek yazı tipiyle **hemen** boyanır (LCP beklemez), font gelince yer değiştirir.
- **Kayma önlemi:** yedek yüz `Jakarta Yedek` = `local('Arial')` + `size-adjust` /
  `ascent-override` / `descent-override`. Değerler tahminle değil, headless Chrome'da
  iki yazı tipinin aynı Türkçe örnek metindeki genişliği ölçülerek ve fontun kendi
  `hhea` değerlerinden hesaplanır. Hedef: CLS **0,000** kalsın.
- **Ölçek** aynı belirteçlerle (`text-h1` … `text-kucuk`); başlıklar `font-extrabold`
  (800), `tracking-tight`. Gövde 16 px tabanı korunur.
- **`plaka` yardımcı sınıfı kalkar**, yerine **`etiket`** gelir: sans, 13 px,
  600 ağırlık, normal harf, hafif aralık. Monospace yığını (`--font-plaka`) silinir.
  Bölüm etiketleri açık zeminde `kobalt-600`, koyu zeminde `turuncu-300`.

**D1 kararı tersine döner** (sahibi, 02.10.2026): "self-hosted font yapmayın"
tavsiyesinin gerekçesi LCP'ydi; `swap` + metrik eşlemeli yedekle LCP ilk boyamada
kalır. **Uygulamadan sonra B8 yöntemiyle ölçülür ve CLAUDE.md'ye yazılır.**

## 3. Yüzey, köşe, gölge, hareket

- **Köşe:** `--radius-sm` 6 → **10 px** (düğme, giriş alanı, ikon kabı),
  `--radius-md` 12 → **16 px** (kart), yeni `--radius-lg` **20 px** (büyük panel,
  form kartı). Mevcut `rounded-sm` / `rounded-md` sınıfları kendiliğinden güncellenir.
- **Gölge** (eski "gölge yok" kuralı kalkar; sahibi düz kutuları "boş" buldu):
  - `shadow-kart`: `0 1px 2px rgb(10 31 68 / .05), 0 6px 20px -12px rgb(10 31 68 / .18)`
  - `shadow-kart-ust` (hover): `0 2px 4px rgb(10 31 68 / .06), 0 14px 32px -14px rgb(10 31 68 / .28)`
  - `shadow-cta`: `0 10px 28px -10px rgb(255 122 26 / .55)` — yalnızca büyük arama düğmesi
  - Gölge **rolüne göre**: tıklanan kart, form kartı, büyük CTA. Her kutuya basılmaz.
- **Gradient:** yalnızca hero'da tek bir yumuşak ışık lekesi
  (`radial-gradient` lacivert-700 → saydam, sağ üst). Başka yerde yok.
- **Hareket:** yalnızca renk ve gölge geçişi, 150 ms. Konum/boyut animasyonu,
  kaydırınca beliren öğe, giriş animasyonu **yok**. `prefers-reduced-motion` korunur.

## 4. Bileşenler

| Bileşen | Değişiklik |
|---|---|
| `global.css` | Belirteçler (§1–3), `@font-face` ×3, `etiket` sınıfı, odak halkası |
| `BaseLayout` | İki font `preload` bağlantısı |
| `StickyUstCubuk` | Beyaz zemin + ince gölge; logo kabı lacivert, ikon turuncu-300; "Ara" `turuncu-500` + lacivert metin; menü bağlantıları `metin-soluk` → hover kobalt |
| `Hero` | Işık lekeli lacivert; **açık/kapalı çipi** (§5); künye yarı saydam tek kart (masaüstünde sağda) |
| `AraButonu` | Büyük: turuncu-500, lacivert metin, `rounded-lg`, `shadow-cta`, numara 800 ağırlık. WhatsApp: koyuda beyaz çizgili, açıkta dolu yeşil. Normal boy: aynı renk kuralı |
| `IletisimFormu` | Beyaz kart `rounded-lg shadow-kart`; alanlar 52 px, 1.5 px çizgi, odakta kobalt; gönder düğmesi yeşil; masaüstü yan paneli lacivert kalır, numara turuncu-300 |
| `GuvenRozetleri` | İkon kabı `kobalt-50` + kobalt ikon |
| `OlcuSeridi` | Rakam lacivert-900, birim kobalt-600 |
| `Bolum` | Etiket `etiket` sınıfı; başlık 800 ağırlık; mobilde dikey boşluk `py-16` → `py-12` (telefonda sayfa boyu kısalır) |
| `HizmetKarti` | **Yatay satır kart:** ikon kabı · ad + özet · yuvarlak ok. `shadow-kart`, hover'da `shadow-kart-ust` + kobalt çizgi. **İlçe adı satırı kalkar** (bağlantı değil, düz metindi; ilçe bağlantıları "Bölgeler" bölümünde duruyor) |
| **`HizmetIzgarasi`** (yeni) | Dört sayfadaki (ana sayfa, hub "Diğer hizmetler", iletişim, 404) kart ızgarası tek yerde. Sütun kart sayısına göre: 10 → 2 sütun (5+5), 9 → genişte 3 sütun (3+3+3); son satırda yetim kart yok |
| `ArizaCozum` | Kart `shadow-kart`; ikon `kobalt-50` kabında |
| `Markalar` | Marka hapları beyaz + çizgi; "ve diğer bütün markalar" hapı **kobalt-600 + beyaz metin** (turuncu yalnızca arama eylemine ait; A6 kapsayıcılık kuralının görsel hâli korunur) |
| `Surec` | Lacivert blok; adım numarası turuncu-500 daire, lacivert metin (adımlar gerçekten sıralı — numara kalır) |
| `IlceBlogu` | Not kartı `shadow-kart`; sol turuncu kenar çubuğu kalkar |
| `Yorumlar` | Tek kart: başlık + açıklama + "Google yorumlarımızı okuyun" düğmesi. **Yıldız, puan, yorum sayısı basılmaz** (yasak 3) |
| `Sss` | Aralıklı ayrı kartlar (`rounded-md`), açılır ok kobalt |
| `KomsuIlceler`, `FiyatTablosu` | Renk geçişi (turuncu-600 → kobalt-600 / turuncu-700) |
| `AltCta`, `Footer` | Lacivert; footer başlıkları `etiket`, bağlantılar lacivert-200 → hover beyaz |
| `MobilBar` | Ara: turuncu-500 + lacivert metin; WhatsApp yeşil-600 |
| `YanButonlar` | Aynı renk kuralı |
| `CerezBandi` | Mobilde daha kısa (küçük metin, iki düğme yan yana tek satırda). **Hata düzeltmesi:** bant mobilde alttan 3,5 rem beyaz dolguyla açılıyordu ve z-50 olduğu için `MobilBar`'ın "Hemen Ara" çubuğunu **örtüyordu** — ziyaretçi çerez kararı verene kadar alt çubuk görünmüyordu (02.10.2026 ekran görüntüsünde görüldü). Bant artık çubuğun **üstünde** duruyor (`bottom`, dolgu değil). Onay mantığı değişmez |
| Sayfalar | Eski belirteç sınıfları yenileriyle değişir; `index.astro` → Bölgeler matrisi (§6) |
| `public/favicon.svg`, `tools/og-uret.mjs` | Yeni lacivert + turuncu değerleri; `og.png` betikle yeniden üretilir |

## 5. Açık/kapalı çipi (imza öğesi)

Aramadan önce sorulan ilk soruya ("şu an açık mısınız?") cevap verir.

- **Veri:** `firma.calismaSaatleri` build sırasında `HH:MM–HH:MM` kalıbıyla ayrıştırılır.
  Metin "Her gün" ile başlamıyorsa ya da kalıp tutmazsa **canlı çip basılmaz**,
  yalnızca düz saat metni kalır — `{PLACEHOLDER}` sözleşmesinin aynısı: emin
  olunmayan bilgi ekrana iddia olarak çıkmaz.
- **İlk boyama:** çip yeri **sabit genişlikte ayrılmış ve görünmez** (`invisible`); betik durumu yazınca görünür olur. Genişlik sabit olduğu için metin gelince hiçbir şey kaymaz (CLS 0). JS kapalıysa çip görünmez kalır — saat bilgisi künyede zaten yazılı.
- **JS sonrası:** `Intl` ile **Europe/Istanbul** saati okunur (ziyaretçinin
  telefonunun saat dilimi değil). Açık: yeşil nokta + "Şu an açığız · kapanış 23:00".
  Kapalı: gri nokta + "Şu an kapalıyız · açılış 08:00". Gece yarısını aşan saat
  aralığı da doğru hesaplanır. Dakikada bir yenilenir.
- Ek gerektirmeyen kalıp bilerek seçildi ("23:00'e" / "20:00'ye" gibi saat ekleri
  saat değişince sessizce yanlışlaşır).
- Bütçe: ~0,3 KB JS, yeni istek yok, çip tek satır olduğu için düzen kayması yok.

## 6. Ana sayfa "Bölgeler" matrisi

40 satır (10 hizmet × 4 ilçe, alt alta) yerine **her hizmet bir satır:** ikon + hizmet
adı, yanında 4 ilçe hapı. Her hap mevcut `/{hizmet}/{ilce}/` bağlantısının aynısı —
**bağlantı sayısı ve hedefleri değişmez**, yalnızca dizilim. Hap ≥ 44 px yükseklik.
Masaüstünde iki sütun.

## 7. Metin değişiklikleri (tam liste)

1. Bölüm ve künye etiketleri BÜYÜK HARF yerine normal harf (görsel; kaynak metin aynı).
2. `HizmetKarti` içindeki ilçe adı satırı kaldırılır.
3. Hero'ya açık/kapalı çipi eklenir (§5).

Başka metin değişmez.

## 8. Doğrulama — "bitti" demeden önce

1. `npm run build` temiz; `[ilce-kapisi]` ve `[seo]` uyarısı yok, sayfa sayısı **74**.
2. Kaynakta `turuncu-600`, `lacivert-600`, `plaka`, `font-plaka` araması **0**.
3. **5 sayfa × 6 genişlik** (320 · 390 · 768 · 1024 · 1280 · 1440), CDP ile gerçek
   viewport: yatay taşma **0**, ekran görüntüsüyle göz kontrolü.
4. **Dönüşüm yüzeyleri — değişiklik öncesiyle birebir:** sayfa başına `tel:` · `wa.me`
   · `data-olay="tel_click"` · `data-olay="whatsapp_click"` · `f-ad` sayıları.
5. Kontrast: yeni metin/zemin çiftlerinin hepsi ≥ 4.5:1 (büyük metin ≥ 3:1), hesapla.
6. **B8 yöntemiyle hız** (4× CPU, kısıtlı 4G, her ölçümde sıfırdan Chrome, TTFB
   kendini denetleme kuralı): ana sayfa + para sayfası LCP < 2,0 sn, CLS < 0,1.
   Önceki değerlerle (0,54–0,91 sn) karşılaştırılıp CLAUDE.md'ye yazılır.
7. Sayfa ağırlığı ve JS gzip ölçülür.
8. Açık/kapalı çipi: saat sahte değerlere ayarlanarak (07:59 · 08:00 · 22:59 · 23:00)
   dört durum doğrulanır.

## 9. Belgeler

- `design-system/MASTER.md` yeniden yazılır (bu belgenin kalıcı hâli).
- `CLAUDE.md`: "Tasarım sistemi" özeti, D1 maddesi, performans tablosu, B8 notu.
- Canlıya alma **sahibinin ayrı onayıyla** (push politikası) ve sonrasında dört
  yüzey gerçek tarayıcıyla canlıdan sayılır.
