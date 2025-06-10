<script lang="ts">
  import { awards } from './data'
  import P from '$lib/components/native/P.svelte'
  import A from '$lib/components/native/A.svelte'
  import { format } from 'date-fns'
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="flex justify-center">
  <div class="w-full max-w-7xl grid-cols-9 gap-16 lg:grid">
    <div class="col-span-4 space-y-4 md:space-y-8">
      <P>
        I studied classical music as a cellist for eleven years. For the latter
        eight, I also performed in an orchestra and had the chance to go on
        tours to Europe.
      </P>
      <P class="sticky top-8"
        >These are some of my previous awards. I no longer compete, but I still
        love to play!
      </P>
    </div>
    <div class="col-span-5 ml-auto">
      <ol class="max-w-max space-y-6 pt-6 md:space-y-8 md:pt-8 lg:pt-0">
        {#each awards as award}
          <li class="leading-normal">
            <span
              class="mr-0.5 border border-gray-800 px-1 text-base sm:mr-1 sm:text-xl"
            >
              {format(award.date, 'MMM yyyy')}
            </span>
            {#if award.href}
              <A href={award.href}>
                {award.name}
              </A>
            {:else}
              {award.name}
            {/if}
          </li>
        {/each}
      </ol>
    </div>
  </div>
</div>
