<!-- src/lib/components/Synapse.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte'

  // Props from parent
  export let mouseX = 0
  export let mouseY = 0
  export let tapInfo = { x: 0, y: 0, time: 0 }
  export let interactionRadius = 100
  export let initialDelay = 0

  let element
  let center = { x: 0, y: 0 }
  let isHoverActive = false
  let isRippleActive = false

  // Array to hold timer IDs for cleanup
  let timeoutIds = []

  onMount(() => {
    const rect = element.getBoundingClientRect()
    center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }
  })

  // Reactive logic for DESKTOP MOUSE HOVER
  $: {
    if (center.x) {
      const distance = Math.sqrt(Math.pow(center.x - mouseX, 2) + Math.pow(center.y - mouseY, 2))
      isHoverActive = distance < interactionRadius
    }
  }

  // Reactive logic for MOBILE TAP RIPPLE
  $: {
    if (tapInfo.time && center.x) {
      const distance = Math.sqrt(
        Math.pow(center.x - tapInfo.x, 2) + Math.pow(center.y - tapInfo.y, 2)
      )

      const activationDelay = distance * 4
      const activeDuration = 400

      // Store timer IDs so we can clear them on destroy
      timeoutIds.push(
        setTimeout(() => {
          isRippleActive = true
        }, activationDelay)
      )

      timeoutIds.push(
        setTimeout(() => {
          isRippleActive = false
        }, activationDelay + activeDuration)
      )
    }
  }

  // *** CRUCIAL CLEANUP STEP ***
  // When the component is destroyed, clear any pending timers to prevent memory leaks.
  onDestroy(() => {
    for (const id of timeoutIds) {
      clearTimeout(id)
    }
  })
</script>

<div
  bind:this={element}
  class="synapse"
  class:active={isHoverActive || isRippleActive}
  style="--delay: {initialDelay}s;">
</div>

<style lang="postcss">
  .synapse {
    width: 3px;
    height: 3px;
    border-radius: 9999px;
    background-color: hsl(var(--muted-foreground) / 0.5);
    animation: pulse 5s infinite ease-in-out;
    animation-delay: var(--delay);
    transition:
      transform 0.2s ease-out,
      background-color 0.2s ease-out;
  }
  .synapse.active {
    background-color: theme(colors.primary.DEFAULT / 60%);
    transform: scale(3.5);
    animation: none;
  }
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(0.75);
      opacity: 1;
    }
  }
</style>
