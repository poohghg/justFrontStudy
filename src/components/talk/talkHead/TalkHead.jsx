import React from "react";
const TalkHead = React.memo(() => {
  return (
    <div className="talkHead">
      <div>
        <img src="/images/common_header_back.svg" alt="" />
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
});

export default TalkHead;
