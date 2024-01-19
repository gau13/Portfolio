import React from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="name">
          <span className="first-letter">G</span> K
        </div>
        <div className="options">
          <Link
            activeClass="active"
            to="hello"
            spy={true}
            smooth={true}
            offset={-350}
            duration={500}
            className="options-item"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="options-item"
          >
            About me
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-155}
            duration={500}
            className="options-item"
          >
            My services
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="options-item"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="options-item"
          >
            Contact Me
          </Link>
        </div>

        <div className="mobMenu">
          <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
        </div>

        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="hello"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            className="list-item"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="list-item"
            onClick={() => setShowMenu(false)}
          >
            About me
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-155}
            duration={500}
            className="list-item"
            onClick={() => setShowMenu(false)}
          >
            My services
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="list-item"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="list-item"
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
