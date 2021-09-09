import React, { useCallback, useState } from "react";
import ValueSlider from "./common/valueSlider";

const SliderBar = React.memo(({ value, setValue, name }) => {
  // const = {
  //   text
  // }

  return (
    <>
      <div>{name}</div>
      <ValueSlider value={value} setValue={setValue} name={name} />
    </>
  );
});

const TalkTodayMask = React.memo(() => {
  const [maskValue, setmaskValue] = useState({
    w: 0,
    a: 0,
    t: 0,
    e: 0,
    r: 0
  });

  const setValue = useCallback((name, value) => {
    console.log("value", value);
    console.log("name", name);
    setmaskValue((maskValues) => ({
      ...maskValues,
      [name]: value
    }));
  }, []);

  const styleComp = {
    backgroundColor: "#10447f",
    color: "#fff"
  };
  return (
    <div className="talkWrap" style={styleComp}>
      <div> 오늘의 추천 마스크팩</div>
      <div>
        <p>오늘은 습도가 높으며 UV지수가 낮습니다.</p>
        <p>뷰넥스님의 오늘 활동량이 낮은편이니</p>
        <p>영양,탄력을 보충해주세요</p>
      </div>
      <SliderBar value={maskValue.w} setValue={setValue} name={"w"} />
      <SliderBar value={maskValue.a} setValue={setValue} name={"a"} />
      <SliderBar value={maskValue.t} setValue={setValue} name={"t"} />
    </div>
  );
});

export default TalkTodayMask;
