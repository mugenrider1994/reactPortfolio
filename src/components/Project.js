import React from 'react';
import '../styles/App.css'

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Application</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
}

export default Project;