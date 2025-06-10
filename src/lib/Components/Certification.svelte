<script>
  import { onMount } from 'svelte'
  import certificates from '$lib/data/certificates.json'
  import HomeTitle from './HomeTitle.svelte'
  import Icon from '@iconify/svelte'
  import SectionDivider from './SectionDivider.svelte'

  let scrollY = $state(0)
  let visibleItems = $state({})

  function handleScroll() {
    scrollY = window.scrollY
  }

  onMount(async () => {
    setTimeout(setupObservers, 300)
  })

  function setupObservers() {
    const certficiationItems = document.querySelectorAll('.certficiation-item')
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id
          visibleItems = { ...visibleItems, [id]: true }
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    certficiationItems.forEach((item) => {
      observer.observe(item)
    })
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="relative bg-background-hued py-12">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div
      class="mb-10 flex items-center justify-center text-center md:mb-12 md:justify-start md:text-left">
      <HomeTitle title="Certificaten" id="certification" className="!text-3xl md:!text-4xl" />
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
      {#each certificates as entry, i}
        <a
          href={entry.link || '#'}
          download
          target={entry.link ? '_blank' : '_self'}
          rel={entry.link ? 'noopener noreferrer' : ''}
          class="certficiation-item group flex flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-800"
          class:opacity-100={visibleItems[i]}
          style="transform: translateY({visibleItems[i] ? '0' : '20px'}); opacity: {visibleItems[i]
            ? 1
            : 0};"
          data-id={i}>
          <div class="aspect-[4/3] max-h-64 w-full overflow-hidden">
            <img
              src={`/img/certificates/${entry.image}`}
              alt={entry.name}
              class="h-full max-h-64 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
          </div>

          <div class="flex flex-1 flex-col p-4 sm:p-5">
            <div class="flex-grow">
              <p class="mb-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {entry.date}
              </p>
              <h3
                class="mb-2 font-sans text-lg font-semibold text-foreground group-hover:text-primary md:text-xl">
                {entry.name}
              </h3>
              {#if entry.extra}
                <p class="text-sm leading-relaxed text-muted-foreground">
                  {entry.extra}
                </p>
              {/if}
            </div>

            {#if entry.link}
              <div class="mt-auto pt-4">
                <span
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-200">
                  Download
                  <Icon icon="mdi:download" class="h-4 w-4" />
                </span>
              </div>
            {/if}
          </div>
        </a>
      {/each}

      {#if certificates.length === 0}
        <p class="col-span-full text-center text-muted-foreground">
          No certificates to display at the moment.
        </p>
      {/if}
    </div>
  </div>
</div>
