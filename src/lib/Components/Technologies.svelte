<script>
  import HomeTitle from './HomeTitle.svelte'

  const technologies = [
    { name: 'Java', image: '/img/technologies/java.svg' },
    { name: 'Python', image: '/img/technologies/python.svg' },
    { name: 'JavaScript', image: '/img/technologies/javascript.svg' },
    { name: 'React', image: '/img/technologies/react.svg' },
    { name: 'Git', image: '/img/technologies/git.svg' },
    { name: 'C#', image: '/img/technologies/csharp.svg' },
    { name: 'C', image: '/img/technologies/c.svg' },
    { name: 'Bash', image: '/img/technologies/bash.svg' },
    { name: 'Linux', image: '/img/technologies/linux.svg' },
    { name: 'Angular', image: '/img/technologies/angular.svg' },
    { name: 'Spring', image: '/img/technologies/spring.svg' },
    { name: 'Django', image: '/img/technologies/django.svg' },
    { name: 'Postgresql', image: '/img/technologies/postgresql.svg' },
    { name: 'Kubernetes', image: '/img/technologies/kubernetes.svg' },
    { name: 'Docker', image: '/img/technologies/docker.svg' },
    { name: 'Figma', image: '/img/technologies/figma.svg' },
    { name: 'Vscode', image: '/img/technologies/vscode.svg' },
    { name: 'VIM', image: '/img/technologies/vim.svg' },
    { name: 'Jenkins', image: '/img/technologies/jenkins.svg' },
    { name: '.NET', image: '/img/technologies/dotnet.svg' },
    { name: 'PHP', image: '/img/technologies/php.svg' },
    { name: 'Laravel', image: '/img/technologies/laravel.svg' },
    { name: 'Svelte', image: '/img/technologies/svelte.svg' }
  ]
</script>

<div class="z-10 mx-auto my-24 rounded-2xl px-1 md:container md:p-8">
  <HomeTitle title="Technologieën" id="technologies" />

  <div class="h-auto overflow-x-auto px-1 py-4">
    <div
      class="grid auto-cols-max grid-flow-col grid-rows-2 place-items-center gap-4 md:grid-flow-row md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
      {#each technologies as technology}
        <div
          class="relative flex size-40 flex-col items-center justify-center gap-2 rounded-3xl bg-[#474747] transition-all hover:scale-105 hover:shadow-xl hover:shadow-secondary/15">
          <img
            src={technology.image}
            alt={technology.name}
            fetchpriority="high"
            loading="eager"
            class="size-24 object-contain" />
          <p
            class="absolute -bottom-1 mb-0.5 text-center font-tight text-xs font-bold uppercase text-[#242424]">
            {technology.name}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
