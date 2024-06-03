import type { IconProps } from "lucide-svelte"

export interface NavItem {
  link: string | null
  text: string
  excerpt: string
  image?: string
  icon?: IconProps
}

export * from "./contentful"