import React from "react";

const ProjectCard = ({ title, description, image, link, githubLink }) => {
  return (
    <div className="project">
      <div className="projects-text">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="project-title">{title}</h3>
        </a>
        <p className="project-description">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <button className="github-button">View on GitHub</button>
        </a>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <img className="project-img" src={image} alt={title} />
      </a>
    </div>
  );
};

export default ProjectCard;
