/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Options } from "@contentful/rich-text-html-renderer"
import type { EntryFieldTypes } from "contentful"

export type { EntryFieldTypes }

export type AwaitedReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>

type EntryTypeConstraints = {
  [x: string]:
    | EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    | EntryFieldTypes.Text
    | EntryFieldTypes.RichText
    | EntryFieldTypes.Date
    | EntryFieldTypes.Boolean
    | EntryFieldTypes.Object<any>
}

export type ContentfulFieldConstructor<
  Id extends string,
  Fields extends EntryTypeConstraints
> = {
  contentTypeId: Id
  fields: Fields
}

export interface ContentEntries {
  limit?: number
  category?: string
  img?: {
    quality?: number
    width?: number
    height?: number
  }
}

export type EntryFieldEmbed = EntryFieldTypes.Object<{
  fields: {
    file: {
      url: string
    }
  }
}>

export type PartialRenderer = Partial<Options>
