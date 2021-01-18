import axios from 'axios'
import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { Button } from '../../components'
import FormikInput from '../../containers/FormikInput'
import { useUser } from '../../contexts/user.context'
import { Panel } from '../../layouts/Panel'

let OrderSchema = yup.object().shape({
  code: yup.string().required('O código é obrigatório'),
  value: yup.string().required('O valor é obrigatório'),
  date: yup.string().required('A data é obrigatória'),
})

interface FormValuesOrder {
  code: string
  value: string
  date: string
}

const initialValues = {
  code: '',
  value: '',
  date: '',
}

const CreateOrder: React.FC = (): JSX.Element => {
  const { user } = useUser()
  const handleOrderSuccess = () => {
    toast.success('Seu pedido de compra foi registrado')
  }

  const handleOrderError = (e: any) => {
    toast.error(e.message)
  }

  const createOrder = async (
    values: any,
    onCreateSuccess: Function = () => null,
    onCreateError: Function = () => null
  ) => {
    try {
      const { data } = await axios.post(`/.netlify/functions/user/`, values)
      onCreateSuccess()
      return data
    } catch (e) {
      onCreateError()
    }
  }

  const handleSubmit = async (
    values: FormValuesOrder,
    { setSubmitting }: FormikHelpers<FormValuesOrder>
  ) => {
    await createOrder(
      { ...values, user_id: user.id },
      handleOrderSuccess,
      handleOrderError
    )
    setSubmitting(false)
  }

  return (
    <Panel>
      <h1 className="title">Cadastrar nova compra</h1>
      <Formik
        validationSchema={OrderSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        <Form>
          <FormikInput
            id="code"
            label="Código"
            placeholder="Código da compra"
          />
          <FormikInput
            id="value"
            label="Valor"
            placeholder="Valor da compra"
            mask="R$ 999,99"
          />
          <FormikInput
            id="date"
            label="Data"
            placeholder="Data da compra"
            mask="99/99/9999"
          />
          <Button variant="primary" label="Cadastrar compra" type="submit" />
        </Form>
      </Formik>
    </Panel>
  )
}

export default CreateOrder
