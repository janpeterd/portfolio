<script>
  import Navbar from '$lib/Components/Navbar.svelte'
  import Footer from '$lib/Components/Footer.svelte'
  import Hero from '$lib/Components/Hero.svelte'
  import About from '$lib/Components/About.svelte'

  let scroll
</script>

<svelte:head>
  <title>Portfolio - JP</title>
  <meta
    name="description"
    content="Portfolio van Jan-Peter Dhallé, student toegepaste informatica"
  />
  <meta
    property="og:description"
    content="Portfolio van Jan-Peter Dhallé, student toegepaste informatica"
  />
  <meta property="og:title" content="Portfolio - JP" />
</svelte:head>

<svelte:window bind:scrollY={scroll} />

<div class="bottom-gradient absolute bottom-0 h-screen w-screen"></div>

<Navbar />

<p
  id="hugetext"
  class="z-0 select-none overflow-x-hidden text-center font-sans text-7xl font-bold uppercase opacity-10 md:text-9xl"
  style="transform: translateY({scroll * 0.085 + 7}rem);"
>
  Jan&#8209Peter Dhallé
</p>

<Hero />

<About />

<Footer />

<style lang="postcss">
  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 50% 50%, rgba(0, 0, 0, 1) 80%, transparent);
    background: url('/img/grain.webp'),
      radial-gradient(105vw 850px at 50% 120%, theme(colors.green.500 / 15%), transparent);
  }
</style>
