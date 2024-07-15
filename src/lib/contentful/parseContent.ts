import type { Options } from "@contentful/rich-text-html-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import type { CustomInlineEntry } from "./types"
import { kebabCase } from "lodash-es"

/**
 * Writing stringed HTML is gross, so I made this so it's less error-prone lol
 *
 * @param tag A vaild HTML tag
 * @param content Anything that'll be appended from `textContent`
 * @param attrs Attributes from the HTML element you provided
 * @returns A gorgeous HTML string that's safe to parse for Contentful to eat :3
 */
const sanitizedHTML = <T extends keyof HTMLElementTagNameMap, C = string>(
  tag: T,
  content?: C,
  attrs?: Partial<Omit<HTMLElementTagNameMap[T], keyof HTMLElementTagNameMap[T]>>
) => {
  // `document` and `window` is not available for server so I had to deal cobbling with fukin arrays
  const START_TAG = `<${tag}>`
  const END_TAG = `</${tag}>`

  const START_TAG_SC = `<${tag} `
  const END_TAG_SC = ` />`

  const parsedAttributes = attrs
    ? Object.entries(attrs)
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ")
    : ""

  if (tag === "img") return [START_TAG_SC, parsedAttributes, END_TAG_SC].join("")
  if (parsedAttributes) return [START_TAG_SC, parsedAttributes, ">", content, END_TAG].join("")

  return [START_TAG, content, END_TAG].join("")
}

export const rendererOptions: Partial<Options> = {
  renderMark: {
    [MARKS.BOLD]: (t) => sanitizedHTML("strong", t),
    [MARKS.ITALIC]: (t) => sanitizedHTML("em", t),
    [MARKS.CODE]: (t) =>
      sanitizedHTML("code", t, { class: "rounded-md bg-kuro-lavender-900 text-base py-0.5 px-1" })
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node, next) =>
      sanitizedHTML("h2", next(node.content), { id: kebabCase((node.content[0] as any).value) }),
    [BLOCKS.HEADING_3]: (node, next) =>
      sanitizedHTML("h3", next(node.content), { id: kebabCase((node.content[0] as any).value) }),
    [BLOCKS.UL_LIST]: (node, next) =>
      sanitizedHTML("ul", next(node.content), { class: "list-disc ml-6" }),
    [BLOCKS.QUOTE]: (node, next) =>
      sanitizedHTML("blockquote", next(node.content), {
        class:
          "px-6 py-5 border-l-[6px] border-kuro-lavender-300 bg-kuro-lavender-900 bg-opacity-40 my-2.5 text-kuro-violet-50 prose-p:!font-medium"
      }),
    [BLOCKS.PARAGRAPH]: (node, next) => {
      const nodeContent = node.content
      if (!nodeContent.some((x) => (x as any).value === ""))
        return sanitizedHTML("p", next(nodeContent))

      return sanitizedHTML("p", next(nodeContent))
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const embedFields = node.data.target.fields

      return sanitizedHTML("img", null, {
        src: `https:${embedFields.file.url}`,
        alt: embedFields.title,
        class: "rounded-md h-[32rem] mx-auto"
      })
    },

    [INLINES.EMBEDDED_ENTRY]: (node) => {
      const { sys, fields } = node.data.target as CustomInlineEntry
      const strippedUrl = fields.url?.split("/").at(-1)

      if (sys.contentType.sys.id === "youTubeVideo") {
        return sanitizedHTML("iframe", null, {
          src: `https://www.youtube-nocookie.com/embed/${strippedUrl}`,
          allow: "clipboard-write; encrypted-media; web-share;",
          class: "w-full h-full aspect-video mx-auto rounded-md overflow-hidden block",
          frameborder: "0"
        })
      }

      return sanitizedHTML("div", node)
    },
    [INLINES.HYPERLINK]: (node, next) =>
      sanitizedHTML("a", next(node.content), {
        class: "text-kuro-lavender-300 hover:text-kuro-lavender-400 hover:underline",
        href: node.data.uri,
        target: "_blank",
        rel: "noopenner noreferrer"
      })
  }
}

export const parseForTOC: Partial<Options> = {}
