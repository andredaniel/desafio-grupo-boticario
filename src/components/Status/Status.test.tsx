import { render } from '@testing-library/react'
import React from 'react'
import { Status } from './Status'

describe('<Status />', () => {
  it('should render Status component with no props', () => {
    const { container } = render(<Status />)
    expect(container).toMatchSnapshot()
  })

  it('should render Status component with APPROVED status', () => {
    const { container } = render(<Status type="APPROVED" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Status component with DISAPPROVED status', () => {
    const { container } = render(<Status type="DISAPPROVED" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Status component with IN_VALIDATION status', () => {
    const { container } = render(<Status type="IN_VALIDATION" />)
    expect(container).toMatchSnapshot()
  })
})
