import styled from 'styled-components'
import { theme } from '../../theme'

export const NavBarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

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
