import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectsData } from '../../data/projectsData';
import './ProjectsSection.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__container">
        <div className="projects-section__header">
          <h2 className="projects-section__title">
            Research Projects
          </h2>
          <p className="projects-section__description">
            Here are some of the bioinformatics projects I've worked on recently. Each represents a unique computational challenge in biological data analysis.
          </p>
        </div>
        
        <div className="projects-section__grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}