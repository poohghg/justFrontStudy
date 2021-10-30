const margins = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem"
};

const paddings = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem"
};

const fonts = {
  size: {
    one: "1rem",
    sm: "1.4rem",
    base: "1.6rem",
    lg: "2rem",
    xl: "2.5rem",
    title: "6rem"
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700
  }
};

const colors = {
  black: "#212529",
  red: "#ff4d4d",
  yellow: "#ffff4d",
  blue: "#0099ff",
  skyBlue: "#00b4cf",
  lightGray: "#e8e8e8",
  gray: "#999999"
};

const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px"
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`
};

// 테마와 관련없이 공통으로 사용되는 변수들입니다
export const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
  colors
};
