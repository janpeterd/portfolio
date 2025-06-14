<script>
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'
  import SectionDivider from './SectionDivider.svelte'

  onMount(() => {
    register()
  })

  const stageData = {
    companyLogo: { src: '/img/stage/lykios.png', alt: 'Logo van Lykios' },
    companyName: 'Lykios',
    companyWebsite: 'https://lykios.be',
    projectTitle: 'Stage: Ontwikkeling van een quizplatform',
    introText: `<p class="mt-4 text-base leading-7 text-muted-foreground">
Tijdens mijn stage bij Lykios kreeg ik de kans om me volledig onder te dompelen in de wereld van professionele softwareontwikkeling.
</p>
<p class="mt-4 text-base leading-7 text-muted-foreground">
Dit project was de perfecte brug tussen theorie en praktijk. Enerzijds heb ik mijn <strong>hard skills</strong> aanzienlijk versterkt door te werken met een moderne tech-stack, waaronder <strong>Java 21</strong>, <strong>Spring Boot</strong> en <strong>React</strong>.
</p>
<p class="mt-4 text-base leading-7 text-muted-foreground">
Anderzijds was de stage cruciaal voor het ontwikkelen van essentiële <strong>soft skills</strong>; de dagelijkse stand-ups, teamwork en Agile-methodiek scherpten mijn communicatie, probleemoplossend vermogen en aanpassingsvermogen aan.
</p>
<p class="mt-4 text-base leading-7 text-muted-foreground">
      Voor een diepgaand inzicht in de technische realisatie en mijn persoonlijke reflecties, nodig ik je uit om het volledige artikel te lezen of de projectdocumentatie hieronder te bekijken.
</p>
       
    `,
    blogPostLink: '/projects/015_qurio_stage',
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
        path: '/doc/stage/Realisatiedocument stage Lykios 2025 - Jan-Peter Dhallé.pdf',
        description: 'De volledige technische en functionele uitwerking.'
      },
      {
        name: 'Projectplan',
        path: '/doc/stage/Projectplan stage Lykios 2025 - Jan-Peter Dhallé.pdf',
        description: 'Initiële aanpak, doelstellingen en planning.'
      },
      {
        name: 'Functionele Handleiding',
        path: '/doc/stage/Functionele User Manual Qurio - Lykios stage 2025.pdf',
        description: 'Technische gids van de applicatie voor ontwikkelaars.'
      },
      {
        name: 'Reflectieverslag',
        path: '/doc/stage/Reflectie stage Lykios 2025 - Jan-Peter Dhallé.pdf',
        description: 'Persoonlijke reflectie op het leerproces.'
      }
    ]
  }
</script>

<!-- Stage Section -->
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
        <strong class="text-foreground">{stageData.companyName},</strong>
        een IT-consultancybedrijf met focus op Java en Spring.
      </p>

      <a href={stageData.companyWebsite} target="_blank" rel="noopener noreferrer">
        <img
          src={stageData.companyLogo.src}
          alt={stageData.companyLogo.alt}
          class="mx-auto mt-8 size-40" />
      </a>
    </div>

    <!-- Intro Tekst naast Highlights (Layout ongewijzigd) -->
    <div
      class="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-16 gap-y-16 lg:mt-24 lg:grid-cols-2">
      <!-- Kolom 1: Introductietekst -->
      <div>
        <h3 class="font-tight text-2xl font-bold text-foreground">Stage-inzichten</h3>
        <p class="mt-4 text-base leading-7 text-muted-foreground">
          {@html stageData.introText}
        </p>
      </div>

      <!-- Kolom 2: Highlights -->
      <div>
        <dl class="grid grid-cols-1 gap-y-12">
          {#each stageData.highlights as item}
            <div class="flex flex-col">
              <dt
                class="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Icon icon={item.icon} class="h-6 w-6 flex-none text-primary" />
                {item.title}
              </dt>
              <dd class="mt-2 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p class="flex-auto">{@html item.text}</p>
              </dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>

    <div class="mt-20 grid grid-cols-1 items-start gap-x-8 gap-y-16 lg:mt-24 lg:grid-cols-3">
      <!-- Image Gallery -->
      <div class="lg:col-span-2">
        <div class="mt-6 w-full overflow-hidden rounded-lg bg-muted shadow-md ring-1 ring-border">
          <swiper-container pagination="true" autoplay-delay="3000" loop="true" effect="fade">
            {#each stageData.gallery as image}
              <swiper-slide lazy="true">
                <div class="swiper-zoom-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    class="aspect-[16/10] w-full object-cover" />
                </div>
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
                class="group flex items-center gap-4 rounded-md p-3 text-sm ring-1 ring-border transition-colors hover:bg-muted hover:ring-primary">
                <!-- Icon -->
                <Icon
                  icon="mdi:file-document-outline"
                  class="h-7 w-7 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />

                <!-- Text container for Name and Description -->
                <div class="flex-grow">
                  <p class="font-medium text-foreground">{doc.name}</p>
                  <p class="mt-1 text-muted-foreground">{doc.description}</p>
                </div>

                <!-- Download Arrow Icon -->
                <Icon
                  icon="mdi:arrow-down-circle-outline"
                  class="h-6 w-6 flex-shrink-0 text-muted-foreground opacity-50 transition-all group-hover:text-primary group-hover:opacity-100" />
              </a>
            </li>
          {/each}
        </ul>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href={stageData.blogPostLink}
            class="inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Lees het artikel
            <Icon icon="mdi:arrow-right" class="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
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
