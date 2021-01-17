import styled from 'styled-components'
import { theme } from '../../theme'

export const TableWrapper = styled.div`
  table {
    border-collapse: collapse;
    white-space: nowrap;
    width: 100%;

    thead {
      color: ${theme.colors.secondary.LIGHT};
      text-align: left;

      th {
        font-size: 0.85rem;
      }
    }

    td,
    th {
      padding: 15px 20px;
    }

    tbody {
      tr {
        padding: 0;

        &:nth-child(odd) {
          background-color: #f2f5faaa;

          td:first-child {
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
          }

          td:last-child {
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
          }
        }
      }
    }
  }
`
