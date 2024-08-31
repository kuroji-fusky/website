<script lang="ts">
  import { navItems } from "./Navbar.constants"
  import ChevronDownIcon from "~icons/lucide/chevron-down?raw"
</script>

<div class="lg:flex hidden">
  {#each navItems as root}
    <div class="px-3.5 py-3 inline-flex items-center gap-x-1.5 flex-col">
      {#if root.link}
        <a href={root.link} class="inline-flex items-center gap-x-1.5">
          <span class="select-none">{root.text}</span>
          {#if root.subitems}
            <div class="chevron">
              {@html ChevronDownIcon}
            </div>
          {/if}
        </a>
        {#if root.subitems}
          <div data-dialog-portal-placeholder=""></div>
          <!-- <NavbarSubItem items={root.subitems} /> -->
        {/if}
      {:else}
        <div class="flex items-center gap-x-1.5">
          <span
            class="cursor-default md:group-hover/topnav:text-kuro-lavender-300 select-none"
            >{root.text}</span
          >
          {#if root.subitems}
            <div class="chevron">
              {@html ChevronDownIcon}
            </div>
          {/if}
        </div>
        {#if root.subitems}
          <div data-dialog-portal-placeholder=""></div>
          <!-- <NavbarSubItem items={root.subitems} /> -->
        {/if}
      {/if}
    </div>
  {/each}
</div>

<div>
  <!-- other content -->
</div>

<style lang="postcss">
  .chevron {
    @apply transform-gpu transition-transform opacity-60;
  }
</style>
