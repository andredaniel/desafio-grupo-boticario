import styled from 'styled-components'
import { theme } from '../../theme'

export const FormikInputWrapper = styled.div`
  .is-invalid {
    border-color: ${theme.colors.danger.LIGHT};
    box-shadow: 0 0 4px 0 ${theme.colors.danger.LIGHT};
    outline: none;
    
    &:focus {
      border-color: ${theme.colors.danger.LIGHT};
      box-shadow: 0 0 5px 2px ${theme.colors.danger.LIGHT};
    }
  }

  .error {
    color: ${theme.colors.danger.LIGHT};
    font-size: 0.8em;
    transform: translateY(-40%);
  }
`
