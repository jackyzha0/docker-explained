import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#fff",
    text: "#2A3C4A",
  },
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
