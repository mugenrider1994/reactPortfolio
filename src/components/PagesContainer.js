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

        const PortfolioContainerStyle = {
          backgroundColor: 'black',
          color: 'black',
          borderRadius: '30px', // Adjust the value to control the curvature of the content
          padding: '10px', // Add padding for spacing within the curved border
          
          
        }

        const wrapperStyle = {
          border: '100px solid #424952', // Border style and color
          backgroundColor: '#424952', // Background color for the border
        };
  
      return (
        <div style={wrapperStyle}>
          <div style={PortfolioContainerStyle}>
              <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
              {renderPage()}
              <Footer />
          </div>
          </div>
      );
    }

export default PortfolioContainer;