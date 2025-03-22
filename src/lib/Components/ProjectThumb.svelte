<script>
  import Icon from '@iconify/svelte'

  let { entry } = $props();
  let link = $derived(`/projects/${entry.slug}`)
</script>

<li class="flex gap-14 px-5 py-3">
  <article class="flex flex-col gap-4 rounded">
    <div class="flex flex-col gap-4 text-sm font-medium text-slate-400">
      <p class="font-bold text-slate-400">{new Date(entry.date).toLocaleDateString('nl-BE')}</p>
    </div>
    <h2 class="title text-2xl font-bold hover:text-slate-200 md:text-3xl lg:text-4xl">
      <a href={link}>{entry.title}</a>
    </h2>
    <a
      href={link}
      class="group flex max-w-max items-center gap-4 font-medium text-secondary transition-all hover:text-white">
      Lees <Icon icon="mdi:arrow-right" width="1rem" />
    </a>
  </article>
</li>
