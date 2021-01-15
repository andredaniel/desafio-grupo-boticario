import React from 'react'
import { Button, Input } from '../../components'
import { Auth } from '../../layouts/Auth'

const Login: React.FC = (): JSX.Element => {
  return (
    <Auth>
      <div className="head">
        <h1>Login</h1>
      </div>
      <Input
        id="email"
        type="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Input
        id="password"
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
      />
      <Button variant="primary" label="Acessar" />
      <hr />
      <Button
        href="/register"
        variant="secondary"
        label="Quero ser um revendedor"
      />
    </Auth>
  )
}

export { Login }
