import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
// swiper 5버전에서 css파일 사용가능
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "../../../css/talk/talk.css";

SwiperCore.use([Navigation, Pagination]);
const defaultParams = {
  pagination: { clickable: true },
  spaceBetween: 0
  // onSlideChange: (e) => console.log("slide change", e.activeIndex) // 함수를 넘기세요
};

const defaultStyle = {
  // border: "1px solid black",
  // borderRadius: "16px",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // height: "50%",
  // width: "75%"
};

const TalkSwiper = React.memo(
  ({
    datas = [],
    onSlideChange = null,
    optionParams = {},
    style = {},
    subSwiperDiv = null
  }) => {
    const options = { ...defaultParams, ...optionParams };
    const divStyle = { ...defaultStyle, ...style };
    console.log("divStyle", divStyle);

    return (
      <Swiper
        {...options}
        onSlideChange={onSlideChange}
        style={{ height: "250px" }}
      >
        {datas.map((data, index) => (
          <>
            <SwiperSlide key={index} style={divStyle}>
              <div></div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    );
  }
);
export default TalkSwiper;
