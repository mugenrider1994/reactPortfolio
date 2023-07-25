import React from 'react';

function Navigation({ currentSection, handleNavigation }) {
  const navigationTitles = [
    { id: 'about', title: 'AboutMe' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' },
    { id: 'resume', title: 'Resume' },
  ];

  return (
    <nav>
      <ul>
        {navigationTitles.map((item) => (
          <li key={item.id}>
            <button
              className={currentSection === item.id ? 'active' : ''}
              onClick={() => handleNavigation(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;