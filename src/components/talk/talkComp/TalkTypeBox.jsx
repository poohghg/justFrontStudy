import React from "react";
import ValueBar from "../common/ValueBar";

const SkinInfoContetn = React.memo(({ valueNm, value }) => {
  return (
    <div className="skininfo-box">
      <div className="skininfoNm"> {valueNm} </div>
      <div className="skininfoGrape">
        <ValueBar value={value} />
      </div>
    </div>
  );
});

const TalkTypeBox = React.memo(() => {
  return (
    <section className="talkType">
      <div className="type-wrap">
        <div className="tpye-info">
          <div className="tpye-title"> 뷰넥스님의 피부타입</div>
          <div>
            <img src="/images/common_header_back.svg" alt="" />
          </div>
        </div>
        <div className="skininfo">
          <SkinInfoContetn valueNm={"유수분"} value={10} />
          <SkinInfoContetn valueNm={"모공"} value={20} />
          <SkinInfoContetn valueNm={"민감성"} value={30} />
          <SkinInfoContetn valueNm={"트러블"} value={40} />
          <SkinInfoContetn valueNm={"주름"} value={50} />
          <SkinInfoContetn valueNm={"탄력"} value={60} />
        </div>
      </div>
    </section>
  );
});

export default TalkTypeBox;
