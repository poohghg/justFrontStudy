import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const MyResponsiveBar = React.memo(({ value }) => {
  return (
    <Slider
      min={0}
      max={100}
      value={value}
      marks={{}}
      trackStyle={{
        height: "1.3rem",
        borderRadius: "16px",
        width: "100%",
        border: "1px solid #fff",
        backgroundColor: "#e9e9e9"
      }}
      railStyle={{
        width: "100%",
        height: "1.3rem",
        borderRadius: "16px",
        backgroundColor: "#fff",
        border: "1px solid #e9e9e9"
      }}
      handleStyle={{
        display: "none"
      }}
      style={{
        borderRadius: "16px",
        height: "1.3rem"
      }}
    />
  );
});

export default MyResponsiveBar;
