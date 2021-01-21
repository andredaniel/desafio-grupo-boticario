import { render } from '@testing-library/react'
import React from 'react'
import { UserProvider } from '../../contexts/user.context'
import Page from './Logout'

describe('<Page />', () => {
  it('should render Page component', () => {
    const { container } = render(
      <UserProvider>
        <Page />
      </UserProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
