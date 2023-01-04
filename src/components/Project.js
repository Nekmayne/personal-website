import React, { useState } from "react";
import "./Project.css";
import crypto1 from "../images/crypto1.png";
import schoolproject from "../images/schoolproject.png";
import personaltrainer from "../images/personaltrainer.png";

const Project = () => {
  return (
    <div className="projects">
      <div className="bigcontainer">
        <h1 className="main-heading">Projects</h1>
        <div className="about-container">
          <div className="thecard">
            <div className="frontcard">
              <div className="frontcard-text">
                <h1>CryptoTracker App</h1>
              </div>
              <img src={crypto1} alt="haha" />
            </div>
            <div className="backcard">
              <a
                href="https://github.com/Nekmayne/cryptoTracker"
                target="_blank"
                rel="noreferrer"
                className="github-button"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="thecard">
            <div className="frontcard2">
              <div className="frontcard2-text">
                <h1>Invoice System</h1>
              </div>
              <img src={schoolproject} alt="haha" />
            </div>
            <div className="backcard">
              <h1>
                This repo I can't link but technologies used were PHP with
                Laravels framework and Vue.js
              </h1>
            </div>
          </div>
          <div className="thecard">
            <div className="frontcard3">
              <div className="frontcard3-text">
                <h1>Personal Trainer App</h1>
                <img src={personaltrainer} alt="haha" />
              </div>
            </div>
            <div className="backcard">
              <a
                href="https://github.com/Nekmayne/PTfront"
                target="_blank"
                rel="noreferrer"
                className="github-button"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
