<script lang="ts">
  let { children, href } = $props()
</script>

<a
  {href}
  class="border-gray-800 border-b text-gray-800 hover:bg-indigo-100 transition-colors duration-200"
>
  {@render children()}
</a>
