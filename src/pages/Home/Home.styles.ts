import styled from 'styled-components'
import { theme } from '../../theme'

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const HomeWrapper = styled.div`
  @media (min-width: 768px) {
    padding-bottom: 250px;
  }
`

export const IllustrationWrapper = styled.div`
  bottom: -12px;
  height: auto;
  left: 50%;
  max-width: 250px;
  pointer-events: none;
  position: absolute;
  transform: translateX(-50%);
  width: 50%;

  @media (min-width: 768px) {
    bottom: -11px;
  }

  svg {
    height: auto;
    width: 100%;
  }
`

export const StyledCard = styled.div`
  color: ${theme.colors.info.CONTRAST};
  line-height: 1.5em;
  margin: 0.5rem 0;
  padding: 1rem 2rem;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
    padding: 2rem;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:after,
  &:before {
    border-radius: 10px;
    content: '';
    position: absolute;
  }

  &:before {
    background-color: ${theme.colors.info.MAIN};
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  &:after {
    background-color: ${theme.colors.info.LIGHT};
    filter: blur(5px);
    height: 90%;
    left: 5%;
    opacity: 0.4;
    top: 20%;
    width: 90%;
    z-index: -2;
  }

  h2 {
    color: ${theme.colors.secondary.CONTRAST};
    font-weight: 400;
    margin: 0;
  }

  p {
    margin: 0;
  }
`
