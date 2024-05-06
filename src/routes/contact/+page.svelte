<script>
  import Footer from '$lib/Components/Footer.svelte'
  import Navbar from '$lib/Components/Navbar.svelte'
  import Icon from '@iconify/svelte'
  import DeskImg from '$lib/assets/desk.png?enhanced'
  import { githubLink, linkedInLink, mailLink, xLink } from '../../stores'
  import CardContainer from '$lib/Components/Aceternity/3d-card-effect/CardContainer.svelte'
  import CardItem from '$lib/Components/Aceternity/3d-card-effect/CardItem.svelte'
  import CardBody from '$lib/Components/Aceternity/3d-card-effect/CardBody.svelte'

  let isMouseEntered = false
</script>

<svelte:head>
  <title>Contact - Portfolio Jan-Peter</title>
  <meta name="description" content="Contacteer Jan-Peter Dhallé, student toegepaste informatica" />
  <meta
    property="og:description"
    content="Contacteer Jan-Peter Dhallé, student toegepaste informatica" />
  <meta property="og:title" content="Contact - Portfolio Jan-Peter" />
</svelte:head>

<Navbar />

<div class="contact_gradient absolute top-0 h-full w-screen"></div>

<div
  class="mx-4 mb-20 mt-32 flex min-h-[50vh] lg:min-h-[70vh] w-auto flex-col items-center justify-center gap-x-12 md:mb-28 lg:mt-10 lg:flex-row">
  <div class="flex w-full md:w-4/6 lg:hidden">
    <div
      id="static_cardbody"
      class="group relative mx-auto flex h-auto w-[25rem] flex-col items-center justify-center rounded-lg border border-white/20 bg-white/5 pb-8 hover:border-secondary hover:shadow-xl hover:shadow-secondary/15">
      <div class="block w-full text-center font-elec text-5xl font-bold text-secondary">
        <enhanced:img
          class="mx-auto max-h-[40vh] w-full saturate-150 contrast-105 object-cover object-top p-2 lg:rounded-2xl"
          src={DeskImg}
          alt="My desk setup"
          fetchpriority="high"
          loading="eager" />
      </div>
      <div
        class="group-hover: my-8 block w-full border-b-2 border-white/20 p-6 font-elec text-5xl font-bold uppercase text-secondary group-hover:border-green-500/60">
        Contact
      </div>

      <div class="flex w-auto flex-col items-start justify-center gap-x-10 self-start px-6 py-4">
        <div class="">
          <a
            href={$mailLink}
            class="mx-0 flex items-center justify-center gap-4 py-2 text-sm sm:mx-2 sm:text-lg print:text-base"
            ><Icon icon="line-md:email" width="2rem" /><span
              class="rounded-full bg-zinc-900 px-4 py-1 align-middle font-mono tracking-wide"
              >janpeter.dhalle@gmail.com</span
            ></a>
        </div>
        <div>
          <a
            href={$linkedInLink}
            class="mx-0 flex items-center justify-center gap-4 py-2 text-base sm:mx-2 sm:text-lg print:text-base"
            ><Icon icon="line-md:linkedin" width="2rem" /><span
              class="rounded-full bg-zinc-900 px-4 py-1 align-middle font-mono tracking-wide"
              >Jan&#8209;Peter&nbsp;Dhallé</span
            ></a>
        </div>
        <div>
          <a
            href={$xLink}
            class="mx-0 flex items-center justify-center gap-4 py-2 text-base sm:mx-2 sm:text-lg print:text-base"
            ><Icon icon="line-md:twitter-x" width="2rem" /><span
              class="rounded-full bg-zinc-900 px-4 py-1 align-middle font-mono tracking-wide"
              >@jempie_3</span
            ></a>
        </div>
        <div>
          <a
            href={$githubLink}
            class="mx-0 flex items-center justify-center gap-4 py-2 text-base sm:mx-2 sm:text-lg print:text-base"
            ><Icon icon="line-md:github" width="2rem" /><span
              class="rounded-full bg-zinc-900 px-4 py-1 align-middle font-mono tracking-wide"
              >/janpeterd</span
            ></a>
        </div>
      </div>
    </div>
  </div>

  <CardContainer
    bind:isMouseEntered
    containerClassName="hidden lg:flex w-2/6"
    className="inter-var flex-1">
    <CardBody
      className="pb-8 h-auto w-[25rem] relative group/card hover:shadow-2xl hover:shadow-secondary/15 bg-white/5 rounded-lg flex flex-col justify-center items-center border border-white/20 hover:border-secondary group">
      <CardItem {isMouseEntered} translateZ="90" className="w-full">
        <enhanced:img
          class="mx-auto max-h-[40vh] w-full saturate-150 contrast-105 object-cover object-top p-2 lg:rounded-2xl"
          src={DeskImg}
          alt="My desk setup"
          fetchpriority="high"
          loading="eager" />
      </CardItem>
      <CardItem
        {isMouseEntered}
        translateZ="110"
        translateY="-10"
        className="block font-bold p-6 my-8 w-full text-5xl text-secondary font-elec uppercase border-b border-white/20 group-hover:border-green-500/60 group-hover:border-b-2">
        Contact
      </CardItem>

      <div
        class="flex w-full max-w-64 flex-col items-start justify-center gap-x-10 self-start px-6 py-4">
        <CardItem {isMouseEntered} translateZ="100" rotateX="10">
          <a
            href={$mailLink}
            class="mx-2 flex items-center justify-center gap-4 py-2 text-lg print:text-base"
            ><Icon icon="line-md:email" width="2rem" /><span
              class="rounded-full bg-zinc-900 px-4 py-1 align-middle font-mono tracking-wide"
              >janpeter.dhalle@gmail.com</span
            ></a>
        </CardItem>
        <CardItem {isMouseEntered} translateZ="130" className="">
          <a
            href={$linkedInLink}
            class="mx-2 flex items-center justify-center gap-4 py-2 text-lg print:text-base"
            ><Icon icon="line-md:linkedin" width="2rem" /><span
              class="rounded-full bg-zinc-900 px-4 py-1 align-middle font-mono tracking-wide"
              >Jan&#8209;Peter&nbsp;Dhallé</span
            ></a>
        </CardItem>
        <CardItem {isMouseEntered} translateZ="90" rotateX="10">
          <a
            href={$xLink}
            class="mx-2 flex items-center justify-center gap-4 py-2 text-lg print:text-base"
            ><Icon icon="line-md:twitter-x" width="2rem" /><span
              class="rounded-full bg-zinc-900 px-4 py-1 align-middle font-mono tracking-wide"
              >@jempie_3</span
            ></a>
        </CardItem>
        <CardItem {isMouseEntered} translateZ="80">
          <a
            href={$githubLink}
            class="mx-2 flex items-center justify-center gap-4 py-2 text-lg print:text-base"
            ><Icon icon="line-md:github" width="2rem" /><span
              class="rounded-full bg-zinc-900 px-4 py-1 align-middle font-mono tracking-wide"
              >/janpeterd</span
            ></a>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
</div>

<Footer />

<style lang="postcss">
  .contact_gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 20% 40%, rgba(0, 0, 0, 1) 30%, transparent);
    background: url('/img/grain.webp'),
      radial-gradient(305vw 450px at 0% 40%, theme(colors.primary / 40%), transparent);
  }
  #static_cardbody {
    background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
  }
</style>
