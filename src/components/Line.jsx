// import React from "react";

// const Line = ({ num, sm, lg }) => {
//   return (
//     <div
//       className={` md:w-[2%] lg: w-auto flex flex-col items-center justify-center ${sm} ${lg}`}
//     >
//       <h1 className="font-pop font-bold text-2xl lg:text-3xl text-center ">
//         {num}
//       </h1>
//       <div
//         className={`h-72 w-6 border-1  rounded-2xl border-black dark:border-white ${sm} ${lg}`}
//       >
//         <div className="h-36 w-5.5 bg-line  rounded-2xl"></div>
//       </div>
//     </div>
//   );
// };

// export default Line;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Line = ({ sm, lg }) => {
  const fillRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const fillElement = fillRef.current;
    const progressBarElement = progressBarRef.current;

    if (fillElement && progressBarElement) {
      gsap.set(fillElement, { height: "0%" }); // Initial state

      // ScrollTrigger to fill the progress bar
      ScrollTrigger.create({
        trigger: progressBarElement,
        start: "top 60%", // Start animation when top reaches 40% of the viewport
        end: "bottom 20%", // End animation when bottom reaches 20% of the viewport
        onEnter: () => {
          gsap.to(fillElement, {
            height: "100%", // Fill the bar
            duration: 0.5, // Duration of the fill
            ease: "power2.out", // Smooth easing
          });
        },
        onLeaveBack: () => {
          // Get the element's center position
          const elementCenter =
            progressBarElement.getBoundingClientRect().top +
            progressBarElement.offsetHeight / 2;
          const bottomOffset = window.innerHeight;

          // Trigger emptying the bar only when the center of the element reaches the bottom of the viewport
          if (elementCenter < bottomOffset) {
            gsap.to(fillElement, {
              height: "0%", // Empty the bar
              duration: 0.3, // Duration for the emptying
              ease: "power2.out", // Smooth easing
            });
          }
        },
        scrub: true, // Smooth scrub effect
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up when component unmounts
    };
  }, []);

  return (
    <div
      ref={progressBarRef}
      className={`h-72 w-3 border-2 rounded-2xl border-black dark:border-white ${sm} ${lg}`}
    >
      <div
        ref={fillRef}
        className="h-36 w-2.5 bg-line rounded-2xl origin-bottom"
        style={{ transformOrigin: "bottom" }}
      ></div>
    </div>
  );
};

export default Line;
