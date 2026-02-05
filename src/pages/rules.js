import React from "react";
import rules from "../assets/toppng.com-rules-and-regulations-1235x758.png";

const Rules = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black w-[100%] gap-4">
      <div className="flex flex-col items-center justify-between w-11/12 mt-10 gap-5 mb-10">
        <img src={rules} alt="YUKTI 1.0 Rules" className="w-96 h-auto" />
        <h2 className="text-4xl font-bold text-center text-white">
          YUKTI 1.0 Rules
        </h2>
        <hr className="w-full border-t-2 border-white" />
        <p className="text-lg text-center text-white">
          Please read the rules carefully before registering.
        </p>
        <div className="w-2/4 p-4 text-lg text-white">
          <span className="font-bold text-2xl">Rules and Restrictions</span>
          <p> 1. Pre-built or previously submitted projects are not allowed</p>
          <p>
            2. Copying code or templates from public repositories is prohibited
          </p>
          <p>
            3. Only problem statements released during the YUKTI 1.0 may be used
          </p>
          <p>
            4. All submissions must be made through the official YUKTI 1.0
            portal by the specified deadline.
          </p>
          <p> 5. Late or incomplete submissions will not be accepted</p>
        </div>
        <div className="w-2/4 p-4 text-lg text-white">
          <span className="font-bold text-2xl">Evaluation Policy</span>
          <p>
            Projects will be evaluated on technical implementation, code
            quality, problem relevance, innovation, completeness, and usability.
            The judges’ decision will be final and binding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
