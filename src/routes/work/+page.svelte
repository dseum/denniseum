<script lang="ts">
  import { format } from 'date-fns'
  import { experiences } from './data'
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="flex justify-center">
  <ol class="w-full max-w-7xl space-y-4 md:space-y-8">
    {#each experiences as experience}
      <li>
        <div class="justify-between lg:flex">
          <div>
            {experience.role}
          </div>
          <div class="text-lg sm:text-xl lg:text-3xl">
            {format(experience.period.start, 'MMM yyyy')} &ndash; {experience
              .period.end
              ? format(experience.period.end, 'MMM yyyy')
              : 'Present'}
          </div>
        </div>
        <div class="flex justify-between italic">
          <div class="text-lg sm:text-xl lg:text-3xl">
            {experience.for}
          </div>
          <div class="hidden lg:block">
            {experience.location.city}, {experience.location.macro}
          </div>
        </div>
      </li>
    {/each}
  </ol>
</div>
