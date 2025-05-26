import React from "react";

const Button = () => {
  return (
    <div>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=manish59gc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-4 py-3 lg:px-6 lg:py-4 bg-primary lg:bg-transparent lg:border-2 lg:border-primary hover:scale-105 lg:hover:bg-primary lg:hover:text-white text-sm lg:text-xl shadow-xs shadow-highlight flex font-medium font-pop justify-center items-center rounded-xl cursor-pointer">
          Contact Me
        </button>
      </a>
    </div>
  );
};

export default Button;
