import { Avatar, AvatarProps } from '@hugo-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/Hugovarellaa.png',
    alt: 'Hugo Alves Varella',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: undefined,
  },
}
