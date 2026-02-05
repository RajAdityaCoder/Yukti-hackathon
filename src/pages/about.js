import React from "react";
import hack from "../assets/InShot_20260204_144524301.png";

const About = () => {
  return (
    <section className="bg-black text-white px-4 py-8 lg:px-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <img src={hack} alt="hack" className="w-full max-w-3xl rounded-lg" />

        <h1 className="text-2xl font-bold text-center lg:text-4xl">
          ABOUT YUKTI 1.0
        </h1>

        <hr className="w-full border-gray-400" />

        <p className="text-sm text-center lg:text-base lg:text-left">
          YUKTI 1.0 (hackathon) is designed to evaluate real-world problem
          solving, technical execution, and collaborative development under time
          constraints. Participants work on theme-based problem statements and
          progress through three structured evaluation rounds over two days. The
          focus is on originality, live development, and practical
          implementation.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">
          YUKTI 1.0 THEME
        </h2>

        <hr className="w-full border-gray-400" />

        <p className="text-sm text-center lg:text-base lg:text-left">
          Projects will be based on problem statements aligned with themes such
          as Artificial Intelligence, Web Applications, Smart Education,
          Healthcare and Social Impact, FinTech, Smart Governance,
          Sustainability, and Smart Cities. Exact problem statements will be
          disclosed at the start of YUKTI 1.0.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center lg:text-4xl mb-4">
          YUKTI – HACKS STRUCTURE & EVALUATION ROUNDS
        </h2>

        <hr className="border-gray-400 mb-8" />

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <Round
            title="Round 1: Technical Screening (Day 1 – Morning)"
            text="Teams will be assigned technical tasks related to their
            selected theme including solution architecture, database or API
            planning, logic flow, UI wireframes, and initial project setup.
            This round evaluates feasibility and technical clarity."
          />

          <Round
            title="Round 2: Development & Progress Review (Day 1 – Afternoon)"
            text="Shortlisted teams begin active development. Judges assess
            feature implementation, code quality, technology usage, and
            collaboration. Weak progress may lead to elimination."
          />

          <Round
            title="Round 3: Final Demo & Presentation (Day 2)"
            text="Finalist teams present a working prototype explaining the
            problem, solution approach, technology stack, key features, and
            future scope. Winners are decided in this round."
          />
        </div>
      </div>
    </section>
  );
};

const Round = ({ title, text }) => (
  <div className="bg-gray-900 p-4 rounded-lg flex-1">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm lg:text-base">{text}</p>
  </div>
);

export default About;
