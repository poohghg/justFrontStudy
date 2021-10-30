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
  margin: ${(props) => (props.margin ? `2rem 0` : `1rem 0`)};
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
  height: 15rem;
  border: 1px solid #fff;
  border-radius: 16px;
  background-color: #fff;
  margin-right: 3vw;
  padding: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  flex-direction: column;
  ${(props) =>
    props.split &&
    css`
      > div:nth-child(1) {
        width: 30%;
      }
      > div:nth-child(2) {
        width: 70%;
        height: 100%;
      }
      flex: 0 0 85%;
      flex-direction: row;
    `};
`;

const MaskValueSpan = styled.span`
  ${({ theme, active }) => {
    return css`
      border: 1px solid ${theme.colors.gray};
      border-radius: 16px;
      font-size: 1rem;
      color: ${theme.colors.gray};
      padding: 0.3rem 0.8rem;
      cursor: pointer;
      ${active &&
      css`
        border-color: ${theme.colors.skyBlue};
        color: ${theme.colors.skyBlue};
        background-color: #fff;
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

const TalkBoardTitle = styled.div`
  font-size: 1rem;
  font-weight: bolder;
  margin-bottom: 0.5rem;
`;

const TalkBoardContent = styled.div`
  min-height: 5rem;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
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
            <BestTalkDiv key={index} split>
              <div>1</div>
              <div style={{ textAlign: "left" }}>
                <FlexBetweenBox>
                  <div>
                    <span>뷰넥스</span>
                    <span>BEST</span>
                  </div>
                  <div>2021.10.21</div>
                </FlexBetweenBox>
                <TalkBoardTitle>수분 집중 촉촉한 마스크팩</TalkBoardTitle>
                <TalkBoardContent>
                  ㄻㄴㅇㅇㅁㄴㅇ러ㅏㄴ웃러ㅑㅏㅈ둑러ㅏ노ㅜ거ㅑㅏㄷ주처ㅑㅏㄴ
                </TalkBoardContent>
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
        <MaskValue datas={activeValue} changeActive={changeActive} margin />
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
      />
    </FlexBox>
  );
});

const MaskValue = React.memo(
  ({ datas = [], changeActive = null, active = null, margin = null }) => {
    return (
      <FlexBetweenBox margin={margin}>
        {datas.length !== 0 &&
          datas.map((value) => (
            <MaskValueSpan
              key={value.nm}
              onClick={changeActive}
              active={value.active || active}
              data-nm={value.nm}
            >
              {value.nm}
            </MaskValueSpan>
          ))}
      </FlexBetweenBox>
    );
  }
);

export const BottomBtn = React.memo(({ scrollToTop }) => {
  return (
    <BottomBox>
      <img onClick={scrollToTop} src="/images/config.png" alt="" />
      <img src="/images/config.png" alt="" />
    </BottomBox>
  );
});

export const TalkComp = React.memo(({ datas }) => {
  return (
    <div>
      <BestTalkDiv>
        <FlexBetweenBox>
          <div>
            <span>뷰넥스</span>
            <span>BEST</span>
          </div>
          <div>2021.10.21</div>
        </FlexBetweenBox>
        <TalkBoardTitle>수분 집중 촉촉한 마스크팩</TalkBoardTitle>
        <TalkBoardContent>
          ㄻㄴㅇㅇㅁㄴㅇ러ㅏㄴ웃러ㅑㅏㅈ둑러ㅏ노ㅜ거ㅑㅏㄷ주처ㅑㅏㄴ
        </TalkBoardContent>
        <MaskValue />
        <div>
          <span>1</span>
          <span>2</span>
        </div>
      </BestTalkDiv>
    </div>
  );
});
