import React from "react";
import pic from "../../mywork.png";
import "./Aboutme.scss";
import { useState } from "react";
import "../../index.css";

const Aboutme = () => {
  const [toggle, setToggle] = useState(2);

  const updatetoggle = (id) => {
    setToggle(id);
  };

  return (
    <div id="about">
      <h1 className="about">About Me</h1>
      <div className="row">
        <div className="about-col-1">
          <img src={pic} />
        </div>
        <div className="about-col-2">
          <p>
            👋Hello! A vibrant and accomplished Full Stack Developer, I am
            Gaurav Khaddke , an individual fueled by curiosity and innovation.
            Armed with a strong technical skill set including, HTML5, CSS3,
            Javascript , React.js, Node.js, etc., I have successfully developed
            several single-page applications and backend APIs
          </p>
          <div class="tab-titles">
            {/* <p
              className={toggle === 1 ? "tab-links active-link " : "tab-links"}
              onClick={() => updatetoggle(1)}
            >
              Skills
            </p> */}
            <p
              className={toggle === 2 ? "tab-links active-link" : "tab-links"}
              onClick={() => updatetoggle(2)}
            >
              Experience
            </p>
            <p
              className={toggle === 3 ? "tab-links active-link" : "tab-links"}
              onClick={() => updatetoggle(3)}
            >
              Education
            </p>
          </div>
          {/* <div
            className={
              toggle === 1 ? "tab-contents active-tab" : "tab-contents"
            }
          >
            <ul>
              <li style={{ fontSize: "15px", textDecoration: "none" }}>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  UI/UX
                </span>
                <br />
                Designing Web/App interfaces
              </li>
              <br />
              <li style={{ fontSize: "15px", textDecoration: "none" }}>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  Web Development
                </span>
                <br />
                Web app Development
              </li>
              <br />

              <li>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  App Development
                </span>
                <br />
                Building Android/iOS apps
              </li>
            </ul>
          </div> */}
          <div className={toggle === 2 ? "show-content" : "tab-contents"}>
            <ul>
              <li>
                <span
                  style={{
                    color: "rgb(195, 195, 14)",
                    fontSize: "15px",
                    listStyle: "none",
                  }}
                >
                  2023 Feb - 2024 Jan
                </span>
                <br />
                Bynaric Systems Pvt Ltd{" "}
              </li>
              <li>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  2019 Aug - 2021 Jan
                </span>
                <br />
                TCS{" "}
              </li>
            </ul>
          </div>
          <div className={toggle === 3 ? "show-content" : "tab-contents"}>
            <ul>
              <li>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  2023
                </span>
                <br />
                Fergusson College (PG)
              </li>
              <li>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  2019
                </span>
                <br />
                Fergusson College (UG)
              </li>
              <li>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  2016
                </span>
                <br />
                S.P College
              </li>
            </ul>
          </div>
          {/* <LabTabs /> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
