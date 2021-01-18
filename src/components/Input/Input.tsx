import React, { InputHTMLAttributes } from 'react'
import { InputWrapper } from './Input.styles'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input: React.FC<IInput> = (props): JSX.Element => {
  const { label, id, type, ...rest } = props

  return (
    <InputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type || 'text'} id={id} {...rest} />
    </InputWrapper>
  )
}

export { Input }
export type { IInput }
