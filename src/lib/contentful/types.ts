/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Options } from "@contentful/rich-text-html-renderer"
import type { EntryFieldTypes, EntrySkeletonType, FieldsType } from "contentful"

export type { EntryFieldTypes }

export type AwaitedReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>

export type ContentfulFieldConstructor<
  Id extends string,
  Fields extends FieldsType
> = EntrySkeletonType<Fields, Id>

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
