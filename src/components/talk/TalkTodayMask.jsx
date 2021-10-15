import React, { useCallback, useEffect, useRef, useState } from "react";
import ValueSlider from "./common/valueSlider";
import { SlideWrap, TestSwiperDiv } from "../common/styleCmop";
import TalkSwiper from "./common/TalkSwiper";

const SlidervalueNm = React.memo(({ name }) => {
  return <div className="slider-valueNm">{name}</div>;
});

const SliderBar = React.memo(({ value, setValue, name }) => {
  return (
    <>
      <SlidervalueNm name={name} />
      <ValueSlider value={value} setValue={setValue} name={name} />
    </>
  );
});

const testDatas = [
  { id: 1, text: 33 },
  { id: 1, text: 44 },
  { id: 1, text: 55 }
];

const InnerSwiper = React.memo(() => {
  return (
    <>
      {/* {testDatas.map((datas) => (
        <TestSwiperDiv key={datas.id}>{datas.text}</TestSwiperDiv>
      ))} */}
      <div>1</div>
      <div>1</div>
    </>
  );
});

const styleComp = {
  backgroundColor: "#10447f",
  color: "#fff"
};

const TalkTodayMask = React.memo(() => {
  const [maskValue, setmaskValue] = useState({
    w: 0,
    a: 10,
    t: 20,
    e: 30,
    r: 40
  });
  // 컴포넌트내 변수를 사용하기위해 useRef를 사용 이변수는 state가 update할때 반응하지 않음.
  const resetMaskValue = useRef({});

  useEffect(() => {
    resetMaskValue.current = Object.assign(maskValue);
  }, []);

  const setValue = useCallback((name, value) => {
    console.log("name : ", name, "valie : ", value);
    setmaskValue((maskValues) => ({
      ...maskValues,
      [name]: value
    }));
  }, []);

  const resetValue = useCallback(() => {
    setmaskValue(resetMaskValue.current);
  }, []);

  const totalValue = Object.values(maskValue).reduce(
    (prev, curn) => prev + curn
  );

  return (
    <div className="talkWrap" style={styleComp}>
      <div className="talkInner">
        <div> 오늘의 추천 마스크팩</div>
        <div>
          <p>오늘은 습도가 높으며 UV지수가 낮습니다.</p>
          <p>뷰넥스님의 오늘 활동량이 낮은편이니</p>
          <p>영양,탄력을 보충해주세요</p>s
        </div>
        <div> 현재 총함량 : {totalValue}</div>
        <SliderBar value={maskValue.w} setValue={setValue} name={"w"} />
        <SliderBar value={maskValue.a} setValue={setValue} name={"a"} />
        <SliderBar value={maskValue.t} setValue={setValue} name={"t"} />
        <SliderBar value={maskValue.e} setValue={setValue} name={"e"} />
        <SliderBar value={maskValue.r} setValue={setValue} name={"r"} />
        <div className="maskValueInfo">
          <div className="maskValueInfo-message">
            핸들을 좌/우로 움직여 비율을 조절할 수 있습니다.
          </div>
          <button className="maskValueInfo-resetBtn" onClick={resetValue}>
            되돌리기
          </button>
        </div>
      </div>
      {/* <InnerSwiper /> */}
      <SlideWrap>
        <TalkSwiper datas={testDatas} />
      </SlideWrap>
    </div>
  );
});

export default TalkTodayMask;
