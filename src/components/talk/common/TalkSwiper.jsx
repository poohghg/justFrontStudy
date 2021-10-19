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
  border: "1px solid black",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const TalkSwiper = React.memo(
  ({ datas, onSlideChange, optionParams = {}, style = {} }) => {
    const options = { ...defaultParams, ...optionParams };
    const divStyle = { ...defaultStyle, ...style };
    return (
      <Swiper
        {...options}
        onSlideChange={onSlideChange}
        style={{ height: "250px" }}
      >
        {datas.map((data) => (
          <SwiperSlide key={data.id} style={divStyle}>
            {data.text}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
);
export default TalkSwiper;
