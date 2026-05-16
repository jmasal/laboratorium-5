import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/laboratorium-5/',
  plugins: [
    tailwindcss(),
  ],
})