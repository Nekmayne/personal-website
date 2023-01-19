import React from "react";
import "./Projects.css";
import "react-multi-carousel/lib/styles.css";
import crypto1 from "../images/crypto1.png";
import personaltrainer from "../images/personaltrainer.png";
import weather from "../images/weather.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="container2">
        <div className="card card1">
          <img
            className="project-img"
            src={personaltrainer}
            alt="PersonalTrainer"
          />
          <a
            className="project-"
            href="https://github.com/Nekmayne/PTfront"
            target="_blank"
            rel="noreferrer"
          >
            PersonalTrainer
          </a>
        </div>

        <div className="card card2">
          <img className="project2-img" src={weather} alt="WeatherApp" />
          <a
            className="project-"
            href="https://github.com/Nekmayne/weatherApp-vite"
            target="_blank"
            rel="noreferrer"
          >
            WeatherApp
          </a>
        </div>

        <div className="card card3">
          <img className="project-img" src={crypto1} alt="Crypto" />
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
