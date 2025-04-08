<script>
  const technologies = [
    {
      name: 'Java',
      image: '/img/technologies/java.svg'
    },
    {
      name: 'Python',
      image: '/img/technologies/python.svg'
    },
    {
      name: 'JavaScript',
      image: '/img/technologies/javascript.svg'
    },
    {
      name: 'React',
      image: '/img/technologies/react.svg'
    },
    {
      name: 'Git',
      image: '/img/technologies/git.svg'
    },
    {
      name: 'C#',
      image: '/img/technologies/csharp.svg'
    },
    {
      name: 'C',
      image: '/img/technologies/c.svg'
    },
    {
      name: 'Bash',
      image: '/img/technologies/bash.svg'
    },
    {
      name: 'Linux',
      image: '/img/technologies/linux.svg'
    },
    {
      name: 'Angular',
      image: '/img/technologies/angular.svg'
    },
    {
      name: 'Postgresql',
      image: '/img/technologies/postgresql.svg'
    },
    {
      name: 'Kubernetes',
      image: '/img/technologies/kubernetes.svg'
    },
    {
      name: 'Docker',
      image: '/img/technologies/docker.svg'
    },
    {
      name: 'Figma',
      image: '/img/technologies/figma.svg'
    },
    {
      name: 'Vscode',
      image: '/img/technologies/vscode.svg'
    },
    {
      name: 'VIM',
      image: '/img/technologies/vim.svg'
    }
  ]
</script>

<div class="z-10 mx-auto my-24 rounded-2xl px-1 md:container md:p-8">
  <h2
    class="py-4 font-elec text-3xl font-semibold uppercase tracking-tight text-secondary text-secondary/85 sm:text-4xl">
    Technologieën
  </h2>

  <div class="h-auto overflow-x-auto px-1 py-4">
    <div
      class="grid auto-cols-max grid-flow-col grid-rows-2 place-items-center gap-4 md:grid-flow-row md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8">
      {#each technologies as technology}
        <div
          class="relative flex size-40 flex-col items-center justify-center gap-2 rounded-xl bg-[#474747] transition-all hover:scale-105 hover:shadow-xl hover:shadow-secondary/15">
          <img
            src={technology.image}
            alt={technology.name}
            fetchpriority="high"
            loading="eager"
            class="size-24" />
          <p
            class="absolute -bottom-1 mb-0.5 text-center font-elec text-xs font-bold uppercase text-[#242424]">
            {technology.name}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
