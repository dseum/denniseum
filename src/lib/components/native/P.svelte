<script lang="ts">
  import type { Snippet } from 'svelte'

  let {
    children,
    class: className,
  }: {
    children: Snippet
    class?: string
  } = $props()
</script>

<p class={['leading-relaxed', className]}>
  {@render children()}
</p>
