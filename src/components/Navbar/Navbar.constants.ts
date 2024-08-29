import type { NavItem } from "./Navbar.types"

type NestedNavItems = Array<
  Pick<NavItem, "text" | "link"> & { subitems?: NavItem[] }
>

export const navItems: NestedNavItems = [
  {
    text: "Explore",
    link: "",
    subitems: [
      {
        text: "Artworks",
        excerpt: "All the art pieces I commissoned from artists",
        link: "/artworks"
      },
      {
        text: "Characters",
        excerpt: "All the characters I own or created",
        link: "/characters"
      },
      // {
      //   text: "Dream Journal",
      //   excerpt: "Some stuff that I catalog for storybuilding",
      //   link: "/dream-journal"
      // },
      {
        text: "The Vault",
        excerpt: "Abandoned projects or some historic relics that I've made",
        link: "/vault"
      }
    ]
  },
  {
    text: "Showcase",
    link: "/showcase"
  },
  {
    text: "Blog",
    link: "/blog"
  },
  {
    text: "About",
    link: "/about",
    subitems: [
      {
        text: "Branding",
        excerpt: "Logo branding",
        link: "/branding"
      }
    ]
  }
]
