import { Field } from 'formik'
import React from 'react'
import { Input } from '../../components'
import { IInput } from '../../components/Input/Input'
import { FormikInputWrapper } from './FormikInput.styles'

const FormikInput: React.FC<IInput> = (props): JSX.Element => {
  return (
    <Field name={props.id}>
      {({ field, form: { touched, errors }, meta }: any) => (
        <FormikInputWrapper>
          <Input
            className={`${meta.touched && meta.error ? 'is-invalid' : ''}`}
            {...field}
            {...props}
          />
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </FormikInputWrapper>
      )}
    </Field>
  )
}

export { FormikInput }
