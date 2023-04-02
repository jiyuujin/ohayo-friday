const { loadConfigFromFile, mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },

  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-links'],

  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|ts)'],

  async viteFinal(previousConfig) {
    const { config } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'))

    return mergeConfig(previousConfig, {
      ...config,
      plugins: [],
    })
  },
}
