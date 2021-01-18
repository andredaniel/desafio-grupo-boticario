import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { FcShop } from 'react-icons/fc'
import { Status, Table } from '../../components'
import { useUser } from '../../contexts/user.context'
import { Panel } from '../../layouts/Panel'
import { StatusTypes } from '../../types/status.interface'
import { IOrder } from '../../types/user.interface'
import { formatMoney } from '../../utils/money.utils'

const Orders: React.FC = (): JSX.Element => {
  const { user, orders, setOrders } = useUser()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    axios
      .get(`/.netlify/functions/user/?user_id=${user.id}`)
      .then(({ data }) => {
        setOrders(data)
        setIsLoading(false)
      })
  }, [setOrders, user.id])

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
          {orders.length > 0 ? (
            orders.map((order: IOrder) => {
              return (
                <tr key={order.id}>
                  <td>{order.code}</td>
                  <td>
                    <strong>{formatMoney(order.value)}</strong>
                  </td>
                  <td>{order.date}</td>
                  <td>{order.cashbackAppliedPercentage}%</td>
                  <td>
                    <strong>{formatMoney(order.cashbackReceivedValue)}</strong>
                  </td>
                  <td>
                    <Status type={order.status} />
                  </td>
                  <td align="right">
                    <FiMoreVertical />
                  </td>
                </tr>
              )
            })
          ) : (
            <tr style={{ textAlign: 'center' }}>
              <td colSpan={7}>
                <div style={{ fontSize: 100, lineHeight: 0 }}>
                  <FcShop />
                </div>
                <span>Sem compras registradas, ainda.</span>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Panel>
  )
}

export default Orders
