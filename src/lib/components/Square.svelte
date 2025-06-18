<script lang="ts">
  import { animate } from 'motion'
  import { onMount } from 'svelte'

  let containerElement = $state<HTMLDivElement>()
  onMount(() => {
    if (!containerElement) return
    const animation = animate(
      containerElement,
      { opacity: 1 },
      { ease: 'easeOut', duration: 1 },
    )
    return () => {
      animation.cancel()
    }
  })
</script>

<div class="flex justify-center">
  <div class="relative w-full max-w-4xl">
    <div class="flex w-full justify-center sm:pt-8">
      <div bind:this={containerElement} class="max-w-3xl opacity-0">
        <div
          class="aspect-square w-[calc(100vw-2rem)] max-w-3xl md:w-[calc(100vw-4rem)]"
        >
          <figure>
            <enhanced:img
              src="./Square/ripples_on_earth.jpg?w=1536;1366;1080;768;540"
              alt="Ripples on Earth"
              sizes="min(1536px, 100vw)"
              fetchpriority="high"
              loading="eager"
            />
          </figure>
        </div>
      </div>
    </div>
    <div
      class="font-neutral absolute top-2 left-2 text-[16vw] leading-none sm:top-0 sm:left-0 lg:text-[12rem]"
    >
      <h1 class="font-bold">Dennis</h1>
      <h1 class="font-bold">Eum</h1>
    </div>
  </div>
</div>

<style>
  @keyframes beat {
    0% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.4;
    }
  }
  figure {
    animation: beat 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
