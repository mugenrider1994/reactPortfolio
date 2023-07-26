import React from 'react';
import Project from '../components/Project';
import '../styles/App.css';


function Portfolio() {
  const projects = [
    {
      title: 'LinkedUp',
      image: 'LinkedUp.jpg',
      deployedLink: 'https://github.com/dapatel4092/LinkedUp-',
      githubLink: 'https://agile-ridge-91799-160d7345b56c.herokuapp.com/',
    },
    {
      title: 'SocialNetworkAPI',
      image: 'SocialNetworkAPI.jpg',
      githubLink: 'https://github.com/mugenrider1994/nosql18',
    },
    {
      title: 'readme-generator1',
      image: 'logo512.png',
      githubLink: 'https://github.com/mugenrider1994/readme-generator1',
    },
    {
      title: 'OnlyRecipes',
      image: 'OnlyRecipesScreenshot.png',
      deployedLink: 'https://agile-ridge-91799-160d7345b56c.herokuapp.com/',
      githubLink: 'https://github.com/MarkellDrake/OnlyRecipes',
    },
    
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