import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaCropAlt } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

import "./Services.scss";

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <FaCode className="icon" />
            <h2>Web design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              delectus similique odio quae saepe eos,quasi commodi voluptates.
            </p>
          </div>
          <div>
            <FaCropAlt className="icon" />

            <h2>Web design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              delectus similique odio quae saepe eos,quasi commodi voluptates.
            </p>
          </div>
          <div>
            <FaAppStoreIos className="icon" />

            <h2>Web design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              delectus similique odio quae saepe eos,quasi commodi voluptates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
