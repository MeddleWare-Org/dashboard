import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// @meddleware/* resolve from node_modules (published packages — no monorepo aliases).
export default defineConfig({
  plugins: [vue()],
})
