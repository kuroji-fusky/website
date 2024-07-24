import type { Options } from "@contentful/rich-text-html-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import type { CustomInlineEntry } from "./types"
import { kebabCase } from "lodash-es"
import sanitizedHTML from "./sanitizeHTML"

const kebabHeadings = (tag: keyof HTMLElementTagNameMap, heading: any, node: any) =>
  sanitizedHTML(tag, { id: kebabCase(heading.value) }, node)

export const rendererOptions: Partial<Options> = {
  renderMark: {
    [MARKS.BOLD]: (t) => sanitizedHTML("strong", {}, t),
    [MARKS.ITALIC]: (t) => sanitizedHTML("em", {}, t),
    [MARKS.CODE]: (t) =>
      sanitizedHTML(
        "code",
        { class: "rounded-md bg-kuro-lavender-900 text-[0.96rem] py-0.5 px-1" },
        t
      )
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node, next) => kebabHeadings("h2", node.content[0], next(node.content)),
    [BLOCKS.HEADING_3]: (node, next) => kebabHeadings("h3", node.content[0], next(node.content)),
    [BLOCKS.HR]: (node) =>
      sanitizedHTML("hr", { class: "border-kuro-lavender-200 opacity-75" }, null),
    [BLOCKS.UL_LIST]: (node, next) =>
      sanitizedHTML(
        "ul",
        {
          class:
            "flex flex-col ml-2 before:[&_li]:content-['–'] before:[&_li]:opacity-50 before:[&_li]:font-extrabold [&_li]:inline-flex [&_li]:gap-x-3"
        },
        next(node.content)
      ),
    [BLOCKS.QUOTE]: (node, next) =>
      sanitizedHTML(
        "blockquote",
        {
          class:
            "px-6 py-5 border-l-[6px] border-kuro-lavender-300 bg-kuro-lavender-900 bg-opacity-40 my-2.5 text-kuro-violet-50 prose-p:!font-medium"
        },
        next(node.content)
      ),
    [BLOCKS.PARAGRAPH]: (node, next) => {
      const nodeContent = node.content
      if (!nodeContent.some((x) => (x as any).value === ""))
        return sanitizedHTML("p", {}, next(nodeContent))

      return sanitizedHTML("p", {}, next(nodeContent))
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const embedFields = node.data.target.fields

      return sanitizedHTML(
        "img",
        {
          src: `https:${embedFields.file.url}`,
          alt: embedFields.title,
          class: "rounded-xl max-h-[32rem] mx-auto"
        },
        null
      )
    },

    [INLINES.EMBEDDED_ENTRY]: (node) => {
      const { sys, fields } = node.data.target as CustomInlineEntry
      const strippedUrl = fields.url?.split("/").at(-1)

      if (sys.contentType.sys.id === "youTubeVideo") {
        return sanitizedHTML("yt-embed-wrapper", {
          videoid: strippedUrl
        })
      }

      return sanitizedHTML("p", {}, JSON.stringify(node))
    },
    [INLINES.HYPERLINK]: (node, next) =>
      sanitizedHTML(
        "a",
        {
          class: "text-kuro-lavender-300 hover:text-kuro-lavender-400 underline hover:no-underline",
          href: node.data.uri,
          target: "_blank",
          rel: "noopenner noreferrer"
        },
        next(node.content)
      )
  }
}

const renderNothing = () => ""

export const parseForTOC: Partial<Options> = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, next) =>
      sanitizedHTML(
        "a",
        { class: "block", href: `#${kebabCase(next(node.content))}`, "data-astro-prefetch": false },
        next(node.content)
      ),
    [BLOCKS.HEADING_3]: (node, next) =>
      sanitizedHTML(
        "a",
        {
          class: "block pl-4",
          href: `#${kebabCase(next(node.content))}`,
          "data-astro-prefetch": false
        },
        next(node.content)
      ),
    [BLOCKS.PARAGRAPH]: renderNothing,
    [BLOCKS.UL_LIST]: renderNothing,
    [BLOCKS.OL_LIST]: renderNothing,
    [BLOCKS.QUOTE]: renderNothing,
    [BLOCKS.HR]: renderNothing,
    [BLOCKS.TABLE]: renderNothing,
    [BLOCKS.TABLE_CELL]: renderNothing,
    [BLOCKS.TABLE_HEADER_CELL]: renderNothing,
    [BLOCKS.TABLE_ROW]: renderNothing
  }
}
