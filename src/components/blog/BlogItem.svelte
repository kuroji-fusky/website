<script lang="ts">
  import { parseDateStr } from "$lib/parseDateStr"

  export let title: string
  export let description: string
  export let date: string
  export let slug: string
  export let category: string[] = [""]
  export let referrer: string = ""
  export let size: "small" | "normal" | "heading" = "normal"

  const { readableDate, isoDate } = parseDateStr(date)
  const parsedSlug = `/blog/${slug}?from=${referrer}`
</script>

<div id="blog-item-root" class="flex {size}">
  <a
    id="blog-item-banner"
    href={parsedSlug}
    class="overflow-hidden aspect-video rounded-md hover:*:scale-[1.025] [&_img]:h-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-300 {size}"
  >
    <slot />
  </a>
  <div id="blog-item-details" class={size}>
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
  #blog-item-root.small {
    @apply flex-row gap-x-5;
  }
  #blog-item-root.normal,
  #blog-item-root.heading {
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

  #blog-item-heading.small {
    @apply text-2xl leading-8;
  }
  #blog-item-heading.normal {
    @apply pt-2 text-2xl;
  }
  #blog-item-heading.heading {
    @apply pt-2 text-3xl font-extrabold;
  }
</style>
