# Google Search Console — durum ve kalan iş

**Doğrulama YAPILMIŞ.** 29.07.2026'da dışarıdan teyit edildi: alan adında
`google-site-verification=3o_8Oe38-ZgXVKLibvZzAdtbWrQwLgwgovWnzAdzFW4` TXT
kaydı duruyor, hem Google hem Cloudflare DNS'i aynı değeri döndürüyor.

Yani mülk **DNS yöntemiyle, alan adı seviyesinde** doğrulanmış — en iyi yöntem
buydu, zaten o kullanılmış. Sayfaya hiçbir kod eklenmemiş; sitenin
sıfır-dış-istek özelliği bozulmamış (canlı HTML'de `google-site-verification`
meta etiketi **yok**, kontrol edildi).

> **TXT kaydını silmeyin.** Silinirse doğrulama iptal olur ve veri akışı durur.
> Orada durduğu sürece hiçbir zararı yok, hiçbir maliyeti yok.

---

## Kalan iş — dışarıdan görülemez, panele bakmak gerek

Aşağıdaki üç şeyi ancak Search Console'a giren kişi görebilir. Sırayla bakın,
her biri 1 dakika:

### 1. Site haritası — ✔ TAMAM (30.07.2026)

Gönderilmiş ve Google **60 adresin hepsini** keşfetmiş; sahibi panelden
doğruladı. Canlı sitemap'te de 60 adres var ve hepsi 200 dönüyor.

Bundan sonra elle bir şey yapmaya gerek yok: yeni blog yazısı veya ilçe
eklendiğinde sitemap build sırasında kendiliğinden büyüyor, Google da yeni
adresleri kendi keşfediyor. **Tekrar göndermeyin.**

### 2. Kaç sayfa dizine alındı?

Sol menü → **Dizine Ekleme → Sayfalar**

İki sayı var: **"Dizine eklendi"** ve **"Dizine eklenmedi"**. Sitede 61 sayfa
üretiliyor, 60'ı site haritasında (404 hariç).

- Dizine eklenen sayı düşükse **panik yok**: yeni alan adında Google sayfaları
  haftalar içinde alır, hepsini birden almaz.
- Ama "Dizine eklenmedi" sekmesindeki **gerekçeler** önemli. Orada
  "Yönlendirme", "Kopya içerik", "Taranabilir değil" gibi başlıklar varsa bana
  söyleyin — teknik tarafta düzeltilmesi gereken bir şey olabilir.

### 3. Hangi kelimelerde çıkıyoruz?

Sol menü → **Performans**

Dört sayı: Toplam tıklama · Toplam gösterim · Ortalama TO · Ortalama konum.
Altındaki **Sorgular** sekmesi asıl değerli kısım — insanların gerçekte ne
aratıp bizi bulduğunu gösterir.

**Bu ekranın ekran görüntüsünü bana gönderin.** İşe yarayacağı yer:

- **D5 (blog yazıları):** şu an konular tahminle seçiliyor. "Gösterim var ama
  tıklama yok" çıkan sorgular, yazılacak bir sonraki yazıyı doğrudan söyler.
- **Başlıklar:** gösterimi yüksek ama TO'su düşük sayfa varsa, o sayfanın
  arama sonucunda görünen başlığı iş görmüyor demektir; `seo.ts` kalıpları
  ona göre ayarlanır.

> **İlk veriler için sabır gerekir.** Site 29.07.2026'da yayına girdi.
> Performans raporunda anlamlı veri için 1–2 hafta, organik sıralamanın
> oturması için aylar gerekiyor. Boş rapor görmek bozukluk değildir.

---

## Neyi ölçmüyor — karıştırmayın

Search Console **yalnızca organik aramayı** ölçer. Şunları göstermez:

| Ne | Nerede ölçülür |
|---|---|
| Reklam tıklaması ve maliyeti | Google Ads (A7 · C) |
| Telefon/WhatsApp tıklaması, form gönderimi | GA4 + Ads (A7, kimlik bekliyor) |
| Haritalar'da görünme, yol tarifi, profilden arama | Google İşletme Profili (D4 · G6) |

Yani "telefon çalmıyor" sorusunun cevabı burada değil. Buradaki veri
**organik aramada görünüp görünmediğimizi** söyler, o kadar.
