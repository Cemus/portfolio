import { useState, useEffect } from "react";

const useResize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const resize = () => {
      setTimeout(() => {
        setSize([window.innerWidth]);
      }, 1500);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return size;
};

export default useResize;
