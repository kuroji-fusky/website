<script lang="ts">
  import { parseDateStr } from "$lib/parseDateStr"
  import { kebabCase } from "lodash-es"

  export let title: string
  export let description: string
  export let date: string
  export let slug: string
  export let category: string[] = [""]
  export let authors: string[] = ["Kuroji Fusky"]
  export let referrer: string = ""
  export let size: "small" | "normal" | "heading" = "normal"

  const { readableDate, isoDate } = parseDateStr(date)
  const parsedSlug = `/blog/${slug}?from=${referrer}`
</script>

<div id="blog-item" class="flex {size}">
  <a
    id="blog-item-banner"
    href={parsedSlug}
    class="overflow-hidden aspect-video rounded-md hover:*:scale-[1.025] [&_img]:h-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-300 {size}"
  >
    <slot />
  </a>
  <div id="blog-item-details" class={size}>
    <div id="blog-item-category-wrapper" class="flex flex-wrap {size}">
      {#each category as categoryItem}
        <a
          href={`/blog/category/${kebabCase(categoryItem)}`}
          class="font-semibold opacity-75 text-kuro-lavender-200 hover:opacity-100 hover:underline"
          >{categoryItem}</a
        >
      {/each}
    </div>
    {#if size === "heading"}
      <h2 id="blog-item-heading" class="font-bold {size}">
        <a
          href={parsedSlug}
          class="hover:underline hover:text-kuro-lavender-300">{title}</a
        >
      </h2>
    {:else}
      <h3 id="blog-item-heading" class="font-bold {size}">
        <a
          href={parsedSlug}
          class="hover:underline hover:text-kuro-lavender-300">{title}</a
        >
      </h3>
    {/if}
    <p class="overflow-hidden opacity-75 leading-relaxed">
      {description}
    </p>
    <span class="inline-flex items-center gap-x-1.5 text-sm">
      <span>Authors</span>
      <span class="size-0.5 rounded-full bg-white/75" />
      <time datetime={isoDate} class="font-mono opacity-75">{readableDate}</time
      >
    </span>
  </div>
</div>

<style lang="postcss" global>
  #blog-item.small {
    @apply flex-row gap-x-5;
  }
  #blog-item.normal,
  #blog-item.heading {
    @apply flex-col gap-y-3;
  }

  #blog-item-banner.small {
    @apply size-36 flex-shrink-0;
  }
  #blog-item-banner.normal,
  #blog-item-banner.heading {
    @apply w-full;
  }

  #blog-item-details.small {
    @apply flex flex-col gap-y-2;
  }
  #blog-item-details.normal,
  #blog-item-details.heading {
    @apply flex flex-col gap-y-3;
  }

  #blog-item-category-wrapper.heading {
    @apply pt-2 gap-4;
  }
  #blog-item-category-wrapper.normal {
    @apply pt-1.5 text-sm gap-3;
  }
  #blog-item-category-wrapper.small {
    @apply text-sm gap-3;
  }

  #blog-item-heading.small {
    @apply text-2xl leading-8;
  }
  #blog-item-heading.normal {
    @apply text-2xl;
  }
  #blog-item-heading.heading {
    @apply text-3xl font-extrabold;
  }
</style>
