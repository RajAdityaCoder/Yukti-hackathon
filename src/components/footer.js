import React from "react";

const Footer = () => {
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center bg-gray-900 lg:p-4 w-[100%] lg:text-base sm:text-sm sm:p-2">
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center w-11/12 p-4 lg:gap-4 sm:flex sm:flex-col sm:w-3/2 sm:justify-between sm:items-center sm:gap-2 sm:p-2">
        <div className="flex flex-row justify-between items-center w-3/4 p-4">
          <p className="text-lg text-center text-white lg:gap-2 lg:p-2 sm:text-sm sm:flex sm:items-center sm:p-2">
            For more information, please visit our{" "}
            <a href="/about" className="text-blue-400">
              About Page{" "}
            </a>{" "}
            or{" "}
            <a href="/contact" className="text-blue-400">
              Contact Page{" "}
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-between items-center p-4">
          <div className="flex flex-row justify-between items-center gap-4">
            <p className="text-white text-md font-bold">Our Teams Volunteers</p>
            <div className="flex flex-col justify-between items-center gap-4">
              <div className="flex flex-row justify-between items-center gap-4">
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
              </div>
              <div className="flex flex-row justify-between items-center gap-4">
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
                <img
                  className="w-auto h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white sm:flex sm:justify-center sm:items-center sm:p-2">
        Copyright &copy; 2026 YUKTI 1.0. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
