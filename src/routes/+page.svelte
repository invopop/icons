<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon'
  import * as Icons from '$lib/index.js'

  const icons: Record<string, Icons.IconSource> = Icons

  const themes = Object.keys(icons[Object.keys(icons)[0]])
  const backgrounds = ['light', 'dark']

  let theme = 'default'
  let background = 'light'
</script>

<div class="min-h-screen flex items-center justify-center p-4 {background === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}">
  <div class="max-w-2xl w-full p-8 rounded-lg {background === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'} shadow-lg">
    <h1 class="text-3xl font-bold mb-6">Popui Iconpack</h1>

    <div class="flex gap-6 mb-8">
      <div class="flex flex-col gap-2">
        <label for="theme-select" class="text-sm font-medium">Theme</label>
        <select id="theme-select" bind:value={theme} class="px-3 py-2 rounded-md border {background === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}">
          {#each themes as th}
            <option value={th}>{th}</option>
          {/each}
        </select>
      </div>

      <div class="flex flex-col gap-2">
        <label for="background-select" class="text-sm font-medium">Background</label>
        <select id="background-select" bind:value={background} class="px-3 py-2 rounded-md border {background === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}">
          {#each backgrounds as bg}
            <option value={bg}>{bg}</option>
          {/each}
        </select>
      </div>
    </div>

    <div class="flex flex-wrap gap-6 my-6">
      {#each Object.keys(icons) as Src}
        <Icon src={icons[Src]} size="16px" {theme} />
      {/each}
    </div>
  </div>
</div>