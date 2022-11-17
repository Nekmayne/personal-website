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
        <div className="column-2">
          <h2>
            My name is Joonas and I am 24 year old software developer student.
            Currently I am finishing my studies in Haaga-Helia and seeking for
            my first job. I like doing all sorts of stuff in my freetime which
            includes disc golfing, running, tennis, calisthenics.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
