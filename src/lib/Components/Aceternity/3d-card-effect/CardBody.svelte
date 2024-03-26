<script>
  import { cn } from '$lib/utils'

  export let className
</script>

<div
  class={cn(
    'w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
    className
  )}
>
  <slot />
</div>
