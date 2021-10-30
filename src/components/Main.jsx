import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "../css/Main.css";

//pratice
import UseState from "./pratice/UseState";
import UseCallbackTest from "./pratice/UseCallBack";
import UseMemo from "./pratice/UseMemo";
import UseReducer from "./pratice/UseReducer";
import TestComp from "./pratice/TestComp";
import UseCustomFetch from "./pratice/UseCustomFetch";
import UseRef from "./pratice/UseRef";

import SplitCodeTest from "./pratice/testFIles/SplitCodeTest";
//TalkProject
import TalkMain from "./talk/TalkMain";
import TalkTodayMask from "./talk/TalkTodayMask";
import TalkBoard from "./talk/TalkBoard";

const Main = ({ location }) => {
  const locationName = String(location.pathname);
  return locationName.indexOf("/talk/") === -1 ? (
    <div className="main">
      <Switch>
        <Route exact path="/" component={UseState} />
        <Route exact path="/UseCallbackTest" component={UseCallbackTest} />
        <Route exact path="/UseMemo" component={UseMemo} />
        <Route exact path="/UseReducer" component={UseReducer} />
        <Route exact path="/TestComp" component={TestComp} />
        <Route exact path="/UseCustomFetch" component={UseCustomFetch} />
        <Route exact path="/SplitCodeTest" component={SplitCodeTest} />
        <Route exact path="/UseRef" component={UseRef} />
      </Switch>
    </div>
  ) : (
    <div className="main">
      <Switch>
        <Route exact path="/talk/TalkMain" component={TalkMain} />
        <Route exact path="/talk/TalkTodayMask" component={TalkTodayMask} />
        <Route exact path="/talk/TalkBoard" component={TalkBoard} />
      </Switch>
    </div>
  );
};

export default withRouter(Main);
