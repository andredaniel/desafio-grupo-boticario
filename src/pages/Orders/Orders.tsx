import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { Status, Table } from '../../components'
import { Panel } from '../../layouts/Panel'
import { StatusTypes } from '../../types/status.interface'
import { IUser } from '../../types/user.interface'
import { formatMoney } from '../../utils/money.utils'

const Orders: React.FC = (): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    axios.get('/.netlify/functions/user').then(({ data }) => {
      setUser(data)
      setIsLoading(false)
    })
  }, [])

  const randomStatus = () => {
    const key = Math.floor(Math.random() * 3)

    const statuses = [
      StatusTypes.APPROVED,
      StatusTypes.DISAPPROVED,
      StatusTypes.IN_VALIDATION,
    ]

    return statuses[key]
  }

  return (
    <Panel>
      <h1 className="title">Minhas compras</h1>
      <Table loading={isLoading}>
        <thead>
          <tr>
            <th>#</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Cashback Aplicado (%)</th>
            <th>Cashback Recebido</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {user?.orders.map((order) => {
            return (
              <tr key={order.id}>
                <td>{order.code}</td>
                <td>
                  <strong>{formatMoney(order.value)}</strong>
                </td>
                <td>{new Date(order.date * 1000).toLocaleDateString()}</td>
                <td>{order.cashbackAppliedPercentage}%</td>
                <td>
                  <strong>{formatMoney(order.cashbackReceivedValue)}</strong>
                </td>
                <td>
                  <Status type={randomStatus()} />
                </td>
                <td align="right">
                  <FiMoreVertical />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Panel>
  )
}

export default Orders
