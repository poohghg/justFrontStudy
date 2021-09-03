import React from "react";
import { Link } from "react-router-dom";
const Aside = ({ pathComponet }) => {
  console.log("aside");
  return (
    <div className="aside">
      <div className="asideWrap">
        <div className="asideTitle"> ASIDE TITLE </div>
        <div className="asideLinkWrap">
          <ul>
            <p className="asideUlTitle"> REACT</p>
            <li className="asideLiLink">
              {pathComponet.map((pathDatas, index) => (
                <ul key={pathDatas.path} className="asideIlContetn">
                  <Link className="asideLink" to={pathDatas.path}>
                    {pathDatas.componentDesc}
                  </Link>
                </ul>
              ))}
            </li>
            <p className="asideUlTitle"> REACT</p>
            <p className="asideUlTitle"> REACT</p>
            <p className="asideUlTitle"> REACT</p>

            {/* <p className="asideUlTitle"> REACT</p>
            <li className="asideLiLink">
              {pathComponet.map((pathDatas, index) => (
                <ul key={pathDatas.path} className="asideIlContetn">
                  <Link className="asideLink" to={pathDatas.path}>
                    {pathDatas.componentDesc}
                  </Link>
                </ul>
              ))}
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aside;
