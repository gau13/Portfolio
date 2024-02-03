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
            <h2>End-to-End Web Development</h2>
            <p>
              Full Stack Developers are proficient in both front-end and
              back-end technologies. This end-to-end development capability
              enables them to create fully functional and responsive web
              applications.
            </p>
          </div>
          <div>
            <FaCropAlt className="icon" />

            <h2>Database Management and Integration</h2>
            <p>
              Full Stack Developers excel in integrating databases with the
              application's back-end, establishing a seamless flow of data
              between the user interface and the server.
            </p>
          </div>
          <div>
            <FaAppStoreIos className="icon" />

            <h2>API Development and Integration</h2>
            <p>
              They design and develop RESTful or GraphQL APIs that enable data
              exchange between the front-end and back-end of an application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
