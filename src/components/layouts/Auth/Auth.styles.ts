import styled from 'styled-components'
import { theme } from '../../../theme'

export const AuthWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.primary.DARK};
  background-image: linear-gradient(
    132deg,
    ${theme.colors.primary.MAIN} 0%,
    ${theme.colors.primary.DARK} 100%
  );
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 50px 20px;
  position: relative;
  
  @media (min-width: 768px) {
    padding: 50px;
  }

  &:after {
    background-image: url('/images/login-background-pattern.png');
    content: '';
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  hr {
    background-color: #ccc;
    border: none;
    height: 1px;
    margin: 1.5rem 0;
    width: 100%;
  }
`

export const AuthContent = styled.div`
  align-items: center;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 2;
  order: 2;

  .head {
    margin: 2rem 0;
    text-align: center;
  }

  svg {
    height: auto;
    max-width: 200px;
  }

  h1 {
    color: ${theme.colors.primary.LIGHT};
    font-size: 25px;
    font-weight: normal;
    margin: 0;
  }

  p {
    color: #666;
    margin: 5px 0 0;
  }
`

export const AuthCover = styled.div`
  background-image: url('/images/login-picture.png');
  background-position: 60% center;
  background-size: cover;
  height: 100%;
  width: 100%;
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 3fr;
  margin: 0 auto;
  max-width: 1100px;
  overflow: hidden;
  width: 100%;
  order: 1;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr;
  }
`
