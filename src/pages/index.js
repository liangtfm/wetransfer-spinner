import React from "react";
import { createGlobalStyle } from "styled-components";

import App from "../App";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

// styles
const pageStyles = {
  backgroundColor: "lightgray",
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
function IndexPage() {
  return (
    <main style={pageStyles}>
      <GlobalStyle />
      <title>Home Page</title>
      <App />
    </main>
  );
}

export default IndexPage;
