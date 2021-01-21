import { render } from '@testing-library/react'
import React from 'react'
import { Table } from './Table'

describe('<Table />', () => {
  it('should render the Table component', () => {
    const { container } = render(
      <Table>
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body</td>
          </tr>
        </tbody>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })

  it('should render the Table component in load state', () => {
    const { container } = render(
      <Table loading={true}>
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body</td>
          </tr>
        </tbody>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })
})
