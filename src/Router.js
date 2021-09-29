import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <BrowserRouter>
        <ScrollToTop />
        <Aside />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
