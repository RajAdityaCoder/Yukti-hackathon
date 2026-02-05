import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-6 lg:px-10 lg:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center max-w-7xl mx-auto">
        <p className="text-sm text-center lg:text-base lg:text-left">
          For more information, please visit our{" "}
          <a href="/about" className="text-blue-400 hover:underline">
            About Page
          </a>{" "}
          or{" "}
          <a href="/contact" className="text-blue-400 hover:underline">
            Contact Page
          </a>
        </p>

        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-md">Our Team Volunteers</p>

          <div className="grid grid-cols-5 gap-3">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  className="h-12 w-12 rounded-full object-cover lg:h-14 lg:w-14"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
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
