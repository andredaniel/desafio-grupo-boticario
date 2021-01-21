import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from '../../contexts/user.context'
import Page from './Home'

describe('<Page />', () => {
  it('should render Page component', () => {
    const { container } = render(
      <UserProvider>
        <Router>
          <Page />
        </Router>
      </UserProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
