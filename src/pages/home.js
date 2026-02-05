import React from "react";
import logo from "../assets/logoReverseNew.png";
import tech1 from "../assets/IMG_20260203_172255.png";
import des1 from "../assets/computer-program-coding-screen.jpg";
import des2 from "../assets/StockCake-Tech_Team_Working-762339-medium.jpg";
import des3 from "../assets/people-working-with-devices-office.jpg";
import des4 from "../assets/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept.jpg";
import code from "../assets/WhatsApp Image 2026-02-03 at 18.02.18.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black w-[100%] gap-4">
      <div className="flex flex-row items-center justify-center gap-6 mt-10">
        <img src={logo} alt="BBS College" width={800} />
      </div>
      <div className="flex items-center justify-center h-[50vh]">
        <img
          src={tech1}
          alt="tech"
          className="flex h-[50vh] right-96 sm:w-80 sm:h-auto"
        />
        <div className="flex flex-col justify-center items-center h-[50vh] gap-2">
          <h1 className="flex lg:flex-row sm:flex-col sm:justify-center sm:items-center lg:gap-8 text-8xl font-bold text-left text-outline-2">
            YUKTI <span className="text-8xl font-bold text-white">1.0</span>
          </h1>
          <p className="text-md text-white">
            Just Make it Working Then Make it Prefect{" "}
          </p>
          <p className="text-2xl text-white">
            February 16, 2026 - February 17, 2026
          </p>
          <p className="text-lg text-white sm:w-full :justify-center sm:items-center">
            Join us for THREE ROUNDS TWO DAYS of coding, collaboration, and fun!
          </p>
          <p className="text-lg text-white">
            Register now to attend the Hackathon
          </p>
          <button className="bg-[#8c52ff] text-black font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 sm:mb-10">
            <a
              href="https://forms.gle/fcyDZ7XTaRpKEWcd8"
              className="text-white"
            >
              Register Now
            </a>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-900 w-full gap-2 p-10">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff] mt-10">
          How Does It{" "}
          <span className="text-4xl font-bold text-center text-white">
            Work?
          </span>
        </h2>
        <hr className="w-1/2 border-t-2 border-white" />
        <p className="text-lg text-center text-white">
          The hackathon is a platform for students to showcase their skills,
          collaborate with others, and solve real-world problems.
        </p>
        <p className="text-lg text-center font-bold text-white">
          Key Things To Know
        </p>
        <div className="flex flex-row justify-between items-center lg:w-3/4 gap-4 sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-11/12 sm:gap-4 sm:p-2 sm:mt-3 sm:mb-3">
          <img
            src={des1}
            alt="tech"
            className="sm:w-60 sm:h-auto lg:w-[500px] lg:h-auto"
          />
          <p className="flex flex-col text-2xl text-center text-white">
            1. Understand the problem
            <span className="text-lg text-white">
              Understand the problem statement and identify the key requirements
              and constraints.
            </span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center lg:w-3/4 gap-4 sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-11/12 sm:gap-4 sm:p-2 sm:mt-3 sm:mb-3">
          <p className="flex flex-col text-2xl text-center text-white">
            2. Ideate & Sketch Solutions
            <span className="text-lg text-white">
              Brainstorm and create innovative solutions to the problem.
            </span>
          </p>
          <img
            src={des2}
            alt="tech"
            className="sm:w-60 sm:h-auto lg:w-[600px] lg:h-auto"
          />
        </div>
        <div className="flex flex-row justify-between items-center lg:w-3/4 gap-4 sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-11/12 sm:gap-4 sm:p-2 sm:mt-3 sm:mb-3">
          <img
            src={des3}
            alt="tech"
            className="sm:w-60 sm:h-auto lg:w-[500px] lg:h-auto"
          />
          <p className="flex flex-col text-2xl text-center text-white">
            3. Race to realize it digitally
            <span className="text-lg text-white">
              Implement your solutions using the latest technologies and tools.
            </span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center lg:w-3/4 gap-4 sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-11/12 sm:gap-4 sm:p-2 sm:mt-3 sm:mb-3">
          <p className="flex flex-col text-2xl text-center text-white">
            4. Submit your solution and Win Prizes!
            <span className="text-lg text-white">
              Submit your final solution by the specified deadline.
            </span>
          </p>
          <img
            src={des4}
            alt="tech"
            className="sm:w-60 sm:h-auto lg:w-[500px] lg:h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-20 gap-4">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Our{" "}
          <span className="text-4xl font-bold text-center text-white">
            Judges
          </span>
        </h2>
        <hr className="w-1/2 border-t-2 border-white" />
        <div className="flex flex-row justify-center items-center w-2/3 gap-4">
          <p className="flex flex-col justify-center items-center text-4xl font-bold text-center text-white">
            Judges are experienced industry professionals who have a deep
            understanding of the technologies and industry trends.{" "}
            <span>(MNNIT and IIT experts)</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center bg-gray-900 w-full mt-20 gap-4 p-10">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Day{" "}
          <span className="text-4xl font-bold text-center text-white">
            Schedule
          </span>
        </h2>
        <hr className="w-1/2 border-t-2 border-white" />
        <p className="text-lg text-center text-white">
          The hackathon is divided into two days. This can be updated based on
          the number of participants and the complexity of the problems.
        </p>
        <div className="flex flex-row justify-between items-center lg:w-2/4 p-4 text-lg sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-11/12 sm:gap-2 sm:p-2">
          <p className="flex flex-col justify-between text-white">
            <span className="font-bold text-2xl">Day 1</span>
            <span className="text-xl text-gray-400">February 16, 2026</span>
            <span>Registration and inauguration</span>
            <span>Problem statement release</span>
            <span>Round 1 technical screening</span>
            <span>Evaluation and shortlisting</span>
            <span>Development phase</span>
            <span>End-of-day judge review</span>
          </p>
          <p className="flex flex-col justify-between text-white">
            <span className="font-bold text-2xl">Day 2</span>
            <span className="text-xl text-gray-400">February 17, 2026</span>
            <span>Final development</span> <span>Project demonstrations</span>{" "}
            <span>Final evaluation</span> <span>Result declaration</span>{" "}
            <span>Prize distribution</span> <span>Closing ceremony</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full mt-10 gap-4">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Register{" "}
          <span className="text-4xl font-bold text-center text-white">Now</span>
        </h2>
        <hr className="w-1/2 border-t-2 border-white" />
        <p className="text-lg text-center text-white">
          Registration is free and open to all students for different Colleges.
        </p>
        <button className="bg-[#8c52ff] text-left text-black font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">
          <a href="https://forms.gle/fcyDZ7XTaRpKEWcd8" className="text-white">
            Register Now
          </a>
        </button>
      </div>
      <div className="flex flex-col justify-between items-center w-full mt-20 mb-10 gap-2">
        <h2 className="text-4xl font-bold text-center text-[#8c52ff]">
          Associated{" "}
          <span className="text-4xl font-bold text-center text-white">
            With
          </span>
        </h2>
        <hr className="w-1/2 border-t-2 border-white" />
        <img src={code} alt="tech" width={300} height={300} />
      </div>
    </div>
  );
};

export default Home;
