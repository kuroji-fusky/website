import { fetchBlogPosts } from "$lib/contentful"
import rss from "@astrojs/rss"
import type { APIRoute } from "astro"
import { parseDateStr } from "$lib/parseDateStr"

export const GET: APIRoute = async (ctx: any) => {
  const blogPosts = await fetchBlogPosts({})

  return rss({
    title: "Kuro blog",
    description: "Some nerd abomination",
    site: ctx.site,
    trailingSlash: false,
    items: blogPosts.map((item) => {
      const { title, description, slug, date } = item
      return {
        title,
        description,
        author: "Kuroji Fusky",
        pubDate: parseDateStr(date).isoDate as unknown as Date,
        link: `/blog/${slug}`
      }
    }),
    customData: `<language>en-us</language>`
  })
}
