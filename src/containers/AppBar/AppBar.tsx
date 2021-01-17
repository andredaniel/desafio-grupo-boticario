import React from 'react'
import { FiHome, FiLogOut, FiPlusSquare, FiShoppingBag } from 'react-icons/fi'
import Ink from 'react-ink'
import { NavLink } from 'react-router-dom'
import {
  AppBarWrapper,
  List,
  ListItem as StyledListItem,
} from './AppBar.styles'

interface IProps {
  to: string
  icon: JSX.Element
  label: string
  exact?: boolean
}

const ListItem: React.FC<IProps> = (props): JSX.Element => {
  const { to, icon, label, exact = false } = props

  return (
    <StyledListItem>
      <NavLink to={to} exact={exact}>
        {icon}
        <span>{label}</span>
        <Ink opacity={0.1} />
      </NavLink>
    </StyledListItem>
  )
}

const AppBar: React.FC = ({ children }): JSX.Element => {
  return (
    <AppBarWrapper>
      <List>
        <ListItem to="/" icon={<FiHome />} label="Dashboard" exact />
        <ListItem
          to="/orders/create"
          icon={<FiPlusSquare />}
          label="Nova compra"
          exact
        />
        <ListItem
          to="/orders"
          icon={<FiShoppingBag />}
          label="Minhas compras"
          exact
        />
        <ListItem to="/logout" icon={<FiLogOut />} label="Sair" />
      </List>
    </AppBarWrapper>
  )
}

export { AppBar }
