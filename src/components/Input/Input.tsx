import React, { InputHTMLAttributes } from 'react'
import { InputWrapper } from './Input.styles'
import InputMask from 'react-input-mask'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  mask?: string
}

const Input: React.FC<IInput> = (props): JSX.Element => {
  const { label, id, type, mask = '', ...rest } = props

  return (
    <InputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <InputMask
        id={id}
        mask={mask}
        maskPlaceholder={null}
        type={type || 'text'}
        {...rest}
      />
    </InputWrapper>
  )
}

export { Input }
export type { IInput }
