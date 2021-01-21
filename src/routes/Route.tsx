import React from 'react'
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom'
import { isAuthenticated } from '../hooks/auth'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  forceRender?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = (props) => {
  const { isPrivate = false, component: Component, ...rest } = props
  const authenticated = isAuthenticated()

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
