import React, {useEffect } from "react";

import '../css/Main.css'

const Main = () =>{

    useEffect(()=>{
        console.log("useEffect")
    },[])
    
    return (
        <>
            <div className="MainWrap">
                <div>메인페이지 테스트</div>
                <div>메엔페이지 리소스 </div>
            </div>
        </>
    )
}

 export default Main;