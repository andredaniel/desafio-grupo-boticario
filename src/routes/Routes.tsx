import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Loader } from '../components/Loader'
import Route from './Route'

const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Logout = lazy(() => import('../pages/Logout'))
const Register = lazy(() => import('../pages/Register'))
const CreateOrder = lazy(() => import('../pages/CreateOrder'))
const Orders = lazy(() => import('../pages/Orders'))

const Routes = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" component={Home} isPrivate exact />
        <Route path="/orders/create" component={CreateOrder} isPrivate exact />
        <Route path="/orders" component={Orders} isPrivate exact />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} isPrivate exact />
        <Route path="/register" component={Register} />
      </Switch>
    </Suspense>
  </Router>
)

export { Routes }
