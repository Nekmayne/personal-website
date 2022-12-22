import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <p> &copy; joonasniskanen 2022</p>
      <h1>SOCIALS</h1>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/joonas-niskanen/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
        </a>
        <a href="https://github.com/Nekmayne" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="github" icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
