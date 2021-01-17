import React from 'react'
import { ReactComponent as Illustration } from '../../assets/images/jewelry.svg'
import { Panel } from '../../layouts/Panel'
import { StyledCard, Flex, HomeWrapper, IllustrationWrapper } from './Home.styles'

const Home: React.FC = (): JSX.Element => {
  return (
    <Panel overflow="visible">
      <HomeWrapper>
        <h1 className="title">Meu cashback</h1>
        <Flex>
          <StyledCard>
            <h2>R$ 78,40</h2>
            <p>Valor em cashback</p>
          </StyledCard>
          <StyledCard>
            <h2>14</h2>
            <p>Compras realizadas</p>
          </StyledCard>
          <StyledCard>
            <h2>65</h2>
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
