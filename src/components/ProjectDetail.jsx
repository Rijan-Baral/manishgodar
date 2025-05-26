// import { useParams } from "react-router-dom";
// import { projects } from "./projectsData"; // We'll store project details here
// import Projectcard from "./Projectcard";

// const ProjectDetail = () => {
//   const { id } = useParams(); // Getting the project ID from the URL
//   const project = projects.find((p) => p.id === id); // Finding the project by ID
//   const otherProjects = projects.filter((p) => p.id !== id); // All other projects except the selected one

//   if (!project) return <div>Project not found</div>; // Handle if project is not found

//   return (
//     <div className="p-6">
//       {/* <h1 className="text-3xl font-bold px-2 lg:px-20">{project.name}</h1>
//       <p className="mt-2  text-lg p-2 lg:px-20">{project.work}</p> */}
//       <div className="lg:flex lg:items-start lg:justify-center lg:gap-50 p-2 lg:px-20">
//         <p
//           className="mt-4 px-5"
//           dangerouslySetInnerHTML={{ __html: project.description }}
//         />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 my-6">
//           {project.photos.map((photo, index) => (
//             <img
//               key={index}
//               src={photo}
//               alt={`Project photo ${index + 1}`}
//               className="w-full  aspect-video object-cover rounded-xl shadow-md"
//             />
//           ))}
//         </div>
//       </div>
//       <hr className="my-8" />
//       <h2 className="text-2xl p-2 lg:px-20 font-semibold mb-4">
//         Other Projects
//       </h2>
//       <div className="flex justify-center flex-wrap gap-2 lg:gap-5">
//         {otherProjects.map((p) => (
//           <Projectcard
//             key={p.id}
//             id={p.id}
//             name={p.name}
//             work={p.work}
//             photo={p.photos[0]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;

import { useParams } from "react-router-dom";
import { projects } from "./projectsData"; // We'll store project details here
import Projectcard from "./Projectcard";

const ProjectDetail = () => {
  const { id } = useParams(); // Getting the project ID from the URL
  const project = projects.find((p) => p.id === id); // Finding the project by ID
  const otherProjects = projects.filter((p) => p.id !== id); // All other projects except the selected one

  if (!project) return <div>Project not found</div>; // Handle if project is not found

  return (
    <div className="p-6">
      <div className="lg:flex lg:items-start lg:justify-center lg:gap-16 p-2 lg:px-20">
        {/* Description */}
        <div className="lg:w-1/2 w-full mt-4 px-5">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

        {/* Images */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 my-6">
          {project.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Project photo ${index + 1}`}
              className="w-full aspect-video object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>

      <hr className="my-8" />

      <h2 className="text-2xl p-2 lg:px-20 font-semibold mb-4">
        Other Projects
      </h2>
      <div className="flex justify-center flex-wrap gap-2 lg:gap-5">
        {otherProjects.map((p) => (
          <Projectcard
            key={p.id}
            id={p.id}
            name={p.name}
            work={p.work}
            photo={p.photos[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
