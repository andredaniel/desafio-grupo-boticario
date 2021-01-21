import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from '../contexts/user.context'
import Route from './Route'

describe('<Route />', () => {
  it('should render Route component properly', () => {
    const { container } = render(
      <UserProvider>
        <Router>
          <Route component={() => <div>Route</div>} />
        </Router>
      </UserProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
