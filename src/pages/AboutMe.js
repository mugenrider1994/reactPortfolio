import React from 'react';
import avatarImage from '../assets/motorcycle.jpg';
import '../styles/Portfolio.css'; // Import your custom CSS file for styling

function AboutMe() {
  return (
    <div>
      <h2 className="section-title">About Me</h2>
      <div className="bio-container">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <p className="bio">
         Growth Mindset
        </p>
      </div>
    </div>
  );
}

export default AboutMe;