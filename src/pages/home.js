import React, { useState, useEffect } from "react";
import logo from "../assets/website/logoReverseNew.png";
import tech1 from "../assets/website/IMG_20260203_172255.png";
import des1 from "../assets/website/computer-program-coding-screen.jpg";
import des2 from "../assets/website/StockCake-Tech_Team_Working-762339-medium.jpg";
import des3 from "../assets/website/people-working-with-devices-office.jpg";
import des4 from "../assets/website/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept.jpg";
import csi from "../assets/website/CSI-logo-removedBG.png";

const targetDate = new Date("2026-02-15T00:00:00").getTime();
const steps = [
  {
    title: "Theme Selection & Problem Identification",
    desc: "Select a theme and identify a real-world problem that is relevant, impactful, and feasible.",
  },
  {
    title: "Solution Proposal & Evaluation",
    desc: "Design and submit a structured solution outlining your approach, feasibility, and expected impact.",
  },
  {
    title: "Development & Implementation",
    desc: "Build a working prototype during the hackathon that meets requirements and passes test cases.",
  },
  {
    title: "Final Demonstration & Submission",
    desc: "Present the completed project, submit final deliverables, and compete for winning positions.",
  },
];

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(interval);
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      );

      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      );

      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      );

      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full text-sm md:text-base gap-4">
      <div className="flex flex-row items-center justify-center gap-6 mt-10">
        <img
          src={logo}
          alt="BBS College"
          className="w-[300px] sm:w-[350px] lg:w-[400px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <img src={tech1} alt="tech" className="sm:w-80 sm:h-auto" />

        <div className="flex flex-col justify-center items-center h-full gap-2 text-center overflow-x-hidden">
          <h1 className="flex flex-col sm:flex-row justify-center items-center gap-4 text-5xl sm:text-6xl lg:text-8xl font-bold text-outline-2">
            YUKTI <span className="text-white break-words">1.0</span>
          </h1>

          <p className="text-md text-white">
            Just Make it Working Then Make it Prefect
          </p>

          <p className="text-xl sm:text-2xl text-white font-bold">
            February 16, 2026 - February 17, 2026
          </p>

          <p className="text-lg text-white sm:w-full text-center">
            Join us <span className="font-bold">3 Rounds</span> for{" "}
            <span className="font-bold">2 Days</span> of coding, collaboration,
            and fun!
          </p>

          <p className="text-lg text-white">
            Register now to attend the Hackathon
          </p>

          <a
            href="https://forms.gle/fcyDZ7XTaRpKEWcd8"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-[#8c52ff]
              text-white
              font-bold
              py-2 px-6
              rounded-full
              transition-all
              duration-300
              ease-in-out
              transform
              hover:scale-110
              sm:mb-10
            "
          >
            Register Now
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center font-mono">
        <span className="text-white lg:text-2xl sm:text-base mb-4">
          Registration Closes In
        </span>

        <div className="flex gap-3 flex-wrap max-w-full">
          <div className="flex flex-col items-center">
            <span className="text-outline-1 px-4 py-2 rounded-md lg:text-9xl sm:text-5xl">
              {timeLeft.days}
            </span>
            <span className="text-sm mt-1 text-white">Days</span>
          </div>

          <span className="lg:text-9xl text-outline-1 sm:text-5xl">:</span>

          <div className="flex flex-col items-center">
            <span className="text-outline-1 px-4 py-2 rounded-md lg:text-9xl sm:text-5xl">
              {timeLeft.hours}
            </span>
            <span className="text-sm mt-1 text-white">Hours</span>
          </div>

          <span className="lg:text-9xl text-outline-1 sm:text-5xl">:</span>

          <div className="flex flex-col items-center">
            <span className="text-outline-1 px-4 py-2 rounded-md lg:text-9xl sm:text-5xl">
              {timeLeft.minutes}
            </span>
            <span className="text-sm mt-1 text-white">Minutes</span>
          </div>

          <span className="lg:text-9xl text-outline-1 sm:text-5xl">:</span>

          <div className="flex flex-col items-center">
            <span className="text-outline-1 px-4 py-2 rounded-md lg:text-9xl sm:text-5xl">
              {timeLeft.seconds}
            </span>
            <span className="text-sm mt-1 text-white">Seconds</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-900 w-full gap-4 p-10">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          How Does It <span className="text-white">Work?</span>
        </h2>

        <hr className="w-1/2 border-t-2 border-white" />

        <p className="text-lg text-center text-white">
          The hackathon is a platform for students to showcase their skills,
          collaborate with others, and solve real-world problems.
        </p>

        <p className="text-lg text-center font-bold text-white">
          Key Things To Know
        </p>

        {[des1, des2, des3, des4].map((img, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between items-center lg:w-3/4 sm:w-11/12 gap-4"
          >
            {index % 2 === 0 && (
              <img
                src={img}
                alt="step"
                className="hidden lg:block lg:w-[500px]"
              />
            )}

            <p className="flex flex-col text-2xl text-center text-white font-bold">
              {index + 1}. {steps[index].title}
              <span className="text-lg font-normal text-white">
                {steps[index].desc}
              </span>
            </p>

            {index % 2 !== 0 && (
              <img
                src={img}
                alt="step"
                className="hidden lg:block lg:w-[500px]"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-10 gap-4">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Day <span className="text-white">Schedule</span>
        </h2>

        <hr className="w-1/2 border-t-2 border-white" />
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 w-full mt-6 px-4">
          <div className="flex flex-col bg-gray-900 rounded-2xl p-6 w-full lg:w-2/5 border border-white/10">
            <h3 className="text-2xl font-bold text-[#8c52ff] text-center mb-2">
              Day 1 – 16 Feb 2026
            </h3>
            <p className="text-center text-gray-300 mb-4">
              Inauguration & Technical Screening
            </p>

            <ul className="text-white space-y-2 text-sm lg:text-base">
              <li>🕙 10:00 AM – Welcome of Guests & Participants</li>
              <li>🪔 10:05 AM – Inauguration & Saraswati Vandana</li>
              <li>🎤 10:10 AM – Address by Director</li>
              <li>🎓 10:15 AM – Address by Dean (R&amp;D)</li>
              <li>🎓 10:25 AM – Address by Dean (Academics)</li>
              <li>📋 10:30 AM – Hackathon Briefing (Rules)</li>
              <li>🚶 10:45 AM – Move to Venue</li>
              <li>💻 11:00 AM – 02:00 PM – Problem Case Statements</li>
              <li>📢 03:00 PM – Round 1 Results & Shortlisting</li>
            </ul>
          </div>

          <div className="flex flex-col bg-gray-900 rounded-2xl p-6 w-full lg:w-2/5 border border-white/10">
            <h3 className="text-2xl font-bold text-[#8c52ff] text-center mb-2">
              Day 2 – 17 Feb 2026
            </h3>
            <p className="text-center text-gray-300 mb-4">
              Presentations & Valedictory
            </p>

            <ul className="text-white space-y-2 text-sm lg:text-base">
              <li>💡 10:00 AM – 01:00 PM – Final Presentations (Round 2)</li>
              <li>🍽️ 01:00 PM – 02:00 PM – Lunch Break</li>
              <li>🏆 02:00 PM – Result Announcement</li>
              <li>📜 Certificate Distribution</li>
              <li>🎉 Valedictory & Closing Ceremony</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-20 gap-4">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Our <span className="text-white">Judges</span>
        </h2>

        <hr className="w-1/2 border-t-2 border-white" />

        <p className="text-2xl text-center text-white w-3/4">
          Judges are experienced industry professionals who have a deep
          understanding of the technologies and industry trends.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-10 gap-4">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Register <span className="text-white">Now</span>
        </h2>

        <hr className="w-1/2 border-t-2 border-white" />

        <p className="text-lg text-center text-white">
          Registration is free and open to students from different colleges.
        </p>

        <a
          href="https://forms.gle/fcyDZ7XTaRpKEWcd8"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-[#8c52ff]
            text-white
            font-bold
            py-2 px-6
            rounded-full
            transition-all
            duration-300
            ease-in-out
            transform
            hover:scale-110
          "
        >
          Register Now
        </a>
      </div>

      <div className="flex flex-col items-center w-full mt-10 mb-10 gap-4">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Associated <span className="text-white">With</span>
        </h2>

        <hr className="w-1/2 border-t-2 border-white" />

        <div className="flex flex-row gap-4">
          <img src={csi} alt="csi" className="w-[200px] lg:w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
