import { Button, ButtonProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
