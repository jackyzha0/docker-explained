import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Hello from './components/Hello'
import DadJoke from './containers/DadJoke'
import styled from 'styled-components'
import ThemeProvider from './theme/ThemeProvider'
import GlobalStyle from './theme/GlobalStyle'

const MainContent = styled.div`
  margin: 10vh 0;
`

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <MainContent className="lt-content-column">
        <Header />
        <main>
          {/*
              The Router tag allows us to conditionally render components
              depending on the URL Path. In this case, we'll render the `Hello`
              component at the root directory and the `Joke` component on `/joke`
            */}
          <Router>
            <Switch>
              <Route path="/joke">
                <DadJoke />
              </Route>
              <Route path="/">
                <Hello />
              </Route>
            </Switch>
          </Router>
        </main>
        <Footer />
      </MainContent>
    </ThemeProvider>
  )
}

export default App
