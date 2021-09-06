import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

const PreUlComp = React.memo(({ path, desc }) => {
  return (
    <ul key={path} className="asideIlContetn">
      <Link className="asideLink" to={path}>
        {desc}
      </Link>
    </ul>
  );
});

const LiComponet = React.memo(({ pathComponet, cateNM }) => {
  return (
    <>
      <p className="asideUlTitle"> {cateNM}</p>
      <li className="asideLiLink">
        {pathComponet.map((pathDatas) => (
          <PreUlComp
            key={pathDatas.path}
            path={pathDatas.path}
            desc={pathDatas.componentDesc}
          />
        ))}
      </li>
    </>
  );
});

const Aside = ({ pathComponet, talkComponet }) => {
  return (
    <>
      <div className="aside">
        <div className="asideWrap">
          <div className="asideTitle"> ASIDE TITLE </div>
          <div className="asideLinkWrap">
            <ul>
              <LiComponet pathComponet={pathComponet} cateNM={"React"} />
              <LiComponet pathComponet={talkComponet} cateNM={"Talk"} />
            </ul>
          </div>
        </div>
      </div>
      {/* <Switch>
      <div className="main">
        <Route exact path="/" component={Main} />
        <Route exact path="/UseState" component={UseState} />
        <Route exact path="/UseCallbackTest" component={UseCallbackTest} />
        <Route exact path="/UseMemo" component={UseMemo} />
        <Route exact path="/UseReducer" component={UseReducer} />
        <Route exact path="/talk/TalkMain" component={TalkMain} />
      </div>
    </Switch> */}
    </>
  );
};

export default withRouter(Aside);
