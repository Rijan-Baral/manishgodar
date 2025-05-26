// import React from "react";
// import Span from "./Span";
// import Projectcard from "./Projectcard";
// import photo1 from "../assets/sitepics/Sunkoshi marine diversion/1.jpg";
// import photo2 from "../assets/sitepics/Sunkoshi marine diversion/7.jpg";
// import photo3 from "../assets/sitepics/budi gandaki/1.jpg";
// import photo4 from "../assets/sitepics/upper tamu hydroproject/1.jpg";
// import photo5 from "../assets/sitepics/rythem hospital/1.webp";
// const Projects = () => {
//   return (
//     <div className="h-full lg:h-full w-full  flex flex-col justify-start items-center">
//       <div className="flex flex-col  text-justify px-2 sm:px-12 md:px-28 lg:px-30  mt-10 ">
//         <h1 className="text-3xl lg:text-5xl font-bold font-pop relative inline-block ">
//           <Span text="PROJECTS" height="after:h-[0.2em]" />
//         </h1>
//         <p className="font-roboto lg:text-base m-1   ">
//           "I have actively contributed to various environmental projects focused
//           on sustainability, conservation, and community awareness. Through
//           these initiatives, I aim to promote a greener future by leveraging
//           innovative solutions and collaborative efforts."
//         </p>
//       </div>
//       <div className="h-full w-full flex justify-evenly flex-wrap gap-5 px-2 sm:px-12 md:px-28 lg:px-30 mt-10 ">
//         <Projectcard
//           id="sunkoshi-diversion"
//           photo={photo1}
//           name="Sunkoshi Marine Diversion"
//           work="Consulting Services"
//         />

//         <Projectcard
//           id="budigandaki"
//           photo={photo3}
//           name="Budigandaki Hydro Project"
//           work="Revised Emp"
//         />
//         <Projectcard
//           id="upper-tasku"
//           photo={photo4}
//           name="Upper Tasku Small Hydropower"
//           work="IEE Study"
//         />

//         <Projectcard
//           id="rhythm-hospital"
//           photo={photo5}
//           name="Rhythm Neuropsychiatry Hospital"
//           work="BES Study"
//         />
//         <Projectcard
//           id="sunkoshi-training"
//           photo={photo2}
//           name="Sunkoshi Marine River Training"
//           work="IEE Study"
//         />
//         <Projectcard
//           id="milan-betani"
//           photo={photo4}
//           name="Milan Basti and Betani Bazaar Sewarage Management Treatment Plant "
//           work="BES Study"
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React, { useState, useEffect } from "react";
import Span from "./Span";
import Projectcard from "./Projectcard";
import photo1 from "../assets/sitepics/Sunkoshi marine diversion/1.jpg";
import photo2 from "../assets/sitepics/Sunkoshi marine diversion/7.jpg";
import photo3 from "../assets/sitepics/budi gandaki/1.jpg";
import photo4 from "../assets/sitepics/upper tamu hydroproject/1.jpg";
import photo5 from "../assets/sitepics/rythem hospital/1.webp";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allProjects = [
    {
      id: "sunkoshi-diversion",
      photo: photo1,
      name: "Sunkoshi Marine Diversion",
      work: "Consulting Services",
    },
    {
      id: "budigandaki",
      photo: photo3,
      name: "Budigandaki Hydro Project",
      work: "Revised Emp",
    },
    {
      id: "upper-tasku",
      photo: photo4,
      name: "Upper Tasku Small Hydropower",
      work: "IEE Study",
    },
    {
      id: "rhythm-hospital",
      photo: photo5,
      name: "Rhythm Neuropsychiatry Hospital",
      work: "BES Study",
    },
    {
      id: "sunkoshi-training",
      photo: photo2,
      name: "Sunkoshi Marine River Training",
      work: "IEE Study",
    },
    {
      id: "milan-betani",
      photo: photo4,
      name: "Milan Basti and Betani Bazaar Sewarage Management Treatment Plant",
      work: "BES Study",
    },
  ];

  const displayedProjects =
    isMobile && !showAll ? allProjects.slice(0, 2) : allProjects;

  return (
    <div className="h-full w-full flex flex-col justify-start items-center">
      <div className="h-full w-full flex flex-col justify-start items-center">
        <div className="flex flex-col text-justify px-2 sm:px-12 md:px-28 lg:px-30 mt-10 w-full">
          <h1 className="text-3xl lg:text-5xl font-bold font-pop relative inline-block">
            <Span text="PROJECTS" height="after:h-[0.2em]" />
          </h1>

          {/* Paragraph section with controlled width */}
          <p className="font-roboto text-base m-1 mt-4 text-justify max-w-5xl w-full ">
            "I have actively contributed to various environmental projects
            focused on sustainability, conservation, and community awareness.
            Through these initiatives, I aim to promote a greener future by
            leveraging innovative solutions and collaborative efforts."
          </p>
        </div>
      </div>

      <div className="h-full w-full flex justify-evenly flex-wrap gap-5 px-2 sm:px-12 md:px-28 lg:px-30 mt-10">
        {displayedProjects.map((project) => (
          <Projectcard
            key={project.id}
            id={project.id}
            photo={project.photo}
            name={project.name}
            work={project.work}
          />
        ))}
      </div>

      {/* Nudge-style toggle (only on mobile) */}
      {isMobile && (
        <div className="mt-8 sm:hidden w-full flex justify-center">
          <div
            onClick={() => setShowAll(!showAll)}
            className="flex flex-col items-center cursor-pointer transition-all duration-300"
          >
            {/* Nudge handle */}
            <div className="w-16 h-1.5 bg-gray-300 rounded-full mb-2 shadow-sm hover:bg-gray-500 transition-colors duration-300" />

            {/* Label */}
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide hover:underline hover:text-blue-600">
              {showAll ? "See Less" : "See More"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
