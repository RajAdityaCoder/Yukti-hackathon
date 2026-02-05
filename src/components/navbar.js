import React from "react";
import { Link } from "react-router-dom";
import yukti from "../assets/InShot_20260204_143344831.png";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 w-[100%] lg:text-base sm:text-sm p-4">
      <div className="flex flex-row justify-between items-center lg:w-11/12 p-4 sm:flex sm:w-11/12 sm:justify-between sm:items-center">
        <img src={yukti} alt="yukti" width={120} />
        <nav className="space-x-8">
          <Link
            className="text-white text-lg hover:text-gray-300 hover:scale-110 transition-all duration-300 ease-in-out transform"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white text-lg hover:text-gray-300 hover:scale-110 transition-all duration-300 ease-in-out transform"
            to="/prizes"
          >
            Prizes
          </Link>
          <Link
            className="text-white text-lg hover:text-gray-300 hover:scale-110 transition-all duration-300 ease-in-out transform"
            to="/rules"
          >
            Rules and Policies
          </Link>
          <Link
            className="text-white text-lg hover:text-gray-300 hover:scale-110 transition-all duration-300 ease-in-out transform"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-white text-lg hover:text-gray-300 hover:scale-110 transition-all duration-300 ease-in-out transform"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
