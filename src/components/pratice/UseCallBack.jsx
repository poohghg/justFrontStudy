import React, { useCallback,useState } from "react";
import '../../css/Main.css'


const UseCallbackTest = () =>{

    const [state,setState] = useState(false);
    const [stateTest,setStateTest] = useState(false);
    
    const onChiledClick = useCallback(() =>{
        console.log("_onChiledClick")
    // 최초 컴포넌트 바운드시에만 함수 바인딩
    },[])

    /**
     * 이렇게 쓰면 props의 참조타입의 변화로 state가 변경될때마다 랜더
     */
    // const onChiledClick = () =>{
    //     console.log("_onChiledClick")
    // // 최도 컴포넌트 바운드시에만 함수 바인딩
    // }
    
    function useSetState() {
        console.log("useSetState")
        setState(state => !state)
    }

    function useTestState() {
        console.log("useTestState")
        setStateTest(stateTest => !stateTest)
    }

    return(
        <>
            <ChiledComp callBack = {onChiledClick} />
            <ChiledComp callBack = {onChiledClick} />
            <button className="mainChiled" onClick = {useSetState}> setState</button>
            <button className="mainChiled" onClick = {useTestState}> useTestState</button>
            {state ? <div className="stateTureRender"> state - ture (rneder)</div> : null}
            {stateTest ? <div className="stateTureRender"> stateTest - ture (rneder)</div> : null}
        </>
    )
}

const ChiledComp = React.memo(({callBack}) =>{
    console.log("ChiledComp")
    return(
        <button className="mainChiled" onClick={callBack}> 
            click me
        </button>
    )
});

export default UseCallbackTest;