import styled from 'styled-components'
import { Card } from '../../components'
import { theme } from '../../theme'

export const AuthWrapper = styled.div`
  align-items: center;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 50px 20px;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    min-height: 100vh;
    padding: 50px;
  }

  svg {
    height: auto;
    margin: auto 0 50px 0;
    max-width: 200px;
    order: 1;
    position: relative;
    z-index: 3;

    @media (min-width: ${theme.breakpoints.md}) {
      margin: 0;
      max-width: 300px;
    }
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
    background-color: ${theme.colors.secondary.CONTRAST};
    border: none;
    height: 1px;
    margin: 1rem 0;
    width: 100%;
  }
`

export const AuthContent = styled.div`
  align-items: center;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
  padding: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    order: 1;
  }

  .head {
    margin: 0.5rem 0 1.5rem;
    text-align: center;
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

  form {
    width: 100%;
  }

  a,
  button {
    width: 100%;
  }
`

export const AuthCover = styled.div`
  background-image: url('/images/pexels-brazilian-smile.jpeg');
  background-position: center;
  background-size: cover;
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`

export const StyledCard = styled(Card)`
  display: grid;
  max-width: 500px;
  order: 2;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 2;

  @media (min-width: ${theme.breakpoints.md}) {
    order: 1;
  }
`
