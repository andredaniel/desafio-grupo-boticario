import { Field } from 'formik'
import React from 'react'
import { Input } from '../../components'
import { IInput } from '../../components/Input/Input'
import { FormikInputWrapper } from './FormikInput.styles'

const FormikInput: React.FC<IInput> = ({ id, ...rest }): JSX.Element => {
  return (
    <Field name={id} {...rest}>
      {({ field, form: { touched, errors }, meta }: any) => (
        <FormikInputWrapper>
          <Input
            id={id}
            className={`${meta.touched && meta.error ? 'is-invalid' : ''}`}
            {...field}
            {...rest}
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
