import type { NavItem } from "./Navbar.types"

type NestedNavItems = Array<
  Pick<NavItem, "text" | "link"> & { subitems?: NavItem[] }
>

export const navItems: NestedNavItems = [
  {
    text: "Browse",
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
      {
        text: "The Vault",
        excerpt: "Abandoned projects or some historic relics that I've made",
        link: "/vault"
      },
      {
        text: "Branding",
        excerpt: "Logo branding for both Kuroji Fusky and Fusky Labs",
        link: "/branding"
      }
    ]
  },
  {
    text: "Blog",
    link: "/blog",
    subitems: [
      {
        text: "Browse by category",
        excerpt: "--",
        link: "/blog/categories"
      }
    ]
  },
  {
    text: "Portfolio",
    link: "/portfolio",
    subitems: [
      {
        text: "Developer",
        excerpt: "--",
        link: "/portfolio/developer"
      },
      {
        text: "Videography",
        excerpt: "--",
        link: "/portfolio/videos"
      },
      {
        text: "Discography",
        excerpt: "--",
        link: "/portfolio/discography"
      }
    ]
  },
  {
    text: "About",
    link: "/about"
  }
]
