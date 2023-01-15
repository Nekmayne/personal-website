import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";
import "animate.css";
import Profile from "../images/profile.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="container" id="main">
        <div className="item-1">
          <h1 className="animate__animated animate__fadeInDown">Hello, I am</h1>{" "}
          <h1 className="animate__animated animate__fadeInDown">Joonas</h1>{" "}
          <Typed
            strings={[
              "I like software development",
              "I am eager to learn and grow my skills",
              "Good foundation in Front and Backend",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          <p>
            As a soon-to-be graduating software developer from Haaga-Helia, I am
            eager to start my career in the software development field and bring
            my skills and experience to a team.{" "}
          </p>{" "}
          <p>
            My background in JavaScript, React, and Node has given me a solid
            foundation in frontend and backend development. I have also gained
            basic knowledge of databases and experience working with agile
            methods.
          </p>{" "}
          <p>
            As a recent graduate, I am highly motivated to continue learning and
            growing as a software developer and am excited for the opportunity
            to apply my skills in a professional setting. I am looking for a
            entry level position where I can learn and grow as a developer.
          </p>
        </div>
        <div className="item-2">
          <img src={Profile} alt="profile" width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default Main;
