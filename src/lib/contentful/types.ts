import type { Options } from "@contentful/rich-text-html-renderer"
import type { EntryFieldTypes } from "contentful"

export type { EntryFieldTypes }

export type AwaitedReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>

export interface ContentEntries {
  limit?: number
  category?: string
  img?: {
    quality?: number
    width?: number
    height?: number
  }
}

export interface CustomInlineEntry<
  F extends object = {
    url?: string
  }
> {
  sys: {
    contentType: {
      sys: {
        id: string
      }
    }
  }
  fields: F
}

export type EntryFieldEmbed = EntryFieldTypes.Object<{
  fields: {
    file: {
      url: string
    }
  }
}>

export type PartialRenderer = Partial<Options>
