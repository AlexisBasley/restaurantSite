// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// Pour la mise en ligne : remplacez l'URL ci-dessous par le vrai domaine du restaurant.
export default defineConfig({
  site: 'https://exemple-restaurant.fr',
  adapter: cloudflare()
});