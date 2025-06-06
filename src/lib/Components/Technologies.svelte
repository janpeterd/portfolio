<script>
  import HomeTitle from './HomeTitle.svelte'
  import SectionDivider from './SectionDivider.svelte'
  const imgPath = '/img/technologies/'

  const categories = [
    {
      category: 'Backend',
      technologies: [
        { name: 'Java, Spring Boot', image: 'java.svg', skillLevel: 92 },
        { name: 'JavaScript, Typescript', image: 'javascript.svg', skillLevel: 75 },
        { name: 'Python, Django', image: 'python.svg', skillLevel: 72 },
        { name: 'Svelte, Sveltekit', image: 'svelte.svg', skillLevel: 51 },
        { name: 'C#, .NET', image: 'csharp.svg', skillLevel: 64 },
        { name: 'PHP, Laravel', image: 'php.svg', skillLevel: 44 },
        { name: 'C', image: 'c.svg', skillLevel: 38 }
      ]
    },
    {
      category: 'Data',
      technologies: [
        { name: 'Postgresql', image: 'postgresql.svg', skillLevel: 62 },
        { name: 'Mariadb,MySQL', image: 'mysqlmariadb.png', skillLevel: 52 },
        { name: 'Mongodb', image: 'mongodb.svg', skillLevel: 34, link: false }
      ]
    },
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', image: 'react.svg', skillLevel: 75 },
        { name: 'Flutter', image: 'flutter.svg', skillLevel: 58 },
        { name: 'Angular', image: 'angular.svg', skillLevel: 55 }
      ]
    },
    {
      category: 'Infrastruur/DevOps',
      technologies: [
        { name: 'Docker', image: 'docker.svg', skillLevel: 92 },
        { name: 'Git', image: 'git.svg', skillLevel: 85 },
        { name: 'Bash', image: 'bash.svg', skillLevel: 73 },
        { name: 'Linux', image: 'linux.svg', skillLevel: 68 },
        { name: 'Kubernetes', image: 'kubernetes.svg', skillLevel: 55 },
        { name: 'Jenkins', image: 'jenkins.svg', skillLevel: 45 }
      ]
    },
    {
      category: 'Design, Prototypes',
      technologies: [{ name: 'Figma', image: 'figma.svg', skillLevel: 30 }]
    }
  ]

  function handleMouseMove(event) {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }
</script>

<div class="relative bg-background py-12">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <HomeTitle
      title="Technologieën"
      id="technologies"
      className="mb-12 text-center !text-3xl text-foreground md:mb-16 md:text-left md:!text-4xl" />

    <div class="space-y-12 md:space-y-16">
      {#each categories as category}
        {@const categoryId = category.category.toLowerCase().replace(/\s+/g, '-') + '-title'}
        <section aria-labelledby={categoryId}>
          <h3
            id={categoryId}
            class="mb-6 border-b border-border pb-3 text-xl font-semibold text-foreground sm:text-2xl md:mb-8">
            {category.category}
          </h3>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {#each category.technologies as technology}
              <a
                href={`/projects?technology=${encodeURIComponent(technology.name.split(',')[0].toLowerCase())}`}
                class="card-glow-container group relative block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                on:mousemove={handleMouseMove}
                aria-label={`View projects using ${technology.name}`}>
                <div class="flex h-full flex-col p-5">
                  <div class="flex items-center gap-4">
                    <img
                      src={`${imgPath}${technology.image}`}
                      alt={`${technology.name} logo`}
                      fetchpriority="high"
                      loading="eager"
                      class="h-10 w-10 flex-shrink-0 object-contain" />
                    <p
                      class="flex-1 text-base font-medium text-card-foreground transition-colors group-hover:text-primary">
                      {technology.name}
                    </p>
                  </div>

                  <div class="mt-auto pt-4">
                    <div class="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        class="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                        style={`width: ${technology.skillLevel}%;`}>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            {/each}
          </div>
        </section>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .card-glow-container::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      150px circle at var(--mouse-x, 100%) var(--mouse-y, 100%),
      hsl(var(--primary) / 0.15),
      transparent 80%
    );
    opacity: 0;
    transition: opacity 0.3s ease-out;
    z-index: 0;
  }

  .card-glow-container:hover::before {
    opacity: 1;
  }
</style>
