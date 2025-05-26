import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  return (
    <footer className="rounded-t-xl bg-transparent text-center">
      <div className="max-w-7xl mx-auto py-10 px-6">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={
              isMobile
                ? "instagram://user?username=your_username"
                : "https://www.instagram.com/your_username"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} className="hover:text-pink-500" />
          </a>
          <a
            href={
              isMobile
                ? "fb://profile/your_profile_id"
                : "https://www.facebook.com/your_profile"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={30} className="hover:text-blue-600" />
          </a>
          <a
            href={
              isMobile
                ? "linkedin://profile/your_profile_id"
                : "https://www.linkedin.com/in/your_profile"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={30} className="hover:text-blue-700" />
          </a>
          <a
            href={
              isMobile
                ? "mailto:manish59gc@gmail.com"
                : "https://mail.google.com/mail/?view=cm&fs=1&to=manish59gc@gmail.com"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
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
