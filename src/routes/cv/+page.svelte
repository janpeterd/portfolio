<script>
  import Icon from '@iconify/svelte'
  import HeroImg from '$lib/assets/portrait_scaled.jpg?enhanced'

  import { githubLink, github, linkedInLink, mailLink, phoneLink, mail, phone } from '../../stores'

  let { data } = $props()

  const storeMap = new Map()

  storeMap.set('phoneLink', phoneLink)
  storeMap.set('mailLink', mailLink)
  storeMap.set('mail', mail)
  storeMap.set('githubLink', githubLink)
  storeMap.set('github', github)
  storeMap.set('linkedInLink', linkedInLink)
</script>

<svelte:head>
  <title>{data.cv?.meta.title}</title>
  <meta property="og:title" content={data.cv?.meta.title} />
  <meta name="description" content={data.cv?.meta.description} />
  <meta property="og:description" content={data.cv?.meta.description} />
</svelte:head>

<div class="bottom-gradient fixed bottom-0 h-screen w-screen print:hidden"></div>
<div class="gradient1 fixed -top-20 h-screen w-screen print:hidden"></div>

<div
  class="container mx-auto mt-24 print:mt-0 print:max-w-none print:bg-white print:text-sm print:text-black">
  <div>
    <div class="flex items-end justify-between">
      <h1
        class="mt-4 pl-2 pt-6 font-elec text-4xl font-bold uppercase tracking-tight text-secondary print:text-3xl print:text-black">
        {data.cv?.personalInfo.name}
      </h1>
      <div class="flex gap-x-4">
        <button
          class="hidden cursor-pointer sm:block print:hidden"
          tabindex="0"
          aria-label="print my cv"
          onclick={() => window.print()}>
          <Icon icon="mdi:printer" width="2rem" />
        </button>
        <a
          class="print:hidden"
          href={data.cv?.personalInfo.cvPdfUrl}
          aria-label="download my cv in pdf format">
          <Icon icon="carbon:generate-pdf" width="2rem" />
        </a>
      </div>
    </div>
    <span
      class="mb-6 block border-b pb-4 pl-3 font-elec text-lg italic print:mb-2 print:border-black/20">
      {data.cv?.personalInfo.role}
    </span>
    <div class="flex flex-col gap-10 lg:mx-auto lg:flex-row print:m-0 print:flex-row print:gap-3">
      <div class="print:container-none flex-auto lg:min-w-[600px]">
        <h2 class="cv_heading">Profiel</h2>
        <!--load from markdown file -->
        <div class="ml-2">
          <data.content />
        </div>

        <!-- OPLEIDING -->
        <div class="my-4">
          <h2 class="cv_heading">{data.cv?.education.title}</h2>
          {#each data.cv?.education.items as item}
            <div class="cv_flex">
              <span class="cv_item">
                <p>{item.degree}</p>
                {#each item.extras as extra}
                  <p class="cv_item_extra">{extra}</p>
                {/each}
              </span>
              <span class="cv_date">sinds september 2022</span>
            </div>
          {/each}
        </div>

        <!-- PROFESSIONELE WERKERVARING -->
        <div class="my-4">
          <h2 class="cv_heading">{data.cv?.experience.title}</h2>
          {#each data.cv?.experience.items as item}
            <div class="cv_flex">
              <span class="cv_item">
                <p>{item.role_company}</p>
                <p class="cv_item_extra">{item.description}</p>
              </span>
              <span class="cv_date">
                {item.period}
              </span>
            </div>
          {/each}
        </div>
      </div>

      <!-- SIDEBAR -->
      <div
        class="order-first rounded-xl bg-white/10 p-6 backdrop-blur-lg backdrop-saturate-150 sm:m-4 md:mx-auto md:w-8/12 md:min-w-[30%] lg:max-w-96 xl:min-w-0 print:m-2 print:mb-8 print:max-w-96 print:rounded-none print:border-r print:border-black/20 print:px-0 print:py-4 print:pr-2">
        <enhanced:img
          src={HeroImg}
          alt="Foto van Jan-Peter"
          class="max-h-80 w-full rounded-lg object-cover" />
        <!-- CONTACT -->
        <h2 class="cv_heading">{data.cv?.contact.title}</h2>
        <ul class="block print:hidden">
          {#each data.cv?.contact.items as item}
            <li class="py-2 font-elec text-lg font-bold print:text-base">
              <a class="flex items-end gap-4" href={storeMap.get(item.storeLinkVariable)}>
                <Icon icon={item.icon} width="2rem" inline={true} />
                {item.label}
              </a>
            </li>
          {/each}
        </ul>

        <!-- PRINTER CONTACT -->
        <div class="hidden flex-col items-start justify-center py-6 print:flex print:p-0">
          {#each data.cv?.contact.items as item}
            <a
              href={$mailLink}
              class="mx-2 flex items-center justify-center gap-4 py-2 print:text-xs">
              <Icon icon={item.printIcon} width="1.5rem" />
              {$mail}
            </a>
          {/each}
        </div>

        <!-- TALEN -->
        <h2 class="cv_heading">{data.cv?.languages.title}</h2>
        <ul class="ml-4 font-elec text-lg print:text-base">
          {#each data.cv?.languages.items as item}
            <li class="list-disc">
              {item.language} -
              <span class="text-sm italic">{item.level}</span>
            </li>
          {/each}
        </ul>
        <!-- VRIJE TIJD -->
        <h2 class="cv_heading mt-4">{data.cv?.hobbies.title}</h2>
        <ul class="ml-4 font-elec text-lg print:text-sm">
          {#each data.cv?.hobbies.items as item}
            <li class="list-disc">{item}</li>
          {/each}
        </ul>
        <h2 class="cv_heading mt-4">{data.cv?.otherInfo.title}</h2>
        <ul class="ml-4 font-elec text-lg print:text-sm">
          {#each data.cv?.otherInfo.items as item}
            <li class="list-disc">{item}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- VERENIGINGEN, VRIJWILLIGERSWERK -->
    <div>
      <div>
        <div class="my-4">
          <h2 class="cv_heading break-before-page">{data.cv?.associations.title}</h2>
          {#each data.cv?.associations.items as item}
            <div class="cv_flex">
              <span class="cv_item">
                <p>{item.organization}</p>
                <p class="cv_item_extra">{item.role_description}</p>
              </span>
              <span class="cv_date">{item.period}</span>
            </div>
          {/each}
        </div>

        <!-- TECHNISCHE VAARDIGHEDEN -->
        <div class="my-4">
          <h2 class="cv_heading">{data.cv?.technicalSkills.title}</h2>
          <div
            class="my-6 grid grid-cols-1 gap-x-4 gap-y-6 md:w-auto md:grid-cols-2 lg:grid-cols-3 print:my-2 print:gap-y-2">
            {#each data.cv?.technicalSkills.categories as category}
              <div class="ml-2 lg:ml-8">
                <h2 class="py-2 font-elec text-lg font-bold print:text-base">{category.name}</h2>
                <p>{category.skills.join(', ')}</p>
              </div>
            {/each}
          </div>
        </div>
        <!-- CERTIFICATEN -->
        <div class="my-4">
          <h2 class="cv_heading">{data.cv?.certificates.title}</h2>
          {#each data.cv?.certificates.items as item}
            <div class="cv_flex">
              <span class="cv_item">
                <a href={item.link} aria-label={item.ariaLabel} class="flex gap-x-2">
                  <span class="flex items-center gap-2 underline print:no-underline">
                    <p>{item.name}</p>
                    <Icon icon="mdi:external-link print:hidden" width="1rem" />
                  </span>
                </a>
                <p class="cv_item_extra">{item.extra}</p>
              </span>
              <span class="cv_date">{item.date}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  h2.cv_heading {
    @apply mb-4 border-b border-white/40 px-2 py-6 font-elec text-3xl font-bold lg:w-auto lg:text-4xl print:mb-2 print:border-black/30 print:py-2 print:text-base;
  }
  span.cv_item {
    @apply ml-2 text-lg font-semibold lg:text-2xl print:text-base;
  }

  p.cv_item_extra {
    @apply ml-2 text-base font-normal italic lg:indent-8 print:text-sm;
  }

  span.cv_date {
    @apply float-right italic leading-loose print:text-xs;
  }

  div.cv_flex {
    @apply flex flex-row justify-between p-2 align-baseline print:p-2;
  }

  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 50% 50%, rgba(0, 0, 0, 1) 80%, transparent);
    background:
      url('/img/grain.webp'),
      radial-gradient(105vw 850px at 50% 90%, theme(colors.secondary / 10%), transparent);
  }

  .gradient1 {
    z-index: -10;
    mask-image: radial-gradient(302vw 220vh at -60% 35vh, rgba(0, 0, 0, 1) 30%, transparent);
    background:
      url('/img/grain.webp'),
      radial-gradient(302vw 450px at -60% 35vh, theme(colors.primary / 80%), transparent);
  }
</style>
