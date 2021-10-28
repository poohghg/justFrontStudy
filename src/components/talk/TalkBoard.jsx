import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { TalkTilte, LongScrollComp } from "./talkComp/TalkCommonComp";

const TalkBoardWrap = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  height: 100vh;
  padding: 1rem;
`;

const data = [{ text: 1 }, { text: 2 }, { text: 3 }, { text: 4 }, { text: 5 }];

const TalkBoard = () => {
  return (
    <TalkBoardWrap>
      <div>맨위 공통 헤더</div>
      <LongScrollComp datas={data} />
    </TalkBoardWrap>
  );
};

export default TalkBoard;
