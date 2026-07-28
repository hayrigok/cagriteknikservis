// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import siteHaritasi from './integrations/site-haritasi.mjs';

// Alan adının TEK kaynağı. Canonical, JSON-LD mutlak URL'leri, sitemap.xml ve
// robots.txt hepsi buradan türüyor — başka hiçbir yerde tekrarlanmaz.
const SITE_URL = 'https://cagribeyazesyatamir.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [siteHaritasi()],
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  prefetch: false,
  vite: {
    plugins: [tailwindcss()],
  },
});
