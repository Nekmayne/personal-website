import React from "react";
import "./About.css";
import Profile from "../images/profile.png";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="container">
        <div className="about-image">
          <img src={Profile} alt="profile" />
        </div>
        <div className="column-1">
          <h2>
            My name is Joonas, and I am a 24-year-old software developer
            student. I am finishing my studies in Haaga-Helia and seeking my
            first job. Disc golfing, running, tennis, and calisthenics are my
            go-to activities in my free time.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
