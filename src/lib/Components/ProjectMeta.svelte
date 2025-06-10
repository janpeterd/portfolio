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
  if (props?.data?.video) {
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
                href={`/projects?technology=${technology.name.toLowerCase()}`}
                class="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-primary/90 hover:text-primary-foreground">
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

      <!-- CORRECTED REPOSITORY SECTION -->
      {#if props.data?.repo || props.data?.repos?.length > 0}
        <div>
          <dt class="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Repository
          </dt>
          <dd class="mt-2 space-y-2">
            {#if props.data?.repo}
              <!-- Handles single 'repo' object -->
              {@const repoUrl = props.data.repo.url || props.data.repo}
              {@const iconData = getIconAndColorForUrl(repoUrl) || {
                icon: 'mdi:git',
                textcolor: 'text-muted-foreground'
              }}
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Icon icon={iconData.icon} class="size-5 flex-shrink-0 {iconData.textcolor}" />
                <span class="truncate group-hover:underline">
                  {props.data.repo.name || new URL(repoUrl).pathname}
                </span>
                <Icon icon="mdi:open-in-new" class="ml-auto size-4 flex-shrink-0" />
              </a>
            {/if}
            {#if props.data?.repos}
              {#each props.data.repos as repo}
                <!-- Handles 'repos' array of objects -->
                {@const repoUrl = repo.url || repo}
                {@const iconData = getIconAndColorForUrl(repoUrl) || {
                  icon: 'mdi:git',
                  textcolor: 'text-muted-foreground'
                }}
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Icon icon={iconData.icon} class="size-5 flex-shrink-0 {iconData.textcolor}" />
                  <span class="truncate group-hover:underline">
                    {repo.name || new URL(repoUrl).pathname}
                  </span>
                  <Icon icon="mdi:open-in-new" class="ml-auto size-4 flex-shrink-0" />
                </a>
              {/each}
            {/if}
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
        {#if props.data?.attachments}
          {#each props.data.attachments as attachment}
            {@const attachmentUrl = attachment.path || attachment}
            {@const extension = attachmentUrl.replace(/.*\.(.*?$)/, '$1')}
            <a
              href={attachmentUrl}
              target="_blank"
              download
              rel="noopener noreferrer"
              class="group flex w-full items-center gap-3 rounded-md p-2 text-sm transition-colors hover:bg-muted">
              <Icon
                icon={getIconByExtension(extension)}
                class="size-5 flex-shrink-0 {getColorByExtension(extension) ??
                  'text-muted-foreground'}" />
              <span class="flex-grow truncate text-sm font-medium text-foreground">
                {attachment.name || pathToFileName(attachmentUrl)}
              </span>
              <Icon icon="mdi:download" class="size-4 flex-shrink-0 text-muted-foreground" />
            </a>
          {/each}
        {/if}
        {#if props.data?.link}
          {@const linkUrl = props.data.link.url || props.data.link}
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full items-center gap-3 rounded-md p-2 text-sm transition-colors hover:bg-muted">
            <Icon icon="mdi:link-variant" class="size-5 flex-shrink-0 text-blue-500" />
            <span class="flex-grow truncate text-sm font-medium text-foreground">
              {props.data.link.name || 'Live Demo'}
            </span>
            <Icon icon="mdi:open-in-new" class="size-4 flex-shrink-0 text-muted-foreground" />
          </a>
        {/if}
        {#if props.data?.video}
          {@const videoUrl = props.data.video.url || props.data.video}
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full items-center gap-3 rounded-md p-2 text-sm transition-colors hover:bg-muted">
            <Icon icon="mdi:youtube" class="size-5 flex-shrink-0 text-red-600" />
            <span class="flex-grow truncate text-sm font-medium text-foreground">
              {props.data.video.name || 'Bekijk Video'}
            </span>
            <Icon icon="mdi:open-in-new" class="size-4 flex-shrink-0 text-muted-foreground" />
          </a>
        {/if}
      </div>
    </div>
  {/if}
</aside>
