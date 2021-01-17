import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { TableWrapper } from './Table.styles'

interface Props {
  loading?: boolean
}

const createArray = (length: number) => {
  const arr = []

  for (let index = 0; index < length; index++) {
    arr.push(index)
  }

  return arr
}

const Table: React.FC<Props> = ({ children, loading }): JSX.Element => {
  const child: any = React.Children.toArray(children)[0]

  const rowTimes: number[] = createArray(
    Math.ceil((window.innerHeight - 160) / 80)
  )

  const colTimes: number[] = createArray(
    child.props.children.props.children.length
  )

  const TableLoader = (): JSX.Element => {
    return (
      <>
        <thead>
          <tr>
            {colTimes.map((colItem) => (
              <th key={`colItem_${colItem}`}>
                <Skeleton />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowTimes.map((rowItem) => (
            <tr key={`rowItem_${rowItem}`}>
              {colTimes.map((colItem) => (
                <td key={`colItem_${colItem}`}>
                  <Skeleton />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </>
    )
  }

  return (
    <TableWrapper>
      <table>{loading ? <TableLoader /> : children}</table>
    </TableWrapper>
  )
}

export { Table }
