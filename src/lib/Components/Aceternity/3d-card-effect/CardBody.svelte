<script>
  import { cn } from '$lib/utils'

  let { className, children } = $props();
</script>

<div
  class={cn('w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]', className)}>
  {@render children?.()}
</div>
