import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";


//common Component
import Aside from "./components/Aside"

//component impot
import ScrollToTop from './components/common/ScrollToTop';
import Main from'./components/Main'

//pratice
import UseState from'./components/pratice/UseState'
import UseCallbackTest from './components/pratice/UseCallBack'
import UseMemo from'./components/pratice/UseMemo'

import './css/App.css';

const pathComponet = [
  {path : "/", componentDesc : "Main"},
  {path : "/UseState", componentDesc : "UseState"},
  {path : "/UseCallbackTest", componentDesc : "UseCallbackTest"},
  {path : "/UseMemo", componentDesc : "UseMemo"},
]

function App() {
  return (
    <div className="App">
        <BrowserRouter> 
          <Aside pathComponet = {pathComponet}/>
          <ScrollToTop/>
          <div className= "main">
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/UseState" component={UseState}/>
              <Route exact path="/UseCallbackTest" component={UseCallbackTest}/>
              <Route exact path="/UseMemo" component={UseMemo}/>
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
