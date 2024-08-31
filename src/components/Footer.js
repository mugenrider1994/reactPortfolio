import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
  }
  return (
    <footer style={footerStyle}>
      <div>
        <a href="https://github.com/mugenrider1994" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FontAwesomeIcon icon={faGithub} size="2x" color="#6e5494" />
        </a>
        <a href="https://www.linkedin.com/in/megan-smith-751434275" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0072b1" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;