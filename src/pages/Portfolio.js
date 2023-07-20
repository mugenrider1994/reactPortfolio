import React from 'react';
import Project from '../components/Project';
import '../styles/App.css';


function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/username/project1',
    },
    {
      title: 'Project 2',
      image: 'project2.jpg',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/username/project2',
    },
    // Add more project objects as needed
  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;