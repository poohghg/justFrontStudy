import React from "react";
import TalkHead from "./talkHead/TalkHead";
import TalkTypeBox from "./talkComp/TalkTypeBox";
const TalkMain = () => {
  return (
    <>
      <div className="talkWrap">
        <TalkHead />
        <TalkTypeBox />
      </div>
    </>
  );
};

export default TalkMain;
