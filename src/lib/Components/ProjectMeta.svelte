<script>
  import Icon from '@iconify/svelte'
  import {
    pathToFileName,
    getIconByExtension,
    getColorByExtension,
    getIconAndColorForUrl,
    formatDate
  } from '$lib/utils'
  let props = $props()
  let totalItems = $state(0)

  if (props?.data?.attachments) {
    totalItems += props.data.attachments.length
  }

  if (props?.data?.link) {
    totalItems += 1
  }
</script>

<aside class="w-full border-border bg-background md:max-w-sm md:border-l">
  <div class="p-6 lg:p-8">
    <h2 class="text-lg font-semibold tracking-tight text-foreground">Projectinformatie</h2>
    <dl class="mt-6 space-y-6">
      {#if props.data?.date}
        <div>
          <dt class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Datum</dt>
          <dd class="mt-1 text-sm text-foreground">{formatDate(props.data.date)}</dd>
        </div>
      {/if}

      {#if props.data?.projectType}
        <div>
          <dt class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Type</dt>
          <dd class="mt-1 text-sm text-foreground">{props.data.projectType}</dd>
        </div>
      {/if}

      {#if props.data?.course}
        <div>
          <dt class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Vak</dt>
          <dd class="mt-1 text-sm text-foreground">{props.data.course}</dd>
        </div>
      {/if}

      {#if props.technologies?.length > 0}
        <div>
          <dt class="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Technologieën
          </dt>
          <dd class="mt-2 flex flex-wrap gap-2">
            {#each props.technologies as technology}
              <a
                href={`/projects?sort=date&direction=descending&technology=${technology.name}`}
                class="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-primary">
                <img
                  src={`/img/technologies/${technology.image}`}
                  alt={technology.name}
                  class="size-4 object-contain" />
                {technology.name}
              </a>
            {/each}
          </dd>
        </div>
      {/if}

      {#if props.data?.repo || props.data?.repos?.length > 0}
        <div>
          <dt class="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Repository
          </dt>
          <dd class="mt-2 space-y-2">
            {#if props.data?.repo}
              {@const { icon, textcolor } = getIconAndColorForUrl(props.data.repo)}
              <a
                href={props.data.repo}
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Icon {icon} class="size-5 flex-shrink-0 {textcolor}" />
                <span class="truncate group-hover:underline">
                  {new URL(props.data.repo).pathname}
                </span>
                <Icon icon="mdi:open-in-new" class="ml-auto size-4 flex-shrink-0" />
              </a>
            {/if}
            {#each props.data?.repos as repo}
              {@const { icon, textcolor } = getIconAndColorForUrl(repo)}
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Icon {icon} class="size-5 flex-shrink-0 {textcolor}" />
                <span class="truncate group-hover:underline">{new URL(repo).pathname}</span>
                <Icon icon="mdi:open-in-new" class="ml-auto size-4 flex-shrink-0" />
              </a>
            {/each}
          </dd>
        </div>
      {/if}
    </dl>
  </div>

  {#if totalItems > 0}
    <div class="border-t border-border p-6 lg:p-8">
      <h3 class="flex items-center gap-2 text-base font-semibold text-foreground">
        <Icon icon="mdi:paperclip" class="size-5 text-muted-foreground" />
        Bijlagen
      </h3>
      <div class="mt-4 space-y-1">
        {#each props?.data?.attachments as attachment}
          {@const extension = attachment.replace(/.*\.(.*?$)/, '$1')}
          <a
            href={attachment}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full items-center gap-3 rounded-md p-2 text-sm transition-colors hover:bg-muted">
            <Icon
              icon={getIconByExtension(extension)}
              class="size-5 flex-shrink-0 {getColorByExtension(extension) ??
                'text-muted-foreground'}" />
            <span class="flex-grow truncate text-xs font-medium text-foreground">
              {pathToFileName(attachment)}
            </span>
            <Icon icon="mdi:open-in-new" class="size-4 flex-shrink-0 text-muted-foreground" />
          </a>
        {/each}
        {#if props?.data?.link}
          <a
            href={props.data.link}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full items-center gap-3 rounded-md p-2 text-sm transition-colors hover:bg-muted">
            <Icon icon="mdi:link-variant" class="size-5 flex-shrink-0 text-blue-500" />
            <span class="flex-grow truncate font-medium text-foreground">{props.data.link}</span>
            <Icon icon="mdi:open-in-new" class="size-4 flex-shrink-0 text-muted-foreground" />
          </a>
        {/if}
        {#if props?.data?.video}
          <a
            href={props.data.video}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full items-center gap-3 rounded-md p-2 text-sm transition-colors hover:bg-muted">
            <Icon icon="mdi:youtube" class="size-5 flex-shrink-0 text-red-600" />
            <span class="flex-grow truncate font-medium text-foreground">{props.data.video}</span>
            <Icon icon="mdi:open-in-new" class="size-4 flex-shrink-0 text-muted-foreground" />
          </a>
        {/if}
      </div>
    </div>
  {/if}
</aside>
