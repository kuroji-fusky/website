import { defineConfig, squooshImageService } from "astro/config"
import autoprefixer from "autoprefixer"
import tailwind from "@astrojs/tailwind"
import vue from "@astrojs/vue"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import vercel from "@astrojs/vercel/serverless"
import lit from "@astrojs/lit"
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  prefetch: {
    prefetchAll: true
  },
  integrations: [
    lit(),
    svelte(),
    tailwind(),
    vue({
      customElement: true
    }),
    mdx(),
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
