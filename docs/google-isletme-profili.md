# Google İşletme Profili — panele girilen metinler

Profildeki metinlerin tek kaydı. Panelde değiştirilen metin buraya da yazılır;
bir önceki açıklama (01.10.2026, 663 kr.) yalnızca sohbette verildiği için
kaybolmuştu.

## Kategoriler (02.10.2026, sahibi girdi)

| Kategori | Tür |
|---|---|
| Beyaz Eşya Tamirhanesi | **birincil** — değiştirilmez |
| Klima Tamir Servisi | ek |
| Televizyon Tamir Servisi | ek |
| Isıtma sistemleri | ek — Google'da "kombi" kategorisi yok |

"Gaz" / "doğal gaz" geçen kategori **seçilmez** (CLAUDE.md → G3: gaz hattı
hariç). "Tedarikçisi" / "mağazası" geçen kategori de seçilmez — satış
müşterisi getirir.

## Açıklama (02.10.2026 · 746 / 750 karakter)

Adana'da beyaz eşya servisi ve beyaz eşya tamiri. Çamaşır makinesi, bulaşık makinesi, buzdolabı ve kurutma makinesi tamiri; klima servisi, bakımı, gaz dolumu, montajı ve taşıması; televizyon tamiri; kombi ve petek bakım-onarımı yapıyoruz. Seyhan, Yüreğir, Çukurova ve Sarıçam'ın bütün mahalle ve semtlerine her gün 08:00–23:00 geliyoruz; WhatsApp hattımız 7/24 açık. Arçelik, Beko, Vestel, Bosch, Siemens, Samsung, LG, Profilo, Altus, Grundig, Electrolux ve Miele dahil bütün markalara bakıyoruz. Arızayı önce yerinde görüyor, ne yapılacağını ve ücretini işe başlamadan söylüyoruz. Öncelikle orijinal parça, bulunmayan modellerde muadil takıyor, bunu önceden söylüyoruz. Değişen parça garantili. Bağımsız servisiz, hiçbir markanın bayisi değiliz.

**Her cümlenin kaynağı `src/data/firma.json` ve `hizmetler.json`.** Saat,
marka, kapsam ya da hizmet değişince bu metin de değişir — Bing Places
haftalık eşitlemeyle Google'dan kopyalıyor, yani yanlış metin iki yere yayılır.
Bilerek yok: telefon ve bağlantı (Google açıklamada istemiyor) · "yetkili"
(yasak 2) · fiyat (A3) · gaz hattı işi (G3).
