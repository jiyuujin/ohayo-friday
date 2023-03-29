const react = require('@vitejs/plugin-react')
const Inspect = require('vite-plugin-inspect')

module.exports = {
  core: {
    builder: '@storybook/builder-vite',
  },

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
    )

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    )

    config.plugins.push(Inspect())

    return config
  },
}
