import React from "react";
import "./Projects.css";
import "react-multi-carousel/lib/styles.css";
import crypto1 from "../images/crypto1.png";
import wolt from "../images/wolt.png";
import weather from "../images/weather1.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="container2">
        <div className="card card3">
          <img className="project3-img" src={crypto1} alt="Crypto" />
          <a
            href="https://github.com/Nekmayne/cryptoTracker"
            target="_blank"
            rel="noreferrer"
          >
            CryptoTracker
          </a>
        </div>
        <div className="card card2">
          <img className="project2-img" src={weather} alt="WeatherApp" />
          <a
            href="https://github.com/Nekmayne/weatherapp"
            target="_blank"
            rel="noreferrer"
          >
            WeatherApp
          </a>
        </div>
        <div className="card card1">
          <img className="project-img" src={wolt} alt="wolt-calculator" />
          <h4>In progress</h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
