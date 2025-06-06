<script>
  import Icon from '@iconify/svelte'
  import DeskImg from '$lib/assets/hero.jpg?enhanced'
  import { githubLink, linkedInLink, mailLink } from '../../stores'
  import CardContainer from '$lib/Components/Aceternity/3d-card-effect/CardContainer.svelte'
  import CardItem from '$lib/Components/Aceternity/3d-card-effect/CardItem.svelte'
  import CardBody from '$lib/Components/Aceternity/3d-card-effect/CardBody.svelte'

  let isMouseEntered = $state(false)
</script>

<svelte:head>
  <title>Contact - Portfolio Jan-Peter</title>
  <meta name="description" content="Contacteer Jan-Peter Dhallé, student toegepaste informatica" />
  <meta
    property="og:description"
    content="Contacteer Jan-Peter Dhallé, student toegepaste informatica" />
  <meta property="og:title" content="Contact - Portfolio Jan-Peter" />
</svelte:head>

<div
  class="mx-4 flex min-h-screen w-auto flex-col items-center justify-center gap-x-12 lg:flex-row">
  <div class="flex w-full md:w-4/6">
    <div
      id="static_cardbody"
      class="group relative mx-auto flex h-auto w-[25rem] flex-col items-center justify-center rounded-lg border border-foreground/20 bg-foreground/5 pb-8 hover:border-primary hover:shadow-xl hover:shadow-primary/15">
      <div class="block w-full text-center font-tight text-5xl font-bold text-primary">
        <enhanced:img
          class="contrast-105 mx-auto max-h-[40vh] w-full object-cover object-top p-2 lg:rounded-2xl"
          src={DeskImg}
          alt="My desk setup"
          fetchpriority="high"
          loading="eager" />
      </div>
      <div
        class="group-hover: my-8 block w-full border-b-2 border-foreground/20 p-6 font-tight text-5xl font-bold uppercase text-primary group-hover:border-primary/60">
        Contact
      </div>

      <div class="flex w-auto flex-col items-start justify-center gap-x-10 self-start px-6 py-4">
        <div class="">
          <a
            href={$mailLink}
            class="mx-0 flex items-center justify-center gap-4 py-2 text-sm sm:mx-2 sm:text-lg print:text-base">
            <Icon icon="line-md:email" width="2rem" />
            <span class="rounded-full bg-muted px-4 py-1 align-middle font-mono tracking-wide">
              janpeter.dhalle@gmail.com
            </span>
          </a>
        </div>
        <div>
          <a
            href={$linkedInLink}
            class="mx-0 flex items-center justify-center gap-4 py-2 text-base sm:mx-2 sm:text-lg print:text-base">
            <Icon icon="line-md:linkedin" width="2rem" />
            <span class="rounded-full bg-muted px-4 py-1 align-middle font-mono tracking-wide">
              Jan&#8209;Peter&nbsp;Dhallé
            </span>
          </a>
        </div>
        <div>
          <a
            href={$githubLink}
            class="mx-0 flex items-center justify-center gap-4 py-2 text-base sm:mx-2 sm:text-lg print:text-base">
            <Icon icon="line-md:github" width="2rem" />
            <span class="rounded-full bg-muted px-4 py-1 align-middle font-mono tracking-wide">
              /janpeterd
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .contact_gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 20% 40%, rgba(0, 0, 0, 1) 30%, transparent);
    background:
      url('/img/grain.webp'),
      radial-gradient(305vw 450px at 0% 40%, theme(colors.primary.DEFAULT / 40%), transparent);
  }
  #static_cardbody {
    background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
  }
</style>
