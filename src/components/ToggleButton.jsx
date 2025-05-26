import React from "react";
import { useTheme } from "./ThemeContext"; // adjust the path

const ToggleButton = ({ display }) => {
  const { darkmode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`rounded-full bg-black dark:bg-white h-10 w-10 cursor-pointer  ${display} flex items-center justify-center text-white dark:text-black text-xl`}
    >
      <span>{darkmode ? "🌞" : "🌙"}</span>
    </button>
  );
};

export default ToggleButton;
