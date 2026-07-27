// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL yayına çıkarken gerçek alan adıyla değiştirilecek ({PLACEHOLDER}).
// Canonical ve JSON-LD mutlak URL'leri bu değerden türüyor.
const SITE_URL = 'https://ornek-alan-adi.com';

export default defineConfig({
  site: SITE_URL,
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
