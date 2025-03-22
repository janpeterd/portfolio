<script>
  import Hero from '$lib/Components/Hero.svelte'
  import About from '$lib/Components/About.svelte'
  import HugTextBg from '$lib/Components/HugTextBg.svelte'
  import { onMount } from 'svelte'
</script>

<svelte:head>
  <title>Portfolio - JP</title>
  <meta
    name="description"
    content="Portfolio van Jan-Peter Dhallé, student toegepaste informatica" />
  <meta
    property="og:description"
    content="Portfolio van Jan-Peter Dhallé, student toegepaste informatica" />
  <meta property="og:title" content="Portfolio - JP" />
</svelte:head>

<div class="bottom-gradient absolute bottom-0 h-screen w-screen overflow-hidden"></div>

<HugTextBg />

<Hero />

<About />

<style lang="postcss">
  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 50% 50%, rgba(0, 0, 0, 1) 80%, transparent);
    background: url('/img/grain.webp'),
      radial-gradient(105vw 850px at 50% 120%, theme(colors.green.500 / 15%), transparent);
  }
</style>
