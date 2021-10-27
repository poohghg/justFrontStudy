import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

export const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBox = styled.div`
  ${flex};
`;

export const TalkTitleDiv = styled.div`
  font-size: 1rem;
  font-weight: bolder;
`;

export const SlideWrap = styled.div`
  position: relative;
  width: 50%;
  margin: 1rem auto;
  height: auto;
`;

export const TestSwiperDiv = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid skyblue;
  border-radius: 16px;
`;
