// import React, { useState } from "react";
// import "./Projects.css";
// import ProjectItem from "../components/ProjectItem";
// import { ProjectList } from "../helpers/ProjectList";

// const Projects = ({ ProjectItem, ProjectList }) => {
//   const [flip, setFlip] = useState(false);

//   const flipCard = (index, back) => {
//     setFlip((prev) => {
//       const newFlip = [...prev];
//       newFlip[index] = back;
//       return newFlip;
//     });
//   };

//   return (
//     <div className="projects">
//       <h1 className="my-projects">My Projects</h1>
//       <div className="project-list">
//         {ProjectList.map((project, result) => {
//           return (
//             <ProjectItem
//               name={project.name}
//               id={result}
//               image={project.image}
//               onMouseEnter={() => flipCard(result, true)}
//               onMouseLeave={() => flipCard(result, false)}
//             ></ProjectItem>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Projects;
