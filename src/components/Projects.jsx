import React from "react";
import ProjectCard from "./ProjectCard";
import OptOrNotSS from "../Images/OptOrNotSS.png";
import AnimeVerseSS from "../Images/AnimeVerseSS.png";
import historyAppSS from "../Images/historyAppSS.png"

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
      </div>

      {/* Project 1 */}
      <ProjectCard
        title="Opt or Not"
        description="Opt or Not is a full-stack web application designed to engage users in thought-provoking 'Would You Rather?' scenarios. Leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack, Opt or Not offers users an interactive platform to explore hypothetical situations and make choices between two options."
        image={OptOrNotSS}
        link="https://optornot.onrender.com/"
        githubLink="https://github.com/erojas1212/OptOrNot"
      />

      {/* Project 2 */}
      <ProjectCard
        title="World History"
        description="History Hub is a comprehensive web application designed to explore and manage historical events effortlessly. Leveraging cutting-edge technologies like the MERN (MongoDB, Express.js, React.js, Node.js) stack, History Hub provides a seamless user experience for accessing, adding, editing, and deleting historical events."
        image={historyAppSS}
        link="https://history-2s9x.onrender.com/"
        githubLink="https://github.com/erojas1212/history"
      />

      {/* Project 3 */}
      <ProjectCard
        title="Anime Verse"
        description="AnimeVerse is a user-friendly platform with a responsive search bar for easy exploration of anime titles. It provides curated lists for browsing and detailed information on selected anime, allowing users to add favorites for personalized content."
        image={AnimeVerseSS}
        link="https://animeverse-z1km.onrender.com/"
        githubLink="https://github.com/erojas1212/animeverse"
      />
    </div>
  );
};

export default Projects;
