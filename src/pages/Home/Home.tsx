import Skeleton from 'react-loading-skeleton'
import React, { useEffect, useMemo, useState } from 'react'
import { ReactComponent as Illustration } from '../../assets/images/jewelry.svg'
import { useUser } from '../../contexts/user.context'
import { Panel } from '../../layouts/Panel'
import api from '../../services/api'
import { IOrder } from '../../types/user.interface'
import { formatMoney } from '../../utils/money.utils'
import {
  Flex,
  HomeWrapper,
  IllustrationWrapper,
  StyledCard,
} from './Home.styles'

const filterCashback = (orders: IOrder[], status: string) => {
  return orders
    .filter((order: any) => order.status === status)
    .reduce((acc: number, order: IOrder) => {
      acc = acc + Number(order.cashbackReceivedValue)
      return acc
    }, 0)
}

const Home: React.FC = (): JSX.Element => {
  const { user, setOrders, setIsLoading, orders, isLoading } = useUser()
  const [salesMade, setSalesMade] = useState(0)
  const [availableCashback, setAvailableCashback] = useState(0)
  const [pendingCashback, setPendingCashback] = useState(0)

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

  // Just a fake data
  useMemo(() => {
    setSalesMade(Math.floor(orders.length * 0.6))
  }, [orders.length])

  useMemo(() => {
    setAvailableCashback(filterCashback(orders, 'APPROVED'))
  }, [orders])

  useMemo(() => {
    setPendingCashback(filterCashback(orders, 'IN_VALIDATION'))
  }, [orders])

  return (
    <Panel overflow="visible">
      <HomeWrapper>
        <h1 className="title">Meu cashback</h1>
        <Flex>
          <StyledCard>
            <h2>{isLoading ? <Skeleton /> : formatMoney(availableCashback)}</h2>
            <p>
              {isLoading ? (
                <Skeleton />
              ) : (
                `Em análise: ${formatMoney(pendingCashback)}`
              )}
            </p>
          </StyledCard>
          <StyledCard>
            <h2>{isLoading ? <Skeleton /> : orders.length}</h2>
            <p>Compras realizadas</p>
          </StyledCard>
          <StyledCard>
            <h2>{isLoading ? <Skeleton /> : salesMade}</h2>
            <p>Vendas realizadas</p>
          </StyledCard>
        </Flex>

        <IllustrationWrapper>
          <Illustration />
        </IllustrationWrapper>
      </HomeWrapper>
    </Panel>
  )
}

export default Home
