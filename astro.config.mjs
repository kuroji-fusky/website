import { defineConfig, passthroughImageService } from "astro/config"

import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import vercel from "@astrojs/vercel/serverless"
import svelte from "@astrojs/svelte"

import autoprefixer from "autoprefixer"
import Icons from "unplugin-icons/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"

export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    isr: true
  }),
  experimental: {
    directRenderScript: true,
    clientPrerender: true
  },
  prefetch: {
    prefetchAll: true
  },
  integrations: [sitemap(), svelte(), tailwind(), mdx()],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        customCollections: {
          kuro: FileSystemIconLoader("./src/lib/icons/kuro"),
          brands: FileSystemIconLoader("./src/lib/icons/brands")
        }
      })
    ],
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  site: "https://kurojifusky.com",
  image: {
    service: passthroughImageService(),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net"
      },
    ]
  },
  build: {
    assets: "_kuro"
  }
})
