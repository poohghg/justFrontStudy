import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

const LiComponet = React.memo(
  ({ pathComponet, cateNM, active, changeActive }) => {
    console.log("render - LiComponet");
    return (
      <div>
        <p className="asideUlTitle"> {cateNM}</p>
        <li className="asideLi">
          {pathComponet.map((pathDatas) => (
            <ul
              key={pathDatas.path}
              className="asideIlContetn"
              onClick={() => changeActive(pathDatas.componentDesc)}
            >
              <Link
                className={
                  pathDatas.componentDesc === active
                    ? "asideLink asideActive"
                    : "asideLink"
                }
                to={pathDatas.path}
              >
                {pathDatas.componentDesc}
              </Link>
            </ul>
          ))}
        </li>
      </div>
    );
  }
);

const pathComponet = [
  { path: "/", componentDesc: "UseState" },
  { path: "/UseCallbackTest", componentDesc: "UseCallbackTest" },
  { path: "/UseMemo", componentDesc: "UseMemo" },
  { path: "/UseReducer", componentDesc: "UseReducer" },
  { path: "/TestComp", componentDesc: "TestComp" },
  { path: "/SplitCodeTest", componentDesc: "SplitCodeTest" },
  { path: "/UseCustomFetch", componentDesc: "UseCustomFetch" }
];

const talkComponet = [
  { path: "/talk/TalkMain", componentDesc: "TalkMain" },
  { path: "/talk/TalkTodayMask", componentDesc: "TalkTodayMask" }
];

const Aside = React.memo(() => {
  const [active, setActive] = useState("UseState");

  const changeActive = useCallback((nm) => {
    setActive((prev) => {
      console.log("prev", prev);
      return nm;
    });
  }, []);

  return (
    <>
      <div className="aside">
        <div className="asideWrap">
          <div className="asideTitle"> ASIDE TITLE </div>
          <div className="asideLinkWrap">
            <ul>
              <LiComponet
                pathComponet={pathComponet}
                cateNM={"React"}
                active={active}
                changeActive={changeActive}
              />
              <LiComponet
                pathComponet={talkComponet}
                cateNM={"Talk"}
                active={active}
                changeActive={changeActive}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});

export default withRouter(Aside);
