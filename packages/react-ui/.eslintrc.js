module.exports = {
  root: true,
  env: { node: true, es6: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': 'error',
  },
}
