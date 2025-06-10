<script lang="ts">
  import A from '$lib/components/native/A.svelte'
  import P from '$lib/components/native/P.svelte'
  import Square from '$lib/components/Square.svelte'
</script>

<svelte:head>
  <meta name="robots" content="all" />
  <meta
    name="description"
    content="I'm a Harvard undergraduate studying for a S.M. and A.B. in Computer Science with a secondary in Psychology, and I currently chair the technology board at The Harvard Crimson."
  />
</svelte:head>

<Square />
<div class="flex justify-center">
  <div class="my-6 max-w-3xl space-y-4 md:my-10 md:space-y-8">
    <P>
      I'm a Harvard undergraduate studying for a S.M. and A.B. in Computer
      Science with a secondary in Psychology, and I currently chair the
      technology board at{' '}
      <A href="https://thecrimson.com">The Harvard Crimson</A>.
    </P>
    <P>
      Most of my work involves C++, Go, TypeScript, and Python, but I'm also
      experienced with Rust, OCaml, and others.
    </P>
    <P>
      To contact, please email{' '}
      <A href="mailto:me@denniseum.com">me@denniseum.com</A>. I should get back
      to you within a week.
    </P>
  </div>
</div>
