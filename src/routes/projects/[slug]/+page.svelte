<script>
  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  import { browser } from '$app/environment'
  import Icon from '@iconify/svelte'
  import { pathToFileName, getIconByExtension, getColorByExtension } from '$lib/utils'
  import { goto } from '$app/navigation'

  let { data } = $props()

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
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
  class="mt-navbar lg:mt-25 mx-auto flex max-w-4xl flex-col gap-6 px-6 pt-20 md:gap-8 md:px-8 lg:gap-14">
  <div class="flex items-center border-b border-white/40 py-8">
    <button onclick={navigate_back} class="z-50 mr-4 rounded-full text-center md:mr-8">
      <Icon icon="mdi:arrow-left" width="2rem" />
    </button>
    <hgroup class="animate-in fade-in-0 slide-in-from-bottom-4 flex flex-col gap-5 duration-1000">
      <h1 class="text-4xl font-bold [view-transition-name:title] lg:text-6xl">
        {data.meta.title}
      </h1>
    </hgroup>
  </div>
  <!-- Attachments -->
  <div class="flex flex-col gap-4">
    {#if data.meta.attachments && data.meta.attachments.length > 0}
      <div class="flex flex-col gap-4 rounded-lg bg-white/10 p-6">
        <h2 class="flex gap-4 text-lg font-bold">
          <Icon icon="mdi:attachment" width="2rem" class="text-secondary" />
          Bijlagen
        </h2>
        {#each data.meta.attachments as attachment}
          <a
            href={attachment}
            target="_blank"
            rel="noopener noreferrer"
            class={`flex items-center gap-2 font-medium ${getColorByExtension(attachment.replace(/.*\.(.*?$)/, '$1')) ?? 'text-secondary'} transition-all hover:text-white`}>
            <Icon
              icon={getIconByExtension(attachment.replace(/.*\.(.*?$)/, '$1'))}
              width="2.5rem" />
            <span>{pathToFileName(attachment)}</span>
            <Icon icon="mdi:external-link" width="1rem" />
          </a>
        {/each}
      </div>
    {/if}

    <!-- Post -->
    <div
      class="animate-in fade-in-0 fill-mode-backwards prose prose-slate prose-invert max-w-none transition-none delay-500 [animation-duration:2500ms] prose-a:text-secondary prose-img:rounded-lg">
      <data.content />
    </div>
  </div>

  {#if data.other.length > 0}
    <section class="mx-auto my-28 w-full max-w-screen-lg md:my-36">
      <hr />
      <ul class="w-full grid-cols-2 gap-x-7 gap-y-16 py-10 sm:grid">
        {#each data.other as entry}
          <ProjectThumb {entry} />
        {/each}
      </ul>
    </section>
  {/if}
</article>
