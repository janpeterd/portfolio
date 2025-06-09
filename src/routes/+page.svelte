<script>
  import Hero from '$lib/Components/Hero.svelte'
  import About from '$lib/Components/About.svelte'
  import Experience from '$lib/Components/Experience.svelte'
  import Education from '$lib/Components/Education.svelte'
  import Certification from '$lib/Components/Certification.svelte'
  import HugTextBg from '$lib/Components/HugTextBg.svelte'
  import Technologies from '$lib/Components/Technologies.svelte'
  import { onMount } from 'svelte'
  import Navbar from '$lib/Components/Navbar.svelte'
  import Footer from '$lib/Components/Footer.svelte'
  import Contact from '$lib/Components/Contact.svelte'
  import SectionDivider from '$lib/Components/SectionDivider.svelte'
  import Stage from '$lib/Components/Stage.svelte'
  import ProjectHighlights from '$lib/Components/ProjectHighlights.svelte'

  let { data } = $props()
</script>

<svelte:head>
  <title>Portfolio - Jan-Peter Dhallé</title>
</svelte:head>

<div class="flex w-full flex-col">
  <Hero />
  <About />
  <Education />
  <Experience />
  <Certification />
  <Technologies />
  <Stage />
  <ProjectHighlights highlightedProjects={data.highlightedProjects} />
  <Contact />
  <!-- <Footer /> -->
</div>

<!-- <div class="top-gradient fixed bottom-0 hidden h-screen w-screen overflow-hidden dark:block"></div> -->
<!-- <div class="bottom-gradient fixed top-0 hidden h-full w-screen overflow-hidden dark:block"></div> -->

<style lang="postcss">
  .top-gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 50% 0%, rgba(0, 0, 0, 1) 30%, transparent);
    background:
      url('/img/grain.webp'),
      radial-gradient(115vw 450px at 110% 10%, theme(colors.blue.600 / 40%), transparent);
  }
  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 50% 50%, rgba(0, 0, 0, 1) 80%, transparent);
    background: radial-gradient(80vw 80vh at 20% 130%, theme(colors.green.600 / 20%), transparent);
  }
</style>
