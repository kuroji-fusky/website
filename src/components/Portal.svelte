<script lang="ts">
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const moveDom = (node: any, inject: any) => {
    const target = document.querySelector(inject)
    target!.appendChild(node)
  }
</script>

<div {...$$props} use:moveDom={"body"}>
  <slot />
</div>
