<script>
  import Icon from '@iconify/svelte'

  let { entry } = $props()
  const link = $derived(`/projects/${entry.slug}`)
</script>

<li class="flex gap-14 px-5 py-3">
  <article class="group flex w-full flex-col gap-4 rounded">
    <a
      href={link}
      class="flex w-full flex-col items-start justify-center gap-4 truncate font-medium transition-all group-hover:text-secondary">
      <h2
        class="title w-full truncate text-2xl font-bold hover:text-slate-200 md:text-3xl lg:text-4xl">
        {entry.title}
      </h2>
      <div class="flex w-full flex-col gap-4 text-sm font-medium text-slate-400">
        <p class="font-bold text-slate-400">{new Date(entry.date).toLocaleDateString('nl-BE')}</p>
      </div>
    </a>
    <a
      href={link}
      class="flex w-full flex-col items-start justify-center gap-4 truncate font-medium text-secondary transition-all hover:scale-105 hover:text-white">
      <img src={entry.thumbnail} alt={entry.title} class="h-52 w-full rounded-xl object-cover" />
    </a>
    <a
      href={link}
      class="flex max-w-max items-center gap-4 font-medium text-secondary transition-all hover:text-white">
      Lees <Icon icon="mdi:arrow-right" width="1rem" />
    </a>
  </article>
</li>
