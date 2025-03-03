import { defineCollection, z } from "astro:content"

const showcaseType = z.enum(["Browser extension", "Web application"])

const showcaseTechnologies = z.enum([
  "nextjs",
  "sveltekit",
  "astro",
  "tauri",
  "flutter",
  "fastapi",
  "mongodb",
  "redis"
])
const showcaseInfras = z.enum(["vercel", "digitalocean", "docker", "aws"])

const showcaseSchema = z.object({
  title: z.string(),
  repo: z.string(),
  image: z.string().optional(),
  source: z.string().optional(),
  type: showcaseType,
  date: z.string().transform((s) => new Date(s)),
  excerpt: z.string(),
  details: z.object({
    technologies: z.array(showcaseTechnologies).nullable(),
    infrastructure: z.array(showcaseInfras).nullable()
  })
})

export type ShowcaseTechnologiesLiteral = z.infer<typeof showcaseTechnologies>
export type ShowcaseInfrasLiteral = z.infer<typeof showcaseInfras>
export type ShowcaseSchema = z.infer<typeof showcaseSchema>

export const collections = {
  showcase: defineCollection({
    type: "content",
    schema: showcaseSchema
  })
}
