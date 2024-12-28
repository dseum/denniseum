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

<div class="relative">
  <div class="flex w-full justify-center sm:pt-8">
    <div bind:this={containerElement} class="max-w-3xl opacity-0">
      <figure>
        <enhanced:img
          src="./Square/ripples_on_earth.jpg?w=960;1152;1536"
          alt="Ripples on Earth"
          sizes="(min-width: 640px) 960px, (min-width: 768px) 1152px, (min-width: 1024px) 1536px"
        />
        <figcaption
          class="-translate-x-[0.4rem] -translate-y-7 text-right font-neutral text-xl font-bold sm:-translate-y-9 sm:text-3xl"
        >
          Software Engineer
        </figcaption>
      </figure>
    </div>
  </div>
  <div
    class="absolute left-2 top-2 font-neutral text-[16vw] leading-none sm:left-0 sm:top-0 lg:text-[12rem]"
  >
    <h1 class="font-bold">Dennis</h1>
    <h1 class="font-bold">Eum</h1>
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
