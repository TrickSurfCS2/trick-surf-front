module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unused-imports', 'prettier', 'import', '@emotion'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 100,
        tabWidth: 2,
        semi: false,
        bracketSameLine: true,
        endOfLine: 'auto'
      }
    ],
    'no-console': 'off',

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '{react,react-router-dom,react-dom/**,mobx,mobx-react-lite}',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '{@emotion/**,dayjs,axios,classnames,}',
            group: 'parent',
            position: 'before'
          },
          {
            pattern:
              '{#/components/**,#/contexts/**,#/hooks/**,#/pages/**,#/store/**,#/styles/**,#/types/**,#/utils/**}',
            group: 'internal',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always'
      }
    ],

    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false
      }
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    //* Other
    'react-hooks/exhaustive-deps': 'off'
  }
}
