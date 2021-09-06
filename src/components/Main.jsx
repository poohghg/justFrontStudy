import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import "../css/Main.css";

//pratice
import UseState from "./../components/pratice/UseState";
import UseCallbackTest from "./../components/pratice/UseCallBack";
import UseMemo from "./../components/pratice/UseMemo";
import UseReducer from "./../components/pratice/UseReducer";
//TalkProject
import TalkMain from "./../components/talk/TalkMain";

const Main = ({ location }) => {
  const locationName = String(location.pathname);
  return locationName.indexOf("/talk/") === -1 ? (
    <Switch>
      <div className="main">
        <Route exact path="/" component={UseState} />
        <Route exact path="/UseCallbackTest" component={UseCallbackTest} />
        <Route exact path="/UseMemo" component={UseMemo} />
        <Route exact path="/UseReducer" component={UseReducer} />
      </div>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/talk/TalkMain" component={TalkMain} />
    </Switch>
  );
};

export default withRouter(Main);
