<script>
  export let id = 'multiselect'
  export let options = []
  export let selected = []
  export let placeholder = 'Select options...'

  let isOpen = false
  let searchTerm = ''

  const filteredOptions = $derived(() => 
    options.filter(opt => 
      opt.toLowerCase().includes(searchTerm.toLowerCase()) && 
      !selected.includes(opt)
    )
  )

  function toggle() {
    isOpen = !isOpen
  }

  function addOption(option) {
    selected = [...selected, option]
    searchTerm = ''
    dispatch('change', { detail: selected })
  }

  function removeOption(option) {
    selected = selected.filter(opt => opt !== option)
    dispatch('change', { detail: selected })
  }

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<div class="relative w-64">
  <div class="flex flex-wrap gap-1 p-1 border rounded-lg bg-primary">
    {#each selected as opt}
      <div class="flex items-center px-2 py-1 text-sm rounded bg-secondary text-white">
        {opt}
        <button 
          on:click|stopPropagation={() => removeOption(opt)}
          class="ml-1 hover:text-red-400"
        >
          ×
        </button>
      </div>
    {/each}
    <input
      id={id}
      type="text"
      bind:value={searchTerm}
      on:click={toggle}
      on:keydown={(e) => e.key === 'Escape' && (isOpen = false)}
      placeholder={placeholder}
      class="flex-grow p-1 bg-transparent outline-none min-w-[120px]"
    />
  </div>

  {#if isOpen}
    <div class="absolute z-10 w-full mt-1 bg-primary border rounded-lg shadow-lg max-h-48 overflow-y-auto">
      {#if filteredOptions.length === 0}
        <div class="p-2 text-gray-400">No options found</div>
      {:else}
        {#each filteredOptions as opt}
          <div
            on:click={() => addOption(opt)}
            class="p-2 hover:bg-secondary hover:text-white cursor-pointer"
          >
            {opt}
          </div>
        {/each}
      {/if}
    </div>
  {/if}
</div>
