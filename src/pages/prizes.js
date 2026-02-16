import React from "react";
import logo from "../assets/website/InShot_20260204_142320853.png";
import prize from "../assets/website/InShot_20260204_145801391.png";

const Prizes = () => {
  const shortlistedTeams = [
    { name: "Sentinal" },
    { name: "npm install win" },
    { name: "Ignipotent" },
    { name: "Team Heisyn" },
    { name: "Explicit Devisors" },
    { name: "Cyber Trios" },
    { name: "GyanSetu" },
    { name: "AegisMind" },
    { name: "API Avengers" },
    { name: "Bits n Bytes" },
    { name: "Debugger Squad" },
    { name: "Bizarre" },
    { name: "Tech titans" },
    { name: "HackSquad" },
    { name: "Legal Eagle" },
    { name: "The Knight Walkers" },
    { name: "Ton-18" },
    { name: "Arise" },
    { name: "Technovators" },
    { name: "The Falcons" },
    { name: "Logic Lords" },
    { name: "Automation krew" },
    { name: "KryGen" },
    { name: "Knight Devs" },
    { name: "EduAI Innovators" },
    { name: "Revive & Thrive" },
    { name: "Purva-Drishti" },
    { name: "Stranger Codes" },
    { name: "HealTech" },
    { name: "Innovation 404" },
    { name: "Tech Titans" },
    { name: "AdaptiveCoders" },
    { name: "Stack Overflowed" },
    { name: "Pixel Pair" },
    { name: "The Civic Visionaries" },
    { name: "BrainBusters" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full gap-4 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,82,255,0.15),transparent_60%)] pointer-events-none" />

      <div className="flex flex-col items-center gap-6 mb-32 w-full relative z-10">
        <img
          src={logo}
          alt="logo"
          className="w-64 lg:w-[500px] h-auto drop-shadow-[0_0_30px_rgba(140,82,255,0.4)]"
        />
        <h1 className="font-bold text-3xl text-[#8c52ff] tracking-wide">
          🏆 Prizes & <span className="text-white font-bold">Results</span>
        </h1>
        <hr className="w-1/2 border-t-2 border-white/30" />
        <p className="text-lg text-center text-white/80 max-w-2xl">
          Prizes will be distributed to the top 3 teams based on the judging
          criteria.
        </p>
        <img
          src={prize}
          alt="Prizes"
          className="w-full max-w-md lg:max-w-xl h-auto rounded-xl
                     shadow-[0_0_40px_rgba(140,82,255,0.25)]
                     hover:scale-105 transition-all duration-500"
        />
        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-3xl gap-6 mt-6 overflow-x-hidden">
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
        {shortlistedTeams.length > 0 && (
          <div className="flex flex-col items-center gap-10 mt-12 px-4 w-full overflow-x-hidden">
            <span className="bg-[#8c52ff]/20 text-[#8c52ff] px-3 py-1 rounded-full text-sm tracking-wide">
              Official Announcement
            </span>

            <div className="flex flex-col items-center gap-6 w-full">
              <p className="text-white/80 text-center font-semibold text-xl sm:text-2xl lg:text-4xl">
                Teams Shortlisted{" "}
                <span className="text-[#8c52ff] font-bold">for Round 3</span>
              </p>

              <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {shortlistedTeams.slice(0, 20).map((team, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-xl px-5 py-4 text-center text-white text-base sm:text-lg transition-all duration-300 hover:border-[#8c52ff] hover:shadow-[0_0_20px_rgba(140,82,255,0.35)]"
                  >
                    <span className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-[#8c52ff]/20 to-transparent" />

                    {team.rank && (
                      <span className="absolute top-2 right-2 text-xs bg-white/10 px-2 py-1 rounded-md">
                        #{team.rank}
                      </span>
                    )}

                    <span className="relative z-10">{team.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white/70 text-lg text-center mt-4 max-w-2xl">
              Shortlisted teams must bring their{" "}
              <span className="font-bold">
                ID proof, Laptop and Charging station (if possible bring your
                own extension board)
              </span>{" "}
              to the hackathon.
            </div>

            <br />
            <br />
            {shortlistedTeams.length > 20 && (
              <div className="flex flex-col items-center gap-6 w-full">
                <p className="text-white/80 text-center font-semibold text-xl sm:text-2xl lg:text-4xl">
                  The{" "}
                  <span className="text-[#8c52ff] font-bold">
                    Participants Teams
                  </span>
                </p>

                <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {shortlistedTeams.slice(20).map((team, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-xl px-5 py-4 text-center text-white text-base sm:text-lg transition-all duration-300 hover:border-[#8c52ff] hover:shadow-[0_0_20px_rgba(140,82,255,0.35)]"
                    >
                      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-[#8c52ff]/20 to-transparent" />

                      {team.rank && (
                        <span className="absolute top-2 right-2 text-xs bg-white/10 px-2 py-1 rounded-md">
                          #{team.rank}
                        </span>
                      )}

                      <span className="relative z-10">{team.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default Prizes;
