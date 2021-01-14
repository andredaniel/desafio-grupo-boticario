interface IUser {
  id: string
  name: string
  email: string
  cpf: string
  password: string
}

interface IAuth {
  token: string
  user: IUser
}

export type { IUser, IAuth }
