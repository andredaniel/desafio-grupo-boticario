import { IStatus } from './status.interface'

export interface IOrder {
  cashbackAppliedPercentage: number
  cashbackReceivedValue: number
  code: string
  date: number
  id: number
  status: string
  value: number
}

export interface IUser {
  cpf: string
  email: string
  id: string
  name: string
  orders: IOrder[]
  password: string
}

export interface IAuth {
  token: string
  user: IUser
}
