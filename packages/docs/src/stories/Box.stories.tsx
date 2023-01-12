import { Box, BoxProps, Text } from '@hugo-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {},
}
