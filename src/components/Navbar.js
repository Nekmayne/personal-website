import React, { useState, useRef, useEffect } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../images/jn-logo.png";
import "./Navbar.css";

const NavBar = () => {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      closeMobileMenu();
    } else {
      console.log("clicked inside");
    }
  };
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  const closeMobileMenu = () => setMenu(false);

  menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="navbar">
      <nav className="navbar-container">
        <Link to="main" spy={true} smooth={true} offset={0} duration={1000}>
          <img src={logo} alt="logo" />
        </Link>

        <div className="hamburger-menu" onClick={handleMenu}>
          {menu ? (
            <FaTimes size={40} style={{ color: "white" }} />
          ) : (
            <FaHamburger size={40} style={{ color: "white" }} />
          )}
        </div>

        <ul className={menu ? "nav-menu active" : "nav-menu"} ref={refOne}>
          <li className="nav-item">
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-170}
              duration={1000}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Experience
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
