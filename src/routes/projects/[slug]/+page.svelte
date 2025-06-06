<script>
  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  getIsMobile()
  import { browser } from '$app/environment'
  import Icon from '@iconify/svelte'
  import { pathToFileName, getIconByExtension, getColorByExtension, getIsMobile } from '$lib/utils'
  import { goto } from '$app/navigation'
  import ProjectItems from '$lib/Components/ProjectItems.svelte'
  import { onMount } from 'svelte'
  import { page } from '$app/state'
  import ProjectMeta from '$lib/Components/ProjectMeta.svelte'
  import { register } from 'swiper/element/bundle'
  import SectionDivider from '$lib/Components/SectionDivider.svelte'

  const spaceBetween = 10
  let { data } = $props()

  $effect(() => {
    register()
  })

  onMount(() => {
    let readStatus = localStorage.getItem('PostReadStatus')
    if (!readStatus) {
      const readMap = new Map()
      readMap[page.params.slug] = true
      localStorage.setItem('PostReadStatus', JSON.stringify(readMap))
    } else {
      const data = JSON.parse(readStatus)
      if (!data[page.params.slug]) {
        data[page.params.slug] = true
        localStorage.setItem('PostReadStatus', JSON.stringify(data))
      }
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
  <div class="w-full max-w-full overflow-hidden bg-background-alt">
    <div class="flex items-center py-2">
      <button onclick={navigate_back} class="z-50 mr-4 rounded-full text-center md:mr-8">
        <Icon icon="mdi:arrow-left" width="2rem" />
      </button>
      <hgroup
        class="animate-in fade-in-0 slide-in-from-bottom-4 mt-4 flex flex-col gap-5 duration-1000">
        <h1 class="text-4xl font-bold [view-transition-name:title]">
          {data.meta.title}
        </h1>
      </hgroup>
    </div>
    <div class="mx-auto flex w-full items-stretch gap-4">
      <div class="max-h-[70vh] w-full overflow-x-hidden rounded-lg">
        <swiper-container
          class="max-h-[70vh]"
          pagination="true"
          autoplay-disable-on-interaction="false"
          autoplay-stop-on-last-slide="krue"
          space-between="0"
          effect="coverflow"
          auto-height="true">
          {#if data?.meta?.images && data.meta.images.length > 0}
            {#each data.meta.images as image, idx}
              <swiper-slide lazy="true">
                <img
                  src={image}
                  loading="lazy"
                  alt={`Slide image ${idx + 1}`}
                  class="block h-full max-h-[70vh] object-contain" />
              </swiper-slide>
            {/each}
          {:else}
            <swiper-slide>
              <div class="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                No images available
              </div>
            </swiper-slide>
          {/if}
        </swiper-container>
      </div>
      <!-- Sidebar -->
      {#if data.meta}
        <div
          class="grow-1 order-1 mr-2 hidden h-full min-h-full shrink-0 items-stretch lg:block lg:w-72">
          <ProjectMeta data={data.meta} technologies={data.technologies} />
        </div>
      {/if}
    </div>

    <div
      class="mx-auto mt-4 flex w-full max-w-full flex-col gap-6 px-4 md:gap-8 lg:flex-row lg:gap-12">
      <!-- Main Content Area (Post) -->
      <div class="md:order-0 grow-1 order-1 md:flex-1 md:overflow-x-hidden">
        <article class="flex w-full flex-col gap-6 md:gap-8 lg:gap-10">
          <div
            class="animate-in fade-in-0 fill-mode-backwards prose prose-slate
               mx-auto w-full max-w-screen-xl
               pb-4 delay-500
               [animation-duration:2500ms] dark:prose-invert prose-a:text-primary
               prose-pre:rounded-none prose-pre:border-l-2
               prose-pre:border-green-500/60 prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-img:max-h-[60vh] prose-img:max-w-[60vw] prose-img:rounded-lg">
            <data.content />
          </div>
        </article>
      </div>

      <!-- Sidebar -->
      {#if data.meta}
        <div class="order-0 shrink-0 lg:hidden">
          <ProjectMeta data={data.meta} technologies={data.technologies} />
        </div>
      {/if}
    </div>
  </div>

  {#if data.other.length > 0}
    <section class="mx-auto my-20 w-full max-w-screen-lg">
      <hr />
      <ul class="w-full grid-cols-2 gap-x-7 gap-y-4 py-10 sm:grid">
        {#each data.other as entry}
          <ProjectThumb {entry} />
        {/each}
      </ul>
    </section>
  {/if}
</div>

<!-- <div class="bottom-gradient fixed top-0 h-full w-screen"></div> -->
<!-- <div class="contact_gradient fixed top-0 h-full w-screen"></div> -->

<style lang="postcss">
  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(100vw 30vh at 50% 94%, rgba(0, 0, 0, 1) 80%, transparent);
    background: radial-gradient(100vw 30vh at 50% 94%, theme(colors.green.500 / 10%), transparent);
  }
  .contact_gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 850px at 20% 40%, rgba(0, 0, 0, 1) 30%, transparent);
    background:
      url('/img/grain.webp'),
      radial-gradient(305vw 850px at 0% 40%, theme(colors.primary.DEFAULT / 40%), transparent);
  }

  /* Global styles for swiper elements if not using Tailwind for everything */
  /* Or import Swiper's base CSS files */

  swiper-container {
    --swiper-pagination-color: theme(
      colors.secondary.DEFAULT
    ); /* Example: Tomato color for pagination */
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-pagination-bullet-inactive-opacity: 0.5;
    --swiper-navigation-color: theme(
      colors.secondary.DEFAULT
    ); /* For next/prev buttons if you add them */
  }

  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
