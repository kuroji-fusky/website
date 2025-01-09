import type { Config } from "tailwindcss"
import twShared from "@kuro-metasite/shared/tailwind.shared"

export default {
  content: ["./src/**/*.{astro,md,mdx,ts,svelte}"],
  presets: [twShared],
} satisfies Config
