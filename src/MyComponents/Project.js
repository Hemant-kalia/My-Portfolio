import React from 'react';
import './Styles/Project.css';
import card1 from '../Images/card1.jpg'; 

function Project() {
  return (
      <div className="project">
        <h2>My Projects</h2>
        <p>
          Explore my projects, learn more about me, and feel free to get in touch!
        </p>

        <div className="projects-container">

          <div className="project-card">
            <img src={card1} alt="Project 1" />
            <div className="project-label">
              <h3>Project 1</h3>
              <p>Portfolio Website</p>
            </div>
          </div>

          <div className="project-card">
            <img src={card1} alt="Project 2" />
            <div className="project-label">
              <h3>Project 2</h3>
              <p>Portfolio Website</p>
            </div>
          </div>

        </div>
      </div>
    
  );
}

export default Project;