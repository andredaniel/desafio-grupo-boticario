import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppBar } from './AppBar'

describe('<AppBar />', () => {
  it('should render AppBar component', () => {
    const { container } = render(
      <Router>
        <AppBar />
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
