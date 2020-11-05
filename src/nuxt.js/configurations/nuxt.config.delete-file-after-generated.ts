import { unlinkSync } from 'fs'
import { join } from 'path'
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  hooks: {
    generate: {
      done() {
        unlinkSync(join(__dirname, 'dist/.nojekyll'))
        unlinkSync(join(__dirname, 'dist/200.html'))
      },
    },
  },
  target: 'static',
}

export default config
