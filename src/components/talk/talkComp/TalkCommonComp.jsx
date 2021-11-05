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
  width: ${(props) => (props.width ? props.width : `100%`)};
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

const TalkDiv = styled(FlexBox)`
  /* height: 15rem; */
  border: 1px solid #fff;
  border-radius: 16px;
  background-color: #fff;
  padding: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  flex-direction: column;
  margin-bottom: 1.5rem;

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
      margin-right: 3vw;
      margin-bottom: 0;
    `};
`;

const MaskValueBtn = styled.span`
  ${({ theme, active }) => {
    return css`
      border: 1px solid ${theme.colors.gray};
      border-radius: 16px;
      font-size: 1rem;
      color: ${theme.colors.gray};
      padding: 0.3rem 0.8rem;
      outline: 0
      box-shadow: none;
        ${
          active &&
          css`
            border: 1px solid ${theme.colors.skyBlue};
            color: ${theme.colors.skyBlue};
            /* background-color: #fff; */
          `
        };
      :focus{
        outline: none !important;
      }
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
  background-image: url("./images/search.png");
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 97% center;
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
  font-size: 1.3rem;
  font-weight: bolder;
  margin-bottom: 0.5rem;
`;

const TalkBoardContent = styled.div`
  min-height: 3rem;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const TalkBoardImg = styled.image`
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  width: 15rem;
  height: 15rem;
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
            <TalkDiv key={index} split>
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
            </TalkDiv>
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

const LongScrollComp = React.memo(({ datas = [], PrintComp = null }) => {
  return (
    <LongScrollDiv>
      {datas.length !== 0 && datas.map((data, index) => <PrintComp />)}
    </LongScrollDiv>
  );
});
/**
 * datas = value 리스트
 * changeActive = active 활성화함수
 */

const MaskValue = React.memo(
  ({
    datas = [],
    changeActive = null,
    active = null,
    margin = null,
    width = null
  }) => {
    return (
      <FlexBetweenBox margin={margin} width={width}>
        {datas.length !== 0 &&
          datas.map((value) => (
            <MaskValueBtn
              key={value.nm}
              onClick={changeActive}
              active={value.active || active}
              data-nm={value.nm}
            >
              {value.nm}
            </MaskValueBtn>
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

const TestDiv = () => {
  return <TalkBoardImg />;
};

export const TalkComp = React.memo(({ datas = [] }) => {
  return (
    <div>
      {datas.length !== 0 &&
        datas.map((data, index) => (
          <TalkDiv key={index}>
            <FlexBetweenBox>
              <span>뷰넥스</span>
              <span>2021.10.21</span>
            </FlexBetweenBox>
            <TalkBoardTitle>수분 집중 촉촉한 마스크팩</TalkBoardTitle>
            <TalkBoardContent>
              ㄻㄴㅇㅇㅁㄴㅇ러ㅏㄴ웃러ㅑㅏㅈ둑러ㅏ노ㅜ거ㅑㅏㄷ주처ㅑㅏㄴ
            </TalkBoardContent>
            <MaskValue datas={datas} width={`100%`} active />
            <LongScrollComp datas={datas} PrintComp={TestDiv} />
            <div>
              <span>1</span>
              <span>2</span>
            </div>
          </TalkDiv>
        ))}
    </div>
  );
});
