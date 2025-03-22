import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { defineConfig } from 'vite'
import { threeMinifier } from '@yushijinhun/three-minifier-rollup'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    threeMinifier(),
    Icons({
      compiler: 'svelte'
    })
  ]
})
