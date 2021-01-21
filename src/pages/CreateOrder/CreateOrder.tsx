import { Form, Formik, FormikHelpers, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { pt } from 'yup-locale-pt'
import { Button } from '../../components'
import FormikInput from '../../containers/FormikInput'
import { useUser } from '../../contexts/user.context'
import { Panel } from '../../layouts/Panel'
import api from '../../services/api'
import { formatMoney } from '../../utils/money.utils'

yup.setLocale(pt)

let OrderSchema = yup.object().shape({
  code: yup.string().required('O código é obrigatório'),
  value: yup
    .string()
    .test('Valor', 'O valor deve ser maior do que zero', (value: any) => {
      const numberValue = Number(value.replace(/\D/g, ''))
      return numberValue > 0
    })
    .required('O valor é obrigatório'),
  date: yup.date().required('A data é obrigatória'),
})

interface FormValuesOrder {
  code: string
  value: string
  date: string
}

const initialValues: FormValuesOrder = {
  code: '',
  value: '',
  date: '',
}

const FormikContext: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<FormValuesOrder>()
  useEffect(() => {
    const valueNumbers: number = Number(values.value.replace(/\D+/g, '')) / 100

    setFieldValue('value', formatMoney(valueNumbers))
  }, [setFieldValue, values.value])
  return null
}

const CreateOrder: React.FC = (): JSX.Element => {
  const { user } = useUser()

  const handleSubmit = async (
    values: FormValuesOrder,
    { setSubmitting, resetForm }: FormikHelpers<FormValuesOrder>
  ) => {
    try {
      setSubmitting(true)
      const { data } = await api.post(`/orders`, {
        ...values,
        user_id: user.id,
      })
      toast.success('Seu pedido de compra foi registrado')
      return data
    } catch (e) {
      toast.error(e.message)
    } finally {
      resetForm()
      setSubmitting(false)
    }
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
          <FormikInput id="value" label="Valor" placeholder="Valor da compra" />
          <FormikInput
            id="date"
            label="Data"
            placeholder="Data da compra"
            mask="99/99/9999"
          />
          <Button variant="primary" label="Cadastrar compra" type="submit" />
          <FormikContext />
        </Form>
      </Formik>
    </Panel>
  )
}

export default CreateOrder
