import axios from 'axios'
import React, { useEffect } from 'react'
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  useHistory,
} from 'react-router-dom'
import { useUser } from '../contexts/user.context'
import { isAuthenticated } from '../hooks/auth'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  forceRender?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = (props) => {
  const { isPrivate = false, component: Component, ...rest } = props
  const authenticated = isAuthenticated()
  const history = useHistory()
  const { user, setOrders, setIsLoading } = useUser()

  useEffect(() => {
    history.listen(() => {
      axios
        .get(`/.netlify/functions/user/?user_id=${user.id}`)
        .then(({ data }) => {
          setOrders(data)
          setIsLoading(false)
        })
    })
  }, [history, setIsLoading, setOrders, user.id])

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === authenticated) {
          return <Component />
        }

        return (
          <Redirect
            to={{
              pathname: authenticated ? '/' : '/login',
              state: { location },
            }}
          />
        )
      }}
    />
  )
}

export default Route
