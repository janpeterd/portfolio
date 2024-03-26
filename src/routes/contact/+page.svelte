<script>
  import Footer from '$lib/Components/Footer.svelte'
  import Navbar from '$lib/Components/Navbar.svelte'
  import Icon from '@iconify/svelte'
  import NavLink from '$lib/Components/NavLink.svelte'

  import { githubLink } from '../../stores'
  import { linkedInLink } from '../../stores'
  import { mailLink } from '../../stores'
</script>

<Navbar />

<div class="container mx-auto mt-32 flex flex-col items-center justify-center md:mt-20 md:flex-row">
  <div class="m-4 mb-10 w-full p-8 md:w-1/2 md:border-r">
    <h2 class="p-6 text-center text-5xl text-secondary md:p-8">Contact</h2>
    <div class="mx-auto flex max-w-64 flex-row items-center justify-center px-2">
      <NavLink
        logo={true}
        href={$mailLink}
        class="flex items-center justify-center transition hover:text-green-500"
        ><Icon icon="line-md:email" width="2rem" /></NavLink
      >
      <NavLink
        logo={true}
        href={$linkedInLink}
        class="flex items-center justify-center transition hover:text-green-500"
        ><Icon icon="line-md:linkedin" width="2rem" /></NavLink
      >
      <NavLink
        logo={true}
        href={$githubLink}
        class="flex items-center justify-center transition hover:text-green-500"
        ><Icon icon="line-md:github" width="2rem" /></NavLink
      >
    </div>
  </div>
  <div>
    <img
      class="max-h-96 w-screen object-cover md:ml-8 md:max-w-screen-md md:rounded-xl"
      src="/img/desk.png"
      alt="desk"
    />
  </div>
</div>

<Footer />
