import React from 'react'
import { Panel } from '../../layouts/Panel'

const Orders: React.FC = (): JSX.Element => {
  return (
    <Panel>
      <h1 className="title">Minhas compras</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Cashback Aplicado (%)</th>
            <th>Cashback Recebido</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </Panel>
  )
}

export default Orders
