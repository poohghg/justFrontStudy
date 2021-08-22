import React, { useCallback, useState } from "react";
import {Link} from "react-router-dom";
const Aside = ({pathComponet}) =>{
    console.log("aside")
    return(
        <>
            <div className="aside">
                <div className="asideWrap">
                    <div className="flexBox">
                        {
                            pathComponet.map((pathDatas,index)=>(
                                <Link key={index} className="asideLink" to={pathDatas.path}> {pathDatas.componentDesc}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aside;