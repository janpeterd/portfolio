<!-- Your main Hero.svelte component -->
<script>
  import { githubLink, linkedInLink, mailLink, mail } from '../../constants' // Your constants
  import Icon from '@iconify/svelte'
  import Synapse from './Synapse.svelte'

  let mousePos = { x: -999, y: -999 }
  let tapInfo = { x: 0, y: 0, time: 0 }

  let width = 0
  let height = 0

  $: grid = {
    cols: Math.floor(width / 50),
    rows: Math.floor(height / 50)
  }
  $: gridArray = Array(grid.cols * grid.rows)

  function handleMouseMove(event) {
    mousePos = { x: event.clientX, y: event.clientY }
  }
  function handlePointerDown(event) {
    tapInfo = { x: event.clientX, y: event.clientY, time: Date.now() }
  }

  const socialLinks = [
    { href: githubLink, icon: 'mdi:github', label: 'GitHub' },
    { href: linkedInLink, icon: 'mdi:linkedin', label: 'LinkedIn' },
    { href: mailLink, icon: 'mdi:email', label: 'Mail' }
  ]
</script>

<!-- Using a <div> for semantic correctness instead of a <button> -->
<button
  class="relative isolate flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-background"
  onmousemove={handleMouseMove}
  onpointerdown={handlePointerDown}
  onmouseleave={() => (mousePos = { x: -999, y: -999 })}
  bind:clientWidth={width}
  bind:clientHeight={height}>
  {#key width + height}
    {#if width > 0}
      <div
        class="synapse-grid"
        style="grid-template-columns: repeat({grid.cols}, 1fr); grid-template-rows: repeat({grid.rows}, 1fr);">
        {#each gridArray as _, i}
          <Synapse
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            {tapInfo}
            interactionRadius={120}
            initialDelay={Math.random() * 5} />
        {/each}
      </div>
    {/if}
  {/key}

  <!-- Main Content Container -->
  <div
    class="z-10 flex flex-col items-center justify-center p-4 text-center"
    style="animation: fade-in 1.5s ease-out forwards;">
    <h1
      id="home"
      class="animate-fade-slide-up font-tight text-5xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-8xl"
      style="animation-delay: 200ms;">
      Jan-Peter Dhallé
    </h1>

    <p
      class="animate-fade-slide-up mt-4 max-w-2xl text-base tracking-wide text-muted-foreground sm:text-lg md:text-xl"
      style="animation-delay: 400ms;">
      Student Applicatieontwikkeling
    </p>

    <div
      class="animate-fade-slide-up mt-8 flex items-center gap-x-6"
      style="animation-delay: 600ms;">
      {#each socialLinks as link}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          class="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-primary">
          <Icon icon={link.icon} class="size-7" />
        </a>
      {/each}
    </div>
  </div>

  <!-- Scroll Down Arrow -->
  <a
    href="#about"
    class="animate-subtle-bob absolute bottom-10 z-10"
    aria-label="Scroll to next section">
    <Icon
      icon="mdi:arrow-down"
      class="size-14 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted/50" />
  </a>
</button>

<style>
  .synapse-grid {
    position: absolute;
    inset: 0;
    z-index: -10;
    display: grid;
    place-items: center;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes subtle-bob {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .animate-fade-slide-up {
    opacity: 0;
    animation: fade-slide-up 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }
  .animate-subtle-bob {
    animation: subtle-bob 3s ease-in-out infinite;
  }
</style>
