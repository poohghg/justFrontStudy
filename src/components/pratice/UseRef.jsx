import React, { useImperativeHandle, useRef } from "react";
// ref 사용방법 관련 내용
// https://stackoverflow.com/questions/66568080/useref-to-control-a-component-that-is-inside-child-component

const style = {
  border: "1px solid black",
  height: "300px",
  width: "300px",
  overflow: "auto",
  position: "relative"
};

const innerStyle = {
  width: "100%",
  height: "650px",
  background: "red"
};

const ScrollBox = React.forwardRef((props, ref) => {
  const thisBox = useRef();
  // console.log(thisBox.current.scrollHeight, thisBox.current.clientHeight);
  // 부모 컴포넌트에서 하위컴포넌트의 ref값 제어

  useImperativeHandle(ref, () => ({
    reallyFocus: () => {
      thisBox.current.focus();
      console.log("Being focused!");
    },
    getValue: () => {
      console.log("thisBox.current.value", thisBox.current);
      return thisBox.current.value;
    },
    scrollToBottom: () => {
      console.log("scrollToBottom", thisBox.current.scrollHeight);
      console.log("scrollToBottom", thisBox.clientHeigh);

      const { scrollHeight, clientHeigh } = thisBox.current;
      console.log("scrollHeight - clientHeigh", scrollHeight - clientHeigh);
      thisBox.current.scrollTop = scrollHeight - clientHeigh;
    }
  }));
  return (
    <>
      <div style={style} ref={thisBox}>
        <div style={innerStyle}></div>
      </div>
    </>
  );
});

const testCompTop = () => {
  const testRef = useRef();
  return (
    <>
      <ScrollBox ref={testRef} />
      <button
        style={{ color: "red" }}
        onClick={() => testRef.current.getValue()}
      >
        getValue
      </button>
      <button
        style={{ color: "red" }}
        onClick={() => testRef.current.scrollToBottom()}
      >
        바텀으로
      </button>
      <button
        style={{ color: "red" }}
        // onClick={}
      >
        탑으로
      </button>
    </>
  );
};

export default testCompTop;
