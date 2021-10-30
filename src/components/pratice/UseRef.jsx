import React, { useRef } from "react";

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

const ScrollBox = () => {
  const thisBox = useRef(null);

  const scrollToTop = () => {
    const { scrollHeight, clientHeight } = thisBox.current;
    thisBox.current.scrollTop = scrollHeight - clientHeight;
  };

  const scrollToBottom = () => {
    // const { scrollHeight, clientHeight } = thisBox.current;
    // console.log("thisBox.current", thisBox.current);
    thisBox.current.scrollTop = 0;
  };

  return (
    <>
      <div style={style} ref={thisBox}>
        <div style={innerStyle}></div>
      </div>
      <button style={{ color: "red" }} onClick={scrollToTop}>
        바텀으로
      </button>
      <button style={{ color: "red" }} onClick={scrollToBottom}>
        탑으로
      </button>
    </>
  );
};

const testCompTop = () => {
  return (
    <>
      <ScrollBox />
    </>
  );
};

export default testCompTop;
