import { render } from '@testing-library/react'
import React from 'react'
import { UserContext, UserProvider, useUser } from './user.context'

describe('User context', () => {
  test('UserContext', () => {
    expect(UserContext).toBeDefined()
  })

  it('should render UserProvider component as expected', () => {
    const { container } = render(<UserProvider />)
    expect(container).toMatchSnapshot()
  })

  test('useUser', () => {
    expect(useUser).toBeDefined()
  })
})
