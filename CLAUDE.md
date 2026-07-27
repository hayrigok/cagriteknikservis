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
Etkileşim **vanilla JS**. Tailwind 4 CSS-first yapılandırma kullanıyor: renk ve font
belirteçleri `src/styles/global.css` içindeki `@theme` bloğunda, `tailwind.config.mjs` yok.

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

`{PLACEHOLDER — ...}` yalnızca not değil, işleyen bir mekanizma:

- `schema.ts` içindeki `temiz()` doldurulmamış alanları JSON-LD'den siler
- `telLink()` / `whatsappLink()` numara dolu değilse `null` döner, butonlar
  `pointer-events-none` ile pasifleşir, form submit butonu `disabled` olur
- Bileşenler dolu olmayan değerin yerine `{PLACEHOLDER}` metnini görünür şekilde basar

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
| JS (gzip) | < 40 KB | ~1,5 KB |
| Sayfa toplamı | < 500 KB | ~47 KB |

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
3. **Sahte yorum, sahte yıldız, sahte müşteri sayacı yazmayın.** Yorumlar bloğu
   Google işletme profiline link verir, metin kopyalamaz.
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

### Sahibinden beklenen veri — bunlar gelmeden site yayına çıkamaz

- [ ] **`yerelNotlar` × 4 ilçe** (`ilceler.json`) — en kritik madde. Dolmadan tek bir
      para sayfası üretilmiyor. Her ilçe için ayrı, 200+ karakter, gerçek saha bilgisi:
      hangi mahalleye ne kadar sürede gidiliyor, bina/site dokusu, o bölgede sık çıkan
      arıza, park/asansör gibi pratik kısıtlar. Şablon cümle kopyalanmayacak.
- [ ] Mahalle adları ve `ulasimDk` × 4 ilçe (`ilceler.json`)
- [ ] Ünvan, adres, vergi dairesi/no, çalışma saatleri (`firma.json`)
- [ ] Telefon + WhatsApp numarası (`firma.json`) — dolmadan CTA'lar ve form pasif
- [ ] Google işletme profili URL (`firma.json`) — yorumlar bloğu buna bağlı
- [ ] Garanti süresi (`firma.json`) — güven rozetine ve SSS'e giriyor
- [ ] Hizmet verilen marka listesi (`firma.json`)
- [ ] Fiyat aralıkları, 12 satır (`hizmetler.json`, hepsi `null`)
- [ ] "Arıza tespiti ücretli mi?" cevabı (`hizmetler.json` SSS, iki hizmette de)
- [ ] GA4 / Google Ads ölçüm kimliği (`firma.json`)
- [ ] Gerçek alan adı → `astro.config.mjs` `SITE_URL` **ve** `public/robots.txt`

### Faz 1 — eksik sayfalar

- [ ] `/kvkk/` — **form ve çerez bandı buraya link veriyor, şu an kırık.** Öncelikli.
- [ ] `/fiyatlar/`
- [ ] `/iletisim/`
- [ ] Kalan 4 hizmet (`hizmetler.json` kaydı yeterli, rota hazır):
      klima-bakimi, klima-gaz-dolumu, bulasik-makinesi-tamiri, buzdolabi-tamiri

### Faz 2 — teknik tamamlama

- [ ] Self-hosted font: 2 woff2 → `public/fonts/`, `global.css` içindeki `@font-face`
      bloğunu aç, `--font-sans` başına ekle
- [ ] Hero görseli (AVIF + WebP, `width`/`height`, `fetchpriority="high"`)
- [ ] `sitemap.xml` — `@astrojs/sitemap` kurulumu **onay gerektirir**
- [ ] `@astrojs/check` ile tip denetimi — kurulum **onay gerektirir**
- [ ] `.gitignore` + git deposu (repo henüz git değil)
- [ ] Cloudflare Pages deploy yapılandırması
- [ ] Gerçek cihazda Lighthouse ölçümü — bütçe tablosundaki boş hücreleri doldur

### Faz 3 — reklam tarafı

- [ ] Google Ads dönüşümleri: birincil = form + 60 sn üzeri çağrı, ikincil = `tel_click`
- [ ] Reklam başlıklarını sayfa H1'leriyle birebir eşleştir
- [ ] Hizmet × ilçe bazında reklam grubu kurgusu
