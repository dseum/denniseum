<script lang="ts">
  import '../app.css'
  import Nav from '$lib/components/Nav.svelte'
  import { afterNavigate } from '$app/navigation'

  let { children } = $props()

  let mainElement = $state<HTMLElement>()

  afterNavigate(() => {
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: 'instant' })
    }
  })
</script>

<svelte:head>
  <title>Dennis Eum</title>
</svelte:head>

<Nav />
<div class="pt-16">
  <main class="h-[calc(100vh-4rem)] overflow-y-auto" bind:this={mainElement}>
    <div class="px-4 pt-4 pb-8 md:px-8 md:pt-8 md:pb-16">
      {@render children()}
    </div>
  </main>
</div>
