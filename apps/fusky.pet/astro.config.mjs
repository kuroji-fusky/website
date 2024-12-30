// @ts-check
import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    sitemap()
  ],
  site: "https://fusky.pet",
});