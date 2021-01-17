import React from 'react'
import { ReactComponent as Brand } from '../../assets/brand/logo-black.svg'
import { AuthContent, AuthCover, AuthWrapper, StyledCard } from './Auth.styles'

const Auth: React.FC = ({ children }): JSX.Element => {
  return (
    <AuthWrapper>
      <StyledCard>
        <AuthContent>
          <Brand />
          {children}
        </AuthContent>
        <AuthCover />
      </StyledCard>
    </AuthWrapper>
  )
}

export { Auth }
