import React from "react";
import "./Projects.css";
import "react-multi-carousel/lib/styles.css";
import citybike from "../images/citybike.png";
import wolt from "../images/wolt.png";
import weather from "../images/weather1.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="container2">
        <div className="card card3">
          <img className="project3-img" src={citybike} alt="Crypto" />
          <a
            href="https://github.com/Nekmayne/citybikeapp-solita"
            target="_blank"
            rel="noreferrer"
          >
            Citybike (in progress)
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
          <a
            href="https://github.com/Nekmayne/Wolt-Calculator"
            target="_blank"
            rel="noreferrer"
          >
            Wolt DeliveryFee Calculator
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
