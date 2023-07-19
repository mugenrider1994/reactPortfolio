import React from 'react';
import Header from '../components/Header';
import '../styles/Portfolio.css';

function Resume() {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <div>
      <Header />
      <h2>Resume</h2>
      <div>
        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;