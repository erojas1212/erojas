import React from "react";
import Using_PC from "../Images/Using_PC.png";

const About = () => {
  return (
    <div className="about-div-container">
      <div className="about-container">
        <div className="image-container">
          <img className="using_pc" src={Using_PC} alt="Using_PC" />
        </div>

        <div className="text-container">
          <h1 className="about-me">Eduardo Rojas</h1>

          <p className="p-about">
            I've got a thing for crafting digital experiences that leave a mark.
            My journey as a web developer has been a thrilling ride of turning
            intricate code into eye-catching designs. I'm all about making the
            virtual world not only functional but also visually striking.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
