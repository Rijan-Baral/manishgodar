// import React from "react";
// import Line from "./Line";
// import { AboutMePics } from "./AboutMePics";

// {
//   /* md:block lg:block (helps Tailwind register it) */
// }

// const Details = ({ num, photo, me, title, details, type }) => {
//   const flexClass =
//     type === "flex-row-reverse" ? "md:flex-row-reverse" : "md:flex-row";
//   return (
//     <div
//       className={`flex flex-row ${flexClass} justify-around relative px-5 sm:px-8 lg:px-15 mt-6 md:mt-12 mb-15`}
//     >
//       <AboutMePics sm="hidden" md="block" photo={photo} />
//       <Line sm="hidden" lg="md:block" num={num} />
//       <div
//         className={`md:w-[45%] lg:w-[50%] flex ${type} justify-center gap-5`}
//       >
//         <div className="flex flex-col">
//           <p className="font-pop font-medium">{me}</p>
//           <h1 className="font-pop font-bold text-3xl">{title}</h1>
//           <p className="w-full md:w-80 lg:w-100 font-roboto mt-4 lg:mt-6 lg:text-[16px] text-justify">
//             {details}
//           </p>
//         </div>
//         <Line lg="md:hidden" num={num} />
//       </div>
//     </div>
//   );
// };

// export default Details;
import React, { useEffect, useRef } from "react";
import { AboutMePics } from "./AboutMePics";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Line from "./Line"; // Ensure Line component is imported correctly

gsap.registerPlugin(ScrollTrigger);

const Details = ({ num, photo, me, title, details, type }) => {
  const flexClass =
    type === "flex-row-reverse" ? "md:flex-row-reverse" : "md:flex-row";
  const detailsRef = useRef(null); // Reference to the entire Details component

  useEffect(() => {
    const detailsElement = detailsRef.current;

    if (detailsElement) {
      // Set initial opacity to a dim state (e.g., 0.2)
      gsap.set(detailsElement, { opacity: 0.2 });

      // ScrollTrigger for Spotlight Effect
      ScrollTrigger.create({
        trigger: detailsElement,
        start: "top 60%", // When the element's top reaches 40% from the top of the screen
        end: "bottom top", // When the element leaves the viewport
        scrub: true, // Sync the animation with scroll position

        onEnter: () => {
          // Set opacity to 100% when the element enters the spotlight
          gsap.to(detailsElement, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          // Set opacity to initial value (e.g., 0.2) when it leaves or scrolls back
          gsap.to(detailsElement, {
            opacity: 0.2,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });

      return () => {
        // Clean up ScrollTrigger on component unmount
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      ref={detailsRef}
      className={`flex flex-row ${flexClass} justify-around relative px-5 sm:px-8 lg:px-15 mt-6 md:mt-12 mb-15`}
    >
      <AboutMePics sm="hidden" md="block" photo={photo} />
      <Line sm="hidden" lg="md:block" num={num} />
      <div
        className={`md:w-[45%] lg:w-[50%] flex ${type} justify-center gap-5`}
      >
        <div className="flex flex-col">
          <p className="font-pop font-medium">{me}</p>
          <h1 className="font-pop font-bold text-3xl">{title}</h1>
          <p className="w-full md:w-80 lg:w-100 font-roboto mt-4 lg:mt-4 lg:text-[18px] text-justify">
            {details}
          </p>
        </div>
        <Line lg="md:hidden" num={num} />
      </div>
    </div>
  );
};

export default Details;
