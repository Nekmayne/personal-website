import React from "react";
import "./About.css";
import Profile from "../images/profile.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <img src={Profile} alt="profile" />
        <div className="column-2">
          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
