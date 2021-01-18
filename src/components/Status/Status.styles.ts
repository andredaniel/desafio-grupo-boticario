import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { IStatus } from '../../types/status.interface'

export const StatusWrapper = styled.div<IStatus>`
  align-items: center;
  border-radius: 10px;
  display: inline-flex;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-transform: uppercase;

  svg {
    height: 1.25em;
    margin-right: 5px;
    width: 1.25em;
  }

  ${({ type }) => {
    switch (type) {
      case 'APPROVED':
        return css`
          background-color: ${theme.colors.success.CONTRAST};
          color: ${theme.colors.success.LIGHT};
        `

      case 'DISAPPROVED':
        return css`
          background-color: ${theme.colors.danger.CONTRAST};
          color: ${theme.colors.danger.LIGHT};
        `

      case 'IN_VALIDATION':
        return css`
          background-color: ${theme.colors.info.CONTRAST}77;
          color: ${theme.colors.info.LIGHT};
        `

      default:
        return css`
          background-color: ${theme.colors.secondary.CONTRAST};
          color: ${theme.colors.secondary.LIGHT};
        `
    }
  }}
`
