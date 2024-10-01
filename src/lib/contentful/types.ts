/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Options } from "@contentful/rich-text-html-renderer"
import type {
  EntriesQueries,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  FieldsType
} from "contentful"

/** Gets the return type for an async function; a wrapper for `Awaited<ReturnType<T>>` */
export type ReturnTypeFromAwaited<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>

export type PartialRenderer = Partial<Options>

export namespace ctf {
  export type Skeleton = EntrySkeletonType

  export type Queries<E extends Skeleton> = EntriesQueries<E, undefined>

  /** An alias for `EntrySkeletonType<F, I>` */
  export type DefineModel<
    Id extends string,
    Fields extends FieldsType
  > = EntrySkeletonType<Fields, Id>

  export type ResolveModelFields<E extends EntrySkeletonType> = Entry<
    E,
    undefined,
    string
  >["fields"]
}

export namespace ctf.Fields {
  export type Text = EntryFieldTypes.Text
  export type Boolean = EntryFieldTypes.Boolean
  export type Date = EntryFieldTypes.Date
  export type RichText = EntryFieldTypes.RichText
  export type Symbol = EntryFieldTypes.Symbol

  export type EntryLink<E extends ctf.Skeleton> = EntryFieldTypes.EntryLink<E>

  /* eslint-disable-next-line @typescript-eslint/ban-types */
  export type Array<E extends Symbol | EntryLink<ctf.Skeleton>> = EntryFieldTypes.Array<E>

  export type Embed = EntryFieldTypes.Object<{
    fields: {
      file: {
        url: string
      }
    }
  }>
}
