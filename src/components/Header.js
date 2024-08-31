import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, setCurrentPage }) {
  const developerName = 'Megan Smith'; // Replace with the actual developer's name

  return (
    <header>
      <h1>{developerName}</h1>
      <Navigation currentPage={ currentPage } setCurrentPage={ setCurrentPage} />
    </header>
  );
}

export default Header;