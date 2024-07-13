import type { Options } from "@contentful/rich-text-html-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import type { CustomInlineEntry } from "./types"

export const rendererOptions: Partial<Options> = {
  renderMark: {
    [MARKS.BOLD]: (t) => `<strong>${t}</strong>`,
    [MARKS.ITALIC]: (t) => `<em>${t}</em>`,
    [MARKS.CODE]: (t) =>
      `<code class="rounded-md bg-kuro-lavender-900 text-base py-0.5 px-1">${t}</code>`
  },
  renderNode: {
    [BLOCKS.QUOTE]: (node, next) =>
      `<blockquote class="px-6 py-5 border-l-[6px] border-kuro-lavender-300 bg-kuro-lavender-900 bg-opacity-40 my-2.5 text-kuro-violet-50 prose-p:!font-medium">${next(node.content)}</blockquote>`,
    [BLOCKS.PARAGRAPH]: (node, next) => {
      const nodeContent = node.content
      if (!nodeContent.some((x) => (x as any).value === "")) return `<p>${next(nodeContent)}</p>`

      return `<div>${next(nodeContent)}</div>`
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const embedFields = node.data.target.fields

      return `<img src="https:${embedFields.file.url}" alt="${embedFields.title}" class="rounded-md h-[32rem] mx-auto" />`
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      const { sys, fields } = node.data.target as CustomInlineEntry
      const strippedUrl = fields.url?.split("/").at(-1)

      if (sys.contentType.sys.id === "youTubeVideo") {
        return `
        <div class="grid place-items-center">
          <iframe class="w-full h-full aspect-video mx-auto rounded-md overflow-hidden block" src="https://www.youtube-nocookie.com/embed/${strippedUrl}" frameborder="0" allow="clipboard-write; encrypted-media; web-share"></iframe>
        </div>`
      }

      return `<div>${node}</div>`
    },
    [INLINES.HYPERLINK]: (node, next) =>
      `<a class="text-kuro-lavender-300 hover:text-kuro-lavender-400 hover:underline" href="${node.data.uri}" target="_blank" rel="noopenner noreferrer">${next(node.content)}</a>`
  }
}

export const parseForTOC: Partial<Options> = {}
