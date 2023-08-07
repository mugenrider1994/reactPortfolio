import React from 'react';
import '../styles/App.css';


function Resume() {
  return (
    <div className="resume-container">
      <h2>Megan Glorioso</h2>
      <p>Phone: 520-609-9471 | Email: meganglorioso2016@gmail.com | Vail, AZ, 85641</p>
      <p>LinkedIn: Megan Glorioso | LinkedIn | Portfolio: <a href="https://mugenrider1994.github.io/reactPortfolio/">https://mugenrider1994.github.io/reactPortfolio/</a> | GitHub: <a href="https://github.com/mugenrider1994">https://github.com/mugenrider1994</a></p>
      <h3>Front-end Web Developer</h3>
      <p>Front end web developer leveraging background in with specialized knowledge and critical experience in learning technology including using different computer languages and troubleshooting. Earned a certificate in Full Stack Web Development from the University of Arizona Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.</p>
      
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
        <h4>Coding Intern 2022-Present</h4>
        <p>TaskMaster, Tucson, Arizona</p>
        <p>Developed a user-friendly application to bring attention to the needs of construction workers</p>
        <p>Key Accomplishments: Co-developed a user-friendly, intuitive, and secure application from scratch with interactive features to optimize traffic and user experience.</p>
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
      <p>Bachelor of Computer Science – Southern New Hampshire University, 2024</p>
    </div>
  );
}

export default Resume;