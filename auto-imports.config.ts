import type { Options } from 'unplugin-auto-import/types'

export const configAutoImport = {
  include: [/\.(store\.)?[tj]sx?$/],
  imports: [
    'react',
    'react-router-dom',
    'mobx',
    'mobx-react-lite',
    {
      uuid: ['v4']
    },
    {
      axios: [['default', 'axios']],
      '@emotion/styled': [['default', 'styled']]
    },
    {
      from: 'axios',
      imports: ['AxiosInstance', 'AxiosResponse'],
      type: true
    }
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
    './src/utils/router/'
  ],
  dts: './src/types/declare/auto-imports.d.ts'
} satisfies Options
