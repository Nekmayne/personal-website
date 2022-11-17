import React from "react";
import { Link } from "react-scroll";
import "animate.css";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container" id="main">
      <div className="main-text">
        <h1 className="animate__animated animate__fadeInDown">
          Hello, my name is Joonas, and I am a software developer student
          looking for my first job!
        </h1>
        <p className="animate__animated animate__fadeInDown animate__delay-2s">
          Check out the rest of the website by scrolling down or clicking the
          "Read more" button!
        </p>
        <div className="main-buttons">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <button class="button">Read more</button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <button class="button">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
