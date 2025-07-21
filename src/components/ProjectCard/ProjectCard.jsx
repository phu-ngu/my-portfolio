import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';
import ProjectModal from './ProjectModal.js'; 

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-card">
      <div className="project-card__image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
        />
        <div className="project-card__overlay"></div>
        <button
          className="project-card__external-link"
          onClick={handleOpenModal}
          aria-label={`View details for ${project.title}`}
        >
          <ExternalLink className="project-card__external-icon" />
        </button>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">
          {project.title}
        </h3>
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

      {isModalOpen && (
        <ProjectModal project={project} onClose={handleCloseModal} />
      )}
    </div>
  );
}