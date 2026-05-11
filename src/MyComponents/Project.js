import React from 'react';
import './Styles/Project.css';
import card1 from '../Images/card1.jpg';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className="project">
      <h2>My Projects</h2>
      <p>
        Explore my projects, learn more about me, and feel free to get in touch!
      </p>

      <div className="projects-container">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="project-card">
            {/* <img src={card1} alt="Project 1" /> */}
            <div className="project-label">
              <h3>Project 1</h3>
              <p>Portfolio Website -</p>
              <span>A personal portfolio website to showcase my skills and projects.
              </span>
            </div>
          </div>
        </Link>


        <div className="project-card">
          {/* <img src={card1} alt="Project 1" /> */}
          <div className="project-label">
            <h3>Project 2</h3>
            <p>ML-Powered Resume Screener -</p>
            <span>Ranks resumes against job descriptions using NLP and ML techniques.
            </span>
          </div>
        </div>

        <div className="project-card">
          {/* <img src={card1} alt="Project 1" /> */}
          <div className="project-label">
            <h3>Project 3</h3>
            <p>Tech Blog Website -</p>
            <span>A platform for sharing insights and tutorials on the latest technology trends.
            </span>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Project;