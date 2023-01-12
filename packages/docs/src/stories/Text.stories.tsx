import { Text, TextProps } from '@hugo-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quasi nihil illo obcaecati laboriosam consectetur alias, recusandae repudiandae aliquid officiis, voluptates error enim eos, corrupti repellendus corporis minus commodi distinctio.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
