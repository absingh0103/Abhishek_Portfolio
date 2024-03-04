import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav className="py-4 md:px-12 px-4 fixed top-0 w-full z-30 clearNav bg-rose-100 bg-opacity-70 md:bg-opacity-70 transition duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg cursor-pointer">
            <img src={logo} alt="Abhishek" className="h-10" />
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body font-medium">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block  transition duration-100 ease-in-out hover:scale-105 hover:text-rose-500 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block  hover:text-rose-500 transition duration-100 hover:scale-105 ease-in-out py-2 px-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block hover:text-rose-500 transition duration-100 ease-in-out hover:scale-105 py-2 px-4 cursor-pointer"
            >
              Skills
            </Link>

            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="project"
              className="block  hover:text-rose-500 transition duration-100 ease-in-out hover:scale-105 py-2 px-4 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="contact"
              className="block hover:text-rose-500 transition duration-100 ease-in-out hover:scale-105 py-2 px-4 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* contact me btn */}
          <div className="lg:block hidden">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="contact"
            >
              <button className="px-4 py-2 bg-transparent border border-rose-300 text-rose-500 rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-gradient-to-r from-red-200  to-yellow-100 p-4 rounded-lg text-body font-medium cursor-pointer">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block hover:text-rose-500 transition duration-100 ease-in-out  py-2"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block hover:text-rose-500 transition duration-100 ease-in-out  py-2"
            >
              About
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block hover:text-rose-500 transition duration-100 ease-in-out  py-2"
            >
              Skills
            </Link>

            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="project"
              className="block hover:text-rose-500 transition duration-100 ease-in-out  py-2"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="contact"
              className="block hover:text-rose-500 transition duration-100 ease-in-out py-2"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
