import { render } from '@testing-library/react'
import React from 'react'
import { Auth } from './Auth'

describe('<Auth />', () => {
  it('should render Auth component properly', () => {
    const { container } = render(<Auth />)
    expect(container).toMatchSnapshot()
  })
})
