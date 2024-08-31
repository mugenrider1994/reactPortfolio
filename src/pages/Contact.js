import React from 'react';
import avatarImage from '../assets/motorcycle.jpg';
import '../styles/App.css';

function Contact() {
  const email = ['m', 'e', 'g', 'a', 'n', 'g', 'l', 'o', 'r', 'i', 'o', 's', 'o', '2', '0', '1', '6', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm'];
  const decodedEmail = email.join('');

  return (
    <div className='contact'>
      <h2>Megan Smith</h2>
      <div className='contact-container'>
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <p>If you have any questions, feel free to <a href={`mailto:${decodedEmail}`}>contact me</a>.</p>
      </div>
    </div>
  );
}

export default Contact;