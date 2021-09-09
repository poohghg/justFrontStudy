import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ValueSlider = React.memo(({ value, setValue, name }) => {
  return (
    <Slider
      min={0}
      max={100}
      value={value}
      trackStyle={{
        backgroundColor: "#e9e9e9"
      }}
      railStyle={{
        width: "100%",
        backgroundColor: "gray"
      }}
      handleStyle={{
        height: "1.5rem",
        width: "1.5rem",
        color: "#fff",
        border: "none"
        // opacity:
      }}
      style={{
        width: "100%"
      }}
      onChange={(value) => setValue(name, value)}
    />
  );
});

export default ValueSlider;
