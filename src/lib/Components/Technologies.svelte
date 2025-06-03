<script>
  import HomeTitle from './HomeTitle.svelte'
  const imgPath = '/img/technologies/'

  const technologies = [
    { name: 'Java, Spring Boot', image: 'java.svg', skillLevel: 92 },
    { name: 'JavaScript, Typescript', image: 'javascript.svg', skillLevel: 75 },
    { name: 'Linux', image: 'linux.svg', skillLevel: 68 },
    { name: 'Python, Django', image: 'python.svg', skillLevel: 72 },
    { name: 'React', image: 'react.svg', skillLevel: 75 },
    { name: 'Angular', image: 'angular.svg', skillLevel: 55 },
    { name: 'Bash', image: 'bash.svg', skillLevel: 73 },
    { name: 'C#, .NET', image: 'csharp.svg', skillLevel: 64 },
    { name: 'C', image: 'c.svg', skillLevel: 38 },
    { name: 'Docker', image: 'docker.svg', skillLevel: 92 },
    { name: 'Flutter', image: 'flutter.svg', skillLevel: 58 },
    { name: 'Git', image: 'git.svg', skillLevel: 85 },
    { name: 'Jenkins', image: 'jenkins.svg', skillLevel: 45 },
    { name: 'Kubernetes', image: 'kubernetes.svg', skillLevel: 55 },
    { name: 'PHP, Laravel', image: 'php.svg', skillLevel: 44 },
    { name: 'Postgresql', image: 'postgresql.svg', skillLevel: 52 },
    { name: 'Svelte, Sveltekit', image: 'svelte.svg', skillLevel: 51 },
    { name: 'Figma', image: 'figma.svg', skillLevel: 30 }
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

<div class="z-10 mx-auto my-24 rounded-2xl px-1 md:container md:p-8">
  <HomeTitle title="Technologieën" id="technologies" />
  <div class="w-full px-1 py-4">
    <div class="mx-auto flex w-full flex-wrap items-stretch justify-center gap-5">
      {#each technologies as technology}
        <div
          class="card-glow-container relative flex w-[90vw] items-center justify-start gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md transition-all hover:scale-105 md:w-[320px] lg:w-96"
          on:mousemove={handleMouseMove}
          role="group"
          aria-label={`Technology card for ${technology.name}`}>
          <img
            src={`${imgPath}${technology.image}`}
            alt={technology.name}
            fetchpriority="high"
            loading="eager"
            class="size-16 flex-shrink-0 object-contain" />
          <div class="flex flex-1 flex-col justify-center gap-1">
            <p class="text-md truncate font-tight font-bold uppercase text-white">
              {technology.name}
            </p>
            <div class="relative h-2 w-full overflow-hidden rounded-full bg-black/30">
              <div
                class="absolute inset-y-0 left-0 h-full rounded-full bg-transparent bg-gradient-to-r from-yellow-400 via-secondary to-red-800 transition-all duration-300 ease-out"
                style={`width: ${technology.skillLevel}%;`}>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .card-glow-container::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;

    background: radial-gradient(
      350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      theme(colors.secondary / 20%),
      transparent 60%
    );

    opacity: 0;
    transition: opacity 0.3s ease-out;
    z-index: -1;
    pointer-events: none;
  }

  .card-glow-container:hover::before {
    opacity: 1;
  }
</style>
