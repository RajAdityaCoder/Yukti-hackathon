import React from "react";
import hack from "../assets/InShot_20260204_144524301.png";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black w-100vw p-4 gap-4">
      <div className="flex flex-col justify-between items-center w-3/4">
        <img src={hack} alt="hack" width={800} />
        <h1 className="text-4xl font-bold text-center text-white pb-2">
          ABOUT YUKTI 1.0
        </h1>
        <hr className="w-full border-t-2 border-white pt-2 pb-2" />
        <p className="text-white">
          This YUKTI 1.0(hackathon), is designed to evaluate real-world problem
          solving, technical execution, and collaborative development under time
          constraints. Participants will work on theme-based problem statements
          provided by the organizers and progress through three structured
          evaluation rounds over two days. The focus is on originality, live
          development, and practical implementation.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-3/4 p-4">
        <h2 className="text-4xl font-bold text-center text-white pb-2">
          YUKTI 1.0 THEME
        </h2>
        <hr className="w-full border-t-2 border-white pt-2 pb-2" />
        <p className="text-white">
          Projects will be based on problem statements aligned with selected
          themes such as Artificial Intelligence, Web Applications, Smart
          Education, Healthcare and Social Impact, FinTech, Smart Governance,
          Sustainability, and Smart Cities. Exact problem statements will be
          disclosed at the start of the YUKTI 1.0.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-11/12 p-4">
        <h2 className="text-4xl font-bold text-center text-white pb-2">
          YUKTI - HACKS STRUCTURE and EVALUATION ROUNDS
        </h2>
        <hr className="w-full border-t-2 border-white pt-2 pb-2" />
        <div className="flex flex-row justify-between items-center gap-4 mb-32">
          <p className="text-white">
            Round 1: Technical Screening (Day 1 – Morning) Teams will be
            assigned technical tasks related to their selected theme. This may
            include solution architecture design, database or API planning,
            logic flow definition, UI wireframes, and initial project setup.
            This round evaluates technical clarity, feasibility, and
            understanding of the problem.
          </p>
          <p className="text-white">
            Round 2: Development and Progress Review (Day 1 – Afternoon)
            Shortlisted teams will begin active development. Judges will assess
            core feature implementation, code quality, technology usage, and
            team collaboration. Teams showing weak progress or unclear
            implementation may be eliminated. Teams with strong progress will
            move to the next round.
          </p>
          <p className="text-white">
            Round 3: Final Demo and Presentation (Day 2) Finalist teams will
            present a working prototype and explain the problem statement,
            solution approach, technology stack, key features, and future scope.
            Final evaluation will determine the winners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
