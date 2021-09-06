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
    <div>
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
    </div>
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
    </>
  );
};

export default withRouter(Aside);
