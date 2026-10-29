// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set by scripts/build-pages.mjs for the GitHub Pages build; local dev stays at the root.
  ...(process.env.PAGES_BASE ? { site: 'https://govind-boop.github.io', base: process.env.PAGES_BASE } : {}),
  server: { port: 4340 },
  devToolbar: { enabled: false },
});
