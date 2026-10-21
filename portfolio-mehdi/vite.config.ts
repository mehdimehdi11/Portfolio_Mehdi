import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For the repository named mehdimehdi11.github.io, the site is served from the domain root.
  base: '/',
})
