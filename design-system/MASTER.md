# Tasarım Sistemi — Gece Mavisi

Görsel kararların tek kaynağı. Bileşen yazmadan önce buraya bakın.
Belirteçler `src/styles/global.css` → `@theme`; tasarım belgesi
`docs/superpowers/specs/2026-10-02-gece-mavisi-tasarim-design.md`.

## Yön ve neden (02.10.2026, sahibinin seçimi)

Sahibi önceki görünümü **"kalitesiz"** buldu ve dört sorunun dördünü de işaretledi.
Ekran görüntülerinde bulunan kök nedenler ve karşılıkları:

| Sorun | Kök neden | Gece Mavisi'nde |
|---|---|---|
| Renkler soluk | CTA `#9a3412` kiremit-kahve, etiketler kahverengi | Parlak turuncu CTA (`#ff7a1a`) + lacivert yazı |
| Yazılar sıradan | Sistem yazı tipi, monospace BÜYÜK HARF "plaka" etiketleri kod gibi | Plus Jakarta Sans, başlıklar 800, sade `etiket` |
| Kutular düz ve boş | Her şey aynı 1 px çizgili beyaz kutu, aynı koyu ikon karesi | Rolüne göre gölgeli kartlar, açık mavi ikon kapları |
| Telefonda dağınık | Ana sayfa 390 px'te 13.668 px; 40 satırlık ilçe listesi | 12.093 px; ilçeler hizmet başına tek satır hap |

Üç yön telefon önizlemesiyle gösterildi, **A · Gece Mavisi** seçildi.

> **ui-ux-pro-max notu:** `--design-system`'i **"premium / high-end / luxury"
> kelimeleriyle çalıştırmayın.** Bu proje için iki kez yanlış yön önerdi
> (scroll storytelling; yatay kaydırma + Liquid Glass — ikincisi brief'te yasak
> carousel ve ⚠ performans/kontrast uyarısı taşıyordu). İşe yarayan sorgu:
> `"home services appliance repair local emergency trust conversion"` →
> **Trust & Authority + Conversion**.

## Düzen: renk bloğu + gölgeli kart

Bölümler hâlâ **tam genişlikte renk bloklarıyla** ayrılır (lacivert → beyaz →
zemin → lacivert). Değişen şey kartlar: 02.10.2026'ya kadar "gölge yok" kuralı
vardı, sahibi düz kutuları "boş" bulduğu için kalktı. Gölge **rolüne göre**
basılır, her kutuya değil.

Bölüm kabı `Bolum.astro` (mobilde `py-12`, sm `py-16`, lg `py-24`), sayfa kabı
`.kap` (max 1200 px). Elle `max-w-*` yazılmaz.

Yasak: cam/blur efekti, yatay kaydırma, carousel, giriş animasyonu, kaydırınca
beliren öğe, otomatik oynayan her şey. Gradient **yalnızca** `isik` yardımcı
sınıfıyla (aşağıda).

## Renk — hesaplanmış, göz kararı değil

Oranlar `kontrast.py` ile hesaplandı (02.10.2026). Sınır: metin 4,5:1, form
alanı kenarı 3:1.

| Belirteç | Değer | Rol | Ölçülen oran |
|---|---|---|---|
| `lacivert-900` | `#0a1f44` | Koyu bloklar, başlıklar | beyaz metinle **16.25** |
| `lacivert-800` | `#13306a` | Koyu blokta hover | beyaz metinle **12.66** |
| `lacivert-700` | `#1b3f86` | Yalnızca `isik` lekesi | lekenin en açık yerinde lacivert-300 **5.29**, turuncu-300 **5.66** |
| `lacivert-400` | `#7a8ba8` | Form alanı kenarı | beyazda **3.45** |
| `lacivert-300` | `#a9bedf` | Koyu zeminde soluk metin | lacivert-900'de **8.60** |
| `lacivert-200` | `#c9d6ea` | Koyu zeminde gövde | lacivert-900'de **11.06** |
| `lacivert-100` | `#dce4f0` | Açık zeminde çizgi | — |
| `lacivert-50` | `#eef3fb` | Açık zeminde hover | — |
| **`kobalt-600`** | `#1d4ed8` | Bağlantı, ikon, etiket, odak halkası | beyazda **6.70**, zeminde **6.13** |
| `kobalt-700` | `#1e40af` | Bağlantı hover | beyazda **8.72** |
| `kobalt-50` | `#e8effd` | İkon kabı | kobalt ikon **5.81** |
| **`turuncu-500`** | `#ff7a1a` | **Yalnızca arama CTA dolgusu** | lacivert-900 metin **6.23** |
| `turuncu-400` | `#ff8f3f` | CTA hover | lacivert metin **7.16** |
| `turuncu-300` | `#ffb27a` | Koyu zeminde vurgu metni / ikon | lacivert-900'de **9.21** |
| `turuncu-700` | `#b4410f` | Form hata metni | zeminde **5.19** |
| `yesil-600` / `yesil-700` | `#0e7a4f` / `#0b6341` | WhatsApp (platform rengi) | beyazla **5.36** / **7.30** |
| `durum` / `durum-metin` | `#22c55e` / `#bbf7d0` | Yalnızca açık/kapalı çipi | lacivert-900'de **7.13** / **13.41** |
| `zemin` | `#f2f5fa` | Açık blok | — |
| `metin` / `metin-soluk` | `#0f1b2d` / `#4b5a70` | Gövde | zeminde **15.82** / **6.42** |

**Tek vurgu kuralı:** turuncu **yalnızca arama eylemine** aittir — büyük
numara düğmesi, üst çubuktaki "Ara", mobil alt çubuk, yan düğme — ve koyu
zeminde küçük vurgu (`turuncu-300`). Turuncu düğmenin yazısı **lacivert**,
beyaz değil (beyaz/turuncu-500 = 2.61, okunmaz). Açık zemindeki ikon, etiket ve
bağlantıların rengi **kobalt**. "Ve diğer bütün markalar" hapı da kobalt.

**Odak halkası:** açık zeminde `kobalt-600` 3 px (turuncu-500 beyazda 2.61 —
halka için gereken 3:1'in altında); `.koyu-blok` içinde `turuncu-300`.

## Tipografi

**Plus Jakarta Sans**, değişken 400–800, SIL OFL 1.1 (`public/fonts/OFL.txt`).
**Kendi alan adımızdan** iner (Google'a istek yok): `latin` 27 KB + `latin-ext`
22 KB woff2 — ğ ı ş İ `latin-ext`'te olduğu için Türkçe sayfa ikisini de ister.

- `font-display: swap`, **preload YOK** (ölçüldü, gerekçe BaseLayout'ta:
  preload ilk boyamayı yazı tipine bekletiyordu).
- **Kayma önlemi:** yedek yüz `Jakarta Yedek` = yerel Arial + `size-adjust` /
  `ascent-override` / `descent-override`. Değerler headless Chrome'da aynı
  Türkçe metnin iki yazı tipindeki genişliği ölçülerek bulundu (400: 101.14 %,
  700–800: 100.13 %). Ölçülen kayma: CLS **0,013** (bütçe 0,1).

| Belirteç | Boyut |
|---|---|
| `text-etiket` | 13 px — bölüm etiketi, künye alan adı (sınıf: `etiket`, 600, normal harf) |
| `text-kucuk` | 14 px |
| `text-govde` | 16 px — taban, altına inilmez |
| `text-lead` | 18 px |
| `text-h3` | 20 px |
| `text-h2` | clamp 24 → 36 px |
| `text-h1` | clamp 32 → 56 px |
| `text-numara` | clamp 24 → 40 px (telefon, `whitespace-nowrap`) |
| `text-dev` | clamp 36 → 48 px (ölçü şeridi) |

Başlıklar `font-extrabold tracking-tight`. Eski monospace "plaka" sistemi
**kaldırıldı** — kod gibi okunuyordu.

## Köşe, gölge, ışık, ikon

- **Köşe üç değer:** `rounded-sm` 10 px (düğme, alan, ikon kabı) · `rounded-md`
  16 px (kart) · `rounded-lg` 20 px (büyük panel, form kartı, büyük arama düğmesi).
- **Gölge dört rol:** `shadow-kart` (tıklanan / içerik kartı) · `shadow-kart-ust`
  (hover, açık SSS) · `shadow-cta` (yalnızca büyük arama düğmesi) ·
  `shadow-ust-cubuk` (sabit üst çubuk).
- **Işık:** `isik` = sağ üstte tek yumuşak radial-gradient (lacivert-700 →
  saydam). Saf CSS, sıfır byte. Yalnızca hero, alt CTA, form yan paneli,
  teşekkür sayfası ve yasal sayfaların başlığında.
- İkonlar `Ikon.astro` içinde, 24×24, 1.7 px kontur. Paket kurulmaz, emoji
  ikon olmaz. Açık zeminde `bg-kobalt-50` + kobalt ikon; koyu zeminde
  `bg-white/10` + turuncu-300.
- Her hizmetin kendi cihaz silüeti var → `hizmetIkonu(slug)` (lib/veri.ts).

## Bileşen kuralları

- **Hizmet kartı yatay satırdır:** ikon kabı · ad + özet · yuvarlak ok. İlçe adı
  satırı **yok** (bağlantı değildi, her kartta aynı dört adı tekrarlıyordu).
- **`HizmetIzgarasi`** sütun sayısını kart sayısından seçer: 10 → 2 sütun (5+5),
  9 → lg'de 3 sütun. Son satırda tek başına kart kalmaz.
- **Açık/kapalı çipi (Hero):** sabit genişlikte (17.5rem) ve betik çalışana kadar
  `invisible`; metin sonradan yazıldığı için genişlik değişseydi H1 kayardı.
  Saat metni `Her gün HH:MM–HH:MM` kalıbında değilse çip hiç basılmaz.
  Mantık `lib/acikDurum.ts`, Türkiye saatiyle; `npm test`.
- **Form alanı kenarı `lacivert-400`** (3.45:1). Önceki açık çizgi alan sınırı
  için gereken orana ulaşmıyordu.
- **Bölgeler matrisi (ana sayfa):** hizmet başına bir kart + 4 ilçe hapı
  (≥ 44 px). Bağlantı sayısı ve hedefleri eskisiyle aynı (40).

## Etkileşim

- Dokunma hedefi asgari 44 px; buton ve liste satırlarında 48 px.
- Geçiş 150 ms, **yalnızca renk ve gölge**. Konum/boyut animasyonu yok
  (SSS okunun dönmesi tek istisna, `prefers-reduced-motion`'da kapanır).
- `prefers-reduced-motion` tüm süreleri 0.01 ms'ye indirir.
- Hover tek başına bilgi taşımaz — dokunmatikte hover yok.
- Masaüstü menü bağlantıları `whitespace-nowrap`: yeni yazı tipinde
  "Tüm hizmetler" iki satıra kırılıyordu (üst çubuk her genişlikte 64 px, ölçüldü).

## Uydurmama sözleşmesi

Görsel zenginlik **uydurma veriyle** üretilmez. `OlcuSeridi.astro` içindeki her
rakam ya veriden türer (hizmet sayısı, ilçe sayısı) ya da sahibinin doğruladığı
bir bilgidir (2 saat, çalışma saatleri). **Sahte yorum, sahte yıldız, sahte
müşteri sayacı yasak** — doğrulanamaz sayı ilk telefonda tartışmaya döner.

### Eksik veri nasıl görünür: hiç görünmez

Bilinmeyen değer **ekrana basılmaz**, ilgili öğe tamamen kaldırılır
(`lib/veri.ts` → `deger()`). Ziyaretçi `{PLACEHOLDER}` metni görmez; eksikler
build çıktısındaki `[eksik-veri]` raporunda listelenir. Tasarım tarafındaki
karşılığı: **her blok eksik veriyle de ayakta durmalı.**

- Izgaralar sabit sütun sayısına bağlanmaz — `GuvenRozetleri` 3→2, `OlcuSeridi`
  4→3 sütuna düşebilir, boş hücre bırakılmaz.
- İki sütunlu düzenlerde yan sütun düşerse ana sütun tam genişliğe yayılır
  (`Hero` künye paneli, `IlceBlogu` ölçü sütunu).
- Bir bloğun tek içeriği eksikse blok hiç basılmaz (`Yorumlar`).
- Fiyat tablosu boşsa **tabloyu göstermeyip işlem listesine döner** — boş bir
  sütun ziyaretçiye hiçbir şey söylemez, işlem adları söyler.

Yeni bileşen yazarken kuralı tersinden test edin: *bütün veriyi silsem bu blok
nasıl görünür?* Cevap "yarım" ise düzen yanlıştır.
