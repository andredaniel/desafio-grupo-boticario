import * as CryptoJS from 'crypto-js'
import React, { useEffect, useState } from 'react'
import { ReactComponent as Brand } from '../../assets/brand/logo-black.svg'
import { Avatar } from '../../components'
import { NavBarWrapper } from './NavBar.styles'

const NavBar: React.FC = (): JSX.Element => {
  const avatarUrl = `https://www.gravatar.com/avatar/${CryptoJS.MD5(
    'andre.fervilha@gmail.com'
  )}`

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY))
  }, [])

  return (
    <NavBarWrapper y={scrollY}>
      <div className="brand-wrapper">
        <Brand />
        <span>Cashback</span>
      </div>
      <div className="user-info">
        <Avatar src={avatarUrl} />
        <span className="welcome-message">Bem-vindo, André!</span>
      </div>
    </NavBarWrapper>
  )
}

export { NavBar }
