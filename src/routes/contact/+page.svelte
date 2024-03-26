<script>
  import Footer from '$lib/Components/Footer.svelte'
  import Navbar from '$lib/Components/Navbar.svelte'
  import Icon from '@iconify/svelte'
  import NavLink from '$lib/Components/NavLink.svelte'
  import Logo from '$lib/assets/logo.svg'

  import { githubLink } from '../../stores'
  import { linkedInLink } from '../../stores'
  import { mailLink } from '../../stores'
  import CardContainer from '$lib/Components/Aceternity/3d-card-effect/CardContainer.svelte'
  import CardItem from '$lib/Components/Aceternity/3d-card-effect/CardItem.svelte'
  import CardBody from '$lib/Components/Aceternity/3d-card-effect/CardBody.svelte'

  let isMouseEntered = false
</script>

<Navbar />

<div class="contact_gradient absolute top-0 h-full w-screen"></div>

<div
  class="mx-4 mb-20 mt-32 flex min-h-[50vh] w-auto flex-col items-center justify-center gap-x-12 md:mb-28 lg:mt-10 lg:flex-row"
>
  <div class="flex w-full md:w-4/6 lg:hidden">
    <div
      class="relative mx-auto flex h-auto w-[30rem] flex-col items-center justify-center rounded-xl border border-white/[0.5] bg-white/5 py-8 hover:shadow-2xl hover:shadow-secondary/[0.2]"
    >
      <div class="block w-full p-12 text-center font-elec text-5xl font-bold text-secondary">
        Contact
      </div>

      <div class="mx-auto flex max-w-64 flex-row items-center justify-center gap-x-10 px-2 py-4">
        <div class="">
          <NavLink
            logo={true}
            href={$mailLink}
            class="flex items-center justify-center transition hover:text-green-500"
            ><Icon icon="line-md:email" width="3rem" /></NavLink
          >
        </div>
        <div>
          <NavLink
            logo={true}
            href={$linkedInLink}
            class="flex items-center justify-center transition hover:text-green-500"
            ><Icon icon="line-md:linkedin" width="3rem" /></NavLink
          >
        </div>
        <div rotateX="10">
          <NavLink
            logo={true}
            href={$githubLink}
            class="flex items-center justify-center transition hover:text-green-500"
            ><Icon icon="line-md:github" width="3rem" /></NavLink
          >
        </div>
      </div>
      <div class="block w-full p-2 text-center font-elec text-5xl font-bold text-secondary">
        <img
          class="max-h-[40vh] w-full object-cover object-top lg:rounded-xl"
          src="/img/desk.png"
          alt="desk"
        />
      </div>
    </div>
  </div>

  <CardContainer
    bind:isMouseEntered
    containerClassName="hidden lg:flex w-4/6"
    className="inter-var flex-1"
  >
    <CardBody
      className="py-8 h-auto w-[30rem] relative group/card  hover:shadow-2xl hover:shadow-secondary/[0.2] bg-white/5 border-white/[0.5] rounded-xl border flex flex-col justify-center items-center"
    >
      <CardItem
        {isMouseEntered}
        translateZ="110"
        translateY="40"
        className="block font-bold p-6 w-full text-center text-5xl text-secondary lg:p-12 font-elec"
      >
        Contact
      </CardItem>

      <div class="mx-auto flex max-w-64 flex-row items-center justify-center gap-x-10 px-2 py-4">
        <CardItem {isMouseEntered} translateZ="90" className="">
          <NavLink
            logo={true}
            href={$mailLink}
            class="flex items-center justify-center transition hover:text-green-500"
            ><Icon icon="line-md:email" width="3rem" /></NavLink
          >
        </CardItem>
        <CardItem {isMouseEntered} translateZ="110">
          <NavLink
            logo={true}
            href={$linkedInLink}
            class="flex items-center justify-center transition hover:text-green-500"
            ><Icon icon="line-md:linkedin" width="3rem" /></NavLink
          >
        </CardItem>
        <CardItem {isMouseEntered} translateZ="90" rotateX="10">
          <NavLink
            logo={true}
            href={$githubLink}
            class="flex items-center justify-center transition hover:text-green-500"
            ><Icon icon="line-md:github" width="3rem" /></NavLink
          >
        </CardItem>
      </div>
      <CardItem
        {isMouseEntered}
        translateZ="80"
        className="block font-bold p-2 w-full text-center text-5xl text-secondary font-elec"
      >
        <img
          class="max-h-[40vh] w-full object-cover object-top lg:rounded-xl"
          src="/img/desk.png"
          alt="desk"
        />
      </CardItem>
    </CardBody>
  </CardContainer>

  <!-- <img -->
  <!--   class="max-h-[50vh] min-h-[50vh] w-full object-cover object-top lg:rounded-xl" -->
  <!--   src="/img/desk.png" -->
  <!--   alt="desk" -->
  <!-- /> -->
</div>

<Footer />

<style lang="postcss">
  .contact_gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 50% 0%, rgba(0, 0, 0, 1) 30%, transparent);
    background: url('/img/grain.webp'),
      radial-gradient(115vw 450px at 0% 10%, theme(colors.primary / 40%), transparent);
  }
</style>
