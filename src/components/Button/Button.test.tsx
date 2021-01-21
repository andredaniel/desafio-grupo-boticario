import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Button } from './Button'

describe('<Button />', () => {
  it('should render a primary button', () => {
    const { container } = render(<Button variant="primary" />)
    expect(container).toMatchSnapshot()
  })

  it('should render a secondary button', () => {
    const { container } = render(<Button variant="secondary" />)
    expect(container).toMatchSnapshot()
  })

  it('should render a info button', () => {
    const { container } = render(<Button variant="info" />)
    expect(container).toMatchSnapshot()
  })

  it('should render a button with href', () => {
    const { container } = render(
      <Router>
        <Button href="/" />
      </Router>
    )

    expect(container).toMatchSnapshot()
  })
})
