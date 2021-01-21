import { render } from '@testing-library/react'
import React from 'react'
import { Avatar } from './Avatar'

describe('<Avatar />', () => {
  it('should render an Avatar with image', () => {
    const { container } = render(<Avatar src="//placehold.it/200/200" />)
    expect(container).toMatchSnapshot()
  })

  it('should render an Avatar without image', () => {
    const { container } = render(<Avatar />)
    expect(container).toMatchSnapshot()
  })
})
