import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume'
import Navigation from '../components/Navigation';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
    };

    const handleNavigation = (page) => setCurrentPage(page);
    return (
        <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentSection={currentPage} handleNavigation={handleNavigation} />
      <div>Eggs</div>
      <Navigation currentSection={currentPage} handleNavigation={handleNavigation} />
      {renderPage()}
      <Footer />
    </div>
    );
    
}

