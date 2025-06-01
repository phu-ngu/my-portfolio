import React from 'react';
import './Nav.css';

export default function Navigation({ activeSection, scrollToSection }) {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-content">
          <div className="navigation-logo">
            Portfolio
          </div>
          <div className="navigation-links">
            {['home', 'projects', 'contact'].map((section) => (
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
