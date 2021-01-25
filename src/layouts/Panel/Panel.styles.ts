import styled from 'styled-components'
import { theme } from '../../theme'

export const PanelWrapper = styled.div`
  padding: 80px 0 30px;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 80px 50px 80px 300px;
  }
`

export const AppContent = styled.div<{ overflow?: string }>`
  background-color: #fff;
  border-radius: 25px;
  height: calc(100vh - 170px);
  max-height: calc((var(--vh, 1vh) * 100) - 170px);
  overflow-y: ${({ overflow }) => (overflow ? overflow : 'scroll')};
  padding: 30px 20px;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: auto;
    max-height: none;
    min-height: auto;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 50px;
  }

  h1.title {
    margin-top: 0;
  }
`
