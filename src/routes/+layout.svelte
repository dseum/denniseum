<script lang="ts">
  import '../app.css'
  import Nav from '$lib/components/Nav.svelte'

  let { children } = $props()
</script>

<svelte:head>
  <title>Dennis Eum</title>
</svelte:head>

<Nav />
<div class="pt-16">
  <main class="h-[calc(100vh-4rem)] overflow-y-auto">
    <div class="px-4 pb-8 pt-4 md:px-8 md:pb-16 md:pt-8">
      {@render children()}
    </div>
  </main>
</div>
