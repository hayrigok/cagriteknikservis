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
| 1 | **Görünmek** | Ads (gün) · Haritalar (hafta) · organik (ay) | Ads kapalı · **Haritalar 18 yorumla çalışıyor** · organik yeni |
| 2 | **Tıklanmak** | Başlık/açıklama · yıldız · mesafe | Başlıklar benzersiz ✔ · **yıldız var** (18 yorum) ✔ |
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
**`yan_buton` yalnızca 1344 px ve üstünde görünür** (02.10.2026'ya kadar
md idi): mobilde `MobilBar` zaten aynı iki eylemi tam genişlikte basıyor, üstte de
`StickyUstCubuk`'un Ara düğmesi var; üçüncü kopya küçük ekranda içeriği kapatır.
768–1343 px arasında düğme sütunu içerikle kenar arasındaki boşluğa sığmıyor,
hero künyesinin ve form panelinin üstüne biniyordu; hesap `YanButonlar.astro`
başında. O aralıkta tek sabit arama yüzeyi üst çubuktaki numaralı düğme.
Reklam raporlarında hangi yüzeyin çalıştığını bu ayrımla göreceksiniz.

Google Ads tarafında birincil dönüşüm form + 60 sn üzeri çağrı olacak, `tel_click`
ikincil kalacak — aksi halde akıllı teklif yanlış tıklamalara optimize eder.

#### gtag.js KOŞULSUZ yükleniyor — 12.08.2026, sahibinin kararı

**Önceki kural tersine çevrildi.** 29.07–12.08 arası script yalnızca onay
verildikten sonra enjekte ediliyordu ve bu, sıfır-dış-istek özelliğinin
temeliydi. Sahibi 12.08.2026'da bilerek değiştirdi.

**Sebep:** Google Ads'in etiket doğrulaması ("Bağlantıyı test et") sayfayı
onay vermeden tarıyor, gizli etiketi göremiyor ve *"Web sitenizde Google
Analytics bulunamadı"* diyordu. Bu uyarı **kalıcıydı** — robot hiçbir zaman
onay vermeyeceği için hiçbir zaman geçmeyecekti — ve dönüşüm kurulumu
sihirbazı bu yüzden tamamlanamıyordu. Sahibine bedeli tek tek anlatıldı
(dış istek sıfır olmaktan çıkar · reddeden ziyaretçiye de ~90 KB iner ·
`/kvkk/` metni değişmeli), **"yap" dedi.**

**Onay HÂLÂ bir şey yapıyor — "kod iniyor" ile "ölçüm yapılıyor" ayrı:**

| Onay | gtag.js iner | Çerez yazılır | Tıklama olayı gider |
|---|---|---|---|
| Karar verilmemiş | ✅ | ❌ | ❌ (kuyrukta) |
| **Reddedildi** | ✅ | ❌ | ❌ (kuyruk atılır) |
| Kabul edildi | ✅ | ✅ | ✅ |

Uygulanan şey Google'ın standart Consent Mode kurulumu: script yüklenir,
izinler `denied` başlar, kabulde `update` ile açılır. **Sıra bozulmamalı** —
`consent default` → (varsa) `consent update` → script. Ters sırada ilk istek
yanlış izin durumunda gider.

**Canlıda ölçülerek doğrulandı (12.08.2026, headless Chrome, 5/5):**
onay verilmeden gtag.js iniyor ✔ · onay verilmeden **çerez yazılmıyor** ✔ ·
`dataLayer`'ın ilk kaydı `consent default` + dört izin de `denied` ✔ ·
kabul sonrası `_ga` çerezi yazılıyor ✔ · kabul sonrası `tel_click` gidiyor ✔.

**`/kvkk/` metni aynı anda düzeltildi.** Eski cümle ("ölçümleme çerezleri
yalnızca siz onay verirseniz çalışır") teknik olarak hâlâ doğru ama eksikti;
yeni metin kodun yüklendiğini, çerez yazılmadığını ve Google'a yalnızca
kimliksiz bir sayfa kaydı ulaştığını açıkça söylüyor. **İkisini birlikte
değiştirin** — biri değişip diğeri kalırsa site yanlış söz vermiş olur.

**Geri alınırsa** `analytics.ts` → `baglat()` içindeki koşulsuz `gtagYukle()`
çağrısı yeniden `onayDurumu() === 'kabul'` dalına taşınır ve `/kvkk/` metni
eski hâline döner.

**Ölçülerek doğrulandı (11.08.2026, canlı site, headless Chrome):**

| Durum | gtag.js | GA4 veri isteği |
|---|---|---|
| Onay verilmeden | **0** | **0** |
| Kabul edildikten sonra | 1 | **2** (`/g/collect`, `tid=G-818Z2EG00L`) |

Dört tıklama yüzeyi tek tek denendi: `tel_click(hero)` · `whatsapp_click(hero)`
· `tel_click(footer)` · `tel_click(mobil_bar)` — **dördü de doğru `konum`
parametresiyle GA4'e gitti.**

**Uyarıyı susturmanın tek yolu snippet'i koşulsuz yüklemek olurdu; YAPILMAZ.**
Reddeden ziyaretçiye de gtag.js iner, `/kvkk/` metnindeki söz yanlışlanır,
sıfır-dış-istek özelliği ölür. Doğrulama sihirbazdan değil **GA4 → Raporlar →
Gerçek zamanlı** ekranından yapılır.

**Bu olayları test ederken tuzak:** `data-olay` taşıyan öğeler gerçek
bağlantıdır (`tel:` / `wa.me`). Tıklatınca sayfa **gerçekten gidiyor** ve
sonraki bütün ölçümler başka bir belgede yapılıyor — ilk denemede tam bu
yüzden "`tel_click` gitmiyor" diye **yanlış** sonuç alındı. Doğru yöntem:
yakalama aşamasında `preventDefault()` eklemek; gezinme iptal olur, sitenin
kendi dinleyicisi yine çalışır.

### Ücretli tıklama sayacı — `worker/index.js` (14.08.2026)

**Sitenin önünde artık bir Cloudflare Worker var.** Uzun süre yalnızca statik
dosya sunuluyordu ("sıfır sunucu mantığı"); bu değişti ve gerekçesi ticari:

> **Google Ads, tıklayanların IP adresini hiçbir raporda göstermiyor.** IP
> hariç tutma kutusu var ama engellenecek adresi *zaten biliyor olmanız*
> gerekiyor. Sahibi sahte tıklama şüphesini dile getirdi, elimizde ölçecek
> hiçbir şey yoktu.

**Sayılan şey sayfa ziyareti DEĞİL, ücretli tıklamadır.** Ayrım mekanizmanın
merkezi: aynı IP'den siteye birkaç kez girmek şüpheli değil, **iyidir** —
kararsız müşteri geri gelir. Şüpheli olan, her biri para yakan ayrı reklam
tıklamalarıdır. Google reklamdan geleni `?gclid=` ile gönderdiği için ikisi
ayırt edilebiliyor. **Bu koşulu gevşetmeyin:** gclid'siz istekleri saymaya
başlarsanız sayaç gerçek müşterileri işaretler ve liste çöpe döner.

**Pencere 7 gün, gün sınırı yok.** İlk tasarım "aynı gün 3 tıklama" arıyordu
ve sahibi haklı olarak itiraz etti: günde bir kez tıklayan biri hiçbir zaman
eşiğe ulaşmıyordu, oysa üç günde üç tıklama tam olarak sabırlı bir saldırganın
deseni. Kayıt artık IP başına tutuluyor (`ip:<adres>`), içinde gün gün döküm
var, 7 günden eski günler her yazımda budanıyor.

**Dört sert kural — hiçbiri gevşetilmez:**

| Kural | Neden |
|---|---|
| Sayma `try/catch` + `waitUntil` içinde, yanıt yolunda **hiç `await` yok** | Ölçüm asla siteyi bozmaz. Betikte ne olursa olsun ziyaretçi sayfayı görür |
| `env.TIKLAMA` yoksa **sessizce geçilir** | Yapılandırma yarım kalırsa site düşmez, sadece sayaç çalışmaz |
| Kayıtlar **7 gün** sonra silinir (`expirationTtl`) | IP kişisel veri; süre `/kvkk/` metninde de yazılı, **ikisi birlikte değişir** |
| Rapor **mobil operatörleri ayrı bölüme** koyar | CGNAT: tek mobil IP'nin arkasında binlerce abone var. Engellemek gerçek müşteriyi keser |

**`run_worker_first: true` şart.** Varsayılan davranışta statik dosyaya eşleşen
istek Worker'a hiç uğramaz; `gclid` bir **sorgu** parametresi olduğu için dosya
yolunu değiştirmiyor ve sayaç hiç çalışmazdı. Bunu kapatırsanız sistem sessizce
ölür, hiçbir hata basmaz.

**Rapor:** `/_tiklama/?k=<RAPOR_ANAHTARI>` — anahtar yanlışsa **404** döner
(401 adresin var olduğunu doğrulardı). Anahtar `wrangler.jsonc` → `vars`
içinde, panelde **değil**: panelden "Text" olarak eklenen değişkenleri bir
sonraki `wrangler deploy` siliyor ve rapor günün birinde sessizce 404 dönmeye
başlardı. **Depo özel olduğu için kabul edildi; depo herkese açılırsa anahtar
sızar, o gün değiştirin.**

**Rapor tek tek tıklama SAATLERİNİ de tutuyor (14.08.2026).** Gün toplamı
"kaç kere" der, saat "hangi ritimle" der — deseni gösteren ikincisidir: kırk
saniye arayla üç tıklama insan davranışı değil, üç ayrı akşam bir tıklama
olabilir. Son 20 zaman damgası saklanıyor, penceresi geçen düşüyor. Saatler
**Türkiye saatiyle** basılıyor; Worker UTC'de çalıştığı için ham damga
basılsaydı rapor sahibinin telefonundakinden 3 saat geride görünür ve
"bu tıklama gece 4'te gelmiş" gibi yanlış sonuca götürürdü. Eşiğin altındaki
tablo **en yeniden eskiye** sıralı (şüpheliler toplama göre, eşitlikte en son
tıklayan üstte) — hepsi "1" olan satırlarda toplama göre sıralamak listeyi
rastgele gösteriyordu.

**Raporda "Ads'e eklendi" işareti var (14.08.2026, sahibinin isteği).** Her
engellenebilir adresin yanındaki kutu işaretlenince adres **yapıştırma
listesinden düşer**; liste böylece yalnızca *henüz eklenmemiş* adresleri
gösterir ve iki kez yapıştırma karışıklığı olmaz. İşaret tarayıcıda değil
**KV'de** duruyor — telefondan işaretleyip bilgisayardan bakınca da aynı.
İki ayrıntı bilerek böyle: **mobil satırlarda kutu yok** (o adresler zaten
engellenmemeli, kutu koymak yanlış işi davet ederdi) ve işaretleme **saklama
süresini uzatmaz** — kayıt `expirationTtl` yerine **mutlak bitiş zamanıyla**
yazılıyor, yoksa her tik ömrü 7 gün öteler ve `/kvkk/` metnindeki süre
yanlışlanırdı.

**Bu sistem tıklamayı ENGELLEMEZ, kanıtlar.** Para tıklandığı anda ödeniyor;
elde ettiğimiz şey Ads'in IP hariç tutma kutusuna yapıştırılacak liste ve
Google'a geçersiz tıklama incelemesi açarken sunulacak desen. Aynı sebeple
reCAPTCHA ve Cloudflare Bot Fight Mode **reddedildi** — ikisi de sitede
çalışır, para siteye varmadan önce gitmiştir; üstelik ikisi de sayfaya kod
enjekte edip sıfır-dış-istek özelliğini bozar.

**Tarayıcıya inen kod yok**, npm paketi eklenmedi, sayfa ağırlığı ve LCP
değişmedi. Deploy sonrası dört kritik yüzey (telefon ×6 · WhatsApp ×4 ·
`tel_click` ×6 · `whatsapp_click` ×4) canlıdan sayılarak doğrulandı, hepsi
deploy öncesiyle birebir aynı.

**İlk turda çıkan ders — kendi IP'nizi tanıyın.** Sunucu kayıtlarında 114
istekle en tepede duran `176.33.113.108` günlerce "İstanbul'dan siteyi
inceleyen rakip" sanıldı ve engelleme listesine kondu. Sayaç kurulunca
görüldü ki **sahibinin kendi bağlantısı**. Ayrıca konum verisi güvenilmez:
aynı adres bir serviste İstanbul, Cloudflare'de Gaziantep görünüyor. **Türk
operatörlerinin havuz adreslerinde şehir bilgisine dayanarak karar vermeyin.**

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
ana CTA → künye paneli → **form** → 3 güven rozeti → fiyat tablosu →
arıza/çözüm → **marka şeridi** → 4 adım süreç → ilçeye özgü blok → yorumlar →
SSS → alt CTA + footer → mobil sabit alt çubuk.
Blok eklerken veya sıra değiştirirken önce sorun.

**⚠️ FORM 12.08.2026'da YUKARI TAŞINDI — sahibinin isteği, hero'nun hemen
altına.** Eskiden SSS'ten sonra, sayfanın dibindeydi. Zemin `"zemin"` verildi
ki renk ritmi bozulmasın (lacivert → zemin → beyaz).

**Bunun bir bedeli var ve ölçülmeli:** form artık ikna edici içeriğin
(rozetler · fiyat · arıza · marka · süreç · yorumlar · SSS) **öncesinde**
soruluyor. Yukarıdaki form, kararını vermiş ziyaretçiyi daha hızlı yakalar;
kararsız ziyaretçiden ise henüz sebep vermeden bilgi ister. Hangisinin ağır
bastığı **`form_submit` sayısıyla** görülür — GA4'te olay zaten hazır.
Sayı düşerse eski yerine döndürmek tek satırlık iş.

**02.10.2026 — form ve hero düzeni sıkılaştırıldı, blok sırası DEĞİŞMEDİ.**
Sahibi "şık, sade, aramaya yönelik arayüz" istedi; baştan tasarım yerine
ekran görüntüsünde görülen üç zayıflık düzeltildi: (1) masaüstünde formun
sağ yarısı boştu → `lg` ve üstünde yanına lacivert **"Gönderince ne olur?"**
paneli (3 adım + düz metin numara; `tel:` bağlantısı DEĞİL, yeni ölçülmeyen
arama yüzeyi açmamak için), ad + telefon `sm` ve üstünde yan yana;
(2) mobilde hero üst boşluğu `py-16 → py-10`, künye paneli sıkılaştı —
form ~130 px yukarı çıktı; (3) `IlceBlogu` yan kartı notun boyuna
esnemiyor (`self-start`). Doğrulama: 5 sayfa × 6 genişlik (320–1280) yatay
taşma **0** · tel 6 / WhatsApp 4 / `tel_click` 6 / `whatsapp_click` 4 —
değişiklik öncesiyle **birebir aynı** · `f-ad` her sayfada tek.
Aynı gün `YanButonlar`'ın 1024 px'te içeriğin üstüne binmesi de giderildi
(görünme eşiği md → 1344 px, bkz. "Ölçümleme" → `yan_buton`).

**İki sayfada form İKİ KEZ basılıyordu** (yeni yer + eski yer); alttakiler
kaldırıldı. Aynı sayfada iki form = tekrarlanan `id="f-ad"` demek ve
`<label for>` bağları bozulur. Formu taşırken bunu kontrol edin.

**Marka şeridi (`Markalar.astro`) 12.08.2026'da sahibinin onayıyla eklendi** —
arıza/çözümden hemen sonra, çünkü "cihazımda bu arıza var" dedikten sonraki
soru "benim markama bakıyor mu?" oluyor. Zemini **beyaz**: komşuları zemin ve
lacivert, renk ritmi bozulmuyor. Ayrıntı D3'te.

**⚠️ 01.10.2026 — İSİM DEĞİŞTİ: `kisaAd` = "Adana Beyaz Eşya TV Klima Kombi
Servisi"** (sahibinin isteği). Aşağıdaki 12.08 kararının iki gerekçesi
ölçülerek çözüldü, karar bu yüzden tersine döndü:
1. **Kesilme:** isim artık `truncate` değil **`line-clamp-2`** — mobilde iki
   satıra iner ("Adana Beyaz Eşya TV / Klima Kombi Servisi"), **hiçbir
   genişlikte kesilmiyor.** Çubuk yüksekliği **65 px, değişmedi** (iki satır
   13 px metin, yanındaki 44 px Ara düğmesinden kısa).
2. **Diğer kullanımlar:** isim virgülsüz, KVKK satırında ad gibi okunuyor;
   en uzun sayfa başlığı **58 karakter** ("Talebiniz alındı — …" ve
   "Sayfa bulunamadı — …"), sınır 60.

Paylaşım görseli (`public/og.png`) da yenilendi; `tools/og-uret.mjs` artık
ad, saat ve cihaz satırını **veriden** okuyor — görselde fırın kapatıldıktan
sonra bile "Fırın" kalmıştı. **İsim, saat veya hizmet değişince betiği
yeniden çalıştırın** (`node tools/og-uret.mjs`), build onu çalıştırmıyor.

**Ölçüm (01.10.2026, gerçek genişlikte iframe, headless Chrome):**
| Ekran | İsim | Menüde görünen | Çakışma / taşma |
|---|---|---|---|
| 360 · 412 px | **2 satır**, kesik değil | (menü mobilde gizli) | 0 |
| 640 px | 1 satır | — | 0 |
| **1024 px** | 1 satır | Klima · **TV** · Çamaşır | 0 |
| 1280 · 1440 px | 1 satır | Klima · TV · Çamaşır · Bulaşık · Buzdolabı · Kombi | 0 |

**Menüye TV eklendi** (sahibinin isteği), ikinci sıraya — 1024 px'te de
görünsün diye. Bulaşık 1280'e kaydı. Aşağıdaki 12.08 tablosu tarihsel.

**Üst çubuktaki isim `kisaAd`, menü ise CİHAZ ÇEŞİTLİLİĞİ gösterir (12.08.2026 — isim kısmı yukarıda tersine döndü).**
Sahibi televizyon ve kombinin başlıkta görünmesini istedi. `kisaAd`'ı liste
hâline getirmek **ölçülerek elendi** — iki ayrı sebeple:

1. **Fiziksel yer yok.** 412 px'te marka kutusu **229 px**; "Adana Klima,
   Beyaz Eşya, TV ve Kombi Servisi" **279 px** sürüyor, yani `truncate` ile
   "…TV v…" diye kesiliyor ve **Kombi hiç görünmüyor.** 360 px'te mevcut isim
   bile (205 px) sığmıyor — orada zaten kesiliyor.
2. **`kisaAd` yalnızca başlıkta kullanılmıyor.** `og:site_name` · şema
   `alternateName` / `author` / `publisher` · dört sayfa başlığı ve
   **`/kvkk/` veri sorumlusu satırı** (`unvan ?? kisaAd`) oradan besleniyor.
   Virgüllü bir kategori listesi KVKK künyesinde saçma durur ve
   "Arıza Rehberi — {kisaAd}" başlığını **tam 60 karaktere** dayardı.

Çözüm menüye taşındı: eskiden `slice(0, 3)` idi ve `hizmetler.json` sırası
yüzünden **üçü de klima** çıkıyordu — yani menü sitenin kapsamını anlatmak
yerine tek cihaz gösteriyordu. Etiket `ad` değil **`cihaz`**; tam adlarla
("Kombi Bakım ve Onarım") menü 1280 px'te marka adını kesip çubuğu 65→69 px
büyütüyordu.

**Kaç bağlantı sığar — ölçüldü, 12.08.2026:**

| Ekran | Menüye kalan yer | Sığan hizmet |
|---|---|---|
| **1024 px** (menünün göründüğü ilk genişlik) | 468 px | **2** |
| 1280 px | 659 px | **4** |
| 1440 / 1920 px | 659 px | 4 — `.kap` 1200 px sınırlı, **fazladan yer açılmıyor** |

Bu yüzden düzen şu: dört hizmet basılır, **3. ve 4. `hidden xl:block`** ile
taşınır, listenin sonunda **"Tüm hizmetler"** (`/#hizmetler`) durur.
11 hizmeti başlığa sığdırmak fiziksel olarak mümkün değil; hepsine tek tıkla
gidilebilmesi bu bağlantıyla sağlanıyor ve o yüzden vurgulu renkte.
**Menüye bağlantı eklerken genişliği 1024 px'te YENİDEN ÖLÇÜN.**

Menü `hidden lg:block`, yani mobilde görünmez; mobilde kapsamı ana sayfadaki
hizmet ızgarası ve para sayfalarının kendi H1'leri anlatır.

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

**Yapay zekâ araçları için tanım — 01.10.2026, sahibinin isteği** (firma
"beyaz eşya servisi / beyaz eşya tamiri" olarak tanınsın). Üç parça, üçü de
**veriden** üretiliyor, elle tutulan kopya yok:
- `hvacBusiness()` → **`description` + `knowsAbout`** — asıl işi yapan bu.
- Ana sayfa "Hizmetler" giriş cümlesi: *"beyaz eşya servisi, beyaz eşya
  tamiri ve klima servisi"*. "Beyaz eşya tamiri" o güne kadar ana sayfada
  **hiç geçmiyordu** (yalnızca 4 blog sayfasında).
- **`/llms.txt`** (`src/pages/llms.txt.ts`). **Beklenti düşük:** Google
  kullanmadığını söyledi, diğerlerinin kullandığına kanıt yok; maliyeti sıfır
  olduğu için duruyor. Sitemap dışı (`HARIC`).

Yerel aramada yapay zekâ özetlerinin en güçlü kaynağı ise **Google İşletme
Profili'nin kategorisi** — sitede değil panelde (G6).

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

#### Denetim tekrarlandı — 12.08.2026, 80 sayfa (11 hizmet · 19 yazı)

İki hizmet ve üç yazı eklendikten sonra `dist/` üzerinde **14 kontrol** koştu,
**hepsi 0 bulgu**: title/description varlığı ve sınırı · H1 tekliği · başlık
hiyerarşisinde atlama · canonical'ın kendini göstermesi · `lang="tr"` ·
boş `href` / boş anchor metni · `alt`sız görsel · OG etiketleri · viewport +
charset · kopya title/description/H1 · **yetim sayfa** · sitemap ↔
indekslenebilir sayfa birebir eşleşmesi · JSON-LD ayrıştırma · `{PLACEHOLDER`
sızıntısı · gtag dışı dış kaynak.

Sayılar: **80 sayfa · 78 indekslenebilir · sitemap 78 (birebir)** · JSON-LD
208 blok 0 bozuk · iç link sayfa başına **en az 2, ortalama 25,7** ·
noindex yalnızca 404 ve `/tesekkurler/`.

**Mobil düzen ölçümü (CDP, gerçek 412 px viewport):** yatay taşma **0 px**,
taşan öğe yok, ölçüm olayı taşıyan bütün CTA'lar **44 px ve üstü**
(header 44 · hero 88/52 · footer 88/52/44 · mobil bar 56).

**⚠️ Bu ölçümde İKİ TUZAK yaşandı, tekrarlayacak olan bilsin:**

1. **`--window-size=412` ekran görüntüsü için de yanıltıyor.** Sayfa daha geniş
   bir viewport'ta dizilip 412 px'e **kırpılıyor**; sağdan kesik bir görüntü
   çıkıyor ve "mobilde bozuk" sanılıyor. Doğrusu CDP
   `Emulation.setDeviceMetricsOverride`. (B8'deki not ağ kısıtlaması içindi;
   burada ağ ölçülmediği için bu API doğru araç.) Doğrulaması basit:
   `innerWidth` gerçekten 412 mi diye sorun, değilse ölçüm geçersizdir.
2. **WCAG 2.5.8 (dokunma hedefi) yanlış ölçüldü ve 20 sahte ihlal raporlandı.**
   İlk betik hedefler arası **kenar-kenar** mesafeye bakıyordu; şartname ise
   her hedefin merkezine **24 px çaplı daire** koyup dairelerin kesişmemesini
   istiyor (yani merkez-merkez ≥ 24 px) ve **cümle içi linkleri muaf tutuyor**.
   Doğru testle ihlal **0**: footer'daki 18 link Spacing istisnasıyla, 2 link
   Inline istisnasıyla geçiyor. Ayrıca `<input>` değil onu saran `<label>`
   sayılır — KVKK onay kutusunun etkin hedefi 20×20 değil **322×68 px**.
   **Ders: erişilebilirlik iddiası şartnameye göre ölçülür, sezgiye göre
   değil; fazla katı ölçüm de yanlış ölçümdür ve olmayan işi yaptırır.**

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

### Ölçüm kimliği girildikten sonra — tekrar ölçüldü, 11.08.2026

GA4 kimliği (`G-818Z2EG00L`) canlıya alındıktan sonra B8 tekrarlandı. Merak
edilen tek şey vardı: **gtag.js LCP'yi geciktiriyor mu?**

| Sayfa · onay | LCP | CLS | FCP | gtag.js indi |
|---|---|---|---|---|
| Ana sayfa · onay **yok** | 0,63 sn | 0,000 | 0,63 sn | — |
| Ana sayfa · onay **var** | **0,62 sn** | 0,000 | 0,62 sn | 2,89 sn |
| Para sayfası · onay **yok** | 0,84 sn | 0,000 | 0,63 sn | — |
| Para sayfası · onay **var** | **0,63 sn** | 0,000 | 0,63 sn | 2,87 sn |
| Teşekkür sayfası · onay var | 0,54 sn | 0,000 | 0,54 sn | 2,24 sn |

**Cevap: hayır, geciktirmiyor.** Onaylı ve onaysız LCP arasında fark yok
(0,62'ye karşı 0,63 sn — gürültü seviyesi). Sebep yapısal: gtag.js `async`
iniyor ve **2,2–2,9 sn'de tamamlanıyor**, yani LCP çoktan olmuş oluyor. LCP
nesnesi metin olduğu için hiçbir dış dosyayı beklemiyor. Bütçe (< 2,0 sn)
tamamında karşılanıyor, CLS her satırda tam sıfır.

**Ölçüm yöntemi değişti — Chrome 149 üç tuzak çıkardı, üçü de ölçülerek
bulundu.** Aynı ölçümü tekrarlayacak olan bunları bilmeli, yoksa **kısıtlama
sessizce uygulanmaz ve rakamlar sahte iyi çıkar**:

1. **`Emulation.setDeviceMetricsOverride` açıkken ağ kısıtlaması hiç
   uygulanmıyor.** Ölçüldü: cihaz taklidi yokken TTFB 154 ms, taklit açıkken
   71–79 ms (150 ms gecikmede imkânsız). Mobil genişlik bu yüzden CDP ile
   değil, Chrome'a `--window-size=412,823` vererek veriliyor.
2. **Aynı sekmede ikinci navigasyondan itibaren kısıtlama düşüyor.** İlk satır
   kısıtlı, sonrakiler kısıtlamasız çıkıyor.
3. **Yeni sekme açmak yetmiyor** — durum tarayıcı düzeyinde. Çözüm: **her
   ölçüm için sıfırdan Chrome başlatmak** (1 tarayıcı = 1 ölçüm).

Betiğe bu yüzden bir **kendini denetleme** kuralı konuldu: 150 ms gecikmede
TTFB 140 ms'nin altına inemez, inen satır `GEÇERSİZ` damgası yer. Bu kural
olmasaydı ilk üç turun sahte rakamları (TTFB 0,06–0,07 sn) doğru sanılacaktı.

İki küçük fark dürüstlük için yazılı: gerçek genişlik **484 px** çıktı
(`--window-size` CSS viewport'una birebir yansımıyor, bilinen davranış) ve PSI
tekrar **429** verdi (anahtarsız kullanımda kota). Rakamlar bu yüzden yine
CDP'den.

**Sitenin önünde artık bir Worker var (14.08.2026) ama tarayıcı tarafında
hiçbir maliyeti yok.** `worker/index.js` yalnızca sunucuda çalışıyor: inen
kod yok, istek yok, sayfa ağırlığı ve LCP değişmiyor. Ölçülen CPU süresi
**0,62 ms**. Yine de `run_worker_first` bütün istekleri Worker'dan geçiriyor;
bir sonraki B8 ölçümünde **TTFB'ye ayrıca bakın** — bu satır o ölçüm
yapılmadan "etkisi yok" diye kapatılmasın.

**Kendi kaynaklarımızda dış istek sıfır**: CSS tamamen inline, yazı tipi
indirilmiyor, ikonlar satır içi SVG. HTML içindeki tek `https://` referansı
canonical etiketi — o bir kaynak yüklemesi değil.

**Tek istisna gtag.js ve 12.08.2026'dan beri KOŞULSUZ iniyor** (sahibinin
kararı, gerekçesi "Ölçümleme ve çerez onayı" bölümünde). Geriye tek kapı
kaldı: **kimlik girilmemişse hiç yüklenmez.** Yani "onay yoksa dış istek 0"
artık **doğru değil**; doğru olan "kimlik yoksa dış istek 0".

Bu istisnayı genişletmeyin — başka üçüncü taraf script eklemek yasak 5'e
tabidir ve o yasak gevşemedi.

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
4. **Reklam programı 08:00–20:00** (çalışma saati 01.10.2026'da **23:00**'e çekildi; reklamı uzatmak ayrı karar, verilmedi). Gece gelen
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

   **⚠️ 12.08.2026'dan beri sitede marka adı GEÇİYOR (A6 tersine çevrildi) ve
   bu yasağı GEVŞETMEZ.** Marka adını yazmak serbest, yetki ima etmek değil.
   Sınır şurada: *"Beko ürünlerinde tamir ve bakım hizmeti"* ✔ ·
   *"Beko yetkili servisi"* ✘ · *"Beko servisi"* ✘ (yetki ima eder) ·
   üretici **logosu basmak** ✘ (ibarenin görsel hâli). Her marka cümlesi
   "… dahil bütün markalar" ile biter ve footer'daki "anılan marka adları …
   sahiplerine aittir" cümlesi kalkmaz.
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
| 1 | **Yorum akışını sürdürmek** · D4 | Sahibi | **18 yorum var** (12.08.2026) — ilk hedef aşıldı; tazelik de sinyal olduğu için durmuyor. |
| 2 | **İşletme profilini doldurmak** · G6 | Sahibi | **Televizyon + kombi eklendi** (sahibi bildirdi 12.08.2026) ✔ · kalan: fotoğraf · hizmet alanı · S&C · gönderi. |
| 3 | **Blog yazısı eklemek** · D5 | Claude | 17 yazı · **10 hizmetin 10'u kapsandı** ✔ — yazısız hizmet kalmadı. Bundan sonrası derinleştirme; sıradaki adaylar D5'te. |
| 4 | ~~İlçe listesi~~ · G2 | — | **CEVAPLANDI 12.08.2026:** dört ilçe (Seyhan · Yüreğir · Çukurova · Sarıçam), hepsinin **bütün mahalle ve semtleri**. Yeni ilçe açılmayacak. |
| 5 | **Hukuki metinleri avukata okutmak** · E1 · **E3** | Sahibi | Brifing hazır: `docs/kvkk-avukat-brifingi.md` — **8. bölüm öncelikli** (dışarıya verilen işler, 01.10.2026). |

**✅ REKLAM YAYINDA — 14.08.2026.** Standart Arama kampanyası kuruldu ve
etkinleştirildi, **akıllı kampanya aynı anda duraklatıldı**. 11 reklam grubu ·
112 kelime · ₺100 günlük bütçe · ₺5 maksimum TBM · çağrı dönüşümü 60 sn.
Ayrıntı ve kurulan her ayar **C8**'de, teşhis geçmişi **C9**'da.

**⏭ Bir sonraki oturumun ilk işi: 3 GÜNLÜK TEMİZ TESTİN SONUCU.**
20.08.2026'da kampanya ilk kez temiz hâle geldi (C10 negatifleri). Karar
kuralı: **₺100/gün × 3 gün = ₺300'e en az 1 iş geliyor mu?** Gelmezse reklam
durdurulup enerji Haritalar'a (D4 yorum akışı) yönlendirilir — ikisi de meşru
karar. **Ölçüm yalnızca sahibinin çağrı kaydından gelebilir** (sebebi C12'de).
Bekleyen üç ayar: **bütçe ₺350 → ₺100** · **Televizyon grubu duraklatılmış,
açılacak** · **yeni ödeme profiline bakiye yüklenecek** (₺0 ise reklam durur).

**⏭ Eski madde — ilk haftanın rakamlarını okumak.** Sırasıyla:
**(1)** arama gösterim payı — ₺5 teklif piyasanın altında kalıyorsa reklam hiç
görünmez ve bu "talep yok" sanılır; **önce teklif, sonra bütçe**. **(2)** arama
terimleri raporu — kelime listesi buradan büyür, tahminle değil. **(3)** tıklama
sayacı (`/_tiklama/`) — tekrar eden IP var mı. **(4)** C5 testi: form dönüşümü
gerçekten düşüyor mu (çağrı tarafı kuruldu, form tarafı **doğrulanmadı**).

### ❓ Cevap bekleyen sorular — cevapsız uygulanmaz

Hizmet bölgesi **tahmin edilmesi yasak** alandı; **G2 12.08.2026'da cevaplandı**
(dört ilçe, hepsinin bütün mahalle ve semtleri) ve kapsam sabitlendi.
**G4 kapandı** (30.07.2026): kapasite yeterli.

| Soru | Madde | Cevabın etkisi |
|---|---|---|
| Aday listesinden hangi hizmetleri **gerçekten yapıyorsunuz**? | G3 | Her hizmet **1 hub + 4 para sayfası**, kod yazılmadan. |

**R22 CEVAPLANDI — 12.08.2026, sahibi: *"basıyoruz."*** `/klima-gaz-dolumu/`
sayfalarındaki "R22 gaz dolumu" satırı artık **doğrulanmış** bir hizmet;
`{PLACEHOLDER — R22 hizmeti veriliyor mu?}` notu kaldırıldı ve `hizmetler.json`
içinde **hiç `{PLACEHOLDER}` kalmadı.**

Bu satır uzun süre **sessiz bir risk** olarak durdu ve nedeni öğretici: soru bir
fiyat satırının `not` alanına yazılmıştı, A3 kararıyla fiyat tablosu hiç
basılmadığı için **not da hiçbir zaman ekrana çıkmadı** — yani soru sahibine
hiç ulaşmadı, ama "R22 gaz dolumu" işlemi işlem listesinde ziyaretçiye
görünmeye devam etti. **Ders: doğrulanmamış bir hizmet iddiasının sorusunu,
ekrana basılmayan bir alana yazmayın;** `[eksik-veri]` raporuna veya bu
dosyadaki soru tablosuna yazın.

**Değerlendirilmemiş fırsat:** R22 üretimden kalktığı için birçok servis eski
klimalara gaz basmıyor. Yapıyor olmak gerçek bir ayrışma noktası ve
"eski klima gaz dolumu" / "R22 bulunur mu" aramalarını karşılayabilir.
`klima-gaz-dolumu` SSS'inde şu an R22 geçmiyor (6 sorunun hiçbirinde).
Sahibine önerildi, **onayı beklemeden yazılmaz** — R22'nin bulunabilirliği ve
fiyatı sahanın bilgisi.

### ⏸ Tetiği sahibi çekecek — altyapı hazır, bekliyor

| İş | Madde | Durum |
|---|---|---|
| Search Console raporunu okumak | G1 | **Kurulum bitti** (doğrulama + sitemap 60 adres ✔). Rapor için **1–2 hafta** gerek; site 29.07.2026'da yayına girdi, şu an boş olması normal. |
| ~~Google Ads'i açmak~~ | **C8** · C1 · C2 | **YAPILDI 14.08.2026** — kampanya yayında, akıllı kampanya duraklatıldı. Kalan: C5 testi (form dönüşümü doğrulanmadı). |
| Bot / geçersiz tıklama savunması | **C6 · C7** | Kurulum kapıları **uygulandı** (ağlar kapalı · konum "bulunma" · tam/öbek eşleme · negatif liste · bütçe tavanı · IP hariç tutma hazır). Erken uyarı oranı C7'de: tıklama artarken `tel_click` artmıyorsa gelen insan değildir. |
| ~~Performans ölçümünü tekrarlamak~~ | B8 | **YAPILDI** (11.08.2026): gtag.js LCP'yi geciktirmiyor, 0,54–0,84 sn. |
| Tip denetimi | B5 | `@astrojs/check` kurulu değil; kurulum **onay ister**. |
| Self-hosted font | D1 | **Tavsiye: yapmayın** — LCP metin, ölçülmüş avantajı bozar. Karar sahibinde. |

### 🔁 Süregelen disiplin — biten iş değil, her gün geçerli

- **G5 — kaçan çağrı = kaçan iş.** 08:00–23:00 arası açılmayan telefon,
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
| A6 | **TERSİNE ÇEVRİLDİ 12.08.2026** — 11 marka eklendi (**Vestel ile 12**, 01.10.2026; **televizyonun kendi listesi var** — `Hizmet.markalar`, 27 TV markası; şerit hepsini, SSS cümlesi ilk 12'sini basar — TV sayfasında marka yoğunluğu %3,3, **daha fazla uzatmayın**; **kombinin de kendi listesi var** — 16 kombi markası, Demirdöküm başta; klima hâlâ genel listeyi kullanıyor), tek kaynak `firma.json`, her cümle "… dahil bütün markalar" ile biter |
| A2 | **Mahalle listesi yayımlanmayacak** (12.08.2026) — mahalle adı istemeyin |
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
| Üretilen sayfa | **74** (34 sabit/blog + 40 para sayfası) — `/kullanim-kosullari/` eklendi 01.10.2026 (E3) | ✔ |
| Kapsam | **4 ilçe × 10 hizmet** — ilçelerin **bütün mahalle ve semtleri** (G2 cevaplandı 12.08.2026) | ✔ sabitlendi |
| Geçerli ilçe (`yerelNotlar`) | **4 / 4** ✔ | 4 / 4 |
| Blog yazısı | **17** — **10 hizmetin 10'u kapsandı** ✔ (yazısız hizmet kalmadı) | — |

**Ölçüm ve sıralama**

| Ölçüt | Şu an | Hedef |
|---|---|---|
| Canlı SEO denetimi | **50/50 temiz · açık yok** ✔ | 0 açık |
| Search Console | **doğrulandı** ✔ (DNS TXT) · **sitemap gönderildi, 60 adres** ✔ | rapor okumak (G1) — 1–2 hafta sonra |
| Site haritası | **71 adres** — `/kullanim-kosullari/` eklendi ama **noindex**, sitemap dışı (01.10.2026) | push sonrası canlıda doğrulanacak |
| Ölçümleme | **GA4 + Ads çalışıyor** — `G-818Z2EG00L` · `AW-18353257077` (12.08.2026, canlıda ölçüldü) | ✔ |
| Google yorumu | **18** (12.08.2026, sahibi bildirdi) — ilk hedef (10–15) **aşıldı** ✔ | akışı sürdürmek (D4) |
| **Google Ads** | **YAYINDA** — bütçe **₺1.500/gün** (sahibi, Eylül sonu) · TV ve Kombi grupları **duraklatılmış** · 01.08–02.10: **₺16.776,86 · 1.449 tıklama · 0 dönüşüm** · gösterim payı %31 | **C13 teşhisi bekliyor** — tavsiye ₺300 |
| Bot / click fraud savunması | **kurulum kapıları uygulandı** (C6) + **ücretli tıklama sayacı canlı** (`/_tiklama/`) | saldırı olursa C7 sırası |

**Performans — ölçüldü, 29.07.2026**

| Ölçüt | Şu an | Sınır |
|---|---|---|
| Mobil LCP | **0,54–0,84 sn** ✔ (gtag.js ile birlikte, 11.08.2026) | < 2,0 sn |
| Mobil CLS | **0,000** ✔ | < 0,1 |
| Sayfa ağırlığı | **18,6–21,3 KB** ✔ | < 500 KB |
| JS (gzip) | **2,07 KB** ✔ (kendi kodumuz) | < 40 KB |
| Dış istek | **yalnızca gtag.js** — 12.08.2026'dan beri koşulsuz iniyor (LCP'den sonra, izinler `denied`) | gtag.js dışında 0 |
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
| **E** | Hukuk | E1 · E2 · E3 |
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

      **12.08.2026'da aynı ders bir kez daha çıktı — bu sefer LİSTE.** Seyhan
      ve Yüreğir notları cihazları tek tek sayıyordu ("klima, çamaşır makinesi,
      bulaşık makinesi, buzdolabı, kurutma makinesi, fırın ve ocak…").
      Televizyon ve kombi eklenince bu listeler **eksik** kaldı: not, sitenin
      geri kalanının verdiği hizmeti vermiyormuş gibi okunuyordu. İkisi de
      Sarıçam'da zaten kullanılan **aralık kalıbına** çevrildi ("X'ten Y'ye
      kadar hizmetlerin tamamı"), çünkü aralık yeni hizmet eklendiğinde
      bozulmaz. Sahibine sorulmadı — yeni iddia girmedi, eksilen kapsam
      tamamlandı.

      **Genel kural: ilçe notuna ne SAYI ne de kapalı LİSTE yazılır.** İkisi de
      aynı bakım borcudur; fark yalnızca sayının hemen, listenin sessizce
      yanlışlaşmasıdır.
- [x] **A2. MAHALLE LİSTESİ YAYIMLANMAYACAK — karar, 12.08.2026. Sahibinden
      mahalle adı İSTEMEYİN.** Sözleriyle: *"liste liste mahalle mahalle
      yazmasına gerek yok."*

      Teklif edilmişti ve değeri anlatılmıştı: mahalle adı rakibin sitesinden
      kopyalayamayacağı türden bir yerel sinyal, "Seyhan'da X mahallesi beyaz
      eşya servisi" aramalarını karşılar ve ilçe başına 5–8 ad yeterliydi
      (cümle kurmak gerekmiyordu). Sahibi istemedi.

      **Bu A3/A4 ile aynı sınıfta: verilmiş karar, eksik veri değil.**
      `mahalleler` alanları `{PLACEHOLDER}` kalmaya devam ediyor, `IlceBlogu`
      mahalle kutusunu hiç basmıyor ve `seo.ts` meta kalıp havuzundan mahalleli
      kalıp kendiliğinden düşüyor — mekanizma zaten doğru davranıyor,
      **kod değişikliği gerekmiyor.**

      `[eksik-veri]` raporundaki 4 `mahalleler` satırı **bilerek duruyor**:
      A3'teki 48 fiyat satırı gibi tamamen silinmedi çünkü sayısı az (4 satır,
      gürültü yaratmıyor) ve karar geri alınırsa nerenin açılacağını gösteriyor.
      Karar geri alınırsa kod değişmez, `ilceler.json`'a ad girilince kutu ve
      meta kalıbı kendiliğinden açılır.
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

      **Profilde 18 yorum var** (12.08.2026, sahibi bildirdi). Blok artık dolu
      bir profile götürüyor — bağlandığı gün boştu, o uyarı kalktı. Devamı D4.

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

      ~~Profil **servis alanı işletmesi** olarak açıldı, adres göstermiyor.~~
      **DÜZELTME 01.10.2026:** profilde Yüreğir'de bir **dükkân adresi** ve
      harita iğnesi var; sahibi orada müşteri karşılanan bir dükkân olduğunu
      doğruladı, yani adresin görünmesi kurala uygun. Sitede adres basılmıyor
      (A4) — bu bir çelişki değil, eksik bilgi; A4 yine de tekrar sorulmaz.

      Sahibine ayrıca, yorum yerine geçmeyen ama uydurma da olmayan bir
      "verdiğimiz sözler" bloğu önerilmişti (aynı gün ~2 saat · parça garantisi
      · onaysız işlem yok · onarım yapılırsa tespit ücreti yok). Para
      sayfasının blok sırasını değiştireceği için **onay istendi, cevap
      gelmedi, eklenmedi.** Yorumlar bloğu artık basıldığına göre bu öneri
      büyük ölçüde gereksizleşti.
- [x] **A6. KARAR TERSİNE ÇEVRİLDİ — marka listesi 12.08.2026'da EKLENDİ.
      Sahibinin isteği: *"markaları da göm ki SEO'da aramalarımız artsın."***

      **29.07.2026'daki karar** liste tutmamaktı ve gerekçesi şuydu: (1) asla
      dolmayacak bir alan her build'de raporlanır, (2) listede adı geçmeyen bir
      markanın sahibi "bakmıyorlar" diye düşünüp aramaz — yani **liste,
      kapsayıcı cevaptan daha az iş getirir.**

      **Birinci gerekçe ortadan kalktı** (alan artık dolu). **İkincisi hâlâ
      geçerli ve mimariyle karşılandı:** liste hiçbir yerde tek başına
      basılmıyor, geçtiği her cümle **"… dahil BÜTÜN markalar"** kalıbıyla
      bitiyor. Ölçüldü: kapsayıcı kapanışı olmayan marka cevabı **0**.
      **Bu kalıbı bozmayın** — marka adları arama için, kapsayıcı cümle iş için.

      **Yapılanlar:**
      - `firma.markalar` geri eklendi: Arçelik · Beko · Bosch · Siemens ·
        Samsung · LG · Profilo · Altus · Grundig · Electrolux · Miele.
        **Vestel 01.10.2026'da eklendi** (İşletme Profili açıklamasında vardı,
        sitede yoktu; sahibi onayladı).
      - **11 hizmetin hepsine marka SSS'i** kondu (4'ü vardı, 7'si eklendi).
        Her cevap cihaza özgü ("… bütün markaların **çamaşır makinelerinde**")
        çünkü gerçek arama "beko çamaşır makinesi servisi" biçiminde yapılıyor,
        çıplak marka listesi biçiminde değil.
      - Ana sayfaya veriden türeyen marka SSS'i eklendi.
      - Footer reddi beyanına "anılan marka adları … sahiplerine aittir"
        cümlesi **geri geldi** — 29.07'de sitede marka adı kalmadığı için
        kaldırılmıştı. **İkisi birlikte hareket eder.**

      **Liste TEK YERDE: `firma.json`.** SSS cevaplarına `{markalar}`
      belirteciyle giriyor, 11 hizmete kopyalanmıyor (telefon numarasındaki
      dersin aynısı). Belirteç `veri.ts` → `sssCoz()` içinde, **veri
      katmanında** çözülüyor; sebebi aynı SSS listesinin iki yere gitmesi:
      ekrandaki `<Sss>` ve JSON-LD'deki `faqPage()`. Sayfada çözülseydi biri
      atlandığında **görünen metin ile şema ayrışırdı** — Google'a ekranda
      olmayan cevap bildirmek yapılandırılmış veri ihlalidir. Ölçüldü:
      56 sayfada şema ↔ görünür metin **uyumu tam, ayrışma 0**.

      **⚠️ "Gömmek" GİZLEMEK DEĞİL.** Sahibinin kelimesi buydu ama gizli metin
      (`display:none`, sıfır punto, zemin rengiyle yazı) Google'ın spam
      politikasının doğrudan ihlalidir ve yaptırımı **tüm siteye** işler —
      yani istenen şeyin tam tersini yapar. Marka adları **görünür** metinde,
      okunan cümlelerin içinde duruyor. Ölçüldü: gizli metinde marka adı **0**,
      en yüksek marka yoğunluğu **%0,83** (doldurma seviyesinin çok altında).

      **Meta açıklamalara da girdi — ama TAMAMI değil, DÖRT ad (12.08.2026).**
      Sahibi *"markaları açıklamalarda da göster"* dedi. Matematik izin
      vermiyor: 11 markanın tamamı **87 karakter** sürüyor, description sınırı
      **155** — hepsini yazmak tıklamayı asıl sağlayan cümleyi (aynı gün ·
      kapıda ödeme · garanti) dışarı iter. Çözüm `seo.ts` havuzuna **markalı
      bir kalıp eklemek** oldu: havuza EK olarak giriyor, mevcutların yerine
      geçmiyor. Böylece sayfaların bir kısmı marka aramasını, kalanı
      aciliyet/fiyat mesajını karşılıyor ve yakın-kopya açıklama üretilmiyor.
      Ölçüldü: **11 sayfada** marka geçen açıklama, en uzunu **142 karakter**,
      kopya description **0**. Marka listesi boşalırsa kalıp havuza hiç girmez
      (`ulasimDk = 0` iken süreli kalıbın düşmesiyle aynı mantık).

      **Beklenti dürüstçe: bu, "beko servisi" aramasında ilk sırayı VERMEZ.**
      Marka adının metinde geçmesi *marka + cihaz + ilçe* biçimindeki uzun
      kuyruk aramalarında (ör. "sarıçam beko bulaşık makinesi tamiri") makul
      bir kazanç sağlar. Çıplak "beko servisi" aramasında markanın kendi
      yetkili servisleri ve büyük dizinler önde olur; oraya girmenin yolu metne
      marka adı serpmek değil, **gerçek yorum (D4), otorite ve zaman**.
      Bu satır, sonuç beklendiği kadar hızlı gelmediğinde "marka eklendi ama
      olmadı" tartışması çıkmasın diye yazıldı.

      **"Yetkili servis" ibaresi hâlâ yasak (yasak 2) ve marka adı geçmesi bunu
      DEĞİŞTİRMEZ.** İzinli kalıp: "{Marka} ürünlerinde tamir ve bakım
      hizmeti". Ölçüldü: 80 sayfanın hiçbirinde "yetkili servis" geçmiyor.

      **Marka bazlı AYRI SAYFA açılmadı ve onaysız açılmaz.** "Beko servisi
      Adana" gibi sayfalar en yüksek SEO değerini verirdi ama her biri gerçek,
      markaya özgü içerik ister; şablondan üretilen 11 marka × 11 hizmet
      sayfası **doorway page** olur ve ceza tek sayfaya değil tüm siteye işler
      (ilçe kapısıyla aynı gerekçe). İstenirse ayrı bir karar olarak tartışılır.
- [x] **A7. İKİSİ DE BAĞLANDI. GA4 `G-818Z2EG00L` (11.08.2026) · Ads
      `AW-18353257077` (12.08.2026).**

      **⚠️ `firma.json` → `adsKimligi` BİLEREK BOŞ BIRAKILDI — doldurmayın.**
      Ads kimliği siteye bizim kodumuzla değil, Google'ın **"Destination"**
      mekanizmasıyla bağlandı: Ads panelinde *"Web sitemde bulunan Google
      etiketini kullan"* seçildi ve Google, `AW-18353257077`'yi sunucu tarafında
      `G-818Z2EG00L` etiketinin hedefi olarak ekledi. Yani `gtag/js?id=G-…`
      indiği anda Ads de kendiliğinden yapılandırılıyor.

      `adsKimligi` doldurulursa `gtagYukle()` ayrıca `gtag('config', 'AW-…')`
      çağırır ve **aynı dönüşüm iki kez sayılır.** Alan boş görünüyor diye
      "eksik" sanmayın; `[eksik-veri]` raporundaki satır bu yüzden duruyor.

      Doğrulaması (12.08.2026, canlı): `gtag/js?id=G-818Z2EG00L` yanıtının
      içinde `AW-18353257077` geçiyor ve `/tesekkurler/` açıldığında
      `pagead2.googlesyndication.com/ccm/collect?tid=AW-18353257077&en=page_view`
      isteği gidiyor.

      **Ölçülen önemli ayrıntı — dönüşüm ONAYSIZ da tetikleniyor.** Consent
      Mode "denied" durumunda istekler `gcs=G100` ve `npa=1` ile, **çerezsiz**
      gidiyor. Yani reddeden ziyaretçinin dönüşümü de Google'a ulaşıyor, sadece
      kimliksiz ve modellenmiş olarak. Çerez yazılmadığı ölçüldü. Bu, "onay
      vermeyen ziyaretçi raporda hiç görünmez" beklentisini **yanlışlıyor** —
      rapor sanılandan az eksik çıkacak.

      Sahibi gtag.js snippet'inin tamamını yapıştırdı; **snippet siteye
      konmadı**, yalnızca kimlik `firma.json`'a girildi. Sebep: snippet
      koşulsuz yükleniyor, bizim yükleyicimiz (B3) ise onay kapısının
      arkasında. Snippet olduğu gibi konsaydı reddeden ziyaretçiye de gtag.js
      inerdi ve `/kvkk/` metnindeki *"yalnızca siz onay verirseniz çalışır"*
      ifadesi yanlışlanırdı — B10'da Cloudflare beacon'ı tam bu sebeple
      kapatılmıştı. **Bir daha snippet yapıştırılmasın, kimlik yeter.**

      **Onay kapısı gerçek kimlikle yeniden test edildi (11.08.2026, headless
      Chrome, 10/10):** karar verilmeden gtag.js inmiyor · **reddedilince de
      inmiyor** ve ret sonrası tıklama olayı gitmiyor · kabul edilince doğru
      kimlikle iniyor, sıra doğru (`consent default` → `update` → `js` →
      `config G-818Z2EG00L`) · dönen ziyaretçide bant çıkmadan ölçüm çalışıyor.

      **Ads dönüşümü hâlâ ölçülmüyor.** GA4 davranış raporu verir; reklam
      dönüşümü için `AW-…` gerekir (C1). İkisi ayrı iş, biri diğerinin yerine
      geçmez.

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
- [x] Sitede görünecek kısa ad — **"Adana Beyaz Eşya TV Klima Kombi Servisi"** (01.10.2026; önceki: "Adana Klima & Beyaz Eşya Servisi")
- [x] Çalışma saatleri — **"Her gün 08:00–23:00"** (01.10.2026, sahibi). Önceki
      "08:00–20:00" İşletme Profili'yle çelişiyordu (profilde 23:00 yazıyordu,
      doğrusu oymuş). Saat yalnızca `firma.json`'da durur — Seyhan
      `yerelNotlar`'ındaki elle yazılmış saat bu yüzden **kaldırıldı** (A1'deki
      "ilçe notuna sayı yazma" dersinin üçüncü kez yaşanması).
- [x] **WhatsApp hattı 7/24 — sahibi bildirdi, 12.08.2026.** Hero künye
      panelinde çalışma saatinin hemen altında ayrı kutu olarak duruyor
      (`firma.whatsappSaatleri`). **Ayrı olması şart:** aynı satıra
      sıkıştırılsaydı ziyaretçi 7/24 servise geliyoruz sanardı (yasak 1).

      Metin bilerek **"7/24 açık — gece de yazabilirsiniz"**, *"7/24 cevap
      veriyoruz"* DEĞİL. Hattın açık olması doğrulanabilir bir gerçek; anında
      cevap sözü ise gece dönülmediğinde olumsuz yoruma dönüşür ve yerel
      sıralamada en pahalı kayıp odur (G5). **Sahibi gece de cevap verdiğini
      söylerse metin güçlendirilebilir; söylemeden güçlendirmeyin.**
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

      **⚠️ 1. kural 12.08.2026'da KALDIRILDI** — sahibinin kararıyla script
      artık koşulsuz yükleniyor. Aşağıdaki hâli tarihsel kayıt olarak duruyor;
      yürürlükteki davranış ve gerekçe "Ölçümleme ve çerez onayı" bölümünde.

      **İki sert kural, ikisi de test edildi:**
      1. ~~Script yalnızca **onay verildikten sonra** enjekte edilir.~~
         **Artık geçerli değil.** Yerine geçen kural: script koşulsuz iner,
         izinler `denied` başlar, çerez ve olay onaysız gitmez.
      2. Kimlik yoksa hiçbir şey yüklenmez. `gaOlcumKimligi` ve `adsKimligi`
         boşken **dış istek sıfır kalır** — bu kural **yürürlükte.**

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

      **11.08.2026'da TEKRARLANDI** — GA4 kimliği girildikten sonra. Sonuç:
      gtag.js LCP'yi geciktirmiyor (onaylı 0,62 sn / onaysız 0,63 sn), çünkü
      `async` iniyor ve 2,2–2,9 sn'de tamamlanıyor — LCP çoktan olmuş oluyor.
      Chrome 149'un üç ölçüm tuzağı ve yeni yöntem "Performans bütçesi"
      bölümünde yazılı; **o tuzakları okumadan ölçüm tekrarlamayın.**
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

- [ ] **C1. ÇAĞRI TARAFI KURULDU (14.08.2026) · form tarafı doğrulanmadı.**
      Birincil = form gönderimi + **60 sn üzeri** çağrı, ikincil = `tel_click`.
      Sıralama önemli: `tel_click` birincil yapılırsa akıllı teklif yanlış
      tıklamalara optimize eder.

      **Çağrı dönüşümü hazır ve doğru ayarlı:** `Reklamlardan sesli arama
      yapma` · **arama süresi 60 saniye** · sayım **Bir** · **Birincil** ·
      30 gün · veriye dayalı ilişkilendirme.

      **⚠️ YENİ DÖNÜŞÜM İŞLEMİ OLUŞTURMAYIN — üç tanesi zaten vardı.**
      Sihirbaz "yeni oluştur" akışına sokuyor ve kategori ekranında küçük
      puntoyla *"bu kategori için 3 dönüşüm işlemi daha önceden ölçüldü"*
      diyor. Dördüncüsü oluşturulsaydı **aynı arama iki kez sayılacaktı** ve
      maliyet hesabı yarı yarıya yanlış çıkacaktı. Mevcut üçü:
      `Calls from Smart Campaign Ads` (kilitli, akıllı kampanyaya ait,
      duraklatıldı) · `Reklamlardan sesli arama yapma` (**kullanılan bu**) ·
      `Tıkla ve ara` (etkin değil). **Ders: dönüşüm kurmadan önce
      Hedefler → Dönüşümler → Özet listesine bakın.**

      **`Değer = ₺5` uydurma bir varsayılan.** Manuel teklifte zararsız ama
      raporlardaki **"Dönüşüm değeri" sütunu anlamsız** — 6 arama için "₺30
      değer ürettin" der. O sütuna bakıp kâr/zarar yorumu yapmayın. Gerçek
      değer, sahibinden **iş başına ortalama kâr** öğrenilince yazılacak.

      **Form dönüşümü (`/tesekkurler/`) henüz doğrulanmadı.** Sihirbazda
      "Web sitesindeki dönüşümler" işaretliydi ve GA4 (`549577275`) bağlı
      görünüyor, ama sayfa ziyareti dönüşümünün gerçekten kurulu olduğu
      **ölçülerek görülmedi**. C5 testinde ilk bakılacak yer burası.

      **Form gönderiminin adresi hazır: `/tesekkurler/`** (11.08.2026'da
      eklendi, gerekçesi "Form → /tesekkurler/ → WhatsApp" bölümünde). Ads'in
      "sayfa ziyareti" tipindeki dönüşümü buraya kurulur.

      **Buraya `/iletisim/` YAZILMAZ.** Sihirbaz bir alt sayfa yolu dayattığı
      için akla ilk gelen o oluyor; yanlış olur — iletişim sayfasını **açan
      herkes** müşteri adayı sayılır, gerçekte kimse yazmamışken dönüşüm
      görünür ve akıllı teklif o yanlış veriyle eğitilir.

      Dönüşüm çalışmıyorsa ilk bakılacak yer **A7**: etiket olmadan sayfa
      ziyareti dönüşümü hiç tetiklenmez ve bu **sessizce** olur.
- [x] **C2. KARAR VERİLDİ — 14.08.2026: çağrı süresi REKLAMIN İÇİNDEN
      ölçülüyor, siteye dokunulmuyor.**

      Madde "60 sn eşiği ancak yönlendirme numarasıyla ölçülür, o da sayfadaki
      numarayı değiştirmeyi gerektirir" diye açılmıştı. **Bu varsayım yanlış
      çıktı: Google'ın iki ayrı ürünü var ve karıştırılıyor.**

      | | Ne yapar | Site | Karar |
      |---|---|---|---|
      | **Arama öğesi** (call asset) | Yönlendirme numarasını **reklamın içinde** gösterir, konuşma süresini ölçer | dokunmaz | ✅ **kullanılıyor** |
      | **Web sitesi araması** dönüşümü | Siteye kod ekleyip **sayfadaki numarayı** ziyaretçiye göre değiştirir | değiştirir | ❌ **reddedildi** |

      İkincisi dönüşüm sihirbazında "Telefon aramaları" kutusunun altında
      **kendiliğinden listeleniyor** ve tek tek seçilemiyor. Endişe etmeye
      gerek yok: **siteye o kod eklenmediği sürece hiçbir şey yapmaz** —
      numara değişmez, dönüşüm kaydedilmez, satır sonsuza kadar sıfırda kalır.
      Listede boş bir satır olarak durması zararsız.

      Reddetme gerekçesi duruyor ve gevşetilmez: numara sayfanın en değerli
      pikseli; onu bir script'in sağlıklı yüklenmesine bağlamak, script geç
      gelirse veya hiç gelmezse **reklam parası ödenmiş ama telefon çalmamış**
      demektir. Üstelik sıfır-dış-istek hedefini de bozar.
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

- [x] **C8. KAMPANYA YAYINDA — 14.08.2026, kurulum sahibiyle ekran ekran
      birlikte yapıldı ve bitti.** Sahibi bildirdi: 11 reklam grubu ve kampanya
      etkinleştirildi, **akıllı kampanya aynı anda duraklatıldı.**

      **Kurulan yapı:** standart Arama · günlük bütçe ₺100 · maksimum TBM ₺5 ·
      arama ortakları ve Görüntülü **kapalı** · AI Max, geniş eşleme ve
      otomatik öğeler **kapalı** · konum dört ilçe + "bulunma" · dil yalnızca
      Türkçe · **11 reklam grubu, 112 anahtar kelime** (tam/öbek eşleme) ·
      her grupta H1 ile aynı kelimeleri taşıyan duyarlı arama reklamı.

      **11. grup sonradan eklendi ve gerekçesi ölçülebilir:** ilk on grup
      cihaz adına dayanıyordu, oysa insanların bir kısmı cihaz yazmadan
      *"beyaz eşya servisi"* arıyor — akıllı kampanyada tıklama alan
      terimlerden biri tam olarak buydu. `Beyaz Eşya Servisi` grubu ana
      sayfaya bağlandı (H1 zaten birebir uyuyor) ve **gruba özel alışveriş
      negatifleri** kondu (fiyatları · mağaza · taksitle · sıfır · outlet …),
      çünkü "beyaz eşya" kelimesini almak isteyenler de arıyor.

      **Öğeler:** arama uzantısı `0545 375 11 08` · WhatsApp mesaj öğesi ·
      dört açıklama metni · site bağlantıları. Hepsi sitenin söylediğiyle
      birebir aynı şeyi söylüyor.

      **⚠️ NEGATİF KELİMEDE İKİ KEZ AZ KALSIN KENDİ KELİMEMİZİ ÖLDÜRÜYORDUK.**
      Her ikisi de aynı hata: geniş bir kelimeyi kampanya seviyesine yazmak.
      | Yanlış olurdu | Ne öldürürdü | Doğrusu |
      |---|---|---|
      | çıplak `ankastre` (kampanya) | "ankastre bulaşık makinesi tamiri" | `"ankastre fırın"` · `"ankastre ocak"` · `"ankastre set"` |
      | `gaz kaçağı` (kampanya) | "klima gaz kaçağı adana" | kombi grubuna, **reklam grubu** seviyesinde |
      | `fiyatları` (kampanya) | "klima bakım fiyatı adana" | beyaz eşya grubuna, **reklam grubu** seviyesinde |
      **Kural: bir negatif kelimeyi kampanyaya yazmadan önce, o kelimenin
      BAŞKA bir grubun pozitif kelimesinde geçip geçmediğine bakın.** Negatif
      her zaman pozitifi ezer ve bu **hiçbir raporda görünmez** — sadece
      "o aramadan hiç çağrı gelmiyor" dersiniz.

      <details><summary>Kurulum öncesi tartışma (kayıt)</summary>

      **⚠️ SAHİBİ "AKILLI KAMPANYA KULLANIYORUM, GEREK VAR MI?" DİYE SORDU —
      12.08.2026. Cevap: C6'daki altı savunmanın BEŞİ akıllı kampanyada
      teknik olarak YOK.** Bu bir tercih meselesi değil, panelin sunmadığı
      ayarlar meselesi:

      | C6 kapısı | Standart Arama | **Akıllı kampanya** |
      |---|---|---|
      | Konum "bulunma" (ilgi değil) | ✔ tam kontrol | kısıtlı |
      | Arama ortakları + Görüntülü **kapatma** | ✔ | **✘ yok** — Arama, Haritalar, Görüntülü ve YouTube'a birlikte çıkar |
      | Tam/öbek eşleme + **negatif kelime** | ✔ | **✘ yok** — yalnızca "anahtar kelime temaları" |
      | Reklam programı 08:00–20:00 | ✔ | **✘ yok** — gece de yayında |
      | Düşük günlük bütçe (zarar tavanı) | ✔ | ✔ |
      | **IP hariç tutma** (C7'nin ilk hamlesi) | ✔ | **✘ yok** |

      **Sonuç: geçersiz tıklama başlarsa elde tek kaldıraç kalır — kampanyayı
      durdurmak.** C7'deki sıra (IP hariç tut → coğrafya/saat daralt → Google'a
      bildir) akıllı kampanyada uygulanamaz. Ayrıca C8'in 10. adımındaki negatif
      liste (ücretsiz · iş ilanı · nasıl yapılır · ikinci el …) ve 10b'deki
      kombiye özel liste (doğalgaz aboneliği · gaz kaçağı · kombi montajı)
      **girilemez** — yani yapmadığımız işin tıklaması ödenir.

      **Tavsiye: Standart Arama kampanyası.** Kurulum bir kereliktir (C8'in 12
      adımı), akıllı kampanyanın kolaylığı ise her gün para olarak geri ödenir.

      **Sahibi yine de akıllı kampanyada ısrar ederse** asgari koruma — bunlar
      panelde VAR:
      1. **Günlük bütçeyi çok düşük başlat.** Tek gerçek zarar tavanı bu.
      2. **Konumu Adana ile sınırla**, "ilgi" seçeneği varsa kapat.
      3. **Anahtar kelime temalarını haftada bir oku**, alakasız olanı sil —
         negatif kelime yerine geçecek tek araç bu.
      4. **Erken uyarı oranını izle (C7):** tıklama artarken `tel_click` +
         `whatsapp_click` + `form_submit` artmıyorsa gelen insan değildir.
         Bu ölçüm GA4'te hazır ve kampanya tipinden bağımsız çalışır.

      **"Reklam gerekli mi?" sorusunun ayrı cevabı:** telefonu **bu hafta**
      çaldıracak tek kanal reklamdır (Haritalar hafta, organik ay alır).
      Ama Haritalar artık **18 yorumla çalışıyor** — oradan çağrı geliyorsa
      reklamı ertelemek meşru bir karardır. Reklam açmamak organik sıralamaya
      zarar vermez; para yakmak verir.

      **Sahibinin kararı (12.08.2026, gece):** *"bunların ayarlarını yarın
      yapacağız birlikte tek tek ayar yapacağız."* Yani kurulum tek başına
      yapılmayacak; her ekranda ekran görüntüsü gelecek, ayar birlikte
      girilecek. **Bu oturum başlamadan kampanya YAYINA ALINMAZ.**

      Gerekçe C6'nın aynısı: bu ayarlar kampanya açılırken **bir kez** yapılır
      ve sonradan telafisi yoktur — yanlış kurulmuş bir kampanyada yanan para
      geri gelmez. Sahibi panelde, Claude yanında; ikisi olmadan ilerlenmez.

      **Oturumun sırası — atlanan adım para yakar:**

      | # | Ekran | Ne girilecek | Atlanırsa |
      |---|---|---|---|
      | 1 | Kampanya türü | **Arama** | PMax/Görüntülü bütçeyi alakasız yere dağıtır |
      | 2 | Hedef | "Hedef belirlemeden" · sorarsa `/tesekkurler/` | Sihirbaz kilitler |
      | 3 | Teklif | **Tıklamalar / Manuel TBM + üst sınır** | Dönüşüm verisi yokken akıllı teklif körü körüne harcar |
      | 4 | Konum | Adana · **"bulunma"** (ilgi DEĞİL) | Şehir dışı tıklamasını biz öderiz |
      | 5 | Ağlar | Arama ortakları ❌ · Görüntülü ❌ | İkisi de **işaretli gelir** |
      | 6 | Program | **08:00–20:00** | Gece: bot yoğun + telefon açılmıyor |
      | 7 | Bütçe | Düşük başla | Bütçe = günlük zarar **tavanı** |
      | 8 | Reklam grubu | **Cihaz başına bir grup** (9 grup — televizyon ve kombi 12.08.2026'da eklendi) | Sayfa-kelime uyumu düşer, TBM artar |
      | 9 | Kelimeler | **Tam/öbek** (`"…"` · `[…]`) | Geniş eşleme alakasız her şeyi eşler |
      | 10 | Negatifler | ücretsiz · iş ilanı · eleman · kurs · nasıl yapılır · kendim · devre şeması · video · ikinci el · satılık · yedek parça · bayilik | Tıklar, arayan olmaz |
      | 10b | **Kombi grubuna ÖZEL negatifler** | doğalgaz aboneliği · gaz açtırma · iç tesisat · gaz kaçağı · kombi montajı · kombi fiyatları · petek fiyatları · kombi satış | **Yapmadığımız işin tıklamasını öderiz.** Kombide kapsam gaz devresi HARİÇ (G3) — bu satır atlanırsa sayfa alakasız gelir, Kalite Puanı düşer |
      | 11 | Reklam metni | Başlıklar sayfa H1'iyle **aynı kelimeler** · açılış = ilgili para sayfası | Kalite Puanı düşer |
      | 12 | Uzantı | Arama uzantısı `0545 375 11 08` | Siteye girmeden arama kaybedilir |

      ⚠️ **11. adımda "yetkili servis" yazılmaz** (yasak 2) — marka şikâyeti
      bütün reklamları yayından kaldırır.

      **Yayına almadan önceki iki kapı:**
      1. **`AW-…` kimliği girilmiş ve test edilmiş olmalı** (A7 · C1). Kimliksiz
         yayın = para akar, rapor boş görünür, sahibi kurulumu doğru sanır.
      2. **C5 testi:** gerçek arama + gerçek form ile dönüşümlerin düştüğü
         doğrulanır.

      </details>

      **İLK GERÇEK GÜN — 19.08.2026: 91 gösterim · 6 tıklama · TO %6,59 ·
      ₺88,36 · ort. TBM ₺14,73 · 0 arama.** Kampanya 14.08'de açıldı ama ilk
      günler neredeyse boştu (12 gösterim, 0 tıklama, ₺0). Sıçramanın sebebi
      tek bir düzeltme:

      **Dört klima grubunda KONUMSUZ kelime yoktu.** 14 kelimenin 14'ünde de
      "adana" ya da ilçe adı geçiyordu; yani *"klima servisi"* yazan Adanalıya
      reklam **hiç çıkmıyordu** — çıkması için kendi şehrinin adını yazması
      gerekiyordu. Cihaz grupları (çamaşır, buzdolabı, TV…) doğru kurulmuştu,
      klima grupları ilk gün kurulduğu için gözden kaçmıştı. Konumsuz kelimeler
      eklenince gösterim **12 → 91**. **Ders: konum hedeflemesi zaten şehri
      sınırlıyor; kelimeye de şehir yazmak aynı filtreyi ikinci kez uygulamak
      ve havuzu gereksiz daraltmaktır.**

      **⚠️ GOOGLE KENDİ KENDİNE 20 GENİŞ EŞLEME KELİMESİ EKLEMİŞ.** Listede
      `eca kombi petek ısınıyor su ısıtmıyor`, `baymak kombide sıcak su
      gelmiyor`, `en yakın televizyon tamircisi` gibi satırlar çıktı — bunlar
      anahtar kelime değil, insanların yazdığı **arama terimleri**. Kaynağı
      **Öneriler → otomatik uygulama**. C8 kurulumunda geniş eşleme bilerek
      kapatılmıştı; Google onu kelime tarafından geri açıyor. Kelimeleri silmek
      **yetmez, otomatik uygulama ayarı kapatılmalı** yoksa ertesi gün geri
      gelir. İçlerinden değerli olanlar (`kombi tamircisi`, `tv tamircisi`,
      `buzdolabı tamircisi` …) **öbek eşlemeyle** geri eklendi — kelime iyiydi,
      eşleme türü yanlıştı.

      **Açık artırma tablosu (11–19.08) yanlış bir teşhisi önledi.** "Gösterim
      az, demek ki teklif düşük" varsayımı **ölçülünce çürüdü**: gösterim payı
      **%40,89** ve bu tablodaki **en yüksek** oran (rakiplerin hepsi %16'nın
      altında). Yani teklif seni açık artırmadan atmıyordu, **havuz küçüktü** —
      sebebi de yukarıdaki konumsuz kelime eksiği. Tablonun gösterdiği gerçek
      zayıflık başka: **sayfanın üst kısmı oranı %44,35, mutlak üst %15,40** ve
      rakipler birlikte görününce **%73–100** oranında üstte çıkıyor. Acil
      arıza arayan kişi sayfanın dibindeki reklama bakmaz. **Takip edilecek
      rakam tıklama sayısı değil, "sayfanın üst kısmı oranı" — hedef %80.**

      **Karar eşiği 30 tıklama.** 6 tıklamada 0 arama istatistiksel olarak
      normal aralıkta; "reklam çalışmıyor" demek için veri yok. 30 tıklamada
      hâlâ 0 arama varsa sorun reklamda değil sayfada veya telefonda aranır.

      **İlk hafta:** konum / IP / cihaz raporları **her gün** okunur (C6 · C7).
      İlk bakılacak yer tıklama başı maliyet değil, **arama gösterim payı**:
      maksimum TBM ₺5 piyasanın altında kalırsa reklam hiç görünmez, bütçe
      harcanmaz ve bu "talep yok" sanılır. **Sıra: önce teklif, sonra bütçe** —
      teklif yetersizken bütçe büyütmek hiçbir şeyi değiştirmez.

- [x] **C9. OLAY KAYDI — akıllı kampanyada ₺1.025 yandı, teşhis edildi,
      standart kampanyaya geçildi. 14.08.2026.** C7 "olayı bu dosyaya yaz"
      diyor; bu madde odur.

      **Belirti:** sahibi *"fake tıklama geliyor rakip firmadan"* dedi.
      Rakamlar: **1.530 gösterim · 92 tıklama · ₺1.025,50 · 1 telefon
      tıklaması · 0 dönüşüm.** Ertesi gün 50 tıklama daha, yine 0 arama.

      **İlk refleks doğruydu: ölçmek.** TO **%6,7** çıktı — yerel servis
      araması için tamamen sağlıklı bir oran. **Geçersiz tıklama saldırısında
      TO fırlar**, %6,7 gerçek insan davranışıdır. Yani saldırı kanıtı yoktu.

      **Asıl bulgu arama terimleri tablosundaydı:** 92 tıklamanın yalnızca
      **6'sında** arama terimi görünüyordu (₺275,81). Kalan **~86 tıklama
      (~₺750) aramadan gelmemişti** — Görüntülü ağ ve YouTube. Arama
      kampanyasında her tıklamanın bir arama terimi vardır; bu fark
      gizlenmeyle açıklanamaz. Yanlışlıkla basılan banner tıklaması niyeti
      sıfır olan trafiktir, aramaz.

      **İkinci bulgu teklifti:** tıklama başı ₺40–63'e çıkmıştı
      (*"beyaz eşya tamircisi"* ₺41, *"adana beyaz eşya tamir…"* ₺63).
      Adana'da yerel servis için bu tutar piyasanın çok üzerinde. Sebep
      "Tıklama sayısını en üst düzeye çıkarma" stratejisinin **teklif üst
      sınırı olmadan** çalışmasıydı.

      **Üçüncü bulgu sahibinin gözlemiydi ve teşhisi tamamladı:**
      *"önceden az az gelirdi, şimdi 400-500-600 gidiyor."* **Gösterim de
      fırlamıştı.** Bir saldırgan tıklama üretebilir ama **gösterim
      üretemez** — gösterim Google'ın reklamı nereye koyduğudur. Gösterim 10
      katına çıktıysa hedefleme genişlemiştir. Ekranda zaten yazıyordu:
      *"kampanyanızda ayrıntılı düzenlemeler yapıyoruz."* Akıllı kampanyada
      bu **kapatılamıyor** — panelde Öneriler/otomatik uygulama ekranı yok.

      **Yapılanlar:** standart Arama kampanyası kuruldu — arama ortakları ❌ ·
      Görüntülü ❌ · bütçe ₺100 · **maksimum TBM ₺5** · geniş eşleme devre
      dışı · otomatik öğeler kapalı · konum dört ilçe + "bulunma" · dil
      yalnızca Türkçe · negatif kelime listesi · IP hariç tutma. On reklam
      grubu (cihaz başına bir grup), her birinde kelimeler tam/öbek eşleme ve
      **H1 ile aynı kelimeleri taşıyan** duyarlı arama reklamı.

      **Ders 1:** "fake tıklama" şüphesi geldiğinde önce TO ve arama
      terimlerine bakın. Yanma sebebi sahtekârlık değil, **hedefleme ve
      teklif** olabilir — ve çözümü tamamen farklıdır.

      **Ders 2:** akıllı kampanyanın kolaylığı her gün para olarak geri
      ödeniyor. C8'deki tablo teorikti; bu olay onun faturasıdır.

      **Ders 3 — Google'ın filtresi çalışıyor.** Harcama bir gün içinde
      kendiliğinden ₺130'dan ₺90'a indi: geçersiz bulunan tıklamalar geriye
      dönük faturadan düşülüyor. "Hiç önlem yok" durumu değil; eksik olan,
      filtrenin kaçırdığını **sahibinin kesebilmesi** — o da yalnızca standart
      kampanyada mümkün.

- [x] **C10. ARAMA TERİMLERİ DENETİMİ — ilk 10 günde ₺1.915,63 harcandı,
      149 tıklama, 0 dönüşüm. 20.08.2026.**

      Kampanya toplamı (11–20.08): **2.854 gösterim · 149 tıklama · ₺1.915,63 ·
      ort. TBM ₺12,86 · 0 dönüşüm.** Sahibi "para gidiyor, arama gelmiyor"
      dedi; **arama terimleri raporu** ilk kez okundu ve paranın nereye gittiği
      kelime kelime görüldü. **Ders: anahtar kelime raporu senin yazdığını
      gösterir, arama terimleri raporu insanların YAZDIĞINI gösterir — israf
      yalnızca ikincisinde görünür.**

      **Beş delik bulundu:**

      | # | Kategori | Örnek | Ödenen |
      |---|---|---|---|
      | 1 | **Oto/araç klima** | araba klima taktırma · megane klima gazı kaç gram · ford focus klima soğutmuyor | ~₺28 + onlarca gösterim |
      | 2 | **Şehir dışı** | tatvan · gaziantep · kadirli · osmaniye · iskenderun | **₺63,71** (5 tıklama) |
      | 3 | **Marka yetkili servisi** | fujiplus (60+ gösterim) · klimacı nihat · iklimsa · daylux | **₺45,07** |
      | 4 | **"neden" araştırması** | buzdolabı neden soğutmaz (37 gös. · 4 tık.) · klima neden soğutmaz (20 · 1) | **₺91,57** |
      | 5 | **Hata kodu / ürün** | ch 38 · e5 · er 07 · klima temizleme spreyi koçtaş | **₺67** |

      **Konum hedeflemesi şehir dışını KESMİYOR.** Hedefleme kullanıcının
      bulunduğu yere bakar; arama metnindeki şehir adına bakmaz. Adana'daki
      biri "tatvan klima servisi" yazınca reklam çıkıyor ve tıklaması ödeniyor.
      **Şehir adları ayrıca negatif yazılmalı.**

      **TO farkı teşhisin merkezi:** *usta arayan* kelimeler
      (`klima taktırma` %100 · `klima montaj servisi` %67 · `beyaz eşya servis`
      %33) ile *araştırma yapan* kelimeler (`buzdolabı neden soğutmaz` %10,8 ·
      `klima neden soğutmaz` %5) aynı parayı ödüyor ama biri müşteri, diğeri
      okuyucu getiriyor. Düşük TO ayrıca Kalite Puanını düşürüp **aynı gruptaki
      bütün kelimelerin** tıklama fiyatını yükseltiyor.

      **"neden/nasıl" ailesi neden reklamdan kesildi — bu tartışıldı, sahibi
      "bunlar para kazandırmaz mı?" diye haklı olarak sordu.** Kesme gerekçesi
      "bu insanlar müşteri değil" değil; **bu aramaları kazanmak BLOG'un işi.**
      `src/content/yazilar/` altında tam bu sorgular için yazılmış 17 yazı var
      (`buzdolabi-sogutmuyor`, `klima-sogutmuyor`, `bulasik-makinesi-su-almiyor`
      …). Aynı aramayı bir de ₺14'e satın almak **aynı müşteriye iki kez para
      ödemektir.** Belirleyici olan bütçe kıtlığı: ₺100/gün ÷ ₺14 = **günde 7
      tıklama** — o 7 kişi tornavidayı değil telefonu eline almış olmalı.

      **Geri açılırsa doğru yolu şu:** ayrı `Arıza Araştırma` grubu, maksimum
      TBM **₺6**, açılış sayfası hizmet sayfası değil **ilgili blog yazısı**.
      Ana grupların Kalite Puanını bozmaz, ayrı ölçülür. Bugün yapılmadı —
      doğrulanmış iş çıkmamışken kampanya büyütülmez, sadeleştirilir.

      **Yapılan:** araba/oto · şehir dışı · marka yetkili servisi · araştırma ·
      ürün satın alma kategorilerinin tamamı kampanya negatifi olarak eklendi
      (sahibi 20.08.2026'da uyguladı). Her negatif, **başka bir grubun pozitif
      kelimesinde geçip geçmediği tek tek kontrol edilerek** yazıldı — C8'deki
      ankastre/gaz kaçağı/fiyatları dersinin uygulaması.

      **Kapatılmamış çelişki:** `"adana klima temizliği fiyatları"` 3 tıklama ·
      ₺44,68 aldı, ama A3 kararıyla sitede **fiyat yok**. Parayla getirilen
      kişi aradığını bulamadan çıkıyor. Ya fiyat aramaları kesilecek ya siteye
      aralık konacak; sahibine soruldu, karar bekliyor.

- [x] **C11. HESAP KİMLİĞİ BABANIN FİRMASINDAN SAHİBİNİN KENDİ ADINA
      TAŞINDI — 20.08.2026.**

      Ödeme profili **"Çağrı Beyaz Eşya Teknik Servis"** → **"Hayri Gök"
      (bireysel)**. Kimlik + fotoğraf doğrulaması yapıldı.

      **Neden taşındı:** doğrulama ekranı kuruluş tescil belgesi istiyordu ve
      hesap **Gökpluss** (babanın firması) üzerinden beyan edilmişti. İki risk
      vardı: **(1)** ortak ödeme profiline bağlı hesaplarda bir yaptırım
      diğerine de işleyebiliyor — babanın `gokplussyetkiliservis.com` alan adı
      **"yetkili servis"** ibaresi taşıyor ve marka şikâyeti riski var
      (yasak 2'nin tam olarak koruduğu şey). **(2)** Baba ayrı bir Ads
      hesabından **aynı şehirde aynı hizmetlere** reklam veriyor; iki hesap da
      Gökpluss adına olsaydı Google'ın **çoklu hesap / çift yayın** politikası
      kapsamına girerdi.

      **Bireysel profil vergi levhası istemiyor** — yalnızca kimlik. Sahibinin
      kayıtlı işletmesi yok, bu yüzden tek uygun yol buydu.

      **⚠️ DÜZELTME — "ödeme profili değiştirilemez, yeni hesap gerekir" dedim,
      YANLIŞTI.** Faturalandırma → **"Ödeyecek kişiyi değiştirin"** düğmesiyle
      panelden yapılabiliyor. Kampanya, geçmiş ve kelimeler korunuyor.

      **Doğrulama son tarihi: 18 Eylül 2026.** Kaçırılırsa reklamlar durur.
      Bant ayrıca *"reklamlarınızdan bazıları duraklatılmış veya sınırlanmış
      olabilir"* diyor — düşük gösterimin bir sebebi bu olabilir.

      **Para tarafı:** eski profildeki bakiye iadeye çıktı — **₺3.046,96**,
      26 Ağustos'a kadar Mastercard ••••5025'e. (₺61 fark promosyon kredisi,
      iade edilmiyor.) **Yeni profil ₺0 ile başlıyor ve ödeme yöntemi MANUEL —
      bakiye sıfırken reklam durur.** Profil değiştirildiğinde kart da
      taşınmıyor, ayrıca eklenmeli.

- [x] **C12. AÇIK ARTIRMA TABLOSU: SORUN GÖRÜNMEMEK DEĞİL, DİPTE GÖRÜNMEK —
      20.08.2026.**

      Sahibi *"elemanlar üst sırada olduğu için onlar aranıyor"* dedi;
      11–20.08 tablosu bunu doğruladı ama tabloda daha önemli iki şey vardı.

      | Ölçüt | Siz | Rakipler |
      |---|---|---|
      | **Gösterim payı** | **%44,20** (tablodaki **en yüksek**) | %10–16 |
      | Sayfanın üst kısmı oranı | **%45,83** | %62–93 |
      | Mutlak 1. sıra | **%16,50** | %22–70 |

      Rakiplerin "daha üst konum oranı" %78–100 arasında
      (`adanaklimaservisi.com.tr` **%99,36**, `724servismerkezi.com` ve
      `adanaserviskayit.com.tr` **%100**).

      **Teşhis: açık artırmadan atılmıyorsun, dibe düşüyorsun.** Küçük bütçeyle
      yapılabilecek en kötü takas bu: **%44 açık artırmada 5. sırada olmak,
      %20'sinde 1. sırada olmaktan kötüdür** — dipteki gösterim tıklanmaz,
      yalnızca TO'yu ve Kalite Puanını aşağı çeker, sonraki tıklamayı
      pahalılaştırır.

      **⚠️ SENİ GEÇENLERİN YARISI TAMİRCİ DEĞİL — ÇAĞRI TOPLAYICI.**
      `yetkiliservisliste.com.tr` · `adanaserviskayit.com.tr` ·
      `724servismerkezi.com` · `arizakayitmerkezi.com.tr` ·
      `bolgeselmerkezservisi.com` · `armut.com` kendileri tamir yapmıyor;
      çağrıyı alıp ustaya yönlendiriyor veya satıyorlar. Bir çağrıyı klimacıya
      da tesisatçıya da satabildikleri için **tıklama başına yapısal olarak
      daha fazla ödeyebiliyorlar.** Gerçek rakipler yalnızca `adanabelisklima`,
      `oskarservis`, `adanaklimaservisi`, `aslanteknikservis` ve
      `gokplussyetkiliservis` (babanın firması).

      **Sonuç — bu bir strateji kuralıdır:** zirveyi teklifle satın almaya
      çalışmak, iş modeli farklı firmalarla fiyat yarışına girmektir ve
      sürdürülebilir değildir. Çağrı toplayıcılar **Haritalar'da** senin yerini
      alamaz (dükkânları da yorumları da yok). Reklamda 1. sıra her gün
      yeniden satın alınır; **Haritalar'da 1. sıra bir kez kazanılır** — D4
      neden kapanmıyor, sebebi bu.

      **Teklif stratejisi "öğreniliyor" durumunda — bir hafta DOKUNMAYIN.**
      Her strateji değişikliği öğrenmeyi baştan başlatır ve net sonuç hiç
      görünmez. Bu süreçte tek değişken **bütçe** olmalı.

      **Huninin çalıştığı kanıtlandı (20.08):** arama öğesi **5 tıklama** aldı,
      sahibine **2 gerçek arama** geldi. Butona basıp vazgeçme normaldir; hat,
      numara ve yönlendirme sağlam. Yani "çağrılar kayboluyor" ihtimali elendi.
      **Ama `Dönüşümler = 0` kimsenin aramadığını KANITLAMAZ:** kurulumda
      yalnızca reklamın içindeki arama butonundan yapılan çağrılar sayılıyor
      (C2 kararı — siteye numara değiştiren kod eklenmedi). Siteye girip
      oradaki numarayı arayan **hiçbir raporda görünmez.** Reklamın iş getirip
      getirmediği bu yüzden **yalnızca sahibinin tuttuğu çağrı kaydıyla**
      bilinebilir.

      **İki arama öğesi var, ikisi de aynı numara** — 13 Ağu (TO %9,09) ve
      14 Ağu (TO %2,63). Gösterim ikiye bölünüyor; ölçüm yapan hangisiyse o
      kalmalı, diğeri duraklatılmalı.

- [ ] **C13. ₺16.777 · 1.449 TIKLAMA · 0 ARAMA — 02.10.2026. Sahibi bütçeyi
      ₺1.500/güne çıkardı, arama gelmedi.** Üç rapor (anahtar kelime · arama
      terimleri · açık artırma, 01.08–02.10) okundu.

      **Bu artık "veri az" durumu değil.** C8'deki eşik 30 tıklamaydı; 48 katı
      geçildi. Kelime ayarıyla çözülecek bir sapma değil, zincirde kopuk bir
      halka var. **Elenen:** site — canlıda telefon `tel:05453751108` ×6,
      WhatsApp ×4, `tel_click` ×6, GA4 etiketi sayfada (02.10, üç sayfa).

      **Ölçülen:**
      | | |
      |---|---|
      | Arama terimi görünmeyen tıklama | **778 / 1.449 (%54) · ₺8.999** — C9'daki Görüntülü ağ belirtisinin aynısı, **ağ ayarı kontrol edilecek** |
      | Gösterim payı | %44 → **%31** · üst kısım %51 · mutlak üst %21 — rakipler %66–91 üstte |
      | Teklif tavanı | tıklama başı neredeyse hiç ₺15'i geçmiyor → bütçe artışı **konum satın almıyor**, dipte daha çok gösterim alıyor |
      | Geniş eşleme geri gelmiş | `klima tamircisi` ₺462 · `adana klima temizleme` ₺603 · `kombi servis` ₺1.010 — otomatik uygulama hâlâ açık olabilir |
      | Şikâyet/araştırma kelimeleri | ~₺4.700 (%29) — çoğu "Sınırlı · düşük kalite", TO %1–3 |
      | Sayaç, son 7 gün | **~93 farklı gerçek ziyaretçi** (`gclid`'li) · Google'ın kendi denetimi 123 adres |

      **Sayaç tuzağı:** neredeyse her ziyaretçi **aynı dakikada 2 ya da 4 kez**
      sayılıyor (Google'ın denetim sunucuları da öyle). Bu, ayrı ücretli
      tıklama değil; büyük ihtimalle tarayıcının ön yüklemesi ya da yenileme.
      "Şüpheli" listesindeki 3–4'lük kayıtların hepsi tek dakikalık — yani
      Ads'e eklenen 6 sabit hat IP'si **gerçek müşteri olabilir.** Eşik aynı
      dakikadaki tekrarları birleştirmeden kullanılmamalı.

      **Açık sorular — cevap gelince sırayla:** (1) Ads son 7 gün tıklama
      sayısı ↔ sayaçtaki ~93 · (2) Segment → Ağ · (3) Segment → Tıklama türü
      (telefon tıklaması var mı) · (4) GA4 → Etkinlikler: `tel_click` /
      `whatsapp_click` / `form_submit` · (5) sahibinin cevapsız çağrı listesi.
      **Tavsiye: teşhis bitene kadar bütçe ₺300.**

      **(1) cevaplandı, 02.10.2026 — tıklamalar siteye ULAŞIYOR.** Ads son 7
      gün (26.09–02.10): **114 tıklama · ₺1.514,89** (günde ~₺216; ₺1.500'lük
      bütçe harcanmıyor, sınırı teklif tavanı koyuyor). Sayaç aynı dönemde
      **~93 farklı gerçek ziyaretçi** gördü, çoğu Adana — kayıp normal
      aralıkta. Yani sahte tıklama/bot teşhisi **elendi**; Adana'dan gerçek
      insanlar siteye geliyor. Kombi (₺425, haftanın %28'i) ve TV grupları
      hafta içinde duraklatılmış.

      **Kör nokta:** Ads'in "0 dönüşüm"ü yalnızca reklamın içindeki ara
      düğmesini sayıyor (C2). **Siteden yapılan arama hiçbir raporda yok**;
      GA4 `tel_click` de onay bandını kabul etmeyen ziyaretçide gitmiyor.
      Geriye tek ölçü kalıyor: **sahibinin telefon kaydı.** Sıradaki soru o.

      **DÜZELTME, aynı gün — sahibi açıkladı: "arama yok" telefonu değil,
      ÜST SIRAYI kastediyordu.** *"Reklam çalışıyor fakat üst gösterimlerde
      yer almıyoruz… beyaz eşya servisi yazınca önüme çok firma geçiyor."*
      Ölçüm de bunu söylüyor: `"beyaz eşya servisi"` son 7 günde 22 gösterim,
      **0 tıklama**. Sahibinin hedefi: **Google'ın yatırdığı ₺8.000 promosyon
      kredisiyle** üst sıraya oynamak.

      **Plan — "geniş ve alçak" yerine "dar ve yüksek":** açık artırmada en
      üstte duranlar (`adanaklimabakimi` %91 üst · `aslanteknikservis` %85)
      gösterim paylarının **%10'un altında** olduğu yerde bile tepede — az
      kelimeye yüksek teklif veriyorlar. Biz %31 payla yayılıp dipte
      kalıyoruz. Sıra: (1) kredi bitiş tarihi + kelimelerin "üst kısım
      tahmini teklifi" · (2) düşük kaliteli şikâyet kelimelerini durdur,
      geniş eşlemeleri öbeğe çevir · (3) teklif stratejisi → **Hedef gösterim
      payı, sayfanın üst kısmı**, tavanlı · (4) **bütçe = kredi ÷ kalan gün**
      (₺1.500'de bırakılırsa teklif yükselince kredi günler içinde biter ve
      karta geçer) · (5) konum öğesi (İşletme Profili bağlantısı) · (6) TV
      grubunu aç. **Ölçü:** telefonda "bizi nereden buldunuz?" sorusu.

      **Kredi:** kalan **₺7.113,15**, son kullanma **28.11.2026** (sahibi
      bildirdi, 02.10). Kalan ~57 gün → krediyi tarihe kadar yaymak günde
      ~₺125 demek. Bütçe kararı 4. adımda, teklif tahminleri görüldükten sonra.
      **Sahibine adımlar TEK TEK veriliyor** — bir adım, "bitince haber ver".

      **Adım 1 sonucu (Kalite Puanı, 01.09–02.10, ₺10.154):** teklif tahmini
      sütunları **boş** — otomatik teklif stratejisinde Google göstermiyor.
      Kalite Puanı: arıza belirtisi kelimelerinin **hepsi 1–2** (çamaşır ×8,
      bulaşık ×4, buzdolabı "çalışmıyor/su akıtıyor", `kombi servis` geniş
      ₺840) → **₺1.912 (%19)** bu kelimelere. Hacimli ana kelimeler **3**
      (`klima servisi`, `klima temizleme` ₺485, `buzdolabı soğutmuyor` ₺491,
      `televizyon tamircisi` ₺1.419). 5–8 alanlar: `beyaz eşya servisi` 6,
      `klima taşıma` 6, `klima bakımı` 5, `buzdolabı tamir` 5, `adana …`
      kalıpları 5–8. **Puan 1–2 olan kelime hiçbir makul teklifle üste
      çıkamaz** (rakip puanı 7 ise aynı sıraya ~4–7 kat teklif gerekir).
      Adım 2: Kalite Puanı 1–2 olanları duraklat.

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
- [x] **D3. `Markalar.astro` şeridi EKLENDİ — sahibinin onayıyla, 12.08.2026.**

      Marka adları önce yalnızca SSS metnine konmuştu; sahibi *"gözüksün
      açıklamalarda falan"* deyince görünür bir şerit soruldu ve **"evet, ayrı
      bir şerit ekle"** cevabı geldi. Blok sırasına kutu eklemek onay
      gerektiriyor (iskele kuralı), onay alındı.

      **Yeri: `ArizaCozum` ile `Surec` arasında.** Gerekçe akış: ziyaretçi
      "cihazımda bu arıza var" dedikten hemen sonra aklına gelen soru
      *"peki BENİM markama bakıyor mu?"* — cevap tam orada veriliyor, sonra
      "nasıl çalışıyoruz" (Surec) geliyor. **Zemin beyaz**, çünkü komşuları
      zemin ve lacivert: renk ritmi zemin → beyaz → lacivert korunuyor.

      Şeridin üç parçası ve hiçbiri süs değil:
      1. **Marka rozetleri** (11 ad) — düz metin.
      2. **Turuncu "ve diğer bütün markalar" rozeti** — A6'nın kapsayıcılık
         kuralının GÖRSEL hâli. Kapalı liste, listede olmayan markanın
         sahibini kaybettirir. **Kaldırmayın.**
      3. **"Yedek parça" kutusu** — `firma.parcaPolitikasi`.

      **⚠️ ÜRETİCİ LOGOSU BASILMAZ.** Logo, "yetkili servis" ibaresinin görsel
      hâlidir ve yasak 2'nin aynı riskine girer. Şeridin altındaki reddi beyan
      (bayilik yok · marka adları sahiplerine aittir) da kalkmaz.

      Ölçüldü: 412 px'te yatay taşma **0**, sayfa 87,5 → **92 KB** ham
      (bütçe 500 KB), yeni JS **yok**, marka yoğunluğu %0,83 → **%1,55**
      (doldurma seviyesinin hâlâ çok altında).

- [x] **D6. Yedek parça politikası yazıldı — 12.08.2026. "Önce orijinal,
      yoksa muadil."**

      Sahibi başta *"tüm marka orijinal tamiri yapılır yaz"* dedi. **Koşulsuz
      "orijinal parça" iddiası yazılmadı**, önce soruldu — ve gerçek işleyişin
      farklı olduğu ortaya çıktı: orijinal öncelikli, bulunmayan modellerde
      muadil.

      **Neden sorulması şarttı:** bağımsız bir servisin 11 markanın tamamında
      orijinal parça garantisi vermesi güçlü bir iddiadır; bir müşteri muadil
      çıktığını söylerse savunması yoktur ve **yanıltıcı reklam** (Ticari
      Reklam ve Haksız Ticari Uygulamalar Yönetmeliği) kapsamına girer —
      sahte yorum yasağıyla (yasak 3) aynı yönetmelik. Ayrıca marka adının
      yanında "orijinal" demek yetki imasına yaklaşır (yasak 2).

      Yazılan metin hem doğru hem de sitenin **"önce söyleriz"** çizgisiyle
      tutarlı: hangi parçanın takıldığı ve varsa fiyat farkı işleme başlamadan
      söyleniyor. **Ders: sahibinden gelen bir cümle bile olsa, iddia
      içeriyorsa doğrulanmadan yazılmaz.**
- [ ] **D5. Arıza rehberine yazı ekle — teknik SEO bittiğine göre artık
      sıralamayı gerçekten değiştirecek iki işten biri (diğeri A5).**

      **19 yazı yayında (29.07.2026'da 6 → 11 → 16 · 12.08.2026'da 19).**
      **11 hizmetin 11'i de en az bir yazıyla temsil ediliyor — yazısız hizmet
      kalmadı.** İlk turlarda o günkü sekiz hizmetin boşlukları kapatılmıştı;
      sonradan üç hizmet eklenince oran 8/11'e düştü ve 12.08.2026'da televizyon,
      kombi ve klima montajı yazılarıyla **11/11'e** çıkarıldı.

      **Bundan sonrası "boşluk kapatma" değil "derinleştirme".** Ölçüt de
      değişti: yeni yazı artık *hangi hizmetin yazısı yok* diye değil,
      **G1'deki Search Console raporuna göre** seçilmeli — gösterimi olup
      tıklanmayan sorgu, yazılacak bir sonraki yazıdır. Tahminle yazmaya devam
      etmek, veri varken veriyi görmezden gelmek olur.

      | Hizmet | Yazı |
      |---|---|
      | çamaşır makinesi | 4 (su boşaltmıyor · E10 · sıkma yapmıyor · titriyor) |
      | klima servisi | 2 (soğutmuyor · su damlatıyor) |
      | bulaşık makinesi | 2 (su almıyor · kurutmuyor) |
      | buzdolabı | 2 (soğutmuyor · su akıtıyor) |
      | kurutma makinesi | 1 · klima bakımı | 1 (kötü kokuyor) |
      | klima gaz dolumu | 1 (gaz ne zaman biter) |
      | **kombi** | **1** (petekler ısınmıyor) |
      | **televizyon** | **1** (ses var görüntü yok) |
      | **klima montajı** | **1** (taşınırken nasıl sökülür) |
      | (hizmetsiz) | 1 (ne kadar tutar) |

      **12.08.2026'da eklenen üç yazı — üçü de kapsam sınırına göre
      seçildi, keyfî değil:**

      - **`petekler-isinmiyor`** (kombi) bilerek **hava alma ve dolaşım**
        üzerine kuruldu. Kombinin en yüksek hacimli şikâyet aramalarından biri
        olmasının yanında, **gaz devresine hiç girmeden** yazılabilen tek güçlü
        konu buydu — G3'teki kapsam sınırıyla birebir uyumlu. Yazı sonunda gaz
        hattına bakmadığımız ayrıca yazılı, yani blog ile para sayfası aynı şeyi
        söylüyor. Ölçüldü: yazıda gaz/yetki vaadi **0**.
      - **`televizyon-ses-var-goruntu-yok`** okuyucuya **el feneri testini**
        yaptırıyor. Bu bilinçli: test on saniye sürüyor, hiçbir riski yok ve
        sonucu bize telefonda söylendiğinde arızanın aydınlatmada mı
        elektronikte mi olduğunu yola çıkmadan ayırıyor — yani yazı hem
        okuyucuya hem servise yarıyor.
      - **`tasinirken-klima-nasil-sokulur`** (klima montajı) **gaz toplama**
        (pump down) üzerine kuruldu. Sebebi ticari: söküm + taşıma + yeni adrese
        montaj, sitedeki en yüksek bilet işlerinden biri ve arayan kişi zaten
        taşınma tarihi belli olduğu için **niyeti kesin** olan bir müşteri.
        Yazının asıl işlevi okuyucuya **ustayı denetleyecek sırayı** vermesi:
        dördüncü adımda manometre kullanılmıyorsa işlem "yaklaşık" yapılıyor
        demektir. Rakip siteler bu adımı hiç anlatmıyor.

      **Üçünde de uyarı kutusu var ve cihaza özgü** (kural: okuyucuya elle
      iş yaptıran her yazıda zorunlu, giriş paragrafından hemen sonra):
      kombide **purjörü sökmeyin/gevşetin** ayrımı, 70 dereceyi aşan kalorifer
      suyu ve gaz kokusunda elektrik düğmesine dokunmama; televizyonda **arka
      kapağı açmayın** — fiş çekildikten sonra bile gerilim tutan kondansatörler
      ve desteklenmeden kaldırıldığında çatlayan cam panel; klima sökümünde
      **rakordan çıkan gazın soğuk yanığı** ve dış ünitenin iple indirilecek bir
      yük olmadığı.

      **Üçü de sert doğruyu söylüyor, yumuşatmayın:** kombi yazısı "su
      eklemek çözüm değil, kaçağı geciktirir ve tesisatı çamurlandırır" diyor;
      televizyon yazısı **panel değişimini açıkça önermiyor** ("karşılığını
      almayacağınız bir işe para harcatmak bizim işimiz değil"); montaj yazısı
      **klimanın söktürülmeye değmeyeceği üç durumu** sayıyor. Üçü de kısa
      vadede bir iş kaçırabilir — `klima-gazi-ne-zaman-biter` ile aynı duruş.

      Sıradaki diğer adaylar: kombi basıncı sürekli düşüyor, ekranı kırık
      televizyon tamir edilir mi, bulaşık makinesi koku yapıyor, çamaşır
      makinesi kokuyor, buzdolabı çok ses yapıyor, kurutma makinesi hata
      veriyor, klima açılmıyor, fırın kapağı buğulanıyor.

      **`klima-gazi-ne-zaman-biter` yazısı bilerek sert bir doğruyu söylüyor:**
      gaz "bitmez", kaçar; kaçak bulunmadan yapılan dolum aynı parayı birkaç ay
      sonra tekrar harcatır. Bu, "her yıl gaz bastırın" diyen rakiplerin
      tersidir ve kısa vadede bir gaz dolumu işini kaçırabilir — ama sitenin
      tamamının dayandığı "önce bakarız, sonra söyleriz" duruşuyla tutarlı ve
      güven kuruyor. **Yumuşatmayın.**

      **İlk turda düzeltilen iki şey:** (1) ilgili yazı seçimi döngüsel hâle
      getirildi — iç link dağılımı 1–11'den 2–6'ya indi, ayrıntı ve yanlış
      çıkan tahminin kaydı "Canlı SEO denetimi" bölümünde. Ölçüm 16 ve
      **18 yazıyla** tekrarlandı, dağılım her ikisinde de **2–6 aralığında
      kaldı**, yetim yazı yok. Yani döngüsel seçim yazı sayısı arttıkça
      bozulmuyor — asıl kanıtlanmak istenen buydu.
      (2) `buzdolabi-sogutmuyor` yazısında uyarı kutusu eksikti, eklendi (buzu
      sivri cisimle kazımak — borular buzun hemen altında).

      Yazı eklemek = `src/content/yazilar/`
      içine tek markdown dosyası; rota, sitemap ve liste kendiliğinden güncellenir.
- [ ] **D4. YORUM — İLK HEDEF AŞILDI (18 yorum, 12.08.2026). Madde kapanmadı,
      niteliği değişti: "toplamak"tan "akışı sürdürmek"e döndü.**

      **Panelin uzun süre yanlış olduğu yer burasıydı.** 29.07'de "0 yorum"
      yazılmıştı ve iki hafta boyunca öyle kaldı; sahibi 12.08'de düzeltti.
      **Ders: sahibinin panelde yaptığı işi bu dosya göremez** — G1'de aynı
      hata olmuştu (Search Console "kurulmadı" sanılmıştı). Sahibe ait bir
      sayı yazarken tarihini ve kaynağını da yazın, yoksa bayatladığı fark
      edilmez.

      **Neden kapanmıyor:** yerel sıralamada yorum **sayısı kadar tazeliği**
      de sinyal. Üç ay yorum gelmeyen profil, 18 yorumla da olsa zayıflar.
      Maliyeti sıfır olduğu için durdurmanın gerekçesi yok.

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

- [ ] **E3. "ARACI KURUM" + SORUMLULUK REDDİ — `/kullanim-kosullari/` sayfası
      eklendi, 01.10.2026. Metin SAHİBİNİN KARARI; avukat incelemesi sahibinde
      (brifing 8. bölüm). Tekrar tartışmayın.**

      Sahibi önce *"aracı kurum olduğumuzu yaz"* dedi, sorulunca netleşti:
      *"hem biz yapıyoruz işi hem de dışarıya da veriyoruz"* ve *"sorumluluğun
      bize ait olmadığını, gelen ustanın olduğunu"* yazılmasını istedi.
      Riskler (Google İşletme Profili'nin yalnızca-yönlendirme yapan firmaları
      kabul etmemesi · "aracı kurum"un SPK terimi olması · sorumluluk reddinin
      TBK m.115–116 / 6502 m.5 karşısında müşteriye karşı tutmayabileceği ·
      asıl korumanın ustalarla yazılı sözleşme olduğu) **bir kez anlatıldı**;
      sahibinin cevabı: *"sen dediğimi yap, etik kısmını sorgulama, orayı ben
      hallediyorum."* **Bu yüzden ifade sahibinin istediği gibi:** "aracı kurum"
      açıkça yazılı, sorumluluk bütün işlerde "işi yapan ustada", "tüketici
      haklarınız saklıdır" çekincesi yok.

      **Yapılanlar:**
      - **`/kullanim-kosullari/`** — yeni sayfa. **Arama motorlarına KAPALI**
        (`dizinlenmesin` → noindex · sitemap `HARIC`) — sahibinin isteği: arama
        sonucu ve yapay zekâ özetleri firmayı "aracı kurum" diye değil
        "beyaz eşya servisi" diye tanıtsın. `llms.txt` de bu sayfaya bağlanmaz. Kapsam ·
        işi kim yapar · sorumluluk · ücret ve onay · marka adları · arıza rehberi
        bilgilendirmesi · "bir sorun olursa önce bizi arayın" · kişisel veriler.
        **Hakem heyeti / tüketici mahkemesi paragrafı kaldırıldı** (sahibi:
        "olmamış, avukat yazsın") — metni avukat yazmadan geri konmaz.
      - **Footer'da METİN YOK, yalnızca bağlantı** — "Site" sütununda
        "Kullanım koşulları". Sahibi: *"ana sayfada gözükmesin, tıklayıp
        görsünler."* Önce footer'a görünür bir hukuk bloğu konmuştu, bu istekle
        kaldırıldı; footer'ın alt şeridi eski hâline (marka reddi beyanı) döndü.
      - `/kvkk/` 4. bölüm → **ustaya aktarım paragrafı.** Eski *"hiçbir üçüncü
        kişiye devretmiyoruz"* cümlesi **yanlışa dönmüştü**, kaldırıldı. İkisi
        BİRLİKTE hareket eder.

      **Sahibinin verdiği bilgiler — sayfadaki iddialar bunlara dayanıyor:**
      | Soru | Cevap | Sayfadaki karşılığı |
      |---|---|---|
      | Faturayı kim keser? | **Usta** — firma yalnızca **komisyon** alır | "faturayı usta keser" yazılı · komisyon **yazılmadı** |
      | Parça garantisini kim verir? | **Usta** | "Değişen parça garantili" sözü dışarı verilen işte de **doğru kalıyor** |
      | Müşteriye önceden söyleniyor mu? | **Hayır** — siteden öğrendiği varsayılıyor | — |

      Bu cevaplardan biri değişirse `kullanim-kosullari.astro` 2. ve 3. bölüm
      düzeltilir.
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

- [x] **G2. CEVAP GELDİ — hizmet bölgesi DÖRT İLÇE, hepsi tam kapsam.
      12.08.2026.** Sahibinin sözleriyle: *"Adana'daki Seyhan, Yüreğir,
      Çukurova, Sarıçam'daki tüm mahalleler semtler hepsine gidiyoruz."*

      **Bu, 30.07'deki "Adana'nın çoğu ilçesine gidiyoruz" ifadesini
      NETLEŞTİRİYOR** — ad ad sorulduğunda gelen liste bu dört ilçe. Yeni ilçe
      **açılmayacak**; Ceyhan, Kozan, İmamoğlu, Karaisalı, Karataş, Yumurtalık,
      Aladağ, Feke, Saimbeyli, Tufanbeyli ve Pozantı kapsam dışı kalıyor.

      **Kapsam 4 ilçe × 11 hizmet = 44 para sayfası olarak sabitlendi.**
      Gidilmeyen ilçeye sayfa açmak doorway page'dir ve ceza tüm siteye işler;
      elimizde artık net bir liste olduğu için o riski almaya gerek yok.

      **Sitede yapılan karşılığı — tereddütlü dil kesin dile çevrildi.**
      Sayfalar "gidiyorsak", "geliyorsak" gibi hedge'lerle yazılmıştı; sahibi
      kesin konuşurken sitenin tereddüt etmesi dönüşüm kaybıdır:
      - Ana sayfa SSS'i: *"…geliyorsak kaç dakikada varacağımızı…"* →
        *"bu ilçelerin bütün mahalle ve semtlerine"*
      - `/iletisim/` ve hizmet hub'ları aynı şekilde güncellendi
      - `IlceBlogu` mahalle kutusu **geri geldi** (aşağıda)

      **⚠️ Aynı anda GERÇEK BİR YANLIŞ VAAT düzeltildi.** Ana sayfa
      *"Her ilçe için ayrı sayfa hazırlıyoruz: **ulaşım süresi**, gittiğimiz
      mahalleler ve o bölgede sık çıkan arızalar orada yazılı"* diyordu.
      Ulaşım süresi `ulasimDk = 0` kararıyla **hiç basılmıyor** (A2), mahalle
      kutusu da o gün basılmıyordu — yani ziyaretçiye iki şey vaat edilip
      ikisi de verilmiyordu. A3'te düzeltilen "söz veren metin, karşılığı
      olmayan içerik" hatasının aynısı. Cümle gerçeğe çekildi.

      **Kapsam daralırsa** (uzak bir mahalleye gidilmiyorsa)
      `firma.mahalleKapsami` **hemen** güncellenir — o alan artık bir vaattir,
      yasak 1'e tabidir.

      Kapsam yeniden büyütülmek istenirse madde yeniden açılır; o zaman aşağıdaki
      "aynı gün / randevuyla" ayrımı yine gerekir.

      <details><summary>Kapanmadan önceki hâli (kayıt)</summary>

      Site şu an **4 ilçe** (Seyhan, Çukurova, Yüreğir, Sarıçam) × 11 hizmet =
      44 para sayfası. Adana'nın kalan **11 ilçesi** kapsam dışı: Ceyhan,
      Kozan, İmamoğlu, Karaisalı, Karataş, Yumurtalık, Aladağ, Feke, Saimbeyli,
      Tufanbeyli, Pozantı. Her biri **11 yeni para sayfası** demek.

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

      </details>

- [ ] **G3. `klima-montaji` (30.07.2026) · `televizyon-tamiri` +
      `kombi-bakim-onarim` (12.08.2026) EKLENDİ. Kalan adaylar için cevap
      bekleniyor.**

      Yayındaki **10 hizmet**: `klima-servisi` · `klima-bakimi` ·
      `klima-gaz-dolumu` · `klima-montaji` · `camasir-makinesi-tamiri` ·
      `bulasik-makinesi-tamiri` · `buzdolabi-tamiri` ·
      `kurutma-makinesi-tamiri` · `televizyon-tamiri` · `kombi-bakim-onarim`.

      **⚠️ `firin-ocak-tamiri` KAPATILDI — 14.08.2026, sahibi bildirdi:
      *"fırın ocak tamiri yapmıyoruz."*** Hizmet uzun süre yayındaydı ve
      **yapılmayan bir işi vaat ediyordu** (yasak 1): 1 hub + 4 ilçe sayfası,
      menüde, ana sayfada, iki blog yazısı. "adana fırın tamiri" arayan biri
      organik olarak düşüp arayabilirdi — gelen çağrıya "biz ona bakmıyoruz"
      demek en pahalı kayıp türüdür.

      Yapılanlar: `hizmetler.json` → `aktif: false` (kayıt **silinmedi**, iş
      bir gün yapılırsa tek satırla geri açılır) · iki blog yazısı
      (`firin-isinmiyor`, `ocak-atesleme-yapmiyor`) **silindi** · Sarıçam
      `yerelNotlar` aralığı "klima montajından **kombi bakımına**" oldu ·
      ana sayfa cihaz listesinden ve `OlcuSeridi` notundan çıkarıldı.
      Sayfa **80 → 73**, sitemap **78 → 71**, blog **19 → 17**.

      **Blog yazıları neden bırakılmadı:** yapmadığımız bir işin arıza
      rehberi, arayıp olumsuz cevap alacak insan getirir. O trafik kazanç
      değil, kaybettirilmiş bir çağrıdır. Ads tarafında da `fırın` ve `ocak`
      negatif kelime yapıldı — site ile reklam aynı şeyi söylüyor.
      **Çıplak `ankastre` negatif YAPILMAZ** — ankastre bir cihaz türü değil,
      montaj şeklidir ve ankastre bulaşık makinesi verilen hizmettir. Doğru
      negatifler öbek eşlemeyle daraltılmış hâlidir: `"ankastre fırın"` ·
      `"ankastre ocak"` · `"ankastre set"`. Sahibi 14.08.2026'da doğruladı
      (*"onlara da bakıyoruz problem yok"*); soru bir kez "ankastre fırın ocak
      bakmıyoruz" diye anlaşılıp yanlış negatif eklenmesine ramak kalmıştı.
      **Ders: cihaz adı ile montaj şeklini ayırt etmeden negatif kelime
      yazmayın** — çıplak `ankastre`, verilen bir hizmetin aramasını sessizce
      kapatır ve bunu hiçbir raporda göremezsiniz.

      Kalan `Fırın`/`ankastre` geçişleri denetlendi ve meşru: bulaşık
      makinesi SSS'indeki "ankastre modeller" ve `buzdolabi-sogutmuyor`
      yazısındaki "fırının yanına koymayın" tavsiyesi. Kırık link **0**,
      sitemap'te `firin` **0**.

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
      | ~~Televizyon tamiri~~ | **EKLENDİ** 12.08.2026 — 1 hub + 4 para sayfası. |
      | ~~Kombi bakım ve onarım~~ | **EKLENDİ** 12.08.2026 — gaz devresi HARİÇ, aşağıya bakın. |
      | **Ticari soğutma** (vitrin dolabı, soğuk oda, sanayi tipi bulaşık makinesi) | Farklı müşteri (işletme), yüksek bilet, düşük rekabet. |
      | **Şofben / termosifon (elektrikli su ısıtıcısı)** | Beyaz eşya servislerinin sık yaptığı iş. |
      | **Davlumbaz / aspiratör** | Fırın-ocak ile aynı mutfakta, doğal ek. |
      | **Ankastre set montajı** | Montaj işi; tamirle aynı ekip. |
      | **Mikrodalga fırın** · **derin dondurucu** | Küçük hacim; ayrı sayfa değeri düşük olabilir. |
      | **Su arıtma / su sebili** | Ayrı uzmanlık; yapılıyorsa eklenir. |

      **⚠️ KOMBİ — GAZ DEVRESİ HARİÇ AÇILDI. Sınırı gevşetmeyin.**

      Kombi bu listede **bilerek yoktu**: doğalgaz işleri yetki belgesi
      gerektirir, belgesiz sayfa açmak "yetkili servis" ibaresiyle aynı türden
      bir risktir (yasak 2) ve yaptırım reklam hesabına işler. 12.08.2026'da
      sahibine belge sorusu **soruldu**; cevabı şu oldu:

      > *"gaz hattı yok işte bakım onarım yapılır gibi yaz"*

      Yani belge **yok**, iş **yapılıyor**. Sayfa bu yüzden dar bir kapsamla
      açıldı: **kombinin su tarafı, tesisatı ve elektroniği.** Yazılanlar —
      petek ısınmaması, basınç düşmesi, sıcak su, sirkülasyon pompası, plakalı
      eşanjör, üç yollu vana, conta/rakor kaçakları, petek ve tesisat tadilatı.

      **Sayfaya ASLA girmeyecekler** (yazarken tek tek kontrol edildi, `dist/`
      üzerinde arandı, **0 sonuç**): gaz hattı çekme · gaz kaçağı tespiti · gaz
      vanası · brülör · baca gazı ölçümü · "yetkili servis".

      İlk SSS bunu **açıkça söylüyor** ve yumuşatılmayacak: gaz hattına
      dokunulmadığı, o işin dağıtım şirketinin yetkilendirdiği firmalara ait
      olduğu, gaz kokusunda ne yapılacağı (vanayı kapat · pencereyi aç ·
      elektrik düğmesine dokunma · dağıtım şirketinin acil hattını ara) yazılı.
      Fırın-ocak sayfasındaki gaz kokusu SSS'iyle aynı çizgi.

      **Neden "hayır" ile başlayan bir SSS dönüşümü düşürmüyor:** o cümle aynı
      paragrafta ne YAPTIĞIMIZI sayıyor. Ziyaretçinin aklındaki itirazı
      karşılamak, itirazı görmezden gelmekten daha çok arattırır — sitenin
      `klima-gazi-ne-zaman-biter` yazısındaki duruşun aynısı.

      **Kalan risk, sıfırlanmadı:** kombi fiziksel olarak gazlı bir cihaz.
      Kapsam daraltıldı ama "kombiye bakıyoruz" demenin kendisi bir tartışma
      açabilir. Sahibi bilgilendirildi ve devam dedi; A4/E2 gibi **kabul
      edilmiş risk** olarak kayda geçti. Belge alınırsa kapsam genişletilebilir
      — o zaman bu madde yeniden açılır.

      **⚠️ Şofben / termosifon adayında aynı ayrım geçerli:** elektrikli
      su ısıtıcısı sorunsuz, **gazlı şofben** kombiyle aynı sınıra girer.

      **Televizyon — sahibinin cevabıyla yazıldı.** Site her yerde "aynı gün,
      2 saatte yerinde" diyor; TV'de bu çoğu zaman böyle işlemiyor, o yüzden
      soruldu. Cevap: *"yerinde bakarız, gerekirse atölyeye alırız."* Sayfa
      bu akışı olduğu gibi anlatıyor — `altBaslik` "Aynı gün yerinde bakarız.
      Atölye gerekirse alır, onarır, geri getiririz." **Sormadan "aynı gün
      yerinde onarım" yazılsaydı yasak 1'e giren bir vaat basılmış olurdu.**

      İkinci dürüst sınır TV'de de var ve yumuşatılmayacak: **ekranı kırık
      televizyonda panel maliyeti çoğu modelde yeni cihaza yaklaşır**, SSS bunu
      söylüyor ve onarımı önermiyor. Kısa vadede bir iş kaçırabilir; siteyi
      ayakta tutan "önce bakarız, sonra söyleriz" duruşunun karşılığı budur.

      Onaylanan her hizmet `hizmetler.json`'a **tek kayıt** olarak girer →
      1 hub + (ilçe sayısı) para sayfası, **kod yazılmadan**. Kayda 6 arıza/çözüm
      ve 5–6 SSS gerekiyor; bunları Claude yazar, sahibi doğrular.

      **12.08.2026'da kodda değişen tek şey ikon oldu** (veri dışında):
      `IkonAdi`'ye `televizyon` ve `kombi` eklendi, `Ikon.astro`'ya iki SVG,
      `veri.ts` → `IKONLAR`'a iki satır. **Üçü birlikte güncellenir**; biri
      atlanırsa hizmet sessizce genel `arac` (anahtar) ikonuna düşer ve bu
      hiçbir uyarı basmaz. Kombi ikonuna **alev çizilmedi** — gaz devresine
      dokunmadığımız için görsel de bunu ima etmemeli.

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
      - [x] **Hizmet listesi — televizyon ve kombi profile EKLENDİ**, sahibi
        bildirdi (12.08.2026). Önemliydi: profildeki liste siteyle ayrışırsa
        Haritalar o hizmetlerde hiç çıkmaz. Yeni hizmet eklendiğinde profil de
        güncellenmeli — bu ikisi birlikte hareket eder.
      - **Hizmet alanı** — G2'nin cevabıyla aynı ilçeler. **01.10.2026'da
        yalnızca "Reşatbey" seçiliydi** — dört ilçe eklenecek.
      - **Çalışma saati** — 08:00–23:00, profil ile site artık aynı (bkz. G5).

      **Profil denetimi — 01.10.2026, ekran görüntüleriyle:**
      | Alan | Profilde | Durum |
      |---|---|---|
      | Ana kategori | Beyaz Eşya Tamirhanesi | ✔ doğru, **dokunulmaz** |
      | Açıklama | fırın · ocak · mikrodalga · davlumbaz vardı; TV ve kombi yoktu; koşulsuz "orijinal parça" | yeni metin verildi (663 kr.) — sahibi yapıştıracak |
      | Hizmet bölgesi | yalnızca Reşatbey | ✔ **4 ilçe eklendi** (sahibi bildirdi, 01.10.2026) |
      | Sohbet | SMS | WhatsApp'a çevrilecek |
      | Ek kategoriler | yok | klima · televizyon · kombi aranacak |
      | Çalışma saati | 08:00–23:00 | ✔ doğruymuş, **site** düzeltildi |
      | Adres | Yüreğir, dükkân | ✔ dükkân var, görünmesi doğru |
      | Açılış tarihi | Ocak 2000 | ✔ sahibi doğruladı |
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
