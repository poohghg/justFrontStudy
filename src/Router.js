import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";


//common Component
import Aside from "./components/Aside"

//component impot
import ScrollToTop from './components/common/ScrollToTop';
import Main from'./components/Main'
import Test from'./components/Test'

//pratice

import UseCallbackTest from "./components/pratice/UseCallBack"
import './css/App.css';                            

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Aside/>
          <ScrollToTop/>
          <div className= "main">
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/Test" component={Test}/>
              <Route exact path="/UseCallbackTest" component={UseCallbackTest}/>
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
