import styled from 'styled-components'
import { theme } from '../../theme'

export const AppBarWrapper = styled.div`
  bottom: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  left: 0;
  padding: 0 5px;
  position: fixed;
  width: 100vw;

  @media (min-width: 768px) {
    flex-direction: column;
    max-width: 300px;
    padding: 0 30px;
    top: 80px;
  }
`

export const List = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(4, 25%);
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`

export const ListItem = styled.div`
  margin: 5px 0;
  position: relative;

  svg {
    height: 1.5rem;
    margin-bottom: 5px;
    transition: fill 200ms ease;
    width: 1.5rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }

  a {
    align-items: center;
    color: inherit;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    padding: 15px 5px;
    position: relative;
    text-decoration: none;
    transition: color 200ms ease;
    z-index: 1;

    @media (min-width: 768px) {
      flex-direction: row;
      font-size: 1rem;
      padding: 10px 20px;
    }

    > span {
      display: block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:after,
    &:before {
      border-radius: 5px;
      content: '';
      position: absolute;
      transition: all 200ms ease-in-out;
    }

    &:before {
      height: 100%;
      left: 0;
      top: 0;
      transform: scale(0.95);
      width: 100%;
      z-index: -1;
    }

    &:after {
      filter: blur(5px);
      height: 90%;
      left: 5%;
      opacity: 0;
      top: 20%;
      width: 90%;
      z-index: -2;
    }

    &.active,
    &:hover,
    &:focus,
    &:active {
      color: ${theme.colors.secondary.CONTRAST};
      outline: none;

      &:before {
        background-color: ${theme.colors.success.LIGHT};
        transform: scale(1);
      }

      &:after {
        background-color: ${theme.colors.success.LIGHT};
        opacity: 0.5;
      }
    }

    &:focus,
    &:active {
      opacity: 0.7;
    }
  }
`
