<script>
  import Navbar from '$lib/Components/Navbar.svelte'
  import Footer from '$lib/Components/Footer.svelte'
  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  import Icon from '@iconify/svelte'

  export let data
</script>

<svelte:head>
  <title>{data.meta.title}</title> <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<Navbar />

<article
  class="mt-navbar lg:mt-25 mx-auto flex max-w-4xl flex-col gap-6 px-6 pt-20 md:gap-8 md:px-8 lg:gap-14">
  <div class="flex items-center border-b border-white/40 py-8">
    <a href="/projects/" class="mr-8 rounded-full text-center"
      ><Icon icon="mdi:arrow-left" width="2rem" /></a>
    <hgroup class="animate-in fade-in-0 slide-in-from-bottom-4 flex flex-col gap-5 duration-1000">
      <h1 class="text-4xl font-bold lg:text-6xl">
        {data.meta.title}
      </h1>
    </hgroup>
  </div>
  <!-- Post -->
  <div
    class="animate-in fade-in-0 fill-mode-backwards prose prose-slate prose-invert max-w-none transition-none delay-500 [animation-duration:2500ms] lg:prose-xl prose-a:text-secondary prose-img:rounded-lg">
    <svelte:component this={data.content} />
  </div>
</article>

{#if data.other.length > 0}
  <section class="mx-auto my-28 max-w-screen-lg md:my-36">
    <hr />
    <ul class="grid-cols-2 gap-x-7 gap-y-16 py-10 sm:grid">
      {#each data.other as entry}
        <ProjectThumb {entry} />
      {/each}
    </ul>
  </section>
{/if}

<Footer />
