import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        {/* Top Section: Phone Number and Social Media Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Phone Number */}
          <div className="mb-2 md:mb-0">
            <FaPhoneAlt className="inline-block mr-2" />
            <span>Call us: +1234567890</span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-white">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Bottom Section: Logo and Additional Links */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            {/* Replace 'YourLogo' with your actual logo component or image */}
            <img src="your-logo.png" alt="Company Logo" className="w-12 h-12" />
          </div>

          {/* Additional Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
