import React from "react";

const Span = ({ text, height }) => {
  return (
    <span
      className={` relative  after:absolute z-10 after:left-0 after:top-[70%] ${height} after:w-full after:bg-primary after:-z-10 after:rounded-2xl after:opacity-70`}
    >
      {text}
    </span>
  );
};

export default Span;
