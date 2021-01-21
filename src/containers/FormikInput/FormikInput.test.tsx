import { render } from '@testing-library/react'
import React from 'react'
import { FormikInput } from './FormikInput'

describe('<Input />', () => {
  xit('should render an FormikInput without mask', () => {
    const { container } = render(<FormikInput />)
    expect(container).toMatchSnapshot()
  })
})
