import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import "./css/talk.css";
//common Component
import Aside from "./components/Aside";

//component impot
import ScrollToTop from "./components/common/ScrollToTop";
import Main from "./components/Main";

const pathComponet = [
  { path: "/", componentDesc: "Main" },
  { path: "/UseState", componentDesc: "UseState" },
  { path: "/UseCallbackTest", componentDesc: "UseCallbackTest" },
  { path: "/UseMemo", componentDesc: "UseMemo" },
  { path: "/UseReducer", componentDesc: "UseReducer" }
];

const talkComponet = [{ path: "/talk/TalkMain", componentDesc: "TalkMain" }];

function App(props) {
  console.log("props : ", props);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Aside pathComponet={pathComponet} talkComponet={talkComponet} />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
