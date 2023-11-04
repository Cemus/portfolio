import { useState, useRef } from "react";
import cloud from "../assets/cloud.svg";

interface CloudsProps {
  basePosition: {
    x: number;
    y: number;
  };
}

export default function Clouds({ basePosition }: CloudsProps) {
  const [position, setPosition] = useState({
    x: basePosition.x,
    y: basePosition.y,
  });
  const [touchCount, setTouchCount] = useState(0);
  const [cloudOpacity, setCloudOpacity] = useState(0.5);
  const cloudRef = useRef<HTMLImageElement>(null);

  const handleCloudTouch = (e: React.MouseEvent<HTMLImageElement>) => {
    const imageTarget = e.currentTarget.getBoundingClientRect();
    const pushPower = 100;
    let offsetX = 0;
    let offsetY = 0;

    if (e.nativeEvent.x <= imageTarget.x) {
      offsetX = position.x + pushPower;
    } else {
      offsetX = position.x - pushPower;
    }
    if (e.nativeEvent.y <= imageTarget.y) {
      offsetY = position.y + pushPower;
    } else {
      offsetY = position.y - pushPower;
    }
    setTouchCount((prevTouchCount) => prevTouchCount + 1);
    setPosition({ x: offsetX, y: offsetY });
    if (touchCount >= 1) {
      setCloudOpacity(0);
    }
  };
  console.log(touchCount);
  return (
    <img
      ref={cloudRef}
      className="absolute ease-out duration-1000 "
      src={cloud}
      alt="Cloud"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: `${cloudOpacity}`,
      }}
      onMouseEnter={(e) => handleCloudTouch(e)}
    />
  );
}
