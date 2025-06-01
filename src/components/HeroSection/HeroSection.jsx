import React from 'react';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-section__background"></div>
      <div className="hero-section__content">
        {/* <div className="hero-section__avatar-container">
          <div className="hero-section__avatar">
            <div className="hero-section__avatar-inner">
              JD
            </div>
          </div>
        </div> */}
        <h1 className="hero-section__title">
          Phu Nguyen
        </h1>
        {/* <p className="hero-section__subtitle">
          Bioinformatics Researcher
        </p> */}
        <p className="hero-section__description">
          Passionate about unlocking biological insights through computational analysis. 
          I specialize in genomic data analysis, machine learning applications in biology, and developing tools for biological research.
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className="hero-section__cta"
        >
          View My Work
          <ChevronDown className="hero-section__cta-icon" />
        </button>
      </div>
      <div className="hero-section__scroll-indicator">
        <ChevronDown className="hero-section__scroll-icon" />
      </div>
    </section>
  );
}