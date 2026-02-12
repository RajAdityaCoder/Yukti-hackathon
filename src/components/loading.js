import React from "react";
import logo from "../assets/website/InShot_20260204_143344831.png";
import logo2 from "../assets/website/InShot_20260204_143344831.png";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-x-hidden">
      <div className="relative w-80 h-80 overflow-x-hidden">
        <img
          src={logo}
          alt="Loading"
          className="absolute w-full h-full object-contain animate-pulse"
        />
        <img
          src={logo2}
          alt="Loading"
          className="absolute w-full h-full object-contain animate-ping"
        />
      </div>
    </div>
  );
};

export default Loading;
