import { Story } from '@storybook/vue3'
import GitHubRibbon from './GitHubRibbon.vue'

export default {
  title: 'Example/GitHubRibbon',
  component: GitHubRibbon,
}

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GitHubRibbon },
  setup() {
    return { args }
  },
  template: '<GitHubRibbon v-bind="args" />',
})

export const Default = Template.bind({})
