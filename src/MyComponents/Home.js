import React from 'react';
import './Styles/Home.css';
import { useNavigate } from 'react-router-dom';
import ProfilePhoto from '../Images/Profile photo.jpeg';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects');
  };
  return (
    <div className="home">
      <div className="main-home">
        <p>Hello, I'm <span className='span1'>Hemant</span>
          <br />
          <br />
          A <span className='span2'>Frontend Developer</span> and <span className='span2'>Machine Learning Engineer</span> with a passion for building responsive web interfaces and intelligent systems. I specialize in creating seamless user experiences backed by data-driven solutions, using tools like React, Python, and modern ML frameworks.
          <br />
          <br />
          Feel free to explore my work and reach out for collaboration or opportunities.
        </p>

        <img src={ProfilePhoto} alt="Profile-pictuce" />
        
      </div>

      <div className="featured-project">
        <h2>Featured Project: Portfolio Website</h2>
        <p>A personal portfolio website showcasing my projects, skills and experience. Built on React with styled components for a modern look and feel.</p>
      </div>

      <button onClick={handleClick}>View all projects</button>

    </div>

  );
}

export default Home;