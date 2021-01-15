import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { IButton } from './Button'

export const ButtonWrapper = styled.div<IButton>`
  padding: 0.5rem 0;
  width: 100%;

  a,
  button {
    background: ${theme.colors.secondary.LIGHT};
    border-radius: 5px;
    border: 1px solid ${theme.colors.secondary.MAIN};
    font-size: 1rem;
    padding: 0.7rem 1rem;
    position: relative;
    transition: background-color 200ms ease, border-color 200ms ease,
      color 200ms ease;
    width: 100%;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${theme.colors.secondary.CONTRAST};
    }
  }

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          a,
          button {
            border: none;
            background: ${theme.colors.success.LIGHT};
            color: #fff;

            &:hover {
              background-color: ${theme.colors.success.MAIN};
            }
          }
        `

      default:
        break
    }
  }}
`
