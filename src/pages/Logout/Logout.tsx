import React from 'react'
import { useHistory } from 'react-router-dom'
import { Loader } from '../../components/Loader'
import { useUser } from '../../contexts/user.context'
import { logout } from '../../hooks/auth'

const Logout: React.FC = (): JSX.Element => {
  const { setUser } = useUser()
  const history = useHistory()

  setUser(null)
  logout().then(() => {
    history.push('/login')
  })

  return <Loader />
}

export default Logout
