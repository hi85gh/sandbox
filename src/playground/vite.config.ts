import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        eventListener: resolve(__dirname, 'src/event-listener/index.html'),
      },
    },
  },
  publicDir: resolve(__dirname, 'public'),
  root: 'src',
})
