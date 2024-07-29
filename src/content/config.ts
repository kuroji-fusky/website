import { z, defineCollection } from "astro:content"

const showcaseType = z.enum(["Browser extension", "Web application"])

const showcaseTechnologies = z.enum([
  "nextjs",
  "sveltekit",
  "astro",
  "plasmo",
  "tauri",
  "flutter",
  "mongodb",
  "redis"
])
const showcaseInfras = z.enum(["vercel", "digitalocean", "docker", "aws", "gcp"])

export type ShowcaseTechnologiesLiteral = z.infer<typeof showcaseTechnologies>
export type ShowcaseInfrasLiteral = z.infer<typeof showcaseInfras>

export const collections = {
  showcase: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      repo: z.string(),
      image: z.string(),
      type: showcaseType,
      date: z.string().transform((s) => new Date(s)),
      excerpt: z.string(),
      details: z.object({
        technologies: z.array(showcaseTechnologies).nullable(),
        infrastructure: z.array(showcaseInfras).nullable()
      })
    })
  })
}
