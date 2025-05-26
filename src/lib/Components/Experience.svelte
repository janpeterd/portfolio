<script>
  import { onMount } from 'svelte'
  import baseExperiences from '$lib/data/experiences.js'
  import HomeTitle from './HomeTitle.svelte'
  /** @type {import('$lib/data/experiences.js').Experience[]} */
  let allExperiences = []
  /** @type {import('$lib/data/experiences.js').Experience[]} */
  let experiences = baseExperiences
  // Scroll position tracking
  let scrollY = $state(0)
  // Track which items are visible
  let visibleItems = $state({})

  // Handle scroll events
  function handleScroll() {
    scrollY = window.scrollY
  }

  onMount(async () => {
    setTimeout(setupObservers, 300)
  })

  // Setup intersection observers for all experience items
  function setupObservers() {
    const experienceItems = document.querySelectorAll('.experience-item')

    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% of the item must be visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if element is intersecting AND we've scrolled past a minimum threshold
        if (entry.isIntersecting && scrollY > 10) {
          const id = entry.target.dataset.id
          // Update the visibleItems object
          visibleItems = { ...visibleItems, [id]: true }
          // Stop observing once animation is triggered
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe each experience item
    experienceItems.forEach((item) => {
      observer.observe(item)
    })
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="p-4 md:p-8">
  <div class="flex items-center justify-between">
    <HomeTitle title="Ervaring" id="experience" />
  </div>
  <div
    id="line"
    class="relative ms-4 flex max-w-screen-sm flex-col gap-4 rounded-bl-xl border-b-4 border-l-4 border-white/20 p-2 md:ms-14 md:p-8">
    {#each experiences as entry, i}
      <a
        href={entry.link || '#'}
        class="experience-item block opacity-0 transition-all delay-150 duration-300 ease-out"
        class:opacity-100={visibleItems[i]}
        style="transform: translateY({visibleItems[i] ? '0' : '24px'});"
        data-id={i}>
        <div
          class="relative flex transform cursor-pointer flex-col gap-4 rounded-xl
                 p-2 hover:bg-white/10 md:p-4">
          <div
            id="rectangle"
            class="absolute -left-[1.4rem] top-3 size-6 rotate-45 rounded bg-secondary shadow-xl md:-left-[2.9rem]">
          </div>
          <p class="text-sm font-medium text-slate-400">
            {entry.dateString}
          </p>
          <h2 class="p-2 font-tight font-bold md:p-4">
            {entry.title}
            {entry.company ? ` - ${entry.company}` : ''}
          </h2>
          {#if entry.description}
            <p>{entry.description}</p>
          {/if}
        </div>
      </a>
    {/each}
    <a
      href="/cv"
      class="opacity-1 absolute -bottom-4 -right-1 z-20 inline w-max rounded-lg bg-gradient-to-br from-indigo-800 to-primary p-2 text-sm font-bold text-white transition-all hover:scale-105 hover:from-secondary hover:to-orange-700 hover:underline md:-bottom-[1.85rem] md:right-0 md:p-4">
      Bekijk CV
    </a>
  </div>
</div>
