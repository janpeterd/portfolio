<script>
  import StageText from '../../content/stage/stage.md'
  import { browser } from '$app/environment'
</script>

<div class="top-gradient fixed bottom-0 h-screen w-screen overflow-hidden"></div>
<div class="bottom-gradient fixed top-0 h-full w-screen overflow-hidden"></div>

<div
  class="z-10 mx-auto my-24 rounded-2xl bg-white/10 backdrop-blur-lg backdrop-saturate-150 md:container md:p-8">
  <h1
    class="p-4 font-elec text-3xl font-semibold uppercase tracking-tight text-secondary text-secondary/85 sm:text-4xl">
    Stage Lykios
  </h1>
  <img src="/img/stage/lykios.png" alt="Lykios" class="mx-auto my-4 w-auto" />

  <p
    class="animate-in fade-in-0 fill-mode-backwards prose prose-slate prose-invert max-w-none transition-none delay-500 [animation-duration:2500ms] prose-a:text-secondary prose-img:rounded-lg">
    {#if browser}
      <StageText />
    {/if}
  </p>
</div>

<style lang="postcss">
  .about_text {
    @apply prose z-10 max-w-none border-l-2 border-green-500 p-3 text-lg text-white;
  }
</style>
