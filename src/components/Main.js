import React from "react";
import { Link } from "react-scroll";
import "animate.css";
import "./Main.css";
import TrackVisibility from "react-on-screen";

const Main = () => {
  return (
    <div className="main-container" id="main">
      <div className="main-text">
        <h1 className="animate__animated animate__fadeInLeft">
          Hello, my name is Joonas and I am a sowftware developer student
          looking for my first job!
        </h1>
        <p>This is my first proper website and it is done using React.</p>
        <p>Check out rest of the website by scrolling down!</p>

        <Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>
          <button class="button">Read more</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
