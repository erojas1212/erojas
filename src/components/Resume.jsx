import React from "react";
import ResumePDF from "../Images/Eduardo Rojas Resume.pdf";

const Resume = () => {

   const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = ResumePDF;
    anchor.download = "Eduardo Rojas Resume.pdf";
    anchor.click();
   }

  return (
    <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>
      <iframe
        src={ResumePDF}
        title="My Resume"
        style={{ width: "100%", height: "100vh" }}
      />
      <button onClick={handleDownload} className="resume-button">Download Resume</button>
    </div>
  );
};

export default Resume;
