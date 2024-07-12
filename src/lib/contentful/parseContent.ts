import type { Options } from "@contentful/rich-text-html-renderer"
import { BLOCKS, MARKS, INLINES, type Block, type Inline } from "@contentful/rich-text-types"
import type { MoarInlineTypes } from "./types"

const parseInlineEntry = (crap: Block | Inline) => {
  const unwrap = crap.data as MoarInlineTypes
}

export const rendererOptions: Partial<Options> = {
  renderMark: {
    [MARKS.BOLD]: (t) => `<strong>${t}</strong>`,
    [MARKS.CODE]: (t) =>
      `<code class="rounded-md bg-kuro-lavender-900 text-base py-0.5 px-1">${t}</code>`,
    [MARKS.ITALIC]: (t) => `<em>${t}</em>`
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => {
      const nodeContent = node.content

      if (!nodeContent.some((x) => (x as any).value === "")) return `<p>${next(nodeContent)}</p>`
      return `<div>${next(nodeContent)}</div>`
    },
    [BLOCKS.QUOTE]: (node, next) =>
      `<blockquote class="px-6 py-5 border-l-[6px] border-kuro-lavender-300 bg-kuro-lavender-900 bg-opacity-40 my-2.5 text-kuro-violet-50 prose-p:!font-medium">${next(node.content)}</blockquote>`,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const embedFields = node.data.target.fields

      return `
        <img src="https:${embedFields.file.url}" alt="${embedFields.title}" class="rounded-md h-[32rem] mx-auto" />
      `
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => `<fucking-lol>${JSON.stringify(node.data)}</fucking-lol>`
  }
}

export const parseForTOC: Partial<Options> = {}
