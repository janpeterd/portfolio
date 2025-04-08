<script>
  import { onMount } from 'svelte'
  import baseExperiences from '$lib/data/experiences.js'
  /** @type {import('$lib/data/experiences.js').Experience[]} */
  let allExperiences = []
  /** @type {import('$lib/data/experiences.js').Experience[]} */
  let experiences = $state([])
  let include_projects = $state(false)
  // Scroll position tracking
  let scrollY = $state(0)
  // Track which items are visible
  let visibleItems = $state({})

  // This function filters the experiences based on the toggle state
  function updateExperiencesList() {
    if (include_projects) {
      experiences = allExperiences.filter((entry) => entry.type === 'project')
    } else {
      experiences = allExperiences.filter((entry) => entry.type !== 'project')
    }
  }

  // Watch for changes to include_projects
  $effect(() => {
    updateExperiencesList()
  })

  // Handle scroll events
  function handleScroll() {
    scrollY = window.scrollY
  }

  onMount(async () => {
    try {
      // Start with base experiences
      allExperiences = [...baseExperiences]
      // Fetch projects from API
      const response = await fetch('/api/projects')
      if (!response.ok) throw new Error('Failed to fetch projects')
      const projects = await response.json()
      // Convert API projects to experience format
      const projectExperiences = projects.map((project) => ({
        startDate: new Date(project.date),
        endDate: null,
        dateString: new Date(project.date).toLocaleDateString('nl-BE', {
          year: 'numeric',
          month: 'long'
        }),
        title: project.title,
        description: project.description || '',
        slug: project.slug,
        thumbnail: project.thumbnail,
        type: 'project',
        link: `/projects/${project.slug}`
      }))
      // Combine and sort all experiences
      allExperiences = [...baseExperiences, ...projectExperiences].sort(
        (a, b) => b.startDate - a.startDate
      )
      // Initialize filtered list
      updateExperiencesList()

      // Set up intersection observers for each experience item after rendering
      setTimeout(setupObservers, 300)
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
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

<div class="p-8">
  <div class="flex items-center justify-between">
    <h2
      id="about"
      class="p-4 font-elec text-3xl font-semibold uppercase tracking-tight text-secondary text-secondary/85 sm:text-4xl">
      Ervaring
    </h2>
    <button
      class="rounded-lg bg-secondary/20 px-4 py-2 font-elec transition-colors hover:bg-secondary/30"
      onclick={() => (include_projects = !include_projects)}>
      {include_projects ? 'Toon Werk' : 'Toon Projecten'}
    </button>
  </div>
  <div
    id="line"
    class="relative ms-14 flex max-w-screen-sm flex-col gap-4 rounded-bl-xl border-b-4 border-l-4 border-white/20 p-8">
    {#each experiences as entry, i}
      <a
        href={entry.link || '#'}
        class="experience-item block opacity-0 transition-all delay-150 duration-300 ease-out"
        class:opacity-100={visibleItems[i]}
        style="transform: translateY({visibleItems[i] ? '0' : '24px'});"
        data-id={i}>
        <div
          class="relative flex transform cursor-pointer flex-col gap-4 rounded-xl
                 p-4 hover:bg-white/10">
          <div
            id="rectangle"
            class="absolute -left-[2.9rem] top-3 size-6 rotate-45 rounded bg-secondary shadow-xl">
          </div>
          <p class="text-sm font-medium text-slate-400">
            {entry.dateString}
          </p>
          <h2 class="p-4 font-elec font-bold">
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
      class="opacity-1 absolute -bottom-[1.85rem] right-0 z-20 inline w-max rounded-lg bg-gradient-to-br from-indigo-800 to-primary p-4 font-bold text-white transition-all hover:scale-105 hover:from-secondary hover:to-orange-700 hover:underline">
      Bekijk CV
    </a>
  </div>
</div>
