import { render } from '@testing-library/react'
import React from 'react'
import { UserProvider } from '../contexts/user.context'
import { Routes } from './Routes'

describe('<Routes />', () => {
  it('should render Routes component properly', () => {
    const component = render(
      <UserProvider>
        <Routes />
      </UserProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
