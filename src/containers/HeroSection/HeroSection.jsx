import React from 'react';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-section__background"></div>
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          Phu Nguyen
        </h1>
        <p className="hero-section__subtitle">
          Automation Engineer / Side Developer
        </p>
        <button
          onClick={() => scrollToSection('about')}
          className="hero-section__cta"
        >
          Learn more about me!
          <ChevronDown className="hero-section__cta-icon" />
        </button>
      </div>
      <div>
        <button className='hero-section__scroll-indicator'
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className='hero-section__scroll-icon'/>
        </button>
      </div>
    </section>
  );
}