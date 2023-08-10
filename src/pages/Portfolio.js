import React from 'react';
import Project from '../components/Project';
import '../styles/App.css';
import LinkedUpImage from '../assets/LinkedUp.png';
import SocialNetworkAPIImage from '../assets/SocialNetworkAPI.png';
import ReadmeGeneratorImage from '../assets/logo512.png';
import OnlyRecipesImage from '../assets/OnlyRecipesScreenshot.png';


function Portfolio() {
  const portfolioStyle = {
    backgroundColor: 'black',
    color: '#007bff',
    padding: '1rem',
  }
  
  const projects = [
    {
      title: 'LinkedUp',
      image: LinkedUpImage,
      deployedLink: 'https://github.com/dapatel4092/LinkedUp-',
      githubLink: 'https://agile-ridge-91799-160d7345b56c.herokuapp.com/',
    },
    {
      title: 'SocialNetworkAPI',
      image: SocialNetworkAPIImage,
      deployedLink: false,
      githubLink: 'https://github.com/mugenrider1994/nosql18',
    },
    {
      title: 'readme-generator1',
      image: ReadmeGeneratorImage,
      deployedLink: false,
      githubLink: 'https://github.com/mugenrider1994/readme-generator1',
    },
    {
      title: 'OnlyRecipes',
      image: OnlyRecipesImage,
      deployedLink: 'https://agile-ridge-91799-160d7345b56c.herokuapp.com/',
      githubLink: 'https://github.com/MarkellDrake/OnlyRecipes',
    },
    
  ];

  return (
    
    <div style={portfolioStyle}>
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
    </div>
  );
}

export default Portfolio;