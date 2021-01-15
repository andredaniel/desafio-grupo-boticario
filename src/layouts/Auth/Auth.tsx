import React from 'react'
import { ReactComponent as Brand } from '../../assets/brand/logo-black.svg'
import { AuthContent, AuthCover, AuthWrapper, Card } from './Auth.styles'

const Auth: React.FC = ({ children }): JSX.Element => {
  return (
    <AuthWrapper>
      <Card>
        <AuthContent>
          <Brand />
          {children}
        </AuthContent>
        <AuthCover />
      </Card>
    </AuthWrapper>
  )
}

export { Auth }
