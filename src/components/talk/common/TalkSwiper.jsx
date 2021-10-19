import React, { useCallback, useEffect, useRef, useState } from "react";
import Swiper from "react-id-swiper";
// swiper 5버전에서 css파일 사용가능
import "swiper/css/swiper.css";
import "../../../css/talk/talk.css";

const defaultParams = {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // },
  spaceBetween: 0
};

const defaultStyle = {
  border: "1px solid black",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const TalkSwiper = React.memo(
  ({ datas, renderPagination, optionParams = {}, style = {} }) => {
    const options = { ...defaultParams, ...optionParams };
    const divStyle = { ...defaultStyle, ...style };
    console.log("options", options);
    console.log("divStyle", divStyle);
    console.log("renderPagination", renderPagination);
    return (
      <Swiper {...options}>
        {datas.map((data) => (
          <div
            key={data.id}
            renderPagination={renderPagination}
            style={divStyle}
          >
            {data.text}
          </div>
        ))}
      </Swiper>
    );
  }
);
export default TalkSwiper;
