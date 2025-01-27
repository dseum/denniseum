<script lang="ts">
  let { children, href } = $props()
</script>

<a
  {href}
  class="border-b border-gray-800 text-gray-800 transition-colors duration-200 hover:bg-indigo-100"
>
  {@render children()}
</a>
