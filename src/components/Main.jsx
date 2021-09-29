import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "../css/Main.css";
//pratice
import UseState from "./pratice/UseState";
import UseCallbackTest from "./pratice/UseCallBack";
import UseMemo from "./pratice/UseMemo";
import UseReducer from "./pratice/UseReducer";
import TestComp from "./pratice/TestComp";
import SplitCodeTest from "./pratice/testFIles/SplitCodeTest";
//TalkProject
import TalkMain from "./../components/talk/TalkMain";
import TalkTodayMask from "./../components/talk/TalkTodayMask";

const Main = ({ location }) => {
  const locationName = String(location.pathname);
  console.log("locationName", locationName);
  return locationName.indexOf("/talk/") === -1 ? (
    <div className="main">
      <Switch>
        <Route exact path="/" component={UseState} />
        <Route exact path="/UseCallbackTest" component={UseCallbackTest} />
        <Route exact path="/UseMemo" component={UseMemo} />
        <Route exact path="/UseReducer" component={UseReducer} />
        <Route exact path="/TestComp" component={TestComp} />
        <Route exact path="/SplitCodeTest" component={SplitCodeTest} />
      </Switch>
    </div>
  ) : (
    <div className="main">
      <Switch>
        <Route exact path="/talk/TalkMain" component={TalkMain} />
        <Route exact path="/talk/TalkTodayMask" component={TalkTodayMask} />
      </Switch>
    </div>
  );
};

export default withRouter(Main);
