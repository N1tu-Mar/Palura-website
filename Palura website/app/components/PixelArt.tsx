import React from 'react';

interface PixelComponentProps {
  size?: number;
  className?: string;
}

// Pixel Star Component
export const PixelStar: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <path
        d="M8 0 L9 5 L14 5 L10 8 L11 13 L8 10 L5 13 L6 8 L2 5 L7 5 Z"
        fill="#ffff00"
        stroke="#ffaa00"
        strokeWidth="0.5"
      />
    </svg>
  );
};

// Pixel Book Component
export const PixelBook: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <rect x="2" y="2" width="12" height="12" fill="#8b5cf6" />
      <rect x="2" y="2" width="6" height="12" fill="#6b21a8" />
      <line x1="8" y1="2" x2="8" y2="14" stroke="#4c1d95" strokeWidth="1" />
      <line x1="2" y1="8" x2="8" y2="8" stroke="#4c1d95" strokeWidth="0.5" />
    </svg>
  );
};

// Pixel Adventure Component
export const PixelAdventure: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <path d="M8 2 L12 6 L10 14 L6 14 L4 6 Z" fill="#ec4899" />
      <circle cx="8" cy="6" r="2" fill="#f472b6" />
      <rect x="7" y="8" width="2" height="6" fill="#be185d" />
    </svg>
  );
};

// Pixel Learning Component
export const PixelLearning: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <circle cx="8" cy="8" r="6" fill="#3b82f6" />
      <circle cx="8" cy="8" r="4" fill="#60a5fa" />
      <path d="M6 8 L7.5 9.5 L10 7" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
};

// Pixel Innovation Component
export const PixelInnovation: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <circle cx="8" cy="6" r="3" fill="#fbbf24" />
      <rect x="7" y="9" width="2" height="4" fill="#f59e0b" />
      <rect x="5" y="11" width="6" height="2" fill="#d97706" />
      <circle cx="6" cy="5" r="1" fill="#fff" />
      <circle cx="10" cy="5" r="1" fill="#fff" />
    </svg>
  );
};

// Pixel Heart Component
export const PixelHeart: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <path
        d="M8 13 C8 13, 2 8, 2 5 C2 3, 4 3, 5 4 C5 2, 7 2, 8 4 C9 2, 11 2, 11 4 C12 3, 14 3, 14 5 C14 8, 8 13, 8 13 Z"
        fill="#ec4899"
        stroke="#be185d"
        strokeWidth="0.5"
      />
    </svg>
  );
};

// Pixel Globe Component
export const PixelGlobe: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <circle cx="8" cy="8" r="6" fill="#3b82f6" stroke="#1e40af" strokeWidth="1" />
      <ellipse cx="8" cy="8" rx="6" ry="3" fill="#60a5fa" opacity="0.6" />
      <line x1="2" y1="8" x2="14" y2="8" stroke="#1e40af" strokeWidth="0.5" />
      <line x1="8" y1="2" x2="8" y2="14" stroke="#1e40af" strokeWidth="0.5" />
      <path d="M5 5 Q8 6 8 8 Q8 10 5 11" stroke="#1e40af" strokeWidth="0.5" fill="none" />
      <path d="M11 5 Q8 6 8 8 Q8 10 11 11" stroke="#1e40af" strokeWidth="0.5" fill="none" />
    </svg>
  );
};

// Pixel Email Component
export const PixelEmail: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <rect x="2" y="4" width="12" height="8" fill="#6366f1" stroke="#4f46e5" strokeWidth="1" />
      <path d="M2 4 L8 9 L14 4" stroke="#4f46e5" strokeWidth="1" fill="none" />
      <line x1="5" y1="7" x2="11" y2="7" stroke="#818cf8" strokeWidth="0.5" />
    </svg>
  );
};

// Pixel Social Component
export const PixelSocial: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      <circle cx="5" cy="5" r="2" fill="#8b5cf6" />
      <circle cx="11" cy="5" r="2" fill="#ec4899" />
      <circle cx="5" cy="11" r="2" fill="#3b82f6" />
      <circle cx="11" cy="11" r="2" fill="#fbbf24" />
      <line x1="5" y1="5" x2="11" y2="11" stroke="#a78bfa" strokeWidth="0.5" opacity="0.5" />
      <line x1="11" y1="5" x2="5" y2="11" stroke="#a78bfa" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
};

// Pixel Character Reading Component
export const PixelCharacterReading: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Head */}
      <circle cx="8" cy="4" r="2.5" fill="#fbbf24" />
      {/* Body */}
      <rect x="6" y="6.5" width="4" height="5" fill="#3b82f6" />
      {/* Book */}
      <rect x="10" y="7" width="3" height="4" fill="#8b5cf6" />
      <line x1="10" y1="9" x2="13" y2="9" stroke="#6b21a8" strokeWidth="0.5" />
      {/* Arms */}
      <rect x="4" y="7" width="2" height="3" fill="#fbbf24" />
      <rect x="10" y="7" width="1.5" height="3" fill="#fbbf24" />
      {/* Legs */}
      <rect x="6.5" y="11.5" width="1.5" height="3" fill="#1e40af" />
      <rect x="8" y="11.5" width="1.5" height="3" fill="#1e40af" />
    </svg>
  );
};

// Pixel Character Writing Component
export const PixelCharacterWriting: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Head */}
      <circle cx="8" cy="4" r="2.5" fill="#fbbf24" />
      {/* Body */}
      <rect x="6" y="6.5" width="4" height="5" fill="#ec4899" />
      {/* Paper */}
      <rect x="3" y="8" width="4" height="3" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
      <line x1="4" y1="9" x2="6" y2="9" stroke="#000" strokeWidth="0.5" />
      <line x1="4" y1="10" x2="6" y2="10" stroke="#000" strokeWidth="0.5" />
      {/* Pencil */}
      <rect x="7" y="7" width="1" height="4" fill="#fbbf24" />
      <polygon points="7,7 8,7 7.5,6" fill="#ef4444" />
      {/* Arms */}
      <rect x="4" y="7" width="1.5" height="3" fill="#fbbf24" />
      <rect x="10.5" y="7" width="2" height="3" fill="#fbbf24" />
      {/* Legs */}
      <rect x="6.5" y="11.5" width="1.5" height="3" fill="#be185d" />
      <rect x="8" y="11.5" width="1.5" height="3" fill="#be185d" />
    </svg>
  );
};

// Pixel Character Speaking Component
export const PixelCharacterSpeaking: React.FC<PixelComponentProps> = ({ size = 16, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Head */}
      <circle cx="8" cy="4" r="2.5" fill="#fbbf24" />
      {/* Body */}
      <rect x="6" y="6.5" width="4" height="5" fill="#8b5cf6" />
      {/* Speech bubble */}
      <ellipse cx="12" cy="5" rx="2.5" ry="2" fill="#fff" stroke="#000" strokeWidth="0.5" />
      <path d="M10 6.5 L8 8 L10 8 Z" fill="#fff" stroke="#000" strokeWidth="0.5" />
      <circle cx="11.5" cy="4.5" r="0.5" fill="#000" />
      <circle cx="12.5" cy="5.5" r="0.5" fill="#000" />
      {/* Arms */}
      <rect x="4" y="7" width="2" height="3" fill="#fbbf24" />
      <rect x="10" y="7" width="2" height="3" fill="#fbbf24" />
      {/* Legs */}
      <rect x="6.5" y="11.5" width="1.5" height="3" fill="#6b21a8" />
      <rect x="8" y="11.5" width="1.5" height="3" fill="#6b21a8" />
    </svg>
  );
};

