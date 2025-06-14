import React, { useState, useEffect } from 'react';
import { Footer, Nav } from './components'
import { ContactSection, ProjectsSection, HeroSection, Timeline, TimelineEdu, Profile } from './containers'
import './App.css';
import my_logo from './assets/images/logo_pn_200x200.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <img src={my_logo} alt='logo' className='mylogo'/>
      <Nav 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <HeroSection scrollToSection={scrollToSection} />
      <Profile />
      <ProjectsSection />
      <Timeline />
      <TimelineEdu />
      <ContactSection />
      <Footer />
    </div>
  );
}