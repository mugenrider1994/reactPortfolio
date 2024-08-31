import React from 'react';
import '../styles/App.css';


function Resume() {
  return (
    <div className="resume-container">
      <h2>Megan Smith</h2>
      <p>Phone: 520-609-9471 | Email: meganelysesmith24@gmail.com | Vail, AZ, 85641</p>
      <p>LinkedIn: Megan Smith | LinkedIn | Portfolio: <a href="https://mugenrider1994.github.io/reactPortfolio/">https://mugenrider1994.github.io/reactPortfolio/</a> | GitHub: <a href="https://github.com/mugenrider1994">https://github.com/mugenrider1994</a></p>
      <h3>Front-end Web Developer</h3>
      <p>Resolute front-end web developer with a solid foundation in learning technology and a diverse skill set in various programming languages. Holds a certificate in Full Stack Web Development from the University of Arizona Coding Boot Camp. An innovative, analytical thinker with a passion for creating mobile-first applications. Proficient in translating ideas into fully realized projects, with a keen focus on design and development. Key strengths include creativity, effective teamwork, and the ability to take projects from initial concept to successful execution.</p>
      <h3>TECHNICAL SKILLS</h3>
      <p>JavaScript, CSS, HTML, SQL, GitHub, MongoDB, MySQL, React, Node, jQuery, Bootstrap, MERN, Mongoose, Apollo, Express.js, GraphQL, Bulma, Sequelize ORM,</p>
      
      <h3>PROJECTS</h3>
      <div>
        <h4>Interactive Front-End Project</h4>
        <p>Summary: This application was the first group project in the bootcamp. It is a real-world front-end application. This application was an island vacation destinations website with information on common travel destinations and their weather outlook for travel times.</p>
        <p>Role: Lead Contributing Author</p>
        <p>Tools: Use a CSS framework other than Bootstrap, Be deployed to GitHub Pages, Use at least two server-side APIs, Does not use alerts, confirms, or prompts (use modals), Use client-side storage to store persistent data, HTML, CSS, Javascript, Visual Studio</p>
        <p>Links: <a href="https://github.com/dapatel4092/project-1">GitHub</a> | <a href="https://dapatel4092.github.io/project-1/">Deployed App</a></p>
      </div>
      
      <div>
        <h4>OnlyRecipes</h4>
        <p>Summary: This was project two of the coding bootcamp. The purpose of this website is to allow people to look up recipes without having to scroll through all of the extra stories and blogs people tend to add before sharing their recipes. People can create profiles in which they can have a bio and list recipes they uploaded. Recipes that are uploaded will have a comment section.</p>
        <p>Role: Lead Contributing Author</p>
        <p>Tools: Node.js and Express.js to create a RESTful API. Handlebars.js is used for the templating engine. The database is made using MySQL and Sequelize ORM. GET and POST routes are used for retrieving and adding new recipes/data. It was deployed using Heroku. This project required the use of a new package that we as a group have never used before. We chose to use Nodemon. Bulma was used for the CSS framework. Express-session and cookies were included as authentication.</p>
        <p>Links: <a href="https://github.com/MarkellDrake/OnlyRecipes">GitHub</a> | <a href="https://onlyrecipes.herokuapp.com/">Deployed App</a></p>
      </div>
      
      <div>
        <h4>LinkedUp</h4>
        <p>Summary: This was the third and final project for the coding bootcamp. Our application allows users to create a profile Displaying GamerTags, Social media links and even ranks for games. We also have a multitude of different FPS games based on what the gamer wants to play. After selecting a game there is a blog post-like feature that allows the user to leave custom posts that can include how many people they are looking for.</p>
        <p>Role: Lead Contributing Author</p>
        <p>Tools: React, CSS, MongoDB, Mongoose, Apollo, Express, GraphQL, Node</p>
        <p>Links: <a href="https://github.com/dapatel4092/LinkedUp-">GitHub</a> | <a href="https://agile-ridge-91799-160d7345b56c.herokuapp.com/">Deployed App</a></p>
      </div>
      
      <h3>EXPERIENCE</h3>
      <div>
        <h4>Sales Associate/Color Mixer at Sherwin-Williams February 2023- Current</h4>
        <p>Sherwin Williams, Tucson, Arizona</p>
        <p>Provided exceptional customer service by assisting clients in selecting paint colors and products. Mixed and customized paint colors to meet customer specifications with precision.</p>
        <p>Key Accomplishments: Offered expert advice on paint and coatings due to extensive product knowledge. Contributed to a positive team environment while consistently surpassing sales goals.</p>
      </div>
      
      <div>
        <h4>Office Administrator March 2022-October 2022</h4>
        <p>Mesa, Arizona</p>
        <p>Performed bookkeeping functions, troubleshoot technical problems, and manage the day-to-day needs of upper management, such as appointments, travel arrangements, and emails.</p>
        <p>Key Accomplishments: Screened and responded to customer emails within 24 hours. Handled all aspects of quoting for customers with pricing between $4000-$50,000 a job.</p>
      </div>
      
      <div>
        <h4>Stocking Associate 2021-2022</h4>
        <p>Gilbert, Arizona</p>
        <p>Checked the accuracy of shipments and made sure they're stocked in the correct places in the store, as well as inventory items, maintain sales floor, and warehouse inventories.</p>
        <p>Key Accomplishments: Organized assigned departments and maintained cleanliness. Retained knowledge of all products being sold within each brand name section.</p>
      </div>
      
      <div>
        <h4>Color Mixer 2020-2021</h4>
        <p>Tucson, Arizona</p>
        <p>Operate and maintain machines that mix lacquers, solvents and paints in order to produce paint, making sure the end product is according to the specified form.</p>
        <p>Key Accomplishments: Manually matched colors for clients with a 95% success rate. Maintained large machines used for mixing colorant.</p>
      </div>
      
      <h3>EDUCATION</h3>
      <p>Certificate, Full Stack Web Development – University of Arizona, 2023</p>
      <p>Associates of Computer Programming – Mesa Community College, 2021</p>
      <p>Bachelor of Computer Science – Southern New Hampshire University, expected 2025</p>
    </div>
  );
}

export default Resume;