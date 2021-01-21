import { render } from '@testing-library/react'
import React from 'react'
import { Loader } from './Loader'

describe('<Loader />', () => {
  it('should render Loader component as expected', () => {
    const { container } = render(<Loader />)
    expect(container).toMatchSnapshot()
  })
})
