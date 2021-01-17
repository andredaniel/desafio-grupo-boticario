import React from 'react'
import { CardWrapper } from './Card.styles'

const Card: React.FC = ({ children, ...rest }): JSX.Element => {
  return <CardWrapper {...rest}>{children}</CardWrapper>
}

export { Card }
