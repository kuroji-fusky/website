import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import svelte from "@astrojs/svelte"
import sitemap from "@astrojs/sitemap"
import autoprefixer from "autoprefixer"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    svelte(),
    tailwind(),
    sitemap({
      changefreq: "weekly"
    })
  ],
  vite: {
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  site: "https://kurojifusky.com",
  redirects: {
    "/blog/posts/[slug]": "/blog/post/[slug]"
  }
})
