import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../styles'

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
  alignContent: 'center',
  justifyContent: 'center',

  border: '2px solid $ignite900',

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
})
