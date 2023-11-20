import { useState } from "react";
import { TfiMenu, TfiClose } from "react-icons/tfi";

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
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Branding/Logo (Left Section) */}
        <div className="flex items-center">
          <a href="/" className="text-white text-lg font-bold">
            AutoRepair
          </a>
        </div>

        {/* Navigation Links and Mobile Navigation (Right Section) */}
        <div className="flex items-center relative">
          {/* Navigation Links (Visible on Medium and Larger Screens) */}
          <div className={`hidden md:flex space-x-4`}>
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/about" className="text-white">
              About
            </a>
            <a href="/services" className="text-white">
              Services
            </a>
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
            className="md:hidden absolute top-full right-[-17px] left-auto w-48 max-w-md bg-gray-800 mt-2 py-2 text-right"
            style={dropdownStyle}
          >
            <a href="/" className="block text-white px-4 py-2">
              Home
            </a>
            <a href="/about" className="block text-white px-4 py-2">
              About
            </a>
            <a href="/services" className="block text-white px-4 py-2">
              Services
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
