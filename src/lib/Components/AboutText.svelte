<script>
  import { browser } from '$app/environment'
  import PortraitImg from '$lib/assets/portrait.jpg?enhanced'
  import About from '../../content/about/about.md'
  import HomeTitle from './HomeTitle.svelte'
</script>

<div class="z-10 gap-4 p-8 lg:grid lg:grid-flow-row lg:grid-cols-3">
  <article class="col-span-2 flex flex-col justify-center">
    <HomeTitle title="Over mij" id="about" />
    <p class="about_text prose-a:text-secondary">
      <!-- {About} -->
      {#if browser}
        <About></About>
      {/if}
    </p>
    <p class="about_text prose-a:text-secondary">
      Geïnteresseerd? Neem gerust <a href="/contact" class="text-secondary">contact</a>
      met me op of bekijk
      <a href="/cv">mijn cv.</a>
    </p>
  </article>
  <div class="z-10 mt-6 flex items-center justify-center lg:mt-0">
    <enhanced:img
      class="z-10 mx-auto w-80 rounded-3xl object-cover"
      src={PortraitImg}
      alt="me"
      fetchpriority="high"
      loading="eager"
      sizes="min(1300px, 100vw)" />
  </div>
</div>

<style lang="postcss">
  .about_text {
    @apply prose z-10 max-w-none border-l-2 border-green-500 p-3 text-lg text-white;
  }
</style>
