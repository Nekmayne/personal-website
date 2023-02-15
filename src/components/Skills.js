import React from "react";
import "./Skills.css";
import html from "../images/html.png";
import javascript from "../images/javascript.png";
import reactImage from "../images/react.png";
import tailwind from "../images/tailwind.png";
import node from "../images/node.png";
import typescript from "../images/typescript.png";
import vue from "../images/vue.png";
import MongoDB from "../images/mongodb.png";
import docker from "../images/docker.png";
import css3 from "../images/css3.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      src: html,
      style: { boxShadow: "0px 4px 12px rgba(240, 148, 23, 0.5)" },
    },

    {
      id: 2,
      title: "JavaScript",
      src: javascript,
      style: { boxShadow: "0px 4px 12px rgba(245, 220, 66, 0.5)" },
    },
    {
      id: 3,
      title: "React",
      src: reactImage,
      style: { boxShadow: "0px 4px 12px rgba(97, 218, 251, 0.5)" },
    },

    {
      id: 4,
      title: "Tailwind",
      src: tailwind,
      style: { boxShadow: "0px 4px 12px rgba(78, 140, 201, 0.5)" },
    },

    {
      id: 5,
      title: "Node JS",
      src: node,
      style: { boxShadow: "0px 4px 12px rgba(113, 204, 46, 0.5)" },
    },
    {
      id: 6,
      title: "Typescript",
      src: typescript,
      style: { boxShadow: "0px 4px 12px rgba(39, 122, 182, 0.5)" },
    },

    {
      id: 7,
      title: "Vue",
      src: vue,
      style: { boxShadow: "0px 4px 12px rgba(65, 184, 131, 0.5)" },
    },
    {
      id: 8,
      title: "MongoDB",
      src: MongoDB,
      style: { boxShadow: "0px 4px 12px rgba(73, 155, 86, 0.5)" },
    },

    {
      id: 9,
      title: "Docker",
      src: docker,
      style: { boxShadow: "0px 4px 12px rgba(0, 137, 182, 0.5)" },
    },

    {
      id: 10,
      title: "CSS3",
      src: css3,
      style: { boxShadow: "0px 4px 12px rgba(242, 242, 242, 0.5)" },
    },
  ];

  return (
    <div id="skills" className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <p className="skills-text">These are the technologies I have used!</p>
      <div className="skills-grid">
        {skills.map(({ id, title, src, style }) => (
          <div key={id} className="skills-card" style={style}>
            <img src={src} width="64px" height="64px" alt={title} />
            <h3 className="skills-card-title">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
