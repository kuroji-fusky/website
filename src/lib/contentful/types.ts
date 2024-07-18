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

export interface CustomInlineEntry {
  sys: {
    contentType: {
      sys: {
        id: string
      }
    }
  }
  fields: {
    url?: string
  }
}

export type EntryFieldEmbed = EntryFieldTypes.Object<{
  fields: {
    file: {
      url: string
    }
  }
}>
