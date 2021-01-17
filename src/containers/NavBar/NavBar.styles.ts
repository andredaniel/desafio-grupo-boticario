import styled, { css } from 'styled-components'
import { theme } from '../../theme'

export const NavBarWrapper = styled.div<{ y: number }>`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  transition: background-color 300ms ease, box-shadow 300ms ease;
  width: 100%;
  z-index: 99;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  ${({ y }) => {
    if (y > 80) {
      return css`
        background-color: #fff;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.05),
          0px 1px 3px 0px rgba(0, 0, 0, 0.07),
          0px 1px 5px 0px rgba(0, 0, 0, 0.1);
      `
    }
  }}

  .brand-wrapper {
    svg {
      height: auto;
      margin-right: 10px;
      width: 150px;
    }
  }

  .user-info {
    align-items: center;
    color: ${theme.colors.secondary.DARK};
    display: flex;

    img {
      margin-right: 10px;
    }
  }
`
