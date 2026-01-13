import React from 'react';
import './Styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="main-about">
        <p>
          As a combined Frontend Developer and Machine Learning Engineer, I specialize in creating seamless, data-driven applications. I leverage React for building intuitive user experiences and Python with modern ML frameworks to power intelligent backend systems. My goal is to join a fast-paced team where I can solve complex, real-world problems and contribute impactful solutions at the intersection of web interface and machine intelligence.
        </p>
        <button className='resume-btn' onClick={() => window.open('/My Resume.pdf', '_blank')}>My Resume</button>
      </div>

    </div> 
  );
}

export default About;