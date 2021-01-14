import styled from 'styled-components'
import { theme } from '../../../theme'

export const LoaderWrapper = styled.div`
  background-color: ${theme.colors.primary.MAIN};
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 9999;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &:after {
    animation: rotating 20s linear infinite;
    border-radius: 50%;
    border: 4px dotted white;
    content: '';
    height: 100px;
    left: calc(50% - 50px);
    position: absolute;
    top: calc(50% - 50px);
    width: 100px;
  }
`
