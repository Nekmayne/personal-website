import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="main-heading">
      <div className="skills-container" id="skills">
        <div className="skills-area">
          <div className="skill-1">
            <h1>Skills</h1>
            <p>
              I have gained some good experience with Javascript and React.
              Additionally, I have some experience working with Node.js and
              databases such as MongoDB and MySQL, but I would like to become
              better in backend development.
            </p>{" "}
          </div>
          <div className="skill-2">
            <p>HTML</p>
            <div class="cont">
              <div class="skills html">80%</div>
            </div>

            <p>CSS</p>
            <div class="cont">
              <div class="skills css">75%</div>
            </div>

            <p>JavaScript</p>
            <div class="cont">
              <div class="skills js">75%</div>
            </div>

            <p>React</p>
            <div class="cont">
              <div class="skills react">70%</div>
            </div>
            <p>Node.Js</p>
            <div class="cont">
              <div class="skills nodejs">65%</div>
            </div>
            <p>Databases</p>
            <div class="cont">
              <div class="skills databases">60%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
