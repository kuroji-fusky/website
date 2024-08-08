<script lang="ts">
  import type {
    ShowcaseSchema,
    ShowcaseTechnologiesLiteral
  } from "../../../content/config"

  import {
    AstroIcon,
    FlutterIcon,
    RedisIcon,
    MongodbIcon,
    NextjsIcon,
    SvelteIcon,
    TauriIcon,
    FastApiIcon,
    PlasmoIcon,
    type UnpluginIconType
  } from "$lib/icons"

  export let data: ShowcaseSchema
  export let slug: string

  const techiesArr = data.details.technologies || []

  const techIcon: Record<ShowcaseTechnologiesLiteral, UnpluginIconType> = {
    astro: AstroIcon,
    flutter: FlutterIcon,
    plasmo: PlasmoIcon,
    fastapi: FastApiIcon,
    tauri: TauriIcon,
    redis: RedisIcon,
    mongodb: MongodbIcon,
    nextjs: NextjsIcon,
    sveltekit: SvelteIcon
  }
</script>

<div class="h-[calc(100dvh-6rem)] flex items-center" data-project-slug={slug}>
  <div class="my-auto grid gap-y-4">
    <span>{data.type}</span>
    <h2 class="text-6xl font-hero-heading font-bold">
      <a href={`/showcase/${slug}`}>{data.title}</a>
    </h2>
    <span class="text-xl w-3/4 inline-block">{data.excerpt}</span>
    <div class="flex flex-wrap gap-3 mt-auto">
      {#each techiesArr as t}
        <div class="[&_svg]:size-6">
          {@html techIcon[t]}
        </div>
      {/each}
    </div>
  </div>
</div>
