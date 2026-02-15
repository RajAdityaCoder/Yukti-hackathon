import { useState } from "react";
import { Link } from "react-router-dom";
import yukti from "../assets/website/InShot_20260204_143344831.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/">
          <img src={yukti} alt="yukti" className="w-24 lg:w-32" />
        </Link>

        <nav className="hidden lg:flex space-x-8 overflow-hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/prizes">Prizes & Results</NavLink>
          <NavLink to="/rules">Rules & Policies</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Our Teams</NavLink>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="text-3xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-gray-800 px-4 py-6 space-y-4">
          <MobileLink to="/" setOpen={setOpen}>
            Home
          </MobileLink>
          <MobileLink to="/prizes" setOpen={setOpen}>
            Prizes & Results
          </MobileLink>
          <MobileLink to="/rules" setOpen={setOpen}>
            Rules & Policies
          </MobileLink>
          <MobileLink to="/about" setOpen={setOpen}>
            About
          </MobileLink>
          <MobileLink to="/contact" setOpen={setOpen}>
            Our Teams
          </MobileLink>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-base hover:text-gray-300 hover:scale-110 hover:overflow-x-hidden transition duration-300"
  >
    {children}
  </Link>
);

const MobileLink = ({ to, children, setOpen }) => (
  <Link
    to={to}
    onClick={() => setOpen(false)}
    className="block text-lg text-white hover:text-gray-300"
  >
    {children}
  </Link>
);

export default Navbar;
