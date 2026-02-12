import React from "react";
import logo from "../assets/website/InShot_20260204_143344831.png";
import logo2 from "../assets/website/InShot_20260204_143344831.png";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-x-hidden">
      <div className="relative w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 overflow-hidden">
        <img
          src={logo}
          alt="Loading"
          className="absolute inset-0 w-full h-full object-contain animate-pulse overflow-hidden"
        />
        <img
          src={logo2}
          alt="Loading"
          className="absolute inset-0 w-full h-full object-contain animate-ping overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Loading;
