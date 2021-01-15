import styled from 'styled-components'

export const PanelWrapper = styled.div`
  padding: 80px 0 30px;

  @media (min-width: 768px) {
    padding: 80px 50px 80px 300px;
  }
`

export const AppContent = styled.div`
  background-color: #fff;
  border-radius: 25px;
  min-height: calc(100vh - 170px);
  padding: 30px 20px;
  position: relative;

  @media (min-width: 768px) {
    min-height: auto;
    padding: 50px;
  }

  h1.title {
    margin-top: 0;
  }
`
