import React, { useState } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import "./Navbar.css";
import { BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  const closeMobileMenu = () => setMenu(false);

  return (
    <Router>
      <div className="navbar">
        <nav className="navigation">
          <Link to="main" spy={true} smooth={true} offset={0} duration={1000}>
            <img src={logo} alt="logo" />
          </Link>

          <div className="hamburger-menu" onClick={handleMenu}>
            {menu ? (
              <FaTimes size={30} style={{ color: "white" }} />
            ) : (
              <FaHamburger size={30} style={{ color: "white" }} />
            )}
          </div>
          <div
            className={menu ? "navigation-menu expanded" : "navigation-menu"}
          >
            <ul>
              <li>
                <Link
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={1000}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Router>
  );
};

export default NavBar;
