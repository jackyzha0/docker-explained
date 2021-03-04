import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    background: '#fff',
    text: '#2A3C4A',
  },
  typography: {
    h1: {
      weight: 700,
      size: '2em',
    },
    h2: {
      weight: 600,
      size: '1.4em',
      opacity: 0.9,
    },
    h3: {
      weight: 600,
      size: '1em',
      opacity: 0.7,
    },
  },
}

export default ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
