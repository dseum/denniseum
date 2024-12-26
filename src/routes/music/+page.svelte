<script lang="ts">
  import { awards } from './data'
  import P from '$lib/components/native/P.svelte'
  import A from '$lib/components/native/A.svelte'
  import { format } from 'date-fns'
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="lg:grid grid-cols-3 gap-16">
  <div class="space-y-4 md:space-y-8">
    <P>
      I studied classical music as a cellist for eleven years. For the latter
      eight, I also was part of an orchestra, going on multiple tours to Europe.
      I still love to play whenever I can!
    </P>
    <P class="sticky top-8">
      These are some of my previous awards, although I no longer participate in
      competitions.
    </P>
  </div>
  <div class="col-span-2">
    <ol class="space-y-6 md:space-y-8 pt-6 md:pt-8 lg:pt-0">
      {#each awards as award}
        <li class="leading-normal">
          <span
            class="border-gray-800 border px-1 text-base sm:text-xl mr-0.5 sm:mr-1"
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
