import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectsData } from '../../data/projectsData';
import './ProjectsSection.css';
import { ChevronDown } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__container">
        <div className="projects-section__header">
          <h2 className="projects-section__title">
            Software Projects
          </h2>
          <p className="projects-section__description">
            Projects I've worked on!
          </p>
        </div>
        
        <div className="projects-section__grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className='projects-section__scroll-indicator'>
        <ChevronDown className='projects-section__scroll-icon'/>
      </div>
      <div>
        
      </div>
    </section>
  );
}