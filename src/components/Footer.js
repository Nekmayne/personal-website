import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <p> &copy; joonasniskanen 2022</p>
      <h1>SOCIALS</h1>
      <div className="social-icons">
        <a href="https://linkedin.com">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
        </a>
        <a href="https://github.com">
          <FontAwesomeIcon className="github" icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
