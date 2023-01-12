import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,

  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray900',

  '&:focus': {
    border: '2px solid $ignite300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },
})

const sliderIn = keyframes({
  fron: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const sliderOut = keyframes({
  fron: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${sliderIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${sliderOut} 200ms ease-out`,
  },
})
