import type { EntryFieldEmbed } from "../types"

export const parseMediaType = (data: EntryFieldEmbed["data"]) => {
  return `https://${data.fields.file.url}`
}

export const renderNothing = () => ""

/**
 * @param tag A vaild HTML tag
 * @param attrs Attributes from the HTML element you provided
 * @param content Anything that'll be appended from `textContent`
 * @returns A gorgeous HTML string that's safe to parse for Contentful to eat :3
 */
export const sanitizedHTML = <
  Tag extends keyof HTMLElementTagNameMap,
  Content = string
>(
  tag: Tag,
  attrs?: Partial<
    Omit<HTMLElementTagNameMap[Tag], keyof HTMLElementTagNameMap[Tag]>
  >,
  content?: Content
) => {
  // `document` and `window` is not available for server so I had to deal cobbling with fukin arrays
  const START_TAG = `<${tag}>`
  const END_TAG = `</${tag}>`

  const START_TAG_VOID = `<${tag} `
  const END_TAG_VOID = ` />`

  const parsedAttributes = attrs
    ? Object.entries(attrs)
        .map(([k, v]) => {
          if (v === null) return null
          return `${k}="${v}"`
        })
        .join(" ")
    : ""

  if (tag === "img")
    return [START_TAG_VOID, parsedAttributes, END_TAG_VOID].join("")
  if (parsedAttributes)
    return [START_TAG_VOID, parsedAttributes, ">", content, END_TAG].join("")

  return [START_TAG, content, END_TAG].join("")
}
