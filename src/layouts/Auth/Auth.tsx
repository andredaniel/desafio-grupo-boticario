import React from 'react'
import { ReactComponent as Brand } from '../../assets/brand/logo-white.svg'
import { AuthContent, AuthCover, AuthWrapper, StyledCard } from './Auth.styles'

const Auth: React.FC = ({ children }): JSX.Element => {
  return (
    <AuthWrapper>
      <StyledCard>
        <AuthContent>{children}</AuthContent>
      </StyledCard>
      <Brand />
      <AuthCover />
    </AuthWrapper>
  )
}

export { Auth }
