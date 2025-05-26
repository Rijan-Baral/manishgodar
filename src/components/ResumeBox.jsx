import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ResumeBox = ({ direction }) => {
  return (
    <div
      className={` h-full flex ${direction} w-full gap-1 px-2 sm:px-12 md:px-28 lg:px-30 h-50 text-2xl font-pop font-bold`}
    >
      <div className="h-80 w-[70%] bg-black-shade rounded-xl ">
        <h1 className="p-5">EDUCATION</h1>
      </div>
      <div className=" h-full w-[30%] bg-black-shade rounded-xl">
        <h1 className="p-5">skills</h1>
      </div>
    </div>
  );
};

export default ResumeBox;
