import React, { createContext, useContext, useState } from 'react'
import { getCurrentUser } from '../hooks/auth'
import { IOrder } from '../types/user.interface'

interface UserContextProps {
  isLoading: boolean
  user: any
  orders: IOrder[]
  setUser: Function
  setOrders: Function
  setIsLoading: Function
}

export const UserContext = createContext<UserContextProps | null>(null)

export const UserProvider: React.FC = ({ children }): JSX.Element => {
  const currentUser = getCurrentUser()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState<any>(currentUser)
  const [orders, setOrders] = useState<IOrder[]>([])

  return (
    <UserContext.Provider
      value={{ user, setUser, orders, setOrders, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within an UserProvider')
  }

  return context
}
