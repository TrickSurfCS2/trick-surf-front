/* eslint-disable import/order */
import { URL, fileURLToPath } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { autoImportOptions } from './build/utils'

//* swc / classic
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command, mode }) => ({
  base: '/',
  plugins: [
    react(),
    AutoImport(autoImportOptions),
  ],
  resolve: {
    alias: {
      '#': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx'],
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // : Split external library from transpiled code.
          'react': ['react', 'react-dom', 'react-router-dom', 'react-icons'],
          'axios': ['axios'],
          'mobx': ['mobx', 'mobx-react-lite'],
          'emotion': ['@emotion/react', '@emotion/styled'],
          'ui-kit': ['antd'],
          'helpers': ['classnames', 'dayjs', 'uuid'],
        },
        plugins: [
          mode === 'analyze'
            ? visualizer({
              open: true,
              filename: 'dist/stats.html',
            })
            : undefined,
        ],
      },
    },
    outDir: 'dist-client',
  },
  esbuild: {
    drop: command === 'serve' ? [] : ['console'],
  },
}))
