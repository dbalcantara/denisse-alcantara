import { defineConfig } from 'vite'
import { ghPages } from 'vite-plugin-gh-pages'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/denisse-alcantara",
})
