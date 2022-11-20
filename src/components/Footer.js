import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <p> &copy; joonasniskanen 2022</p>
      <h1>SOCIALS</h1>
      <div className="social-icons">
        <a href="https://facebook.com">
          <FontAwesomeIcon className="facebook" icon={faFacebook} />
        </a>
        <a href="https://twitter.com">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
        </a>
        <a href="https://linkedin.com">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
        </a>
        <a href="https://github.com">
          <FontAwesomeIcon className="github" icon={faGithub} />
        </a>
        <a href="https://youtube.com">
          <FontAwesomeIcon className="youtube" icon={faYoutube} />
        </a>
        <a href="https://whatsapp.com">
          <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
