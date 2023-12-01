import { useState } from "react";
// Icons
import { TfiMenu, TfiClose } from "react-icons/tfi";
// Scroll
import { Link } from "react-scroll";

const Nav = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const dropdownStyle = {
    maxHeight: isMobileOpen ? "200px" : "0",
    opacity: isMobileOpen ? 1 : 0,
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
    visibility: isMobileOpen ? "visible" : "hidden",
  };

  return (
    <nav className="bg-blue p-2 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Branding/Logo (Left Section) */}
        <div className="flex items-center">
          <a
            href="/auto-website"
            className="text-white text-lg font-bold font-righteous"
          >
            EmpireAuto
          </a>
        </div>

        {/* Navigation Links and Mobile Navigation (Right Section) */}
        <div className="flex items-center relative">
          {/* Navigation Links (Visible on Medium and Larger Screens) */}
          <div className={`hidden md:flex space-x-4`}>
            {/* <a href="#intro" className="text-white">
              Home
            </a> */}
            <Link
              to="intro"
              smooth={true}
              duration={500}
              className="text-white font-roboto hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md cursor-pointer"
            >
              Home
            </Link>
            {/* <a href="#images" className="text-white">
              About
            </a> */}
            <Link
              to="images"
              smooth={true}
              duration={500}
              className="text-white font-roboto hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md cursor-pointer"
            >
              About
            </Link>
            {/* <a href="#services" className="text-white">
              Services
            </a> */}
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-white font-roboto hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md cursor-pointer"
            >
              Services
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white font-roboto hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none transition-opacity"
            >
              {isMobileOpen ? <TfiClose size={24} /> : <TfiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Links (Dropdown on Small Screens) */}
          <div
            className="md:hidden absolute top-full right-[-17px] left-auto w-48 max-w-md bg-blue mt-2 py-2 text-right"
            style={dropdownStyle}
          >
            <a
              href="/auto-website"
              className="block text-white px-4 py-2 font-roboto hover:bg-white hover:bg-opacity-10"
            >
              Home
            </a>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block text-white px-4 py-2 font-roboto cursor-pointer hover:bg-white hover:bg-opacity-10"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="block text-white px-4 py-2 font-roboto cursor-pointer hover:bg-white hover:bg-opacity-10"
            >
              Services
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block text-white px-4 py-2 font-roboto cursor-pointer hover:bg-white hover:bg-opacity-10"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
