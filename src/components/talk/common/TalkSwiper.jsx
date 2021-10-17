import React, { useCallback, useEffect, useRef, useState } from "react";
import Swiper from "react-id-swiper";
// swiper 5버전에서 css파일 사용가능
import "swiper/css/swiper.css";
import "../../../css/talk/talk.css";

const defaultParams = {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // },
  spaceBetween: 30
};

const TalkSwiper = React.memo(({ datas, params = defaultParams }) => {
  return (
    <Swiper {...params}>
      {datas.map((data) => (
        <div key={data.id}>{data.text}</div>
      ))}
    </Swiper>
  );
});
export default TalkSwiper;
