import React from 'react'
import { TableWrapper } from './Table.styles'

const Table: React.FC = ({ children }): JSX.Element => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}

export { Table }
