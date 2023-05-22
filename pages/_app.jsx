import { createGlobalStyle, ThemeProvider } from 'styled-components'


import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    height: fit-content;    
    overflow-x: none;    
    max-width: 100;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

`

function App ({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default App