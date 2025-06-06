<script>
  import { onMount } from 'svelte'
  import educations from '$lib/data/education.json'
  import Glow from './Glow.svelte'
  import SectionDivider from './SectionDivider.svelte'
  import HomeTitle from './HomeTitle.svelte'
  let allEducations = []
  let scrollY = $state(0)
  let visibleItems = $state({})

  function handleScroll() {
    scrollY = window.scrollY
  }

  onMount(async () => {
    setTimeout(setupObservers, 300)
  })

  function setupObservers() {
    const educationItems = document.querySelectorAll('.education-item')

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scrollY > 10) {
          const id = entry.target.dataset.id
          visibleItems = { ...visibleItems, [id]: true }
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    educationItems.forEach((item) => {
      observer.observe(item)
    })
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="relative bg-background-hued py-12">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="mx-auto max-w-4xl px-4">
    <div class="mb-10 flex items-center justify-start md:mb-12">
      <HomeTitle title="Opleiding" id="education" className="!text-3xl md:!text-4xl" />
    </div>

    <div class="flex w-full flex-col gap-8 md:gap-10">
      {#each educations as entry, i}
        <a
          href={entry.link || '#'}
          target={entry.link ? '_blank' : '_self'}
          rel={entry.link ? 'noopener noreferrer' : ''}
          class="education-item group block rounded-xl bg-background shadow-lg
                 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
          class:opacity-100={visibleItems[i]}
          style="transform: translateY({visibleItems[i] ? '0' : '24px'}); opacity: {visibleItems[i]
            ? 1
            : 0};"
          data-id={i}>
          <article class="flex flex-col overflow-hidden md:flex-row">
            <div class="w-full md:w-1/3">
              <img
                src={entry.image}
                alt={entry.company || entry.title}
                class="h-48 w-full rounded-l-lg object-cover md:h-full" />
            </div>

            <div class="flex flex-1 flex-col justify-center p-6 md:p-8">
              <p class="mb-1 text-sm font-medium text-muted-foreground">
                {entry.dateString}
              </p>
              <h2
                class="mb-2 font-sans text-xl font-semibold text-foreground group-hover:text-primary md:text-2xl">
                {entry.title}
              </h2>
              {#if entry.company}
                <p class="text-md mb-3 font-medium text-foreground/80">
                  {entry.company}
                </p>
              {/if}
              {#if entry.description}
                <p class="text-sm leading-relaxed text-foreground/70">
                  {entry.description}
                </p>
              {/if}
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
</div>
