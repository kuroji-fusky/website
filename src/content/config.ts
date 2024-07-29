import { z, defineCollection } from "astro:content"

export const collections = {
  showcase: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      repo: z.string(),
      image: z.string(),
      type: z.string(),
      date: z.string().transform((s) => new Date(s)),
      excerpt: z.string(),
      details: z.object({
        technologies: z.array(z.string()).nullable(),
        infrastructure: z.array(z.string()).nullable()
      })
    })
  })
}
