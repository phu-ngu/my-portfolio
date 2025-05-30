export default function DNAAnimation() {
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
        <path className="dna-strand1" d="M12 5 Q20 15 12 25 Q4 35 12 45" stroke="#2563eb" strokeWidth="2" fill="none" />
        <path
          className="dna-strand2"
          d="M28 5 Q20 15 28 25 Q36 35 28 45"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
        />
        <g className="base-pairs">
          <line x1="12" y1="10" x2="28" y2="10" stroke="#059669" strokeWidth="1.5" />
          <line x1="12" y1="20" x2="28" y2="20" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="12" y1="30" x2="28" y2="30" stroke="#7c3aed" strokeWidth="1.5" />
          <line x1="12" y1="40" x2="28" y2="40" stroke="#ea580c" strokeWidth="1.5" />
        </g>
        <circle cx="12" cy="5" r="1.5" fill="#2563eb" />
        <circle cx="28" cy="5" r="1.5" fill="#2563eb" />
        <circle cx="12" cy="45" r="1.5" fill="#2563eb" />
        <circle cx="28" cy="45" r="1.5" fill="#2563eb" />
      </svg>
    </div>
  )
}
