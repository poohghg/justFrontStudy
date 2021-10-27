import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { TalkTilte } from "./talkComp/TalkCommonComp";
import TalkSwiper from "./common/TalkSwiper";

const TalkBoardWrap = styled.div`
  width: 100%;
  background-color: #f0f0f0;
`;

const SwiperWrap = styled.div`
  position: relative;
  width: 75%;
  margin: 1rem auto;
  height: auto;
`;

const swiperStyled = {
  border: "1px solid #fff",
  borderRadius: "16px",
  height: "200px",
  backgroundColor: "#fff"
};

const optionParams = {
  spaceBetween: 30
};

const data = [{ text: 1 }, { text: 2 }, { text: 3 }, { text: 4 }, { text: 5 }];

const TalkBoard = () => {
  return (
    <TalkBoardWrap>
      <div>맨위 공통 헤더</div>
      <TalkTilte />
      <SwiperWrap>
        <TalkSwiper
          datas={data}
          style={swiperStyled}
          optionParams={optionParams}
        />
      </SwiperWrap>
    </TalkBoardWrap>
  );
};

export default TalkBoard;
