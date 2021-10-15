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

const TalkSwiper = React.memo(({ innerComp, params = defaultParams }) => {
  console.log("innerComp", innerComp);
  return (
    <Swiper {...params}>
      {innerComp}
      <div>Slide #1</div>
      <div>Slide #2</div>
      <div>Slide #3</div>
      <div>Slide #4</div>
      <div>Slide #5</div>
    </Swiper>
  );
});
export default TalkSwiper;
