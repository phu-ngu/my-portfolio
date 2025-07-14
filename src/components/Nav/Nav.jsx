import './Nav.css';
import logo from '../../assets/images/logo_pn_black_200x200.png';
import resume_pdf from '../../assets/files/resume_PN2025.pdf'

export default function Navigation({ activeSection, scrollToSection }) {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-content">
          <img src={logo} alt='logo' className='navigation-logo'/>
          <div className="navigation-links">
            {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
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
            <a 
              href={resume_pdf} // path to file
              download="resume_PN2025.pdf" // Filename for download
              className='resume-button'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
