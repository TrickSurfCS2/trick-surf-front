// // eslint-disable-next-line no-undef
// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   plugins: [
//     'unused-imports',
//     'prettier',
//     'import',
//     '@emotion',
//     'react-refresh'
//   ],
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:react/recommended',
//     'prettier'
//   ],
//   ignorePatterns: ['**/*.d.ts', '.*.js', 'dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   rules: {
//     'prettier/prettier': [
//       'error',
//       {
//         singleQuote: true,
//         trailingComma: 'none',
//         printWidth: 100,
//         tabWidth: 2,
//         semi: false,
//         bracketSameLine: true,
//         endOfLine: 'auto'
//       }
//     ],
//     'no-console': 'off',
//     'import/order': [
//       'warn',
//       {
//         groups: [
//           'type',
//           'builtin',
//           'external',
//           'internal',
//           'unknown',
//           'parent',
//           'sibling',
//           'index',
//           'object'
//         ],
//         alphabetize: { order: 'asc', caseInsensitive: true }
//       }
//     ],
//     '@typescript-eslint/consistent-type-imports': [
//       'error',
//       {
//         prefer: 'type-imports',
//         disallowTypeAnnotations: false
//       }
//     ],
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],

//     //* other
//     'react/jsx-no-undef': 'off', // TODO
//     '@typescript-eslint/no-non-null-assertion': 'off',

//     'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
//     '@typescript-eslint/no-unused-vars': 'error',
//     'unused-imports/no-unused-imports': 'error',

//     'no-useless-escape': 'off',
//     'react/react-in-jsx-scope': 'off',
//     'react/prop-types': 'off',
//     'react-hooks/exhaustive-deps': 'off',
//     'react/display-name': 'off',
//     '@typescript-eslint/ban-types': 'off',
//     'import/no-cycle': 'off'
//   }
// }

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
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
      'warn',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object'
        ],
        alphabetize: { order: 'asc', caseInsensitive: true }
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
