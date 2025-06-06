<script>
  let { class: className = '' } = $props()
</script>

<div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 z-10 h-24">
  <svg
    viewBox="0 0 1440 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    class="h-full w-full {className}">
    <path d="M0 0H1440V100H0V0Z" fill="url(#glow-gradient)" fill-opacity="0.15" />
    <path d="M0 1H1440V-1H0V1Z" fill="url(#line-gradient)" />

    <defs>
      <linearGradient
        id="glow-gradient"
        x1="720"
        y1="0"
        x2="720"
        y2="100"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="currentColor" />
        <stop offset="1" stop-color="currentColor" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="line-gradient"
        x1="0"
        y1="0"
        x2="1440"
        y2="0"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="currentColor" stop-opacity="0" />
        <stop offset="0.5" stop-color="currentColor" />
        <stop offset="1" stop-color="currentColor" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
</div>
