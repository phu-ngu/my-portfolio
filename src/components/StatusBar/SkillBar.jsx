import React, { useState, useEffect } from 'react';
import './SkillBar.css'; // Import the CSS file

export const SkillBar = ({ skill, percentage, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="skill-bar-container">
      <div className="skill-bar-header">
        <h3 className="skill-name">
          {skill}
        </h3>
        <div className="percentage-bubble-container">
          <div className="percentage-bubble">
            {percentage}%
          </div>
          <div className="percentage-bubble-arrow"></div>
        </div>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: animated ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};