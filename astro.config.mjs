// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Troque pela URL definitiva quando tiver domínio próprio (usada no sitemap, canonical e Open Graph).
const SITE_URL = 'https://jaminteles.vercel.app';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  // CSS embutido no HTML: elimina a requisição que bloqueia a renderização (melhor FCP).
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt-br',
        locales: { 'pt-br': 'pt-BR', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
