import React from'react'
import {Link} from "react-router-dom";

import '../css/Main.css'

const Main = () =>{
    return (
        <>
            <div className="MainWrap">
                <div>메인페이지 테스트</div>
                <div>메엔페이지 리소스 </div>
                <div className="flexBox">
                    <Link to ="/test"> TEST LINK</Link>
                    <Link to ="/"> MAIN LINK</Link>
                </div>
            </div>
        </>
    )
}

 export default Main;