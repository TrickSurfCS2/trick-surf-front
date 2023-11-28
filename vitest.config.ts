import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react-swc'
import { configAutoImport } from './auto-imports.config'

//* swc / classic
// import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '#': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx'],
  },

  plugins: [
    react(),
    AutoImport(configAutoImport),
  ],

  test: {
    cache: {
      dir: '.vitestcache',
    },
    globals: true,
    coverage: {
      all: true,
      provider: 'istanbul',
      include: ['components', 'utils'],
    },
    environment: 'happy-dom',
  },
})
