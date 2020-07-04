import React from "react";
import TagManager from "react-gtm-module";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import bgimage from "./images/bg.jpg";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const tagManagerArgs = {
  gtmId: "GTM-PSX9BJV",
};

const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    background: #000 url(${bgimage}) no-repeat center center/cover;
    height: 100vh;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

const theme = {
  main: "mediumseagreen",
  bg: "black",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

TagManager.initialize(tagManagerArgs);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
