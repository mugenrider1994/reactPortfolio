import React, { useState } from 'react';
import avatarImage from '../assets/motorcycle.jpg';
import '../styles/App.css'


function Contact() {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <div className='contact-container'>
      <img src={avatarImage} alt="Avatar" className="avatar" />
      </div>
      
    </div>
  );
}

export default Contact;