import React from "react";
import rules from "../assets/toppng.com-rules-and-regulations-1235x758.png";

const Rules = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black w-full gap-4 px-4">
      <div className="flex flex-col items-center w-full max-w-6xl mt-10 gap-5 mb-10">
        {/* Header */}
        <img
          src={rules}
          alt="YUKTI 1.0 Rules"
          className="w-72 lg:w-96 h-auto"
        />

        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white">
          YUKTI 1.0 Rules
        </h2>

        <hr className="w-full border-t-2 border-white" />

        <p className="text-lg text-center text-white">
          Please read the rules carefully before registering.
        </p>

        {/* Evaluation Rounds */}
        <div className="w-full lg:w-3/4 p-4 text-white">
          <h3 className="font-bold text-2xl lg:text-3xl">
            Hackathon Evaluation Rounds
          </h3>
          <p className="text-base mt-1">
            The Hackathon will be conducted in three rounds:
          </p>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4">
            <Round
              title="i. Round 1 (Shortlisting Round):"
              text="Participants are required to prepare and submit a proposed solution based on the hackathon theme. Projects will be evaluated primarily on the clarity, feasibility and innovation of the solution approach."
            />
            <Round
              title="ii. Round 2 (Elimination Round):"
              text="Teams shortlisted from Round 1 will be required to solve a given problem statement within the specified time."
            />
            <Round
              title="iii. Round 3 (Presentation Round):"
              text="Finalist teams will present their solution before the judging panel, explaining the problem understanding, implementation and impact of their project."
            />
          </div>
        </div>

        {/* Reusable Section Wrapper */}
        {[
          {
            title: "Team Requirements",
            content:
              "Each team must consist of 2 to 4 members. Individual participation is not allowed. Teams with fewer than 2 or more than 4 members will not be permitted to participate.",
          },
        ].map((item, i) => (
          <Section key={i} title={item.title}>
            <p>{item.content}</p>
          </Section>
        ))}

        <Section title="Essential Equipment / Peripheral">
          <p className="text-base">
            Each participant must bring the following:
          </p>
          <p>i. Valid college ID for registration and verification.</p>
          <p>ii. A personal laptop with required software installed.</p>
          <p>iii. Laptop charger and necessary adapters.</p>
          <br />
          <p>
            Participants are responsible for their belongings. The organizing
            committee is not responsible for any loss or damage.
          </p>
        </Section>

        <Section title="Project Submission & Guidelines">
          <p>i. Submissions must be completed before the deadline.</p>
          <p>
            ii. Project must be based strictly on the given problem statement.
          </p>
          <p>iii. Development must be done during the hackathon.</p>
          <p>iv. Final round requires presentation and demo only.</p>
          <p>
            v. Each team must submit source code, documentation, and a working
            demo.
          </p>
        </Section>

        <Section title="Plagiarism Policy">
          <p>
            Zero tolerance for plagiarism. Any copied code or idea will result
            in immediate disqualification.
          </p>
        </Section>

        <Section title="Code of Conduct">
          <p>i. Respect all participants and organizers.</p>
          <p>ii. Maintain discipline and collaboration.</p>
          <p>iii. Follow venue rules.</p>
          <p>iv. No harassment or discrimination.</p>
          <p>v. Encourage teamwork and learning.</p>
        </Section>

        <Section title="Disqualification Criteria">
          <p>i. Late or incomplete submission</p>
          <p>ii. Plagiarism or cheating</p>
          <p>iii. Misaligned project</p>
          <p>iv. Code of conduct violation</p>
          <p>v. False information</p>
        </Section>

        <Section title="Judging & Final Authority">
          <ol className="list-decimal list-inside text-base">
            <li>
              The judges and organizing committee hold full authority over:
              <ul className="list-disc list-inside text-base">
                <li>Project evaluation</li>
                <li>Shortlisting and winner selection</li>
                <li>Rule enforcement</li>
              </ul>
            </li>
            <li>
              All decisions made by the judges and organizers are final and
              binding.
            </li>
            <li>No appeals or disputes will be entertained.</li>
            <li>
              Judges reserve the right to modify evaluation criteria if required
              to ensure fairness.
            </li>
          </ol>
          <p className="mt-2">
            All decisions made by judges and organizers are final.
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="w-full lg:w-3/4 p-4 text-lg text-white">
    <h3 className="font-bold text-2xl lg:text-3xl mb-2">{title}</h3>
    {children}
  </div>
);

const Round = ({ title, text }) => (
  <div className="bg-gray-900 p-4 rounded-lg flex-1">
    <h3 className="font-semibold mb-2 text-white">{title}</h3>
    <p className="text-sm lg:text-base text-white">{text}</p>
  </div>
);

export default Rules;
