import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from '../../contexts/user.context'
import { Panel } from './Panel'

describe('<Panel />', () => {
  it('should render Panel component', () => {
    const { container } = render(
      <UserProvider>
        <Router>
          <Panel />
        </Router>
      </UserProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
