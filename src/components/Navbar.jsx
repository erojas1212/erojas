import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <nav className="nav">
        <ul className="container">
          <li>
            <button onClick={() => handleNavigation("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/contact")}>Contact</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/resume")}>Resume</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
