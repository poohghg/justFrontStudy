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
  margin-top: 1.5vh;
  font-size: 1rem;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
`;

styled.data``;

export const TalkTilte = React.memo(() => {
  return <TalkTitleDiv> 이번주 베스트 리뷰</TalkTitleDiv>;
});
