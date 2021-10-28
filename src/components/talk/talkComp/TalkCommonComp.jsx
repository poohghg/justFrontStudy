import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBox = styled.div`
  ${flex};
`;

const TalkTitleDiv = styled.div`
  margin: 2.5vh 0;
  font-size: 1rem;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
`;

const LongScrollDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

const BestTalkDiv = styled(FlexBox)`
  height: 20vh;
  border: 1px solid #fff;
  border-radius: 16px;
  flex: 0 0 90%;
  background-color: #fff;
  margin-right: 3vw;
`;

styled.data``;

export const TalkTilte = React.memo(({ printStr }) => {
  return <TalkTitleDiv> {printStr} </TalkTitleDiv>;
});

export const LongScrollComp = React.memo(({ datas }) => {
  return (
    <>
      <TalkTilte printStr="이번주 베스트 리뷰" />
      <LongScrollDiv>
        {datas.length !== 0 &&
          datas.map((data) => {
            return <BestTalkDiv> {Object.values(data)[0]}</BestTalkDiv>;
          })}
      </LongScrollDiv>
    </>
  );
});
