import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserProvider } from './contexts/user.context'
import { Routes } from './routes'
import './theme/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
