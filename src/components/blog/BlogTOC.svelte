<script lang="ts">
  import ChevronDownIcon from "~icons/lucide/chevron-down?raw"
  import TocIcon from "~icons/lucide/list?raw"

  let isExpanded = false
</script>

<aside
  class="bg-kuro-dark2 flex-shrink-0 md:[align-self:start] md:w-56 lg:w-60 sticky md:px-0 top-14 md:top-20 inset-x-0 md:ml-5 lg:ml-10 z-[2]"
>
  <div class="w-full">
    <button
      on:click={() => (isExpanded = !isExpanded)}
      class="my-2.5 w-full text-base flex md:hidden items-center"
    >
      <div class="flex flex-1 items-center gap-x-2">
        <span class=" [&_svg]:size-5 opacity-50">{@html TocIcon}</span>
        <span>Table of contents</span>
      </div>
      <span
        class={`block md:hidden transition-transform transform-gpu duration-[250ms] ${isExpanded ? "rotate-180" : ""}`}
        >{@html ChevronDownIcon}</span
      >
    </button>
    <span class="hidden md:block font-bold mb-2 text-xl">Table of contents</span
    >
    <div
      class={`grid md:block [&_ul]:overflow-hidden transition-[grid] duration-[250ms] [&_ul]:transition-[margin] [&_ul]:duration-[250ms] ${isExpanded ? "[&_ul]:my-2 md:[&_ul]:my-0 grid-rows-[1fr]" : "[&_ul]:my-0 grid-rows-[0fr]"}`}
    >
      <slot />
    </div>
  </div>
</aside>
