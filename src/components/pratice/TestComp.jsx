import React from "react";
import PropTypes from "prop-types";
import { NM } from "./common/commonJS/common";

const PrTest = ({ name, children }) => {
  // props children값을 통해 태그사이의 값을 표현 할 수 있다.
  return (
    <>
      <div>{name}</div>
      <div>{children}</div>
    </>
  );
};

const TestComp = React.memo(({ name }) => {
  return <PrTest name={name}>3156</PrTest>;
});

TestComp.defaultProps = {
  name: NM
};
// propTypes 를 통해 기본적인 타입을 지정해 줄 수 있다.
TestComp.propTypes = {
  name: PropTypes.string.isRequired
};

export default TestComp;
