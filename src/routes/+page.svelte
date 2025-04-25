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
  <div class="max-w-3xl space-y-4 md:space-y-8">
    <P>
      I&apos;m a Harvard undergraduate studying for a S.M. and A.B. in Computer
      Science with a secondary in Psychology, and I currently chair the
      technology board at{' '}
      <A href="https://thecrimson.com">The Harvard Crimson</A>.
    </P>
    <P>
      Most of my work involves C++, Go, TypeScript, and Python, but I&apos;m
      also experienced with Rust, OCaml, and other programming languages. I love
      thinking about programming languages, compilers, and performance, and it
      would be great to talk with you about these if you are interested as well!
    </P>
    <P>
      To contact, please email{' '}
      <A href="mailto:me@denniseum.com">me@denniseum.com</A>. I should get back
      to you within a week.
    </P>
  </div>
</div>
