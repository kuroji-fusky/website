<script lang="ts">
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const moveDom = (node: any, inject: any) => {
    const target = document.querySelector(inject)
    target!.appendChild(node)
  }
</script>

<kuroui-portal {...$$props} use:moveDom={"body"} class="contents">
  <slot />
</kuroui-portal>
