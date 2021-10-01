import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

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

const LiComponet = React.memo(
  ({ pathComponet, cateNM, active, changeActive }) => {
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

const Aside = React.memo(() => {
  const curPath = location.pathname.split("/")[1];
  const [active, setActive] = useState(curPath === "" ? "UseState" : curPath);
  const changeActive = (nm) => {
    setActive((prev) => nm);
  };

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
