import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    background: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.text};
  }
`
