import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
//import vercel from "@astrojs/vercel/static"; // usa `static` se vuoi SSG

export default defineConfig({
  output: "static",
 // adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
    
  ],
});