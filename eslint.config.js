import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    ignores: ['**/*.gen.ts'],
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
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
)
