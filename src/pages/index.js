import React from "react";
import { createGlobalStyle } from "styled-components";

import App from "../App";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
