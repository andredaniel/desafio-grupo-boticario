import React from 'react'
import { Button, Input } from '../../common'
import { Panel } from '../../layouts/Panel'

const CreateOrder: React.FC = (): JSX.Element => {
  return (
    <Panel>
      <h1 className="title">Cadastrar nova compra</h1>
      <Input id="code" label="Código" placeholder="Código da compra" />
      <Input id="value" label="Valor" placeholder="Valor da compra" />
      <Input id="date" label="Data" placeholder="Data da compra" />
      <Button variant="primary" label="Cadastrar compra" />
    </Panel>
  )
}

export default CreateOrder
