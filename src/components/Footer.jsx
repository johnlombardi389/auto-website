import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto text-center">
      {/* Phone Number */}
      <div className="mb-4">
        <FaPhoneAlt size={25} className="inline-block mr-2" />
        <span className="text-lg font-bold font-montserrat">
          Call us: 123-456-7890
        </span>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mb-8 space-x-4">
        <a href="#" className="text-white">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-white">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-white">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="text-white">
          <FaTwitter size={20} />
        </a>
      </div>

      {/* Company Address and Working Hours */}
      <div>
        <p className="mb-2 font-roboto">20 W 34th St., New York, NY 10001</p>
      </div>
    </footer>
  );
};

export default Footer;
