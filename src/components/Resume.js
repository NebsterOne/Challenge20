import React from "react";
// import Container from "react-bootstrap/Container";
import importPDF from "../images/Resume.pdf";
import { useState } from "react";

const Resume = () => {
  const [showPDF, setShowPDF] = useState(true);
  const handleClick = () => {
    setShowPDF(!showPDF);
  };

  return (
    <div className="resume">
      <h1 className="pad3 fw-bold">Resume</h1>
      <h3 className="t-resume">
        Print or download my{" "}
        <a className="fst-italic" href="#resumePDF" onClick={handleClick}>
          resume
        </a>
      </h3>

      {showPDF ? (
        <div className="skillList" md="auto"></div>
      ) : (
        <div className="w-100">
          <object
            width="100%"
            height="1000"
            data={importPDF}
            type="application/pdf"
          />
        </div>
      )}

      <div className="setskills">
        <div className="front skillList">
          <h1>Front-End Tech</h1>
          <p>HTML5</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>APIs</p>
          <p>Bootstrap</p>
          <p>GIT</p>
        </div>
        <div className="back skillList">
          <h1>Back-End Tech</h1>
          <p>Node.js</p>
          <p>Jest</p>
          <p>Express.js</p>
          <p>MySQL</p>
          <p>Sequelize</p>
          <p>Object-Relational Mapping(ORM)</p>
          <p>Model-View-Controller(MVC)</p>
        </div>
        <div className="tech skillList">
          <h1>Performance Tech</h1>
          <p>NoSQL</p>
          <p>Progressive Web Applications(PWA)</p>
          <p>MongoDB</p>
          <p>Mongoose</p>
          <p>GraphQL</p>
          <p>React</p>
          <p>MERN</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
