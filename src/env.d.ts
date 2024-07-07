/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string
  readonly CONTENTFUL_DELIVERY_TOKEN: string
  readonly CONTENTFUL_PREVIEW_TOKEN: string
  readonly YT_API_KEY: string
  readonly UMAMI_ID: string
}
