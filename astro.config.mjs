import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import i18nextIntegration from 'astro-i18next';
import vercel from "@astrojs/vercel/static"; // usa `static` se vuoi SSG

export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
    i18nextIntegration({
      defaultLocale: 'it',
      locales: ['it', 'en'],
      fallbackLng: 'it',
    }),
  ],
});