import React from "react";
import pic from "../../pic5.png";
import "./Intro.scss";

import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <section className="main">
      <div className="content">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Gaurav Khaddke</span>
          <br />
          <Typewriter
            options={{
              strings: ["Frontend Developer"],
              autoStart: true,
              delay: 75,
              loop: true,
            }}
          />
        </span>
        <p className="intro-para">
          I am a Fullstack Developer who also design websites and Develops
          <br />
          interactive webpages
        </p>
      </div>
      <img src={pic} className="photo " />

      {/* <div className="image-container">
        <img src={pic} className="faded-image " />
        <div className="fading-overlay"></div>
      </div> */}
      {/* <div className="image-container">
        <img src={pic} alt="Your Image" className="faded-image photo" />
        <div className="fading-overla
        y"></div>
      </div> */}
    </section>
  );
};

export default Intro;
