import React from "react";
import "./Skills.scss";
const Skills = () => {
  const logos = [
    {
      name: "HTML5",
      url: "https://www.w3.org/html/logo/img/mark-word-icon.png",
    },
    {
      name: "CSS",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "Bootstrap",
      url: "data:image/png;base64,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",
    },
    {
      name: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Redux",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    },
    {
      name: "Node.js",
      url: "data:image/png;base64,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",
    },
    {
      name: "Express.js",
      url: "https://expressjs.com/images/express-facebook-share.png",
    },
    {
      name: "MongoDB",
      url: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    },
    {
      name: "GitHub",
      url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
  ];

  const firstRowLogos = logos.slice(0, 5);
  const secondRowLogos = logos.slice(5, 10);

  return (
    <div id="skills">
      <div className="container">
        <h1 className="sub-title">My Skills</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "10px",
            padding: "20px",
            margin: "30px",
          }}
        >
          <div className="first-sec">
            {firstRowLogos.map((logo, index) => (
              <div key={index} style={{ textAlign: "center", margin: "10px" }}>
                <img
                  src={logo.url}
                  alt={`${logo.name} Logo`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "0",
                  }}
                >
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
          <div className="second-sec">
            {secondRowLogos.map((logo, index) => (
              <div key={index} style={{ textAlign: "center", margin: "10px" }}>
                <img
                  src={logo.url}
                  alt={`${logo.name} Logo`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "0",
                  }}
                >
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
