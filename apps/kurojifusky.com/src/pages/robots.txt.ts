import type { APIRoute } from "astro"

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /wp-admin/

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`

export const GET: APIRoute = () => {
  return new Response(robotsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  })
}
