import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header currentSection={currentSection} handleNavigation={handleNavigation} />
      {currentSection === 'AboutMe' && <AboutMe />}
      {currentSection === 'Portfolio' && <Portfolio />}
      {currentSection === 'Contact' && <Contact />}
      {currentSection === 'Resume' && <Resume />}
    </div>
  );
}

export default App;