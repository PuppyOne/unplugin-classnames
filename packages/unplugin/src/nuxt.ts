import type { Options } from './types'
import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit'
import vite from './vite'
import webpack from './webpack'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-unplugin-classnames',
    configKey: 'unpluginClassnames',
  },
  defaults: {
    // ...default options
  },
  setup(options: Options) {
    addVitePlugin(() => vite(options))
    addWebpackPlugin(() => webpack(options))

    // ...
  },
})
