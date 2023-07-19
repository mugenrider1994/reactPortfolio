import React from 'react';
import Navigation from './Navigation';

function Header({ currentSection, handleNavigation }) {
  const developerName = 'Megan Glorioso'; // Replace with the actual developer's name

  return (
    <header>
      <h1>{developerName}</h1>
      <Navigation currentSection={currentSection} handleNavigation={handleNavigation} />
    </header>
  );
}

export default Header;