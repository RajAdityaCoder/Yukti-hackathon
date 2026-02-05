import React from "react";
import logo from "../assets/InShot_20260204_142320853.png";
import prize from "../assets/InShot_20260204_145801391.png";

const Prizes = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black w-[100%] lg:text-base sm:text-sm gap-4">
      <div className="flex flex-col justify-center items-center gap-4 mb-32">
        <img src={logo} alt="logo" width={500} height={500} />
        <h1 className="font-bold text-2xl text-white">Prizes</h1>
        <hr className="w-1/2 border-t-2 border-white" />
        <p className="text-lg text-center text-white">
          Prizes will be distributed to the top 3 teams based on the judging
          criteria.
        </p>
        <div className="flex flex-col justify-between items-center gap-4">
          <img className="w-auto h-96" src={prize} alt="Prizes" />
          <div className="flex flex-row justify-between items-center w-11/12 gap-4">
            <div className="flex flex-col justify-between items-center gap-2">
              <p className="text-white text-2xl font-bold">First Place</p>
              <p className="text-white text-2xl font-bold">₹10,000</p>
            </div>
            <div className="flex flex-col justify-between items-center gap-2">
              <p className="text-white text-2xl font-bold">Second Place</p>
              <p className="text-white text-2xl font-bold">₹5,000</p>
            </div>
            <div className="flex flex-col justify-between items-center gap-2">
              <p className="text-white text-2xl font-bold">Third Place</p>
              <p className="text-white text-2xl font-bold">₹2,100</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center mt-8 mb-8">
          <p className="text-white text-lg">
            All other participants will receive a certificate of participation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
