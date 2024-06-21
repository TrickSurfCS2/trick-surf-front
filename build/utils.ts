import {
  copyFileSync,
  existsSync,
  mkdir,
  readdirSync,
  rmdirSync,
  statSync,
  unlinkSync,
} from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { createLogger } from 'vite'

import type { Options as AutoImportOptions } from 'unplugin-auto-import/types'

export function alias(path: string): string {
  return fileURLToPath(new URL(toAbsolute(`../${path}`), import.meta.url))
}

export function toAbsolute(path: string): string {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  return resolve(__dirname, path)
}

export function camelize(name: string): string {
  return name.replace(/(^|-)(\w)/g, (a, b, c) => c.toUpperCase())
}

export function copyFileRecursive(src: string, dest: string): void {
  const lastPath = dest.substring(0, dest.lastIndexOf('/'))

  mkdir(lastPath, { recursive: true }, () => {
    copyFileSync(src, dest)
  })
}

export function rmdirRecursive(path: string) {
  if (existsSync(path)) {
    readdirSync(path).forEach((item) => {
      const current = resolve(path, item)

      statSync(current).isDirectory()
        ? rmdirRecursive(current)
        : unlinkSync(current)
    })
    rmdirSync(path)
  }
}

export function removeWarnLogs(logs: string[]) {
  const logger = createLogger()
  const originalWarning = logger.warn
  logger.warn = (msg, options) => {
    if (logs.find(f => msg.includes(f)))
      return

    originalWarning(msg, options)
  }

  return logger
}

// Plugins options

export const autoImportOptions: AutoImportOptions = {
  include: [/\.(store\.)?[tj]sx?$/],
  imports: [
    'react',
    'react-router-dom',
    'mobx',
    'mobx-react-lite',
    {
      uuid: ['v4'],
    },
    {
      'axios': [['default', 'axios']],
      '@emotion/styled': [['default', 'styled']],
    },
    {
      from: 'axios',
      imports: ['AxiosInstance', 'AxiosResponse'],
      type: true,
    },
  ],
  dirs: [
    './src/store/',
    './src/store/common/',
    './src/hooks/',
    './src/hooks/events/',
    './src/utils/',
    './src/utils/common/',
    './src/utils/api/',
    './src/utils/regexp/',
    './src/utils/router/',
  ],
  dts: './src/types/declare/auto-imports.d.ts',
}
