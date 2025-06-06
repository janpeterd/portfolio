<script>
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'
  import SectionDivider from './SectionDivider.svelte'

  // Register Swiper custom elements
  onMount(() => {
    register()
  })

  // All data is neatly organized here for easy management.
  const stageData = {
    companyLogo: { src: '/img/stage/lykios.png', alt: 'Logo van Lykios' },
    companyName: 'Lykios',
    projectTitle: 'Stage: Ontwikkeling van een quizplatform',
    highlights: [
      {
        icon: 'mdi:lightbulb-on-outline',
        title: 'De Uitdaging',
        text: 'In teamverband het veelzijdige quizplatform <strong>Qurio</strong> ontwikkelen, van databaseontwerp en backend-logica tot een functionele user interface.'
      },
      {
        icon: 'mdi:cogs',
        title: 'Technologie & Proces',
        text: 'Gebruik van een moderne stack met <strong>Java 21, Spring Boot & React</strong>. Gewerkt volgens een Agile-methodiek met een sterke focus op testen.'
      },
      {
        icon: 'mdi:chart-line',
        title: 'Het Resultaat',
        text: 'Een volledig functionele en robuuste webapplicatie opgeleverd met <strong>>80% test coverage</strong> (300+ tests). Succesvol CI/CD-pipelines met Jenkins geïmplementeerd.'
      }
    ],
    gallery: [
      {
        src: '/img/projects/qurio_result.png',
        alt: 'Het resultaat van een gespeelde quiz in Qurio'
      },
      { src: '/img/projects/qurio_play.png', alt: 'Het spelen van een quiz in Qurio' },
      { src: '/img/stage/figma_prototypes.png', alt: 'Figma prototypes van de Qurio applicatie' }
    ],
    attachments: [
      {
        name: 'Realisatiedocument',
        path: '/doc/stage/Realisatiedocument stage Lykios 2025 - Jan-Peter Dhallé.pdf'
      },
      {
        name: 'Projectplan',
        path: '/doc/stage/Projectplan stage Lykios 2025 - Jan-Peter Dhallé.pdf'
      },
      {
        name: 'Functionele Handleiding',
        path: '/doc/stage/Functionele User Manual Qurio - Lykios stage 2025.pdf'
      },
      {
        name: 'Reflectieverslag',
        path: '/doc/stage/Reflectie stage Lykios 2025 - Jan-Peter Dhallé.pdf'
      }
    ]
  }
</script>

<!-- Stage Section - Designed as a single, cohesive homepage block -->
<section id="stage" class="relative bg-background-hued py-24 sm:py-32">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- Section Header -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-base font-semibold leading-7 text-primary">Eindstage</h2>
      <p class="mt-2 font-tight text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {stageData.projectTitle}
      </p>
      <p class="mt-6 text-lg leading-8 text-muted-foreground">
        Als afsluiting van mijn opleiding liep ik drie maanden stage bij
        <strong class="text-foreground">{stageData.companyName}</strong>
        , een IT-consultancybedrijf met focus op Java en Spring.
      </p>
      <img
        src={stageData.companyLogo.src}
        alt={stageData.companyLogo.src}
        class="mx-auto size-40" />
    </div>

    <!-- 3-Column Highlights Grid -->
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {#each stageData.highlights as item}
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
              <Icon icon={item.icon} class="h-6 w-6 flex-none text-primary" />
              {item.title}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p class="flex-auto">{@html item.text}</p>
            </dd>
          </div>
        {/each}
      </dl>
    </div>

    <!-- Visual Showcase (Gallery & Documents) -->
    <div class="mt-20 grid grid-cols-1 items-start gap-x-8 gap-y-16 lg:mt-24 lg:grid-cols-3">
      <!-- Image Gallery -->
      <div class="lg:col-span-2">
        <h3 class="font-tight text-2xl font-bold text-foreground">Visueel Overzicht</h3>
        <div class="mt-6 w-full overflow-hidden rounded-lg bg-muted shadow-md ring-1 ring-border">
          <swiper-container pagination="true" autoplay-delay="3000" loop="true" effect="fade">
            {#each stageData.gallery as image}
              <swiper-slide lazy="true">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  class="aspect-[16/10] w-full object-cover" />
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>
      </div>

      <!-- Document Downloads -->
      <div>
        <h3 class="font-tight text-2xl font-bold text-foreground">Documentatie</h3>
        <p class="mt-2 text-sm text-muted-foreground">
          Een diepgaand inzicht in de realisatie en reflectie.
        </p>
        <ul class="mt-6 space-y-3">
          {#each stageData.attachments as doc}
            <li>
              <a
                href={doc.path}
                download
                class="group flex items-center gap-3 rounded-md p-3 text-sm ring-1 ring-border transition-colors hover:bg-muted hover:ring-primary">
                <Icon
                  icon="mdi:file-download-outline"
                  class="h-6 w-6 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                <span class="font-medium text-foreground">{doc.name}</span>
                <Icon
                  icon="mdi:arrow-down"
                  class="ml-auto h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  /* Ensures swiper styles are correctly applied inside the component */
  swiper-container {
    --swiper-pagination-color: theme(colors.primary.DEFAULT);
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-pagination-bullet-inactive-opacity: 0.5;
  }
  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
