import React from "react";
import logo from "../assets/website/InShot_20260204_142320853.png";
import prize from "../assets/website/InShot_20260204_145801391.png";

const Prizes = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black w-full gap-4 px-4">
      <div className="flex flex-col items-center gap-6 mb-32 w-full">
        <img
          src={logo}
          alt="logo"
          className="w-64 lg:w-[500px] h-auto drop-shadow-[0_0_30px_rgba(140,82,255,0.4)]"
        />

        <h1 className="font-bold text-3xl text-white tracking-wide">
          🏆 Prizes
        </h1>

        <hr className="w-1/2 border-t-2 border-white/30" />

        <p className="text-lg text-center text-white/80 max-w-2xl">
          Prizes will be distributed to the top 3 teams based on the judging
          criteria.
        </p>

        {/* Prize Image */}
        <img
          src={prize}
          alt="Prizes"
          className="w-full max-w-md lg:max-w-xl h-auto rounded-xl
                     shadow-[0_0_40px_rgba(140,82,255,0.25)]
                     hover:scale-105 transition-all duration-500"
        />

        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-3xl gap-6 mt-6">
          {[
            { title: "🥇 First Place", amount: "₹10,000" },
            { title: "🥈 Second Place", amount: "₹5,000" },
            { title: "🥉 Third Place", amount: "₹2,100" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 px-8 py-6 rounded-2xl
                         bg-white/5 backdrop-blur-md border border-white/10
                         hover:border-[#8c52ff] hover:shadow-[0_0_25px_rgba(140,82,255,0.4)]
                         hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-white text-xl font-bold">{item.title}</p>
              <p className="text-[#8c52ff] text-2xl font-extrabold">
                {item.amount}
              </p>
            </div>
          ))}
        </div>

        <p className="text-white/70 text-lg text-center mt-8">
          All other participants will receive a certificate of participation.
        </p>
      </div>
    </div>
  );
};

export default Prizes;
