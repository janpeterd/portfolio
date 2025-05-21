<script>
  let props = $props()
  const linkObj = {
    icon: 'mdi:image',
    textColor: 'text-secondary',
    text: pathToFileName(props.destination)
  }
</script>

<div class="fixed top-0 h-screen w-screen rounded-lg bg-black p-1">
  <img src={props.destination} alt={linkObj.text} class="rounded-xl object-cover" />
</div>
