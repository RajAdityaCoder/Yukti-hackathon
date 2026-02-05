import React from "react";
import logo from "../assets/logoReverseNew.png";
import tech1 from "../assets/IMG_20260203_172255.png";
import des1 from "../assets/computer-program-coding-screen.jpg";
import des2 from "../assets/StockCake-Tech_Team_Working-762339-medium.jpg";
import des3 from "../assets/people-working-with-devices-office.jpg";
import des4 from "../assets/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept.jpg";
import code from "../assets/WhatsApp Image 2026-02-03 at 18.02.18.jpeg";
import csi from "../assets/CSI-logo.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black w-full text-sm md:text-base gap-4">
      {/* LOGO */}
      <div className="flex flex-row items-center justify-center gap-6 mt-10">
        <img
          src={logo}
          alt="BBS College"
          className="w-[300px] sm:w-[350px] lg:w-[400px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        <img src={tech1} alt="tech" className="sm:w-80 sm:h-auto" />

        <div className="flex flex-col justify-center items-center h-full gap-2 text-center">
          <h1 className="flex flex-col sm:flex-row justify-center items-center gap-4 text-5xl sm:text-6xl lg:text-8xl font-bold text-outline-2">
            YUKTI <span className="text-white">1.0</span>
          </h1>

          <p className="text-md text-white">
            Just Make it Working Then Make it Prefect
          </p>

          <p className="text-xl sm:text-2xl text-white">
            February 16, 2026 - February 17, 2026
          </p>

          <p className="text-lg text-white sm:w-full text-center">
            Join us for THREE ROUNDS TWO DAYS of coding, collaboration, and fun!
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
              <img src={img} alt="step" className="sm:w-60 lg:w-[500px]" />
            )}

            <p className="flex flex-col text-2xl text-center text-white">
              {index + 1}. Step Description
              <span className="text-lg">
                Explanation for this step goes here.
              </span>
            </p>

            {index % 2 !== 0 && (
              <img src={img} alt="step" className="sm:w-60 lg:w-[500px]" />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-20 gap-4">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Our <span className="text-white">Judges</span>
        </h2>

        <hr className="w-1/2 border-t-2 border-white" />

        <p className="text-2xl text-center text-white w-2/3">
          Judges are experienced industry professionals
          <span className="block text-lg">(MNNIT and IIT experts)</span>
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

      {/* ASSOCIATED */}
      <div className="flex flex-col items-center w-full mt-20 mb-10 gap-4">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Associated <span className="text-white">With</span>
        </h2>

        <hr className="w-1/2 border-t-2 border-white" />

        <div className="flex flex-row gap-4">
          <img src={csi} alt="csi" className="w-[200px] lg:w-[300px]" />
          <img src={code} alt="code" className="w-[200px] lg:w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
