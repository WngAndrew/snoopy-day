import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Update base to match the repo name for GitHub Pages
  base: '/snoopy-day/',
  plugins: [react()],
})
