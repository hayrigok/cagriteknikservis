# Tasarım Sistemi — Adana Klima & Beyaz Eşya Servisi

Görsel kararların tek kaynağı. Bileşen yazmadan önce buraya bakın.

> **ui-ux-pro-max notu:** `--design-system`'i **"premium / high-end / luxury"
> kelimeleriyle çalıştırmayın.** Bu proje için iki kez yanlış yön önerdi:
> "Scroll-Triggered Storytelling / Exaggerated Minimalism" ve "Horizontal Scroll
> Journey / Liquid Glass". İkincisi hem yatay kaydırma (brief'te yasak carousel)
> hem de ⚠ Moderate-Poor performans + ⚠ kontrast uyarısı taşıyordu.
>
> Doğru kayıtlar: ürün tipi **`Home Services (Plumber/Electrician)`** →
> Flat Design + Trust & Authority, palet "Trust Blue + Safety Orange +
> Professional grey"; stil **`Flat Design (Touch-First)`** — Performance
> ⚡ Excellent, Accessibility ✓ WCAG AA.

## Yön: renk bloğu, çizgi değil

Belirleyici kural veritabanından geliyor:

> *"Color creates all hierarchy. Sections: full-width blocks alternating
> contrasting bg colors. Color-blocking sections, not borders."*

Bir önceki tasarım hiyerarşiyi saç teli kalınlığında çizgilerle kuruyordu ve
sahibi bunu **zayıf/boş** olarak okudu. Şimdi sayfa, tam genişlikte renk
alanlarının ritmi olarak kuruluyor:

```
lacivert (hero) → beyaz (rozetler) → zemin (ölçüler) → beyaz (hizmetler)
→ zemin (arızalar) → lacivert (süreç) → beyaz (yorumlar) → zemin (SSS)
→ beyaz (form) → lacivert (alt CTA) → lacivert (footer)
```

Bölüm kabı `Bolum.astro`, sayfa kabı `.kap` (max 1200 px). Elle `max-w-*`
yazılmaz.

Yasak: cam/blur, yatay kaydırma, carousel, giriş animasyonu, gölge yığını,
gradient dolgu, otomatik oynayan her şey.

## Renk — hesaplanmış, göz kararı değil

| Belirteç | Değer | Ölçülen oran |
|---|---|---|
| `lacivert-900` (koyu blok, ikon kabı) | `#0b2942` | beyaz metinle **14.89:1** |
| `lacivert-700` (link) | `#0a4a7a` | beyazda **9.24:1** |
| `lacivert-600` (ikon kabı alt) | `#0c5c96` | beyaz metinle **7.03:1** |
| `lacivert-300` (koyu zeminde soluk metin) | `#93bcd9` | lacivert-900'de **7.40:1** |
| `lacivert-200` (koyu zeminde gövde) | `#b9d4e8` | lacivert-900'de **9.68:1** |
| **`turuncu-600` (birincil CTA dolgusu)** | `#9a3412` | beyaz metinle **7.31:1** |
| `turuncu-700` (açık zeminde metin) | `#7c2d12` | beyazda **9.37:1** |
| **`turuncu-300` (koyu zeminde vurgu metni)** | `#fb923c` | lacivert-900'de **6.58:1** |
| `turuncu-400` (yalnızca çizgi/ikon) | `#ea580c` | beyazda 3.56:1 — grafik eşiği 3:1 |
| `yesil-600` (WhatsApp) | `#0e6f64` | beyaz metinle **6.04:1** |
| `metin` / `metin-soluk` | `#14212b` / `#4a5b68` | 15.23:1 / 6.54:1 |

**Tek vurgu kuralı:** turuncu. WhatsApp yeşili vurgu değil *platform rengidir*,
yalnızca WhatsApp öğelerinde geçer. Üçüncü vurgu rengi eklenmez.

Koyu blokta canlı turuncu (`turuncu-300`) kullanılabilir — 6.58:1 ile AA'yı
rahat geçiyor. Açık zeminde aynı turuncu METİN olarak kullanılmaz.

## Tipografi

Sistem yığını, indirilen byte yok. Başlıklar bilerek iri: sayfada fotoğraf
olmadığı için görsel gücün kaynağı tipografi.

| Belirteç | Boyut |
|---|---|
| `text-plaka` | 11 px — damgalı etiket (mono, uppercase, .1em) |
| `text-kucuk` | 14 px |
| `text-govde` | 16 px — taban, altına inilmez |
| `text-lead` | 18 px |
| `text-h3` | 20 px |
| `text-h2` | clamp 24 → 36 px |
| `text-h1` | clamp 32 → 56 px |
| `text-numara` | clamp 24 → 40 px (telefon, `whitespace-nowrap` ile) |
| `text-dev` | clamp 36 → 48 px (ölçü şeridi, ulaşım süresi) |

"Veri plakası" sesi: küçük etiketler sistem monospace, büyük harf, `.1em`
aralık — beyaz eşya arkasındaki damgalı model etiketinin dili. Sitenin imzası.

## Ölçü, köşe, ikon

- Aralık 4/8/16/24/32/48 sistemi. Bölüm dikey boşluğu `py-16` / `lg:py-24`.
- Köşe **yalnızca iki değer**: `rounded-sm` (6 px) ve `rounded-md` (12 px).
- **Gölge yok.** Derinlik renk ve kenarlıkla kurulur (Flat Design kuralı).
- İkonlar `Ikon.astro` içinde, 24×24 ızgara, 1.7 px kontur, yuvarlak uç.
  İkon paketi kurulmaz, emoji ikon olarak kullanılmaz.
- **İkonlar dolu renk kabında** (`bg-lacivert-900` + beyaz ikon). Kart ağırlığını
  taşıyan şey bu kap.
- Her hizmetin kendi cihaz silüeti var → `hizmetIkonu(slug)` (lib/veri.ts).

## Etkileşim

- Dokunma hedefi asgari 44 px; buton ve liste satırlarında 48 px.
- Geçiş 150 ms, **yalnızca renk**. Konum/boyut animasyonu yok.
- `prefers-reduced-motion` tüm süreleri 0.01 ms'ye indirir.
- Odak halkası turuncu 3 px, `outline-offset: 2px`, hiçbir yerde kaldırılmaz.
  Koyu blokta `turuncu-300`'e döner (`.koyu-blok` sınıfı bunu tetikler).
- Hover tek başına bilgi taşımaz — dokunmatikte hover yok.

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
