import { defineConfig, squooshImageService } from "astro/config"

import vercel from "@astrojs/vercel/serverless"

import tailwind from "@astrojs/tailwind"
import vue from "@astrojs/vue"
import sitemap from "@astrojs/sitemap"
import autoprefixer from "autoprefixer"
import mdx from "@astrojs/mdx"

export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [
    vue({
      customElement: true
    }),
    mdx(),
    tailwind(),
    sitemap()
  ],
  vite: {
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  site: "https://kurojifusky.com",
  image: {
    domains: ["images.ctfassets.net"],
    service: squooshImageService()
  },
  redirects: {
    "/blog/posts/[slug]": "/blog/[slug]",
    "/blog/post/[slug]": "/blog/[slug]",
    "/posts/[slug]": "/blog/[slug]",
    "/post/[slug]": "/blog/[slug]"
  }
})
