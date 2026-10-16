import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between w-full fixed top-0 z-50 md:px-20 px-3 py-4 bg-[#0c1a25]/90 backdrop-blur-md border-b border-[#00f0ff]/20 shadow-lg shadow-black/10">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link
            to="Home"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            Aashutosh Gupta
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`block md:hidden focus:outline-none p-2 rounded-md ${
            isOpen ? "bg-gray-800" : "bg-transparent"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu Links */}
        <ul
          className={`${
            isOpen ? "flex animate-slide-down" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:space-x-6 w-full md:w-auto`}
        >
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="Home"
              smooth={true}
              duration={700}
              activeClass="text-teal-400 font-bold"
              onClick={() => setIsOpen(false)}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="about"
              smooth={true}
              duration={700}
              activeClass="text-teal-400 font-bold"
              onClick={() => setIsOpen(false)}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="Services"
              smooth={true}
              duration={700}
              activeClass="text-teal-400 font-bold"
              onClick={() => setIsOpen(false)}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="Skills"
              smooth={true}
              duration={500}
              activeClass="text-teal-400 font-bold"
              onClick={() => setIsOpen(false)}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="text-teal-400 font-bold"
              onClick={() => setIsOpen(false)}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li className="mx-2 my-2 md:my-0">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="text-teal-400 font-bold"
              onClick={() => setIsOpen(false)}
              className="text-white no-underline hover:text-teal-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
