import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hello from "./components/Hello";
import styled from "styled-components";
import ThemeProvider from "./theme/ThemeProvider";
import GlobalStyle from "./theme/GlobalStyle";

const MainContent = styled.div`
  margin: 10vh 0;
`;

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <MainContent className="lt-content-column">
        <Header />
        <main>
          <Hello />
        </main>
        <Footer />
      </MainContent>
    </ThemeProvider>
  );
};

export default App;
