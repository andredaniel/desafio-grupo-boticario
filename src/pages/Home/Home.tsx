import React, { useMemo, useState } from 'react'
import { ReactComponent as Illustration } from '../../assets/images/jewelry.svg'
import { useUser } from '../../contexts/user.context'
import { Panel } from '../../layouts/Panel'
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
  const { orders } = useUser()
  const [salesMade, setSalesMade] = useState(0)
  const [availableCashback, setAvailableCashback] = useState(0)
  const [pendingCashback, setPendingCashback] = useState(0)

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
            <h2>{formatMoney(availableCashback)}</h2>
            <p>Em análise: {formatMoney(pendingCashback)}</p>
          </StyledCard>
          <StyledCard>
            <h2>{orders.length}</h2>
            <p>Compras realizadas</p>
          </StyledCard>
          <StyledCard>
            <h2>{salesMade}</h2>
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
