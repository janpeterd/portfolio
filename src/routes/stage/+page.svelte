<script>
  import { browser } from '$app/environment'
  import Icon from '@iconify/svelte'
  import HomeTitle from '$lib/Components/HomeTitle.svelte'
  import ProjectItems from '$lib/Components/ProjectItems.svelte'
  import { onMount } from 'svelte'

  let { data } = $props()
</script>

<article
  class="mt-navbar lg:mt-25 mx-auto flex max-w-4xl flex-col gap-6 px-6 pt-20 md:gap-8 md:px-8 lg:gap-14">
  <div class="flex items-center border-b border-white/40 py-8">
    <a href="/" class="z-50 mr-4 rounded-full text-center md:mr-8">
      <Icon icon="mdi:arrow-left" width="2rem" />
    </a>
    <hgroup class="animate-in fade-in-0 slide-in-from-bottom-4 flex flex-col gap-5 duration-1000">
      <h1 class="text-4xl font-bold [view-transition-name:title] lg:text-6xl">
        {data.meta.title}
      </h1>
    </hgroup>
  </div>
  <!-- Attachments -->
  <div class="flex flex-col gap-4">
    {#if data.meta}
      <ProjectItems data={data.meta} />
    {/if}

    <!-- Post -->
    <div
      class="animate-in fade-in-0 fill-mode-backwards prose prose-invert max-w-none transition-none delay-500 [animation-duration:2500ms] prose-a:text-secondary prose-pre:rounded-none prose-pre:border-l-2 prose-pre:border-green-500/60 prose-img:max-h-[65vh] prose-img:rounded-lg">
      <data.content />
    </div>
  </div>
</article>

<div class="bottom-gradient fixed top-0 h-full w-screen"></div>
<div class="contact_gradient fixed top-0 h-full w-screen"></div>

<style lang="postcss">
  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(100vw 50vh at 50% 80%, rgba(0, 0, 0, 1) 80%, transparent);
    background:
      url('/img/grain.webp'),
      radial-gradient(100vw 50vh at 50% 80%, theme(colors.green.500 / 18%), transparent);
  }
  .contact_gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 20% 40%, rgba(0, 0, 0, 1) 30%, transparent);
    background:
      url('/img/grain.webp'),
      radial-gradient(305vw 450px at 0% 40%, theme(colors.primary / 40%), transparent);
  }
</style>
