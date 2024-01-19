import React from "react";
import pic from "../../mywork.png";
import "./Aboutme.scss";
import { useState } from "react";
import "../../index.css";

const Aboutme = () => {
  const [toggle, setToggle] = useState(1);

  const updatetoggle = (id) => {
    setToggle(id);
  };

  return (
    // <>
    //   <div className="top">
    //     {" "}
    //   </div>
    <div id="about">
      <h1 className="about">About Me</h1>
      <div className="row">
        <div className="about-col-1">
          <img src={pic} />
        </div>
        <div className="about-col-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            facere error cum eveniet adipisci ullam excepturi dolorum rem
            officiis hic. Facere aut dolorum similique obcaecati ut dolor iusto
            sint nesciunt?
          </p>
          <div class="tab-titles">
            <p
              className={toggle === 1 ? "tab-links active-link " : "tab-links"}
              onClick={() => updatetoggle(1)}
            >
              Skills
            </p>
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
          <div
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
          </div>
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
                  2021 - Current
                </span>
                <br />
                Bynaric Systems Pvt Ltd{" "}
              </li>
              <li>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  2019 - 2021
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
                Fergusson College
              </li>
              <li>
                <span style={{ color: "rgb(195, 195, 14)", fontSize: "15px" }}>
                  2019
                </span>
                <br />
                Fergusson College
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
