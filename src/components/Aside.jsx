import React, { useCallback, useState } from "react";
import {Link} from "react-router-dom";
const Aside = () =>{
    return(
        <>
            <div className="aside">
                <div className="asideWrap">
                    <div className="flexBox">
                        <Link className="asideLink" to ="/"> MAIN LINK</Link>
                        <Link className="asideLink" to ="UseCallbackTest/"> UseCallbackTest</Link>
                        <Link className="asideLink" to ="/test"> TEST LINK</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aside;