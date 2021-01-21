import { render } from '@testing-library/react'
import React from 'react'
import { Card } from './Card'

describe('<Card />', () => {
  it('should render Card component as expected', () => {
    const { container } = render(<Card />)
    expect(container).toMatchSnapshot()
  })
})
