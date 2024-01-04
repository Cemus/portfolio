import { useState, useEffect } from "react";

const useResize = () => {
  const [screenWidth, setScreenWidth] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const resize = () => {
      setTimeout(() => {
        setScreenWidth([window.innerWidth]);
      }, 1500);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return screenWidth;
};

export default useResize;
