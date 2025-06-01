import React from 'react';
import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card__image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
        />
        <div className="project-card__overlay"></div>
        <button className="project-card__external-link">
          <ExternalLink className="project-card__external-icon" />
        </button>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">
          {project.title}
        </h3>
        <p className="project-card__description">
          {project.description}
        </p>
        <div className="project-card__tech">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="project-card__tech-tag"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}