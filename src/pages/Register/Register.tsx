import { Form, Formik, FormikHelpers } from 'formik'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { Button } from '../../components'
import FormikInput from '../../containers/FormikInput'
import { signUp } from '../../hooks/auth'
import { Auth } from '../../layouts/Auth'
import { IUser } from '../../types/user.interface'

let SignupSchema = yup.object().shape({
  name: yup
    .string()
    .required('O campo nome é obrigatório')
    .min(2, 'Este nome parece ser muito curto!'),
  cpf: yup.string().required('O campo CPF é obrigatório'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('O campo e-mail é obrigatório'),
  password: yup.string().required('O campo senha é obrigatório'),
})

export interface FormValues
  extends Pick<IUser, 'cpf' | 'email' | 'name' | 'password'> {}

const initialValues: FormValues = {
  cpf: '',
  email: '',
  name: '',
  password: '',
}

const Register: React.FC = (): JSX.Element => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const history = useHistory()

  useEffect(() => {
    if (isRegistered) {
      history.push('/')
    }
  }, [history, isRegistered])

  const handleSignupSuccess = () => {
    setIsRegistered(true)
  }

  const handleSignupError = (e: any) => {
    toast.error(e.message)
  }

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    await signUp(values, handleSignupSuccess, handleSignupError)
    setSubmitting(false)
  }

  return (
    <Auth>
      <div className="head">
        <h1>Criar conta</h1>
      </div>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        <Form>
          <FormikInput
            id="name"
            label="Nome"
            placeholder="Digite seu completo"
          />

          <FormikInput id="cpf" label="CPF" placeholder="Digite seu CPF" />

          <FormikInput
            id="email"
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />

          <FormikInput
            id="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />

          <Button variant="primary" label="Criar conta" type="submit" />
        </Form>
      </Formik>
      <hr />
      <Button href="/login" variant="secondary" label="Já possuo uma conta" />
    </Auth>
  )
}

export { Register }
