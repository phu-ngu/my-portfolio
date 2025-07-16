import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-section__background"></div>
      
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          Hi, I'm
        </h1>
        <h1 className="hero-section__title">
          Phu Nguyen
        </h1>
        <p className="hero-section__subtitle">
          Automation & Data Engineer | Software Developer
        </p>

        <div className="hero-section__social">
          <a href="https://github.com/phu-ngu"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/phu-nguyen-21"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:nphuey@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>

      </div>

      <div className='hero-section__scroll'>
        <p> Learn More </p>
        <button className='hero-section__scroll-indicator'
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className='hero-section__scroll-icon'/>
        </button>
      </div>

    </section>
  );
}