<script lang="ts">
  import { isNavOpen, navTitle } from "$stores/index"

  let baseDir: string = ""
  let baseDirLabel: string = "Blog post"

  $: hasNavTitle = $navTitle && $isNavOpen
</script>

<div
  class="relative overflow-hidden font-semibold lg:text-xl text-lg select-none"
>
  {#if baseDir && baseDirLabel}
    <div class="absolute">
      <span
        id="breadcrumb-nav"
        class={!hasNavTitle ? null : "!-top-3.5 !opacity-0"}
      >
        {baseDirLabel}
      </span>
    </div>
  {/if}
  <span
    id="breadcrumb-nav"
    class={`truncate ${hasNavTitle ? null : "!top-3.5 !opacity-0"}`}
    >{$navTitle}</span
  >
</div>

<style>
  #breadcrumb-nav {
    @apply relative transition-[top,opacity] top-0 opacity-100 duration-200;
  }
</style>
