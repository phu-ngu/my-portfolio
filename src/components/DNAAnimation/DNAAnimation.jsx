import React from 'react';
import './DNAAnimation.css';

export default function DNAAnimation() {
  return (
    <div className="dna-animation">
      <svg width="40" height="60" xmlns="http://www.w3.org/2000/svg">
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