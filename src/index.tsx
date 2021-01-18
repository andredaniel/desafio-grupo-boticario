import React from 'react'
import ReactDOM from 'react-dom'
import { UserProvider } from './contexts/user.context'
import { Routes } from './routes'
import './theme/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
