import { createGlobalStyle } from 'styled-components'
import { theme } from '.'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    background-color: ${theme.colors.secondary.CONTRAST};
    color: 	${theme.colors.secondary.DARK};
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  del {
    opacity: 0.6;
  }
`

export { GlobalStyle }
