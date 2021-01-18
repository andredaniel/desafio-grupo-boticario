import styled from 'styled-components'
import { theme } from '../../theme'

export const InputWrapper = styled.div`
  padding: 0.5rem 0;
  width: 100%;

  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    background: #fff;
    border-radius: 0.4rem;
    border: 1px solid #ddd;
    padding: 0.7rem 1rem;
    width: 100%;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary.MAIN};
    }
  }
`
