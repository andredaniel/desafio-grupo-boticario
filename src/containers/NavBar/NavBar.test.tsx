import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { UserProvider } from '../../contexts/user.context'
import { NavBar } from './NavBar'

describe('<NavBar />', () => {
  it('should render NavBar component properly', () => {
    const { container } = render(
      <UserProvider>
        <NavBar />
      </UserProvider>
    )
    expect(container).toMatchInlineSnapshot()
  })

  it('should change NavBar background when window scrolls', () => {
    const { container } = render(
      <UserProvider>
        <NavBar />
      </UserProvider>
    )
    fireEvent.scroll(container, { target: { scrollY: 200 } })

    expect(container).toMatchInlineSnapshot()
  })
})
