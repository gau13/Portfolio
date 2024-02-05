import React from "react";
// import work from "../../work-1.png";
// import work2 from "../../work-2.png";
import work3 from "../../work-3.png";
import movix from "./pics/movix2.png";
import social from "./pics/social2.png";
import auth from "./pics/auth1.png";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./Projects.scss";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src={movix} />
            <div className="layer">
              <h3>Movix streaming App</h3>
              <p>
                Created app using Frontend Tech stack React.js, Redux-Toolkit,
                TMDB API, other React libraries
              </p>
              <a href="https://github.com/gau13/Movix-app">
                <FaExternalLinkAlt className="link" />
              </a>{" "}
            </div>
          </div>
          <div className="work">
            <img src={social} />
            <div className="layer">
              <h3>Social media app</h3>
              <p>
                Created app using React.js, Node.js, Express, MongoDB, User
                Authentication, complete MERN stack project.
              </p>
              <a href="https://github.com/gau13/Social-Media-App">
                <FaExternalLinkAlt className="link" />
              </a>{" "}
            </div>
          </div>
          <div className="work">
            <img src={auth} />
            <div className="layer">
              <h3>User Authentication</h3>
              <p>
                Complete user authentication using Node.js, Express, MongoDB
                using JWT webtoken,cookies etc.
              </p>
              <a href="https://github.com/gau13/User-Auth">
                <FaExternalLinkAlt className="link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
