import React, { ButtonHTMLAttributes } from 'react'
import Ink from 'react-ink'
import { Link } from 'react-router-dom'
import { ButtonWrapper } from './Button.styles'

export type VariationTypes = 'primary' | 'secondary' | 'info'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: VariationTypes
  href?: string
}

const Button: React.FC<IButton> = ({ children, ...props }): JSX.Element => {
  const { href, label, id, type, variant, ...rest } = props

  const component = (
    <ButtonWrapper variant={variant}>
      <button type={type || 'button'} id={id} {...rest}>
        {children || label}
        <Ink opacity={0.1} />
      </button>
    </ButtonWrapper>
  )

  return <>{href ? <Link to={href}>{component}</Link> : component}</>
}

export { Button }
