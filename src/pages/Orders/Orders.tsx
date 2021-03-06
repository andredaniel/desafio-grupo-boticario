import React, { useEffect } from 'react'
import { FcShop } from 'react-icons/fc'
import { Status, Table } from '../../components'
import { useUser } from '../../contexts/user.context'
import { Panel } from '../../layouts/Panel'
import api from '../../services/api'
import { IOrder } from '../../types/user.interface'
import { formatMoney } from '../../utils/money.utils'

const Orders: React.FC = (): JSX.Element => {
  const { user, setOrders, setIsLoading, orders, isLoading } = useUser()

  useEffect(() => {
    setIsLoading(true)
    if (user) {
      api.get(`/orders?user_id=${user.id}`).then(({ data }) => {
        setOrders(data)
        setIsLoading(false)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
                    <strong>
                      {order.status === 'DISAPPROVED' ? (
                        <del>{formatMoney(order.cashbackReceivedValue)}</del>
                      ) : (
                        formatMoney(order.cashbackReceivedValue)
                      )}
                    </strong>
                  </td>
                  <td>
                    <Status type={order.status} />
                  </td>
                </tr>
              )
            })
          ) : (
            <tr style={{ textAlign: 'center' }}>
              <td colSpan={6}>
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
