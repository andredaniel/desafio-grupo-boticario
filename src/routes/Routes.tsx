import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Loader } from '../components/core/Loader'
import Route from './Route'

const Home = lazy(() => import('../components/views/Home'))
const Login = lazy(() => import('../components/views/Login'))
const Register = lazy(() => import('../components/views/Register'))
const CreateOrder = lazy(() => import('../components/views/CreateOrder'))
const Orders = lazy(() => import('../components/views/Orders'))

const Routes = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" component={Home} isPrivate exact />
        <Route path="/orders/create" component={CreateOrder} isPrivate exact />
        <Route path="/orders" component={Orders} isPrivate exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Suspense>
  </Router>
)

export { Routes }
