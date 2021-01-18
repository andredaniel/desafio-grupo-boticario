import React from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Loader } from '../../components/Loader'
import { useUser } from '../../contexts/user.context'
import { logout } from '../../hooks/auth'

const Logout: React.FC = (): JSX.Element => {
  const { setUser } = useUser()
  const history = useHistory()

  setUser(null)
  logout().then(() => {
    history.push('/login')

    toast.info('Você foi desconectado!', {
      toastId: 'logout',
    })
  })

  return <Loader />
}

export default Logout
