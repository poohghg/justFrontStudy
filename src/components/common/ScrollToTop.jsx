import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // 페이지 이동시 페이지의 scrool을 0으로 이동
  const pathName = useLocation().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return null;
};

export default ScrollToTop;
