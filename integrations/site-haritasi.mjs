/**
 * robots.txt + sitemap.xml üreticisi.
 *
 * Neden paket değil: onaylı paket listesi dar (CLAUDE.md yasak 5) ve ihtiyaç
 * @astrojs/sitemap'in karşıladığından çok küçük — tek dilli site, 45'i geçmeyen
 * sayfa, resim/haber/i18n uzantısı yok. Otuz satır kod bir bağımlılıktan ucuz.
 *
 * Neden robots.txt de burada: alan adı önce iki ayrı yerde duruyordu
 * (astro.config.mjs + public/robots.txt). Biri unutulursa canonical bir alanı,
 * sitemap başka alanı gösteriyordu. Artık tek kaynak SITE_URL var; public/
 * içinde elle güncellenen kopya yok.
 *
 * Sayfa listesi astro:build:done'dan geliyor, elle tutulmuyor. Bunun önemli bir
 * sonucu var: ilçe kapısından geçemeyen ilçeler sitemap'e KENDİLİĞİNDEN girmez.
 * Üretilmemiş sayfayı Google'a bildirip 404 yedirmeyiz.
 */
import { writeFile } from 'node:fs/promises';

/**
 * noindex basan sayfalar sitemap'e girmez — ikisi çelişirse Google'a karışık
 * sinyal gider. tesekkurler: form sonrası dönüşüm adresi, arama sonucunda
 * görünmemeli; oraya organik trafik akarsa Ads dönüşüm raporu da kirlenir.
 * kullanim-kosullari: sahibinin isteğiyle arama motorlarına kapalı (CLAUDE.md → E3).
 * llms.txt: sayfa değil, yapay zekâ araçları için düz metin özet.
 */
const HARIC = new Set(['404', 'tesekkurler', 'kullanim-kosullari', 'llms.txt']);

const kacir = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default function siteHaritasi() {
  let site;

  return {
    name: 'site-haritasi',
    hooks: {
      'astro:config:done': ({ config }) => {
        site = config.site;
      },

      'astro:build:done': async ({ pages, dir, logger }) => {
        if (!site) {
          logger.warn('astro.config.mjs içinde site yok; robots.txt ve sitemap.xml ÜRETİLMEDİ.');
          return;
        }

        // Sonda / garantiye alınır, aksi halde göreli çözümleme son parçayı yer.
        const koken = new URL('./', site).href;

        const adresler = [
          ...new Set(
            pages
              .map((p) => p.pathname.replace(/^\//, ''))
              .filter((p) => !HARIC.has(p.replace(/\/$/, '')))
              .map((p) => new URL(p, koken).href)
          ),
        ].sort();

        /*
          lastmod / changefreq / priority bilerek yok. Google changefreq ve
          priority'yi yok sayıyor; lastmod'u ancak doğruysa dikkate alıyor.
          Her build'de bugünün tarihini basmak, içerik değişmemişken sahte
          tazelik sinyali üretmek olurdu — uydurma rakam yasağının aynısı.
        */
        const harita =
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          adresler.map((u) => `  <url><loc>${kacir(u)}</loc></url>`).join('\n') +
          '\n</urlset>\n';

        const robots = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', koken).href}\n`;

        await writeFile(new URL('sitemap.xml', dir), harita, 'utf8');
        await writeFile(new URL('robots.txt', dir), robots, 'utf8');

        logger.info(`sitemap.xml: ${adresler.length} adres · robots.txt yazıldı`);
      },
    },
  };
}
