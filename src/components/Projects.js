import React from "react";
import "./Projects.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import crypto1 from "../images/crypto1.png";
import personaltrainer from "../images/personaltrainer.png";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 824 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 824, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 740, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="container2">
        <div className="card">
          <img src={personaltrainer} alt="PersonalTrainer" />
          <a
            href="https://github.com/Nekmayne/PTfront"
            target="_blank"
            rel="noreferrer"
          >
            PersonalTrainer
          </a>
        </div>

        <div className="card">
          <img src={crypto1} alt="Crypto" />
          <a
            href="https://github.com/Nekmayne/cryptoTracker"
            target="_blank"
            rel="noreferrer"
          >
            CryptoTracker
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
