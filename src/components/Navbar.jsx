import React, { useEffect, useRef } from "react";
import logowhite from "../assets/logos/whitelogo.png";
import logoblack from "../assets/logos/logo.png";
import ToggleButton from "./ToggleButton";
import gsap from "gsap";
import { useTheme } from "./ThemeContext";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const navref = useRef();
  const { darkmode } = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // 👇 Run only once on first mount
    gsap.fromTo(
      navref.current,
      { yPercent: -100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 0.8,
        delay: 0.6,
      }
    );
  }, []); // ← empty dependency array means it runs only on first mount

  return (
    <nav
      ref={navref}
      className="h-25 w-full text-lg flex justify-between items-center px-5 md:justify-evenly md:gap-10 lg:w-full lg:justify-between lg:text-xl lg:px-15 cursor-pointer"
    >
      <Link to="/">
        <img
          src={darkmode ? logoblack : logowhite}
          alt="logo"
          className="h-12 w-12 lg:h-15 lg:w-15"
        />
      </Link>

      {/* Show links only on homepage */}
      {isHomePage && (
        <ul className="hidden justify-center items-center font-regular font-pop cursor-pointer gap-10 md:flex md:gap-15">
          <a href="#hero">
            <li className="hover:border-b-2">Home</li>
          </a>
          <a href="#about">
            <li className="hover:border-b-2">About Me</li>
          </a>
          <a href="#projects">
            <li className="hover:border-b-2">Projects</li>
          </a>
          <a href="#resume">
            <li className="hover:border-b-2">Resume</li>
          </a>
        </ul>
      )}

      {/* Always show dark mode toggle */}
      <ToggleButton display="block" />
    </nav>
  );
};

export default Navbar;
