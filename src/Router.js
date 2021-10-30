import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { defalutTheme } from "../src/css/theme";
import { ThemeProvider } from "styled-components";
import "./css/App.css";
import "./css/talk.css";
//common Component
import Aside from "./components/Aside";
//component impot
import ScrollToTop from "./components/common/ScrollToTop";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defalutTheme}>
        <BrowserRouter>
          <ScrollToTop />
          <Aside />
          <Main />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
