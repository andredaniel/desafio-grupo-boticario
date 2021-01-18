import React from 'react'
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

const Home: React.FC = (): JSX.Element => {
  const { orders } = useUser()

  return (
    <Panel overflow="visible">
      <HomeWrapper>
        <h1 className="title">Meu cashback</h1>
        <Flex>
          <StyledCard>
            <h2>
              {formatMoney(
                orders.reduce((acc: number, order: IOrder) => {
                  acc = acc + Number(order.cashbackReceivedValue)
                  return acc
                }, 0)
              )}
            </h2>
            <p>Valor em cashback</p>
          </StyledCard>
          <StyledCard>
            <h2>{orders.length}</h2>
            <p>Compras realizadas</p>
          </StyledCard>
          <StyledCard>
            <h2>{Math.ceil(Math.random() * orders.length)}</h2>
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
