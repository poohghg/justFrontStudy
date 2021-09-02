import React from "react";
const TalkMaskValueNm = React.memo(() => {
  function curActiveNm(e) {
    console.log("e", e.target);
    const { id, className } = e.target;
    if (!String(className).includes("active")) {
      document.getElementById(id).classList.add("active");
    } else {
      document.getElementById(id).classList.remove("active");
    }
  }
  return (
    <div className="talkMaskValueNmWrap">
      <span className="talkMaskValueNm" id="talkwater" onClick={curActiveNm}>
        #수분
      </span>
      <span className="talkMaskValueNm" id="talkNut" onClick={curActiveNm}>
        #영양
      </span>
      <span className="talkMaskValueNm" id="talkClt" onClick={curActiveNm}>
        #탄력
      </span>
      <span className="talkMaskValueNm" id="talkWat" onClick={curActiveNm}>
        #미백
      </span>
      <span className="talkMaskValueNm" id="talkCla" onClick={curActiveNm}>
        #진정
      </span>
      <span className="talkMaskValueNm" id="talkEtc" onClick={curActiveNm}>
        #ETC
      </span>
    </div>
  );
});
export default TalkMaskValueNm;
