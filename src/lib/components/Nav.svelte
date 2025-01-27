<script lang="ts">
  import { afterNavigate } from '$app/navigation'
  import { page as currentPage } from '$app/state'
  import { fade } from 'svelte/transition'

  let menuIsVisible = $state(false)
  function toggleMenu() {
    menuIsVisible = !menuIsVisible
  }
  afterNavigate(() => {
    menuIsVisible = false
  })
  const pages = [
    {
      name: 'Me',
      href: '/',
    },
    {
      name: 'My Work',
      href: '/work',
    },
    {
      name: 'My Music',
      href: '/music',
    },
  ]
</script>

<nav
  class="fixed top-0 z-20 flex h-16 w-full justify-between border-b-2 border-black bg-white px-4 md:border-b md:px-6"
>
  <div class="hidden items-center gap-2 md:flex">
    {#each pages as page}
      <a
        class={[
          'px-2 transition-all duration-300',
          currentPage.url.pathname === page.href && 'bg-indigo-100',
        ]}
        href={page.href}
      >
        {page.name}
      </a>
    {/each}
  </div>
  <div
    class="flex items-center font-bold italic md:text-2xl md:font-normal lg:flex lg:text-2xl"
  >
    <a href="/">
      &copy; {new Date().getFullYear()} Dennis Eum
    </a>
  </div>
  <div class="flex items-center md:hidden">
    <button
      class="flex h-9 w-9 items-center justify-center border-2 border-black md:hidden"
      onclick={toggleMenu}
      aria-label="Open navigation menu"
    >
      <div class="h-2 w-2 rounded-full bg-black"></div>
    </button>
  </div>
</nav>
{#if menuIsVisible}
  <div
    class="fixed top-16 left-0 z-20 h-[calc(100vh-4rem)] w-full space-y-6 overflow-y-scroll bg-white p-6 md:hidden"
    transition:fade={{
      duration: 200,
    }}
  >
    {#each pages as page}
      <a
        class={[
          'flex h-12 items-center border border-black px-3 transition-all duration-300',
          currentPage.url.pathname === page.href && 'bg-indigo-100',
        ]}
        href={page.href}
      >
        <div class="shrink-0 whitespace-nowrap">{page.name}</div>
        <div class="flex h-full grow items-center pl-3">
          <div class="w-full border-b border-black"></div>
        </div>
      </a>
    {/each}
  </div>
{/if}
