import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";

//component impot
import ScrollToTop from './components/common/ScrollToTop';
import Main from'./components/Main'
import Test from'./components/Test'
import './css/App.css';                            

function App() {
  return (
    <div className= "Main">
      <BrowserRouter>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/Test" component={Test}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
