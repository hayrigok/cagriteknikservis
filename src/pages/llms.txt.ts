/*
  /llms.txt — yapay zekâ araçları için düz metin özet (llmstxt.org önerisi).
  01.10.2026, sahibinin isteği: firma "beyaz eşya servisi / beyaz eşya tamiri"
  olarak tanınsın.

  BEKLENTİ DÜŞÜK TUTULSUN: Google bu dosyayı kullanmadığını söyledi, diğer
  araçların kullandığına dair kanıt yok. Maliyeti sıfır olduğu için duruyor —
  build sırasında üretilen statik dosya, tarayıcıya inen kod yok. Asıl işi
  yapan şey ana sayfa metni ve schema.ts → hvacBusiness() içindeki
  description / knowsAbout.

  TAMAMI VERİDEN üretilir, elle tutulan kopya yok: hizmet kapanırsa (fırın-ocak
  gibi) buradan da kendiliğinden düşer. Doldurulmamış alan satırı basılmaz
  ({PLACEHOLDER} sözleşmesi). Marka cümlesi "… dahil bütün markalar" ile biter
  (A6). /kullanim-kosullari/ bilerek bağlanmıyor — o sayfa arama motorlarına
  kapalı (CLAUDE.md → E3).

  Sitemap'e girmez: integrations/site-haritasi.mjs → HARIC.
*/
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { aktifHizmetler, deger, firma, markaMetni, tumIlceler } from '@/lib/veri';

function veIleBagla(liste: string[]): string {
  if (liste.length < 2) return liste.join('');
  return `${liste.slice(0, -1).join(', ')} ve ${liste[liste.length - 1]}`;
}

export const GET: APIRoute = async ({ site }) => {
  const adres = (yol: string) => new URL(yol, site).href;

  const hizmetler = aktifHizmetler();
  const ilceler = tumIlceler()
    .filter((i) => i.aktif)
    .map((i) => i.ad);
  const cihazlar = [...new Set(hizmetler.map((h) => h.cihaz.toLocaleLowerCase('tr-TR')))];
  const yazilar = (await getCollection('yazilar')).sort((a, b) => a.data.sira - b.data.sira);

  const telefon = deger(firma.telefon);
  const whatsapp = deger(firma.whatsapp);
  const whatsappSaati = deger(firma.whatsappSaatleri);
  const saatler = deger(firma.calismaSaatleri);
  const kapsam = deger(firma.mahalleKapsami);
  const markalar = markaMetni();
  const profil = deger(firma.googleIsletmeUrl);

  const kunye = [
    telefon && `- Telefon: ${telefon}`,
    whatsapp &&
      `- WhatsApp: https://wa.me/${whatsapp}${whatsappSaati ? ` (${whatsappSaati})` : ''}`,
    saatler && `- Çalışma saatleri: ${saatler}`,
    ilceler.length > 0 &&
      `- Hizmet bölgesi: ${veIleBagla(ilceler)} (${firma.sehir})${kapsam ? ` — ${kapsam.toLocaleLowerCase('tr-TR')}` : ''}`,
    markalar && `- Markalar: ${markalar} dahil bütün markalar`,
    '- Bağımsız servis; hiçbir üreticinin bayisi veya temsilcisi değildir.',
    profil && `- Google İşletme Profili: ${profil}`,
  ].filter(Boolean);

  const metin = [
    `# ${firma.kisaAd}`,
    '',
    `> ${firma.sehir}'da beyaz eşya servisi ve beyaz eşya tamiri: ${veIleBagla(cihazlar)}.`,
    '',
    ...kunye,
    '',
    '## Hizmetler',
    '',
    ...hizmetler.map((h) => `- [${h.ad}](${adres(`/${h.slug}/`)}): ${h.ozet}`),
    '',
    '## Arıza rehberi',
    '',
    ...yazilar.map((y) => `- [${y.data.baslik}](${adres(`/blog/${y.id}/`)}): ${y.data.ozet}`),
    '',
  ].join('\n');

  return new Response(metin, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
