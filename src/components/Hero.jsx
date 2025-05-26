import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import photo from "../assets/photos/photo.png";
import Button from "./Button";
import { photos } from "./Photos";
import Span from "./Span";

const Hero = () => {
  const circleref = useRef(null);
  const textref = useRef(null);
  const photoref = useRef(null);
  const circledivref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      photoref.current,
      {
        xPercent: +10, // Start position offscreen to the left
        opacity: 0, // Start as invisible
      },
      {
        xPercent: 0, // End position at normal place
        opacity: 1, // Fully visible
        ease: "power4.out", // Smooth easing
        duration: 0.8,
        // Animation duration
        delay: 1, // Delay before the animation starts
      }
    );

    gsap.fromTo(
      textref.current,
      {
        xPercent: -10, // Start position offscreen to the left
        opacity: 0, // Start as invisible
      },
      {
        xPercent: 0, // End position at normal place
        opacity: 1, // Fully visible
        ease: "power4.out", // Smooth easing
        duration: 0.8,
        // Animation duration
        delay: 1, // Delay before the animation starts
      }
    );

    gsap.fromTo(
      circledivref.current,
      {
        yPercent: +100, // Start position offscreen to the left
        opacity: 0, // Start as invisible
      },
      {
        yPercent: 0, // End position at normal place
        opacity: 1, // Fully visible
        ease: "power4.out", // Smooth easing
        duration: 0.8,
        // Animation duration
        delay: 0.6, // Delay before the animation starts
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(circleref.current, {
      xPercent: -100, // Move left when scrolling down, right when scrolling up
      duration: 10, // Duration of the animation
      ease: "linear", // Smooth constant speed
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // Prevent glitches at the ends
      },
    });
  });

  return (
    <div className="h-full w-full flex flex-col overflow-hidden no-scrollbar ">
      <div className=" px-4 sm:px-0 md:px-5  lg:mt-4  flex flex-col md:flex-row items-start sm:items-center md:items-start  justify-start md:justify-evenly lg:justify-around transform lg:scale-90 xl:scale-100">
        {/* Left Section */}
        <div
          ref={textref}
          className="flex flex-col gap-8 lg:gap-15 px-2 sm:px-0 lg:px-10 mt-5 sm:mt-15 transform lg:scale-80 xl:scale-100 "
        >
          <div className="flex flex-col">
            <p className="text-base sm:text-xl font-bold px-2 hidden lg:relative lg:inline-block">
              Environmentalist and Project Manager
              {/* <Span
                text="Environmentalist and Project Manager"
                zindex="after:-z-10 "
                height="after:h-[30%]"
              /> */}
            </p>
            <p className="font-medium text-2xl mt-1 px-2">I am</p>
            <h1 className="text-7xl lg:text-9xl font-bold leading-15 lg:leading-22">
              <Span
                text="MANISH"
                height="after:h-[0.2em]"
                zindex="after:-z-10 "
              />
            </h1>
            <p className="text-base sm:text-xl font-semibold px-1 lg:hidden">
              Environmentalist and Project Manager
            </p>
            <p className="text-base w-[330px] lg:w-[500px] lg:text-[16px] font-regular font-roboto mt-4 lg:mt-8 px-2">
              I help businesses, organizations, and individuals create
              responsible and eco-friendly projects.
            </p>
          </div>
          <Button />
        </div>

        {/* Right Section (Image) */}
        <div
          ref={photoref}
          className=" md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] rounded-4xl mt-2 sm:mt-10 md:mt-15 lg:mt-10 bg-primary  overflow-hidden lg:mx-10  lg:h-xl"
        >
          <img src={photo} alt="photo" className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        ref={circledivref}
        className="w-full mx-8 sm:w-xl md:w-3xl lg:w-5xl xl:w-7xl 2xl:w-8xl self-center overflow-x-hidden  bg-white-shade gray-100 dark:bg-black-shade rounded-2xl  mt-5 "
      >
        <div
          ref={circleref}
          className="flex justify-center gap-5 md:gap-10 whitespace-nowrap  "
        >
          {[...photos, ...photos, ...photos, ...photos].map((pic, index) => {
            return (
              <img
                src={pic}
                key={index}
                alt="photo"
                className="h-18  w-18 rounded-full object-cover flex-shrink-0 mx-4 dark:opacity-80"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
