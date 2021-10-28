import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexBetween = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FlexBox = styled.div`
  ${flex};
`;

const FlexBetweenBox = styled.div`
  ${flexBetween};
  flex-wrap: wrap;
  margin: 2.5vh 0;
`;
const TalkTitleDiv = styled.div`
  margin: 2.5vh 0;
  font-size: 1.2rem;
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
  background-color: #fff;
  margin-right: 3vw;
  padding: 1rem;
  display: flex;
  flex: 0 0 85%;
  justify-content: flex-start;
  align-items: flex-start;

  > div:nth-child(1) {
    width: 30%;
  }
  > div:nth-child(2) {
    width: 70%;
    height: 100%;
  }
`;

const MaskValueSpan = styled.span`
  ${({ theme, active }) => {
    return css`
      border: 1px solid ${theme.colors.gray};
      border-radius: 16px;
      font-size: 1rem;
      color: ${theme.colors.gray};
      padding: 0.3rem 0.8rem;
      ${active &&
      css`
        background-color: ${theme.colors.skyBlue};
        color: ${theme.colors.black};
      `}
    `;
  }}
`;

const CommonSearchInput = styled.input`
  width: 100%;
  height: 3vh;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 16px;
  margin: 0 1rem;
  padding: 2rem;
  padding-right: 40px;
  background-image: url("/images/search.png");
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 97% center;
  box-sizing: border-box;
`;

const BottomBox = styled.div`
  ${flex};
  position: fixed;
  bottom: 5%;
  right: 3%;
  z-index: 15;
  flex-direction: column;
`;

export const TalkTilte = React.memo(({ printStr }) => {
  return <TalkTitleDiv> {printStr} </TalkTitleDiv>;
});

export const BestTalkComp = React.memo(({ datas }) => {
  return (
    <>
      <TalkTilte printStr="이번주 베스트 리뷰" />
      <LongScrollDiv>
        {datas.length !== 0 &&
          datas.map((data, index) => (
            <BestTalkDiv key={index}>
              <div>1</div>
              <div style={{ textAlign: "left" }}>
                <FlexBetweenBox>
                  <div>
                    <span>뷰넥스</span>
                    <span>BEST</span>
                  </div>
                  <div>2021.10.21</div>
                </FlexBetweenBox>
                <div>수분 집중 촉촉한 마스크팩</div>
                <div>
                  ㄻㄴㅇㅇㅁㄴㅇ러ㅏㄴ웃러ㅑㅏㅈ둑러ㅏ노ㅜ거ㅑㅏㄷ주처ㅑㅏㄴ
                </div>
                <div>
                  <span>1</span>
                  <span>2</span>
                </div>
              </div>
            </BestTalkDiv>
          ))}
      </LongScrollDiv>
    </>
  );
});

export const TalkSearchComp = React.memo(
  ({ activeValue, changeActive, searchValue, onChange }) => {
    return (
      <>
        <TalkTitleDiv>
          <div>마스크팩 리뷰</div>
          <div>이미지</div>
        </TalkTitleDiv>
        <SearchBox searchValue={searchValue} onChange={onChange} />
        <MaskValue activeValue={activeValue} changeActive={changeActive} />
      </>
    );
  }
);

const SearchBox = React.memo(({ searchValue, onChange }) => {
  return (
    <FlexBox>
      <CommonSearchInput
        name="keyword"
        onChange={onChange}
        value={searchValue}
        maxlength="10"
      />
    </FlexBox>
  );
});

const MaskValue = React.memo(({ activeValue, changeActive }) => {
  return (
    <FlexBetweenBox>
      {activeValue.map((value) => (
        <MaskValueSpan
          key={value.nm}
          onClick={changeActive}
          active={value.active}
          data-nm={value.nm}
        >
          {value.nm}
        </MaskValueSpan>
      ))}
    </FlexBetweenBox>
  );
});

export const BottomBtn = React.memo(({ scrollToTop }) => {
  return (
    <BottomBox>
      <img onClick={scrollToTop} src="/images/config.png" alt="" />
      <img src="/images/config.png" alt="" />
    </BottomBox>
  );
});
