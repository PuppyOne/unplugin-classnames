import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import unpluginClassNames from 'unplugin-classnames/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    unpluginClassNames(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
