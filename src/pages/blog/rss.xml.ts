import rss from "@astrojs/rss"
import type { APIRoute } from "astro"

export const GET: APIRoute = (ctx: any) => {
  return rss({
    title: "Kuro blog",
    description: "Some nerd abomination",
    site: ctx.site,
    trailingSlash: false,
    items: [],
    customData: `<language>en-us</language>`
  })
}
