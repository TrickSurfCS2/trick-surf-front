import config from '@antfu/eslint-config'

export default await config({
  gitignore: true,
  typescript: true,
  test: true,
  jsonc: true,
  yaml: true,
  jsx: true,
  markdown: true,
  stylistic: true,
  isInEditor: true,
  react: true,

  vue: false,

  ignores: ['**/dist/**', '**/.vitestcache/**', '**/e2e-**/**'],

  rules: {
    'node/prefer-global/process': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
})
