import React from "react";
import adarsh from "../assets/teams/Adarsh.jpeg";
import aman from "../assets/teams/Aman.jpg";
import shubham from "../assets/teams/Shubham.png";
import hardik from "../assets/teams/Hardik.jpg";
import akarshit from "../assets/teams/Akarshit.jpeg";
import anu from "../assets/teams/Anu.jpg";
import diksha from "../assets/teams/Diksha.jpg";
import sakshiM from "../assets/teams/SakshiM.jpg";
import sakshiP from "../assets/teams/SakshiP.jpg";
import kartikey from "../assets/teams/Kartikey.jpg";
import raj from "../assets/teams/Raj.jpg";
import adi from "../assets/teams/Adi.jpeg";
import shariq from "../assets/teams/shariq.jpeg";

const Footer = () => {
  const volunteerImages = [
    adi,
    adarsh,
    raj,
    shariq,
    hardik,
    akarshit,
    anu,
    diksha,
    sakshiM,
    sakshiP,
    kartikey,
    "",
    aman,
    shubham,
  ];
  return (
    <footer className="bg-gray-900 text-white px-4 py-6 lg:px-10 lg:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center max-w-7xl mx-auto">
        <p className="text-sm text-center lg:text-base lg:text-left">
          For more information, please visit{" "}
          <a href="/rules" className="text-blue-400 hover:underline">
            Rules and Policies
          </a>{" "}
          or{" "}
          <a href="/contact" className="text-blue-400 hover:underline">
            Our Teams
          </a>
        </p>

        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-md">Our Team Volunteers</p>

          <div className="grid grid-cols-5 gap-3">
            {Array(14)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  className="h-12 w-12 rounded-full object-cover object-top lg:h-14 lg:w-14"
                  src={volunteerImages[i % volunteerImages.length]}
                  alt="Volunteer"
                />
              ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs lg:text-sm">
        © 2026 YUKTI 1.0. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
