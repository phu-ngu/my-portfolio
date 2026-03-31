import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [onClose]);

  const modalRoot = document.getElementById('modal-root');
  
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <h2 className="modal-title">{project.title}</h2>
        
        <div className="modal-image-container">
          <img src={project.image} alt={project.title} className="modal-image" />
        </div>
        
        <p className="modal-description">
          {project.longDescription || project.description}
        </p>
        
        <div className="modal-tech">
          <h4>Technologies Used:</h4>
          <div className="modal-tech-list">
            {project.tech.map((tech, index) => (
              <span key={index} className="modal-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.link && (
          <a  /* Fixed: Added the 'a' tag here */
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-github-button"
          >
            <ExternalLink size={16} />
            <span>View on GitHub</span>
          </a>
        )}
      </div>
    </div>,
    modalRoot
  );
}