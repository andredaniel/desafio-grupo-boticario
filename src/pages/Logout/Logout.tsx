import React from 'react'
import { Redirect } from 'react-router-dom'
import { logout } from '../../hooks/auth'

const Logout: React.FC = (): JSX.Element => {
  logout()

  return <Redirect to="/login" />
}

export default Logout
