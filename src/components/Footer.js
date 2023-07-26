import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/mugenrider1994" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/megan-glorioso-751434275" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;