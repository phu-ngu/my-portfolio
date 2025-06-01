import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Mail, Github, Linkedin } from 'lucide-react';

// Projects data
const projectsData = [
  {
    title: "Genomic Variant Analysis Pipeline",
    description: "A comprehensive pipeline for analyzing genomic variants from whole-genome sequencing data. Includes quality control, variant calling, annotation, and population genetics analysis.",
    tech: ["Python", "Snakemake", "GATK", "R"],
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=500&h=300&fit=crop",
    link: "#"
  },
  {
    title: "Protein Structure Prediction ML Model",
    description: "Machine learning model for predicting protein secondary structure from amino acid sequences using deep neural networks and attention mechanisms.",
    tech: ["TensorFlow", "Python", "BioPython", "DSSP"],
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=500&h=300&fit=crop",
    link: "#"
  },
  {
    title: "Phylogenetic Tree Visualization Tool",
    description: "Interactive web application for visualizing and analyzing phylogenetic trees with support for large datasets and multiple tree formats.",
    tech: ["D3.js", "JavaScript", "Python", "Newick"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    link: "#"
  }
];

// DNA Animation Component
function DNAAnimation() {
  return (
    <div className="fixed top-20 left-6 z-40 opacity-30">
      <svg width="40" height="60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`
              .dna-strand1 { animation: dna-rotate1 4s ease-in-out infinite; }
              .dna-strand2 { animation: dna-rotate2 4s ease-in-out infinite; }
              .base-pairs { animation: pulse 2s ease-in-out infinite alternate; }
              @keyframes dna-rotate1 {
                0%, 100% { transform: translateX(0px); }
                50% { transform: translateX(2px); }
              }
              @keyframes dna-rotate2 {
                0%, 100% { transform: translateX(0px); }
                50% { transform: translateX(-2px); }
              }
              @keyframes pulse {
                0% { opacity: 0.6; }
                100% { opacity: 1; }
              }
            `}
          </style>
        </defs>
        <path className="dna-strand1" d="M12 5 Q20 15 12 25 Q4 35 12 45" 
              stroke="#2563eb" strokeWidth="2" fill="none"/>
        <path className="dna-strand2" d="M28 5 Q20 15 28 25 Q36 35 28 45" 
              stroke="#2563eb" strokeWidth="2" fill="none"/>
        <g className="base-pairs">
          <line x1="12" y1="10" x2="28" y2="10" stroke="#059669" strokeWidth="1.5"/>
          <line x1="12" y1="20" x2="28" y2="20" stroke="#dc2626" strokeWidth="1.5"/>
          <line x1="12" y1="30" x2="28" y2="30" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="12" y1="40" x2="28" y2="40" stroke="#ea580c" strokeWidth="1.5"/>
        </g>
        <circle cx="12" cy="5" r="1.5" fill="#2563eb"/>
        <circle cx="28" cy="5" r="1.5" fill="#2563eb"/>
        <circle cx="12" cy="45" r="1.5" fill="#2563eb"/>
        <circle cx="28" cy="45" r="1.5" fill="#2563eb"/>
      </svg>
    </div>
  );
}

// Navigation Component
function Navigation({ activeSection, scrollToSection }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            BioPortfolio
          </div>
          <div className="flex space-x-8">
            {['home', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                  activeSection === section 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700'
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

// Hero Section Component
function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-green-100/30"></div>
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-blue-600">
              JD
            </div>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-green-600 bg-clip-text text-transparent">
          John Doe
        </h1>
        <p className="text-2xl md:text-3xl text-blue-700 mb-8 font-light">
          Bioinformatics Researcher
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about unlocking biological insights through computational analysis. 
          I specialize in genomic data analysis, machine learning applications in biology, and developing tools for biological research.
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          View My Research
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
          <ExternalLink className="w-4 h-4 text-gray-700" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Projects Section Component
function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Research Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the bioinformatics projects I've worked on recently. Each represents a unique computational challenge in biological data analysis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Let's Collaborate
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always interested in new research opportunities and collaborative projects. 
          Whether you have a biological question or computational challenge, let's discuss how we can work together!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:john@example.com"
            className="group flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <Mail className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">john@example.com</p>
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <Github className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">GitHub</h3>
            <p className="text-gray-600">@johndoe</p>
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <Linkedin className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">LinkedIn</h3>
            <p className="text-gray-600">John Doe</p>
          </a>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500 resize-none"
            ></textarea>
            <button
              type="button"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
        <p>&copy; 2024 John Doe. Built with React and lots of ☕ | Advancing biology through computation</p>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
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
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 relative">
      <DNAAnimation />
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <HeroSection scrollToSection={scrollToSection} />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}