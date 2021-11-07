import React, { useImperativeHandle, useRef } from "react";
// import sty

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
    },
    getValue: () => {
      return thisBox.current.value;
    },
    scrollToBottom: () => {
      const { scrollHeight, clientHeight } = thisBox.current;
      thisBox.current.scrollTop = scrollHeight - clientHeight;
    },
    scrollToTop: () => {
      thisBox.current.scrollTop = 0;
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
        onClick={() => testRef.current.scrollToTop()}
      >
        탑으로
      </button>
    </>
  );
};

export default testCompTop;
