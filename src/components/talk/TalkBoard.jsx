import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import {
  BestTalkComp,
  TalkSearchComp,
  TalkComp,
  BottomBtn
} from "./talkComp/TalkCommonComp";

const Wrap = styled.div`
  position: relative;
  background-color: #f0f0f0;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  padding: 1rem;
`;

const data = [{ text: 1 }, { text: 2 }, { text: 3 }, { text: 4 }, { text: 5 }];
const initActiveValue = [
  { nm: "#수분", active: false },
  { nm: "#영양", active: false },
  { nm: "#탄력", active: false },
  { nm: "#미백", active: false },
  { nm: "#진정", active: false },
  { nm: "#ETC", active: false }
];

const TalkBoard = () => {
  const [activeValue, setactiveValue] = useState(initActiveValue);
  const [searchValue, setsearchValue] = useState("");

  const changeActive = useCallback((e) => {
    const parmaNm = e.target.dataset.nm;
    setactiveValue((prev) =>
      prev.map((value) =>
        value.nm === parmaNm ? { ...value, active: !value.active } : value
      )
    );
  }, []);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setsearchValue(value);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return (
    <Wrap>
      <div>맨위 공통 헤더</div>
      <BestTalkComp datas={data} />
      <TalkSearchComp
        activeValue={activeValue}
        changeActive={changeActive}
        searchValue={searchValue}
        onChange={onChange}
      />
      <TalkComp datas={initActiveValue} />
      <BottomBtn scrollToTop={scrollToTop} />
    </Wrap>
  );
};

export default TalkBoard;
