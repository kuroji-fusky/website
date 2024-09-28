/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Options } from "@contentful/rich-text-html-renderer"
import type {
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  FieldsType
} from "contentful"


/** Gets the return type for an async function; a wrapper for `Awaited<ReturnType<T>>` */
export type ReturnTypeFromAwaited<T extends (...args: any) => any> = Awaited<ReturnType<T>>

export type ResolveModelFields<E extends EntrySkeletonType> = Entry<E, undefined, string>["fields"]

/** An alias for `EntrySkeletonType<F, I>` */
export type DefineContentModel<Id extends string,Fields extends FieldsType> = EntrySkeletonType<Fields, Id>

export type EntryFieldEmbed = EntryFieldTypes.Object<{
  fields: {
    file: {
      url: string
    }
  }
}>

export type PartialRenderer = Partial<Options>
