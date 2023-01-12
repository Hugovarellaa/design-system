import { ComponentProps } from 'react'
import { Input, TextInputContainer, TextInputPrefix } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...rest }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
      <Input {...rest} />
    </TextInputContainer>
  )
}
