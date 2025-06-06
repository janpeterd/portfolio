<script>
  import Icon from '@iconify/svelte'
  import ProjectThumb from './ProjectThumb.svelte'
  import SectionDivider from './SectionDivider.svelte'

  let { highlightedProjects = [] } = $props()

  const scrollingProjects =
    highlightedProjects.length > 0 ? [...highlightedProjects, ...highlightedProjects] : []
</script>

<section id="projects-highlight" class="relative bg-background py-12">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-base font-semibold leading-7 text-primary">Projectsuggesties</h2>
      <p class="mt-2 font-tight text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Een Selectie van Mijn Werk
      </p>
      <p class="mt-6 text-lg leading-8 text-muted-foreground">
        Hier zijn een paar projecten waar ik trots op ben. Elk project vertegenwoordigt een unieke
        uitdaging en een kans om nieuwe vaardigheden te leren en toe te passen.
      </p>
    </div>

    {#if scrollingProjects.length > 0}
      <div
        class="scroller-container mt-16 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] sm:mt-20">
        <div class="scroller-track animate-scroll flex flex-shrink-0" style="width: max-content;">
          {#each scrollingProjects as entry, i (entry.slug + i)}
            <div class="mr-8 w-80 flex-shrink-0 sm:w-96">
              <ProjectThumb {entry} />
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <div class="mt-16 text-center text-muted-foreground">
        <p>Geen uitgelichte projecten gevonden.</p>
      </div>
    {/if}

    <div class="mt-20 text-center">
      <a
        href="/projects"
        class="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
        Bekijk alle projecten
        <Icon icon="mdi:arrow-right" class="h-5 w-5" />
      </a>
    </div>
  </div>
</section>

<style>
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .scroller-container:hover .scroller-track {
    animation-play-state: paused;
  }
</style>
