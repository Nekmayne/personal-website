import React from "react";
import { Link } from "react-scroll";
import "animate.css";
import Profile from "../images/profile.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="container" id="main">
        <div className="item-1">
          <h1 className="animate__animated animate__fadeInDown">Hello, it's</h1>{" "}
          <h1 className="animate__animated animate__fadeInDown">Joonas</h1>{" "}
          <p style={{ color: "white" }}>
            My name is Joonas Niskanen and I will soon graduate as a software
            developer.
          </p>{" "}
          <p style={{ color: "white" }}>
            I am passionate about software development and I am excited to begin
            my career in the field.
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
