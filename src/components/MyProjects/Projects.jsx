import React from "react";
import work from "../../work-1.png";
import work2 from "../../work-2.png";
import work3 from "../../work-3.png";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./Projects.scss";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src={work} />
            <div className="layer">
              <h3>social media app</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                nobis.
              </p>
              <FaExternalLinkAlt className="link" />
            </div>
          </div>
          <div className="work">
            <img src={work2} />
            <div className="layer">
              <h3>social media app</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                nobis.
              </p>
              <FaExternalLinkAlt className="link" />
            </div>
          </div>
          <div className="work">
            <img src={work3} />
            <div className="layer">
              <h3>social media app</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                nobis.
              </p>
              <FaExternalLinkAlt className="link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
