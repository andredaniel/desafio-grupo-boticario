import React from 'react'
import { Button, Input } from '../../components'
import { Auth } from '../../layouts/Auth'

const Register: React.FC = (): JSX.Element => {
  return (
    <Auth>
      <div className="head">
        <h1>Criar conta</h1>
      </div>
      <Input id="name" label="Nome" placeholder="Digite seu completo" />
      <Input id="cpf" label="CPF" placeholder="Digite seu CPF" />
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
      <Button variant="primary" label="Criar conta" />
      <hr />
      <Button href="/login" variant="secondary" label="Já possuo uma conta" />
    </Auth>
  )
}

export { Register }
