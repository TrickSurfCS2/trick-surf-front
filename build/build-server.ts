import { defineConfig } from 'tsup'

import pkg from '../package.json'

import { toAbsolute } from './utils'

export default defineConfig({
  name: pkg.name,
  entry: [toAbsolute('../server/server.ts')],
  outDir: toAbsolute('../dist-server'),
  splitting: false,
  sourcemap: false,
  clean: true,
  format: 'cjs',
})
