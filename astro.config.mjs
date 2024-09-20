import { defineConfig, squooshImageService } from "astro/config"

import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import markdoc from "@astrojs/markdoc"
import mdx from "@astrojs/mdx"
import vercel from "@astrojs/vercel/serverless"
import lit from "@astrojs/lit"
import svelte from "@astrojs/svelte"

import autoprefixer from "autoprefixer"
import Icons from "unplugin-icons/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"

export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    isr: true
  }),
  experimental: {
    directRenderScript: true,
    clientPrerender: true
  },
  redirects: {
    "/blog/category": "/blog",
    "/blog/author": "/blog",
    "/blog/authors": "/blog",
    "/blog/posts/[slug]": "/blog/[slug]",
    "/blog/post/[slug]": "/blog/[slug]",
    "/posts/[slug]": "/blog/[slug]",
    "/post/[slug]": "/blog/[slug]"
  },
  prefetch: {
    prefetchAll: true
  },
  integrations: [lit(), markdoc(), sitemap(), svelte(), tailwind(), mdx()],
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
    service: squooshImageService(),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net"
      },
      {
        protocol: "https",
        hostname: "fuskylabs-cdn.imgix.net"
      },
      // !!! This is only temporary, will be offloading my images to imgix soon
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ]
  },
  build: {
    assets: "_kuro"
  }
})
