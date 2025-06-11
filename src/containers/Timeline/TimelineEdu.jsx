import React from 'react';
import './TimelineEdu.css';
import { eduData } from '../../data/eduData';

export default function TimelineEdu() {
    return (
      <section id="experience" className="work-experience-section">
        <div className="container">
          <div className="header">
            <h2 className="title">
              Education
            </h2>
          </div>
          
          <div className="timeline-container">
            {/* Timeline line */}
            <div className="timeline-line"></div>
            
            <div className="timeline-items">
              {eduData.map((job, index) => (
                <div key={index} className="timeline-item">
                  {/* Timeline dot */}
                  <div className="timeline-dot"></div>
                  {/* Content */}
                  <div className="content-wrapper">
                    <div className="content-card">
                      <h3 className="job-title">{job.title}</h3>
                      <p className="job-period">{job.period}</p>
                      <div className="separator"></div>
                      <h4 className="company-name">{job.company}</h4>
                      <p className="job-description">{job.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }