/*
  Paylaşım görseli (og:image) üreteci — bir kez çalıştırılır, çıktı public/og.png
  olarak commit'lenir. Build'e bağlanmadı: görsel firma adı/telefon değişmedikçe
  sabit, her build'de yeniden üretmenin anlamı yok.

  Tasarım sistemine sadık (Gece Mavisi, 02.10.2026): lacivert blok + sağ üstte ışık lekesi, turuncu yalnızca numara kutusunda.
*/
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const firma = JSON.parse(readFileSync('src/data/firma.json', 'utf8'));
const hizmetler = JSON.parse(readFileSync('src/data/hizmetler.json', 'utf8'));

/*
  Ad ve cihaz satırı VERİDEN — 01.10.2026. Önceden elle yazılıydı ve iki kez
  eskidi: fırın kapatıldıktan (14.08) sonra görselde "Fırın" kaldı, TV ve kombi
  eklendiğinde hiç girmedi. Cihaz adındaki " makinesi" atılır (satır sığsın).
  Firma adı, saat veya hizmet değişince bu betik YENİDEN ÇALIŞTIRILIR.
*/
const cihazlar = [
  ...new Set(
    hizmetler
      .filter((h) => h.aktif)
      .map((h) => h.cihaz.replace(/ makinesi$/i, ''))
  ),
].join(' · ');

const G = 1200;
const Y = 630;
const LACIVERT = '#0a1f44';
const TURUNCU = '#ff7a1a';
const TURUNCU_METIN = '#ffb27a'; // koyu zeminde metin: turuncu-300, 9.21:1
const BEYAZ = '#ffffff';
const ACIK = '#c9d6ea';

const kacir = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${G}" height="${Y}" viewBox="0 0 ${G} ${Y}">
  <defs>
    <radialGradient id="isik" cx="100%" cy="0%" r="75%">
      <stop offset="0" stop-color="#1b3f86"/>
      <stop offset="1" stop-color="#1b3f86" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${G}" height="${Y}" fill="${LACIVERT}"/>
  <rect width="${G}" height="${Y}" fill="url(#isik)"/>

  <text x="86" y="150" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="26" font-weight="600" letter-spacing="4" fill="${TURUNCU_METIN}">
    ${kacir(firma.kisaAd.toLocaleUpperCase('tr-TR'))}
  </text>

  <text x="86" y="268" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="82" font-weight="700" fill="${BEYAZ}">Arıza mı var?</text>
  <text x="86" y="366" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="82" font-weight="700" fill="${BEYAZ}">Aynı gün geliyoruz.</text>

  <text x="86" y="446" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="30" font-weight="400" fill="${ACIK}">
    ${kacir(cihazlar)}
  </text>

  <rect x="86" y="492" width="470" height="84" rx="16" fill="${TURUNCU}"/>
  <text x="118" y="547" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="42" font-weight="700" fill="${LACIVERT}">${kacir(firma.telefon)}</text>

  <text x="596" y="533" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="25" font-weight="400" fill="${ACIK}">${kacir(firma.calismaSaatleri)}</text>
  <text x="596" y="565" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="25" font-weight="400" fill="${ACIK}">Fiyatı önce söyleriz</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync('public/og.png', png);
const meta = await sharp(png).metadata();
console.log(`public/og.png — ${meta.width}x${meta.height}, ${(png.length / 1024).toFixed(1)} KB`);
