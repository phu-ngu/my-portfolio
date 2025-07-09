import React from 'react';
import './Nav.css';
import logo from '../../assets/images/logo_pn_black_200x200.png';

export default function Navigation({ activeSection, scrollToSection }) {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-content">
          <div className="navigation-links">
            <img src={logo} alt='logo' className='navigation-logo'/>
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`navigation-link ${
                  activeSection === section ? 'navigation-link--active' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
