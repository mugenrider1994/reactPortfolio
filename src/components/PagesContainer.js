import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume'


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

    return (
        <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>Eggs</div>
      {renderPage()}
      <Footer />
    </div>
    );
    
}
