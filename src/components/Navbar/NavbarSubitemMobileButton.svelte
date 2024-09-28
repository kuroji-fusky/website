<script lang="ts">
  import ChevronDownIcon from "~icons/lucide/chevron-down?raw"
  import type { navItems } from "./Navbar.constants"
  import { cn } from "$lib/utils"

  let isExpanded = false

  export let text: string
  // This type is ridiculous lol
  export let subitems: NonNullable<(typeof navItems)[number]["subitems"]>
</script>

<button
  class="px-3.5 flex items-center w-full lg:hidden py-2.5 text-lg font-semibold"
  on:click={() => (isExpanded = !isExpanded)}
>
  <span class="flex-1 text-left">
    {text}
  </span>
  <div
    class={cn(
      "transform-gpu transition-transform opacity-60",
      isExpanded && "rotate-180"
    )}
  >
    {@html ChevronDownIcon}
  </div>
</button>
<ul
  class={cn(
    "grid lg:hidden duration-200 transition-[grid]",
    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
  )}
>
  <div class="overflow-hidden">
    {#each subitems as item}
      <li>
        <a
          href={item.link}
          class="flex items-center gap-x-2 text-base py-2 px-3.5"
        >
          <div class="size-8 rounded-md bg-kuro-lavender-600" />
          <span>
            {item.text}
          </span>
        </a>
      </li>
    {/each}
  </div>
</ul>
