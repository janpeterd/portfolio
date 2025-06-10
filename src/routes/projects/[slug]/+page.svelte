<script>
  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  import { browser } from '$app/environment'
  import Icon from '@iconify/svelte'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import { page } from '$app/state'
  import ProjectMeta from '$lib/Components/ProjectMeta.svelte'
  import { register } from 'swiper/element/bundle'
  import SectionDivider from '$lib/Components/SectionDivider.svelte'

  let { data } = $props()
  console.log('data', data)

  const getOtherTechnologies = (otherProjects, allTechnologies) => {
    const techMap = {}
    if (!otherProjects || !allTechnologies) return techMap

    otherProjects.forEach((p) => {
      const lowerCaseNames = new Set(
        p.technologies?.map((name) => String(name).toLowerCase()) || []
      )
      techMap[p.slug] = allTechnologies.filter((t) => lowerCaseNames.has(t.name.toLowerCase()))
    })
    return techMap
  }

  const otherTechnologies = $derived(getOtherTechnologies(data.other, data.allTechnologies))

  $effect(() => {
    register()
  })

  onMount(() => {
    let readStatus = JSON.parse(localStorage.getItem('PostReadStatus') || '{}')
    if (!readStatus[page.params.slug]) {
      readStatus[page.params.slug] = true
      localStorage.setItem('PostReadStatus', JSON.stringify(readStatus))
    }
  })

  function navigate_back() {
    if (browser) {
      if (window.history.length > 2) {
        window.history.back()
      } else {
        goto('/projects')
      }
    }
  }
</script>

<svelte:head>
  <title>{data.meta.title} - Portfolio Jan-Peter</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="w-full">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="w-full bg-background-alt pt-12 md:pt-0">
    <!-- Header: Title and Back Button -->
    <div class="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center py-4 md:py-6">
        <button
          onclick={navigate_back}
          class="z-50 mr-4 flex-shrink-0 rounded-full p-2 text-center md:mr-6">
          <Icon icon="mdi:arrow-left" width="1.75rem" />
        </button>
        <h1 class="text-3xl font-bold tracking-tight [view-transition-name:title] md:text-4xl">
          {data.meta.title}
        </h1>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div
      class="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8">
      <!-- Item 1: Carousel (spans 2 columns on desktop) -->
      <div class="lg:col-span-2">
        <div class="w-full overflow-hidden rounded border border-border">
          <swiper-container
            class="max-h-[70vh]"
            pagination="true"
            navigation="true"
            autoplay-disable-on-interaction="false"
            autoplay-stop-on-last-slide="true"
            space-between="0"
            zoom="true"
            effect="fade">
            {#if data?.meta?.images && data.meta.images.length > 0}
              {#each data.meta.images as image, idx}
                <swiper-slide>
                  <div class="swiper-zoom-container bg-black/10">
                    <img
                      src={image}
                      alt={`Slide image ${idx + 1}`}
                      class="block h-full max-h-[70vh] w-full object-contain" />
                  </div>
                </swiper-slide>
              {/each}
            {:else}
              <swiper-slide>
                <div class="flex h-full min-h-[40vh] w-full items-center justify-center bg-muted">
                  <p class="text-muted-foreground">Geen afbeeldingen beschikbaar</p>
                </div>
              </swiper-slide>
            {/if}
          </swiper-container>
        </div>
      </div>

      <!-- Item 2: Sidebar (moves to the right and becomes sticky on desktop) -->
      <aside class="mt-8 h-fit lg:sticky lg:top-24 lg:col-span-1 lg:row-span-2 lg:mt-0">
        <ProjectMeta data={data.meta} technologies={data.technologies} />
      </aside>

      <!-- Item 3: Post Content (spans 2 columns on desktop) -->
      <div class="mt-8 lg:col-span-2 lg:mt-6">
        <article>
          <div
            class="prose prose-slate w-full max-w-none dark:prose-invert prose-a:text-primary
               prose-pre:border-l-2 prose-pre:border-primary/60 prose-img:rounded-lg">
            <data.content />
          </div>
        </article>
      </div>
    </div>
  </div>

  <!-- "Other Projects" Section -->
  {#if data.other.length > 0}
    <section class="mx-auto my-20 w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <hr class="border-border" />
      <div class="text-center">
        <h2 class="pt-10 text-3xl font-bold tracking-tight">Andere Projecten</h2>
        <p class="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
          Misschien vind je deze projecten ook interessant.
        </p>
      </div>
      <ul class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {#each data.other as entry}
          <ProjectThumb {entry} technologies={otherTechnologies[entry.slug] || []} />
        {/each}
      </ul>
    </section>
  {/if}
</div>

<style lang="postcss">
  swiper-container {
    --swiper-theme-color: theme(colors.primary.DEFAULT);
    --swiper-pagination-bullet-inactive-color: theme(colors.foreground / 50%);
    --swiper-pagination-bullet-inactive-opacity: 1;
  }

  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
