import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  publicDir: resolve(__dirname, 'public'),
  root: 'src',
})
