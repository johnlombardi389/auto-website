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
        <FaPhoneAlt className="inline-block mr-2" />
        <span>Call us: 123-456-7890</span>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mb-8 space-x-4">
        <a href="#" className="text-white">
          <FaFacebook size={25} />
        </a>
        <a href="#" className="text-white">
          <FaInstagram size={25} />
        </a>
        <a href="#" className="text-white">
          <FaLinkedin size={25} />
        </a>
        <a href="#" className="text-white">
          <FaTwitter size={25} />
        </a>
      </div>

      {/* Company Address and Working Hours */}
      <div>
        <p className="mb-2">20 W 34th St., New York, NY 10001</p>
        {/* <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
        <p>Saturday: 9:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p> */}
      </div>
    </footer>
  );
};

export default Footer;
