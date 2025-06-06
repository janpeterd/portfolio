<script>
  import { onMount } from 'svelte'
  import experiences from '$lib/data/experiences.json'
  import HomeTitle from './HomeTitle.svelte'
  import SectionDivider from './SectionDivider.svelte'
  import Icon from '@iconify/svelte'

  let visibleItems = $state({})

  onMount(() => {
    const setupObservers = () => {
      const experienceItems = document.querySelectorAll('.experience-item')
      if (experienceItems.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.dataset.id
              visibleItems = { ...visibleItems, [id]: true }
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '0px 0px -10% 0px' }
      )

      experienceItems.forEach((item) => observer.observe(item))
    }

    setTimeout(setupObservers, 100)
  })
</script>

<div class="relative bg-background py-12">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <HomeTitle
      title="Ervaring"
      id="experience"
      className="mb-12 text-center !text-3xl text-foreground md:mb-16 md:!text-4xl" />

    <div class="relative">
      <div
        class="absolute left-5 top-0 h-full w-px -translate-x-1/2 bg-border transition-colors duration-300 group-hover:bg-primary">
      </div>

      <div class="space-y-8">
        {#each experiences as entry, i}
          <div
            data-id={i}
            class="experience-item group relative transition-all duration-700 ease-out"
            class:opacity-0={!visibleItems[i]}
            class:translate-y-4={!visibleItems[i]}>
            <div class="absolute left-5 top-4 -translate-x-1/2">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <div
                  class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-border bg-card text-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon
                    icon="mdi:plus"
                    class="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </div>

            <a
              href={entry.link || '#'}
              target={entry.link ? '_blank' : '_self'}
              rel={entry.link ? 'noopener noreferrer' : ''}
              class="ml-16 block rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              class:pointer-events-none={!entry.link}>
              <!-- Card Header -->
              <div
                class="flex flex-wrap items-center justify-between gap-4 overflow-x-hidden border-b border-border p-4 md:p-5">
                <div class="flex w-full flex-shrink-0 items-center gap-4">
                  {#if entry.image}
                    <div
                      class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-md border border-border bg-background p-2 md:h-24 md:w-24">
                      <img
                        src={entry.image}
                        class="h-full w-full object-contain"
                        alt={entry.company || entry.title} />
                    </div>
                  {/if}
                  <div>
                    <h3
                      class="text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary md:text-xl">
                      {entry.title}
                    </h3>
                    {#if entry.company}
                      <p class="text-base font-medium text-muted-foreground">{entry.company}</p>
                    {/if}
                  </div>
                </div>
                <p
                  class="w-full flex-shrink-0 text-left text-xs font-medium text-muted-foreground sm:w-auto sm:text-right">
                  {entry.dateString}
                </p>
              </div>

              <!-- Card Body -->
              {#if entry.description}
                <div class="p-4 md:p-6">
                  <ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {#each entry.description
                      .split('\n')
                      .filter((line) => line.trim()) as desc_point}
                      <li>{desc_point.trim()}</li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
