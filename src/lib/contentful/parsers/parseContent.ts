import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import type { PartialRenderer } from "../types"
import { kebabCase } from "lodash-es"
import { sanitizedHTML, renderNothing } from "./utils"

const kebabHeadings = (tag: keyof HTMLElementTagNameMap, heading: any, node: any) =>
  sanitizedHTML(tag, { id: kebabCase(heading.value) }, node)

export const rendererOptions: PartialRenderer = {
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
    [BLOCKS.HR]: () => sanitizedHTML("hr", { class: "border-kuro-lavender-200 opacity-75" }, null),
    [BLOCKS.UL_LIST]: (node, next) =>
      sanitizedHTML(
        "ul",
        {
          class:
            "flex flex-col ml-2 before:[&_li]:content-['–'] before:[&_li]:opacity-30 [&_li]:inline-flex [&_li]:gap-x-3"
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
      const normalTextHTML = sanitizedHTML("p", {}, next(nodeContent))

      if (!nodeContent.some((x: any) => x.value === "")) {
        return normalTextHTML
      }

      const nodeData = nodeContent[1].data

      const isNodeHyperlink = nodeContent.some((x) => (x as any).nodeType !== "hyperLink")
      const isNodeText = nodeContent.some((x) => (x as any).nodeType !== "text")

      // Check if paragraph is a standalone link and a YouTube embed
      if (isNodeHyperlink) {
        const _uri = nodeData.uri
        const strippedUrl = _uri?.split("/")

        // YouTube
        if (_uri?.includes("youtu.be") || _uri?.includes("youtube.com/")) {
          if (_uri?.includes("shorts"))
            return sanitizedHTML("yt-embed-wrapper", {
              "video-id": strippedUrl.at(-1),
              "is-shorts": ""
            })

          return sanitizedHTML("yt-embed-wrapper", {
            "video-id": strippedUrl.at(-1)
          })
        }

        // Twitter
        if (_uri?.includes("twitter.com/") || _uri?.includes("x.com")) {
          return sanitizedHTML("post-embed-wrapper", {
            provider: "x-twitter",
            "post-id": strippedUrl[5]
          })
        }

        // Reddit
        if (_uri?.includes("reddit.com")) {
          return sanitizedHTML("post-embed-wrapper", {
            provider: "reddit",
            "post-id": strippedUrl[5]
          })
        }
      }

      // Check if paragraph is an inline entry
      if (nodeContent.some((x) => (x as any).nodeType === "embedded-entry-inline")) {
        const _target = nodeData.target
        const _contentId = _target.sys.contentType.sys.id

        const _fields = _target.fields

        if (_contentId === "codeBlock")
          return sanitizedHTML(
            "prism-code-renderer",
            {
              "file-name": _fields.fileName
            },
            sanitizedHTML("code", { class: "text-base" }, _fields.code)
          )
      }

      // If node is just text, return as a normal link
      if (isNodeText) {
        return normalTextHTML
      }
      if (nodeContent.some((x: any) => x.value == "" && x.nodeType == "text")) {
        return ""
      }

      // Otherwise, return the debug information, because I have skill issue
      return sanitizedHTML("p", {}, JSON.stringify(nodeContent))
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

const tocItem = (headingItem: string, cls?: string) => {
  return sanitizedHTML(
    "li",
    {},
    sanitizedHTML(
      "a",
      {
        class: `block ${cls || "pl-0"}`,
        href: `#${kebabCase(headingItem)}`,
        "data-astro-prefetch": false
      },
      headingItem
    )
  )
}

export const parseForTOC: PartialRenderer = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, next) => tocItem(next(node.content)),
    [BLOCKS.HEADING_3]: (node, next) => tocItem(next(node.content), "pl-3"),
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
