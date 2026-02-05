import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center bg-black lg:h-[100vh] w-[100%] lg:text-base sm:text-sm p-4 gap-4 sm:h-[100%]">
      <div className="flex flex-col justify-between items-center w-3/4 p-4 gap-4">
        <h1 className="text-4xl font-bold text-center text-white">
          WANT TO KNOW MORE?
        </h1>
        <hr className="lg:w-full lg:border-t lg:border-white" />
        <p className="lg:text-white">
          We would love to hear from you! Just ask us any questions you have.
        </p>
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-3/4 lg:p-4 lg:gap-2 sm:flex sm:flex-col sm:justify-between sm:items-center sm:w-3/4">
          <div className="flex lg:flex-col justify-between items-center lg:w-3/4 p-4 gap-2 sm:flex-row sm:w-11/12">
            <img
              className="w-32 h-32 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Volunteer"
            />
            <div className="sm:flex-col">
              <p className="text-white text-center">Adarsh Pandey</p>
              <p className="text-white text-center">+91-8188885128</p>
            </div>
          </div>
          <div className="flex lg:flex-col justify-between items-center lg:w-3/4 p-4 gap-2 sm:flex-row sm:w-11/12">
            <img
              className="w-32 h-32 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Volunteer"
            />
            <div className="sm:flex-col">
              <p className="text-white text-center">Aditya Raj Chaudhary</p>
              <p className="text-white text-center">+91-7457918908</p>
            </div>
          </div>
          <div className="flex lg:flex-col sm:flex-row justify-between items-center lg:w-3/4 p-4 gap-2 sm:w-11/12">
            <img
              className="w-32 h-32 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Volunteer"
            />
            <div className="sm:flex-col">
              <p className="text-white text-center">Raj Upadhyay</p>
              <p className="text-white text-center">+91-7380892206</p>
            </div>
          </div>
          <div className="flex lg:flex-col sm:flex-row justify-between items-center lg:w-3/4 p-4 gap-2 sm:w-11/12">
            <img
              className="w-32 h-32 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Volunteer"
            />
            <div className="sm:flex-col">
              <p className="text-white text-center">Md. Shariq Irshad</p>
              <p className="text-white text-center">+91-8299762329</p>
            </div>
          </div>
          <div className="flex lg:flex-col sm:flex-row justify-between items-center lg:w-3/4 p-4 gap-2 sm:w-11/12">
            <img
              className="w-32 h-32 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Volunteer"
            />
            <div className="sm:flex-col">
              <p className="text-white text-center">Hardik Gupta</p>
              <p className="text-white text-center">+91-8765126049</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
