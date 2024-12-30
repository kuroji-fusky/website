/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string
  readonly CONTENTFUL_DELIVERY_TOKEN: string
  readonly CONTENTFUL_PREVIEW_TOKEN: string
  readonly GOOGLE_API_KEY: string
  readonly UMAMI_SITE_ID: string
}
