import React from 'react';
import avatarImage from '../assets/motorcycle.jpg';
import '../styles/App.css';


function AboutMe() {
  const aboutMeStyle = {
    backgroundColor: 'black',
    borderRadius: '50px',
    padding: '20px',
  }
  return (
    <div style ={aboutMeStyle}>
      <h2 className="section-title">Megan Glorioso</h2>
      <div className="bio-container">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <p className="bio">
          Hi, I'm Megan!<br />
          <br />
          I was born in Las Vegas, Nevada and grew up in Tucson, Arizona. I have a passion for traveling, anime, and video games, which take up most of my time aside from work and school. I have yet to finish Demon Slayer, so no spoilers please! I have a beautiful daughter and fiancé, who make me so happy. I also have two Rottweilers and two tortoises that help complete my family. I currently have an Associates degree in Computer Programming, and I am on track to get my Bachelors of Information Technology in late 2024. I have completed University of Arizona's coding bootcamp in July 2023. I currently work at Sherwin William's part-time, but I am hoping to transition to the tech industry soon. My key skills include computer configuration, troubleshooting, problem solving, punctuality, attention to detail, and having a growth mindset. Having a variety of experiences with coding has come with many benefits. I have learned the basics on:
          <br />
          <br />
          JavaScript
          <br />
          HTML
          <br />
          CSS
          <br />
          JQuery
          <br />
          Bootstrap
          <br />
          Node.js
          <br />
          GitHub
          <br />
          SQL
          <br />
          MongoDB
          <br />
          React
          <br />
          <br />
          I truly have a passion for coding and all aspects of technology. I cannot wait to learn more programming languages the deeper I get into the tech industry.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;