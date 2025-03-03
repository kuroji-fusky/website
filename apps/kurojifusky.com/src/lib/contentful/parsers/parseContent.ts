/* eslint-disable @typescript-eslint/no-explicit-any */
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import type { PartialRenderer } from "../types"
import { kebabCase } from "lodash-es"
import { sanitizedHTML, renderNothing } from "./utils"

const kebabHeadings = (
  tag: keyof HTMLElementTagNameMap,
  heading: any,
  node: any
) => sanitizedHTML(tag, { id: kebabCase(heading.value) }, node)

const ytThumbnailFallback = (ytId: string) => {
  const tite = ytId.split("/").at(-1)
  const imgUrl = `https://img.youtube.com/vi/${tite}`

  return sanitizedHTML(
    "p",
    {},
    sanitizedHTML(
      "a",
      { href: ytId, "data-astro-prefetch": "false", target: "_blank" },
      sanitizedHTML(
        "img",
        { src: `${imgUrl}/maxresdefault.jpg`, alt: "" },
        null
      )
    )
  )
}

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
    [BLOCKS.HEADING_2]: (node, next) =>
      kebabHeadings("h2", node.content[0], next(node.content)),
    [BLOCKS.HEADING_3]: (node, next) =>
      kebabHeadings("h3", node.content[0], next(node.content)),
    [BLOCKS.HR]: () =>
      sanitizedHTML(
        "hr",
        { class: "border-kuro-lavender-200 opacity-75" },
        null
      ),
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
      const _nodeContent = node.content
      const normalTextHTML = sanitizedHTML("p", {}, next(_nodeContent))

      const isNodeType = (nt: string) => {
        return _nodeContent.some((x) => (x as any).nodeType !== nt)
      }

      if (!_nodeContent.some((x: any) => x.value === "")) return normalTextHTML

      const isNodeHyperlink = isNodeType("hyperlink")
      const isNodeText = isNodeType("text")

      // Check if paragraph is a standalone link and a YouTube embed
      if (isNodeHyperlink) {
        const { data: nodeData, content: nodeContent } = _nodeContent[1] as any

        if (!nodeContent) return normalTextHTML

        const isTextYTEmbed = nodeContent.value === "[yt-embed]"

        const _uri = nodeData.uri
        const strippedUrl = _uri?.split("/").at(-1)

        // YouTube
        if (
          isTextYTEmbed &&
          (_uri?.includes("youtu.be") || _uri?.includes("youtube.com/"))
        ) {
          if (_uri?.includes("shorts"))
            return sanitizedHTML(
              "yt-embed-wrapper",
              {
                "video-id": strippedUrl,
                "is-shorts": ""
              },
              ytThumbnailFallback(_uri)
            )

          return sanitizedHTML(
            "yt-embed-wrapper",
            {
              "video-id": strippedUrl
            },
            ytThumbnailFallback(_uri)
          )
        }
      }

      // If node is just text, return as is
      if (isNodeText) return normalTextHTML

      if (
        _nodeContent.some((x: any) => x.value == "" && x.nodeType == "text")
      ) {
        return ""
      }

      // Otherwise, return the debug information, because I have skill issue
      return sanitizedHTML("p", {}, JSON.stringify(_nodeContent))
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
    [INLINES.HYPERLINK]: (node, next) => {
      const _uriExternal = node.data.uri.startsWith("https://")
      return sanitizedHTML(
        "a",
        {
          class:
            "text-kuro-lavender-300 hover:text-kuro-lavender-400 underline hover:no-underline",
          href: node.data.uri,
          target: _uriExternal ? "_blank" : null,
          rel: _uriExternal ? "noopenner noreferrer" : null
        },
        next(node.content)
      )
    }
  }
}

const tocItem = (heading: any, node: any, cls?: string) => {
  return sanitizedHTML(
    "li",
    {},
    sanitizedHTML(
      "a",
      {
        class: `block ${cls}`,
        href: `#${kebabCase(heading.value)}`,
        "data-astro-prefetch": false
      },
      node
    )
  )
}

export const parseForTOC: PartialRenderer = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, next) =>
      tocItem(node.content[0], next(node.content), "pl-0"),
    [BLOCKS.HEADING_3]: (node, next) =>
      tocItem(node.content[0], next(node.content), "pl-3.5"),
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
