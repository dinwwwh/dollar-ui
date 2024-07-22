import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    ignores: ['**/*.gen.ts'],
  },
  {
    rules: {
      'react/prefer-destructuring-assignment': ['off'],
    },
  },
  {
    files: ['packages/**/*'],
    rules: {
      'react-refresh/only-export-components': ['off'],
    },
  },
  {
    files: ['packages/ui/src/**/*.{tsx,jsx}'],
    rules: {
      'react/no-unstable-context-value': ['off'],
      'react-dom/no-missing-button-type': ['off'],
      'react/no-unstable-default-props': ['off'],
      'react/no-array-index-key': ['off'],
      'react-refresh/only-export-components': ['off'],
    },
  },
)
