import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume'


const PortfolioContainer = () => {
    // State variable used to update current page, default set to aabout me page
      const [currentPage, setCurrentPage] = useState('AboutMe')
  
      const renderPage = () => {
          switch(currentPage) {
            case 'AboutMe':
              return <AboutMe />;
            case 'Portfolio':
              return <Portfolio />;
            case 'Contact':
              return <Contact />;
            case 'Resume':
              return <Resume />;
            default:
              return <AboutMe />;
          }
        };
  
      return (
          <div>
              <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
              {renderPage()}
              <Footer />
          </div>);
          
      }

export default PortfolioContainer;