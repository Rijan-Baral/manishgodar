import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rounded-t-xl bg-transparent text-center">
      <div className="max-w-7xl mx-auto py-10 px-6">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} className="hover:text-pink-500" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={30} className="hover:text-blue-600" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={30} className="hover:text-blue-700" />
          </a>
          <a href="mailto:example@email.com">
            <FaEnvelope size={30} className="hover:text-yellow-400" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Manish Godar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
