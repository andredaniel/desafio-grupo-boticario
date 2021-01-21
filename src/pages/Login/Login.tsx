import { Form, Formik, FormikHelpers } from 'formik'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { Button } from '../../components'
import FormikInput from '../../containers/FormikInput'
import { useUser } from '../../contexts/user.context'
import { signIn } from '../../hooks/auth'
import { Auth } from '../../layouts/Auth'
import { IUser } from '../../types/user.interface'

let SigninSchema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('O campo e-mail é obrigatório'),
  password: yup.string().required('O campo senha é obrigatório'),
})

interface FormValuesLogin extends Pick<IUser, 'email' | 'password'> {}

const initialValues = {
  email: '',
  password: '',
}

const Login: React.FC = (): JSX.Element => {
  const { user, setUser } = useUser()
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const history = useHistory()

  useEffect(() => {
    if (isRegistered) {
      history.push('/')
    }
  }, [history, isRegistered])

  const handleLoginSuccess = () => {
    setIsRegistered(true)
  }

  const handleLoginError = (e: any) => {
    toast.error(e.message)
  }

  const handleSubmit = async (
    values: FormValuesLogin,
    { setSubmitting }: FormikHelpers<FormValuesLogin>
  ) => {
    const signed = await signIn(values, handleLoginSuccess, handleLoginError)
    setUser(signed)
    setSubmitting(false)
  }

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [history, user])

  return (
    <Auth data-testid="login-page">
      <div className="head">
        <h1>Login do Revendedor</h1>
      </div>
      <Formik
        validationSchema={SigninSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        <Form>
          <FormikInput
            id="email"
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            data-testid="login-email"
          />

          <FormikInput
            id="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            data-testid="login-password"
          />

          <Button variant="primary" label="Acessar" type="submit" data-testid="login-button" />
        </Form>
      </Formik>
      <hr />
      <Button href="/register" variant="info" label="Quero ser um revendedor" />
    </Auth>
  )
}

export default Login
