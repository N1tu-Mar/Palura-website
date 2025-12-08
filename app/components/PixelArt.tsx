// GAMIFIED Pixel Art - Ultra Vibrant, Kid-Friendly, Video Game World Style!

export const PixelStar = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
    <defs>
      <radialGradient id="starGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#ffff00" stopOpacity="1" />
        <stop offset="50%" stopColor="#ffd700" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ff6b9d" stopOpacity="0.4" />
      </radialGradient>
    </defs>
    <circle cx="16" cy="16" r="14" fill="url(#starGlow)" opacity="0.3" />
    <path fill="#ffff00" d="M16 2 L18 12 L28 12 L20 18 L24 30 L16 22 L8 30 L12 18 L4 12 L14 12 Z" />
    <path fill="#ffd700" d="M16 4 L17.5 11 L25 11 L19 16 L21 26 L16 20 L11 26 L13 16 L7 11 L14.5 11 Z" />
    <circle cx="16" cy="16" r="3" fill="#ffffff" opacity="1" />
    <circle cx="16" cy="16" r="1.5" fill="#ff6b9d" opacity="0.8" />
    {/* Sparkle effects */}
    <circle cx="8" cy="8" r="1.5" fill="#ffff00" opacity="0.9" />
    <circle cx="24" cy="8" r="1.5" fill="#ff6b9d" opacity="0.9" />
    <circle cx="8" cy="24" r="1.5" fill="#8b5cf6" opacity="0.9" />
    <circle cx="24" cy="24" r="1.5" fill="#ffff00" opacity="0.9" />
  </svg>
);

export const PixelBook = ({ size = 56, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Ultra magical glowing book */}
    <defs>
      <linearGradient id="bookGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <radialGradient id="bookShine" cx="50%" cy="30%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Outer glow */}
    <rect x="6" y="4" width="44" height="48" fill="url(#bookGlow)" rx="4" opacity="0.4" />
    <rect x="8" y="6" width="40" height="44" fill="url(#bookGlow)" rx="3" />
    <rect x="10" y="8" width="36" height="40" fill="#1e1b4b" />
    <rect x="12" y="10" width="32" height="36" fill="#f9fafb" />
    <rect x="12" y="10" width="32" height="36" fill="url(#bookShine)" />
    {/* Glowing magical text lines with colors */}
    <rect x="14" y="14" width="28" height="3" fill="#ffff00" />
    <rect x="14" y="14" width="28" height="1" fill="#ffffff" opacity="0.8" />
    <rect x="14" y="20" width="24" height="3" fill="#ff6b9d" />
    <rect x="14" y="20" width="24" height="1" fill="#ffffff" opacity="0.8" />
    <rect x="14" y="26" width="20" height="3" fill="#8b5cf6" />
    <rect x="14" y="26" width="20" height="1" fill="#ffffff" opacity="0.8" />
    <rect x="14" y="32" width="26" height="3" fill="#ffff00" />
    <rect x="14" y="32" width="26" height="1" fill="#ffffff" opacity="0.8" />
    <rect x="14" y="38" width="18" height="3" fill="#ec4899" />
    <rect x="14" y="38" width="18" height="1" fill="#ffffff" opacity="0.8" />
    {/* Magical symbols on pages */}
    <circle cx="20" cy="18" r="1.5" fill="#8b5cf6" />
    <circle cx="24" cy="24" r="1.5" fill="#ff6b9d" />
    <circle cx="22" cy="30" r="1.5" fill="#ffff00" />
    {/* Enhanced sparkles around book */}
    <circle cx="4" cy="10" r="2.5" fill="#ffff00" opacity="1" />
    <circle cx="4" cy="10" r="4" fill="#ffff00" opacity="0.3" />
    <circle cx="52" cy="18" r="2.5" fill="#ff6b9d" opacity="1" />
    <circle cx="52" cy="18" r="4" fill="#ff6b9d" opacity="0.3" />
    <circle cx="50" cy="38" r="2.5" fill="#8b5cf6" opacity="1" />
    <circle cx="50" cy="38" r="4" fill="#8b5cf6" opacity="0.3" />
    <circle cx="6" cy="44" r="2" fill="#ffff00" opacity="0.9" />
    <circle cx="50" cy="46" r="2" fill="#ec4899" opacity="0.9" />
  </svg>
);

// Fantasy/Adventure themed sprites - No characters, just magical items!

export const PixelAdventure = ({ size = 56, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Magic Compass - Adventure themed */}
    <defs>
      <radialGradient id="compassGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#ffff00" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ffff00" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="28" cy="28" r="20" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="3" />
    <circle cx="28" cy="28" r="18" fill="#312e81" />
    <circle cx="28" cy="28" r="16" fill="url(#compassGlow)" opacity="0.3" />
    {/* Compass needle */}
    <path d="M 28 12 L 30 26 L 28 28 L 26 26 Z" fill="#ff6b9d" />
    <path d="M 28 44 L 30 30 L 28 28 L 26 30 Z" fill="#3b82f6" />
    <circle cx="28" cy="28" r="3" fill="#ffff00" />
    <circle cx="28" cy="28" r="1.5" fill="#1e1b4b" />
    {/* Cardinal directions */}
    <text x="28" y="10" fontSize="8" fill="#ffff00" textAnchor="middle" fontWeight="bold">N</text>
    <text x="28" y="48" fontSize="8" fill="#ffff00" textAnchor="middle" fontWeight="bold">S</text>
    <text x="10" y="30" fontSize="8" fill="#ffff00" textAnchor="middle" fontWeight="bold">W</text>
    <text x="46" y="30" fontSize="8" fill="#ffff00" textAnchor="middle" fontWeight="bold">E</text>
    {/* Magical sparkles */}
    <circle cx="8" cy="12" r="2" fill="#ffff00" opacity="0.9" />
    <circle cx="48" cy="44" r="2" fill="#ff6b9d" opacity="0.9" />
  </svg>
);

export const PixelLearning = ({ size = 56, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Magic Crystal/Gem - Learning themed */}
    <defs>
      <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <radialGradient id="crystalShine" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Crystal base */}
    <polygon points="28,8 20,20 28,44 36,20" fill="url(#crystalGrad)" />
    <polygon points="28,10 22,20 28,42 34,20" fill="url(#crystalShine)" />
    {/* Crystal facets */}
    <polygon points="28,12 24,20 28,28 32,20" fill="#ffffff" opacity="0.6" />
    <polygon points="28,20 24,24 28,32 32,24" fill="#ffffff" opacity="0.4" />
    {/* Glow effect */}
    <polygon points="28,8 20,20 28,44 36,20" fill="none" stroke="#ffff00" strokeWidth="1" opacity="0.5" />
    {/* Sparkles around crystal */}
    <circle cx="12" cy="16" r="2" fill="#ffff00" opacity="0.9" />
    <circle cx="44" cy="24" r="2" fill="#ff6b9d" opacity="0.9" />
    <circle cx="16" cy="40" r="1.5" fill="#8b5cf6" opacity="0.9" />
    <circle cx="40" cy="36" r="1.5" fill="#ffff00" opacity="0.9" />
  </svg>
);

export const PixelInnovation = ({ size = 56, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Epic ultra lightning bolt with massive energy */}
    <defs>
      <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffff00" />
        <stop offset="30%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#ff6b9d" />
        <stop offset="70%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <radialGradient id="energyGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#ffff00" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ffff00" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Outer glow */}
    <path fill="url(#lightningGrad)" d="M 28 0 L 34 18 L 40 18 L 30 34 L 38 54 L 20 34 L 14 34 L 24 18 L 18 18 Z" opacity="0.4" />
    <path fill="url(#lightningGrad)" d="M 28 2 L 32 18 L 38 18 L 30 32 L 36 52 L 22 32 L 16 32 L 24 18 L 20 18 Z" />
    <path fill="#ffff00" d="M 28 6 L 30 16 L 34 16 L 28 26 L 32 44 L 24 28 L 20 28 L 26 18 L 22 18 Z" />
    <path fill="#ffffff" d="M 28 10 L 29 14 L 31 14 L 28 20 L 30 32 L 26 24 L 24 24 L 27 18 L 25 18 Z" opacity="0.8" />
    {/* Enhanced energy particles with glow */}
    <circle cx="10" cy="14" r="4" fill="#ffff00" opacity="1" />
    <circle cx="10" cy="14" r="6" fill="url(#energyGlow)" />
    <circle cx="46" cy="22" r="4" fill="#ff6b9d" opacity="1" />
    <circle cx="46" cy="22" r="6" fill="#ff6b9d" opacity="0.4" />
    <circle cx="12" cy="36" r="4" fill="#8b5cf6" opacity="1" />
    <circle cx="12" cy="36" r="6" fill="#8b5cf6" opacity="0.4" />
    <circle cx="44" cy="40" r="3" fill="#ffff00" opacity="1" />
    <circle cx="44" cy="40" r="5" fill="#ffff00" opacity="0.3" />
    <circle cx="8" cy="28" r="3" fill="#ff6b9d" opacity="1" />
    <circle cx="8" cy="28" r="5" fill="#ff6b9d" opacity="0.3" />
    <circle cx="48" cy="32" r="2.5" fill="#ec4899" opacity="0.9" />
    <circle cx="6" cy="20" r="2" fill="#8b5cf6" opacity="0.9" />
    <circle cx="50" cy="44" r="2" fill="#ffff00" opacity="0.9" />
    {/* Energy trails */}
    <path d="M 8 12 L 10 14 M 48 20 L 46 22 M 10 34 L 12 36 M 46 38 L 44 40" stroke="#ffff00" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

export const PixelHeart = ({ size = 48, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className} style={{ imageRendering: 'pixelated' }}>
    <defs>
      <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e91e63" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#ff6b9d" />
      </linearGradient>
      <radialGradient id="heartShine" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Outer glow */}
    <path fill="url(#heartGrad)" d="M20 6 C14 0, 4 4, 4 12 C4 20, 20 34, 20 34 C20 34, 36 20, 36 12 C36 4, 26 0, 20 6 Z" opacity="0.3" />
    <path fill="url(#heartGrad)" d="M20 8 C16 4, 8 6, 8 12 C8 18, 20 30, 20 30 C20 30, 32 18, 32 12 C32 6, 24 4, 20 8 Z" />
    <path fill="url(#heartShine)" d="M20 8 C16 4, 8 6, 8 12 C8 18, 20 30, 20 30 C20 30, 32 18, 32 12 C32 6, 24 4, 20 8 Z" />
    <ellipse cx="16" cy="16" rx="4" ry="6" fill="#ffffff" opacity="0.6" />
    <ellipse cx="24" cy="16" rx="4" ry="6" fill="#ffffff" opacity="0.6" />
    {/* Enhanced sparkles */}
    <circle cx="4" cy="8" r="2.5" fill="#ffff00" opacity="1" />
    <circle cx="4" cy="8" r="4" fill="#ffff00" opacity="0.4" />
    <circle cx="36" cy="12" r="2.5" fill="#ff6b9d" opacity="1" />
    <circle cx="36" cy="12" r="4" fill="#ff6b9d" opacity="0.4" />
    <circle cx="6" cy="28" r="2" fill="#8b5cf6" opacity="0.9" />
    <circle cx="34" cy="24" r="2" fill="#ffff00" opacity="0.9" />
  </svg>
);

export const PixelGlobe = ({ size = 56, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Ultra colorful magical globe */}
    <defs>
      <radialGradient id="globeShine" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="28" cy="28" r="22" fill="#3b82f6" stroke="#ffff00" strokeWidth="2" opacity="0.3" />
    <circle cx="28" cy="28" r="20" fill="#3b82f6" stroke="#ffff00" strokeWidth="3" />
    <circle cx="28" cy="28" r="20" fill="url(#globeShine)" />
    {/* Enhanced continents with vibrant colors */}
    <path d="M 14 18 Q 18 16 22 18 Q 20 22 18 24 Q 16 22 14 20 Z" fill="#22c55e" />
    <path d="M 15 19 Q 18 17 21 19 Q 19 21 17 23 Q 15 21 15 19 Z" fill="#4ade80" />
    <path d="M 22 22 Q 26 20 30 22 Q 28 26 26 28 Q 24 26 22 24 Z" fill="#fbbf24" />
    <path d="M 23 23 Q 26 21 29 23 Q 27 25 25 27 Q 23 25 23 23 Z" fill="#fcd34d" />
    <path d="M 30 20 Q 34 18 38 20 Q 36 24 34 26 Q 32 24 30 22 Z" fill="#22c55e" />
    <path d="M 31 21 Q 34 19 37 21 Q 35 23 33 25 Q 31 23 31 21 Z" fill="#4ade80" />
    <path d="M 18 30 Q 22 28 26 30 Q 24 34 22 36 Q 20 34 18 32 Z" fill="#ec4899" />
    <path d="M 32 32 Q 36 30 40 32 Q 38 36 36 38 Q 34 36 32 34 Z" fill="#8b5cf6" />
    {/* Enhanced grid lines */}
    <ellipse cx="28" cy="28" rx="20" ry="6" fill="#1e40af" opacity="0.4" />
    <ellipse cx="28" cy="28" rx="6" ry="20" fill="#1e40af" opacity="0.3" />
    <line x1="8" y1="28" x2="48" y2="28" stroke="#ffff00" strokeWidth="2.5" />
    <line x1="28" y1="8" x2="28" y2="48" stroke="#ffff00" strokeWidth="2.5" />
    <line x1="8" y1="20" x2="48" y2="20" stroke="#ff6b9d" strokeWidth="1" opacity="0.6" />
    <line x1="8" y1="36" x2="48" y2="36" stroke="#ff6b9d" strokeWidth="1" opacity="0.6" />
    {/* Magical stand */}
    <rect x="26" y="46" width="4" height="6" fill="#6b7280" />
    <rect x="27" y="47" width="2" height="4" fill="#4a5568" />
    <path d="M 20 52 Q 28 60 36 52" stroke="#4a5568" strokeWidth="4" fill="none" />
    <path d="M 20 52 Q 28 58 36 52" stroke="#6b7280" strokeWidth="2" fill="none" />
    {/* Enhanced glow effect */}
    <circle cx="28" cy="28" r="22" fill="none" stroke="#ffff00" strokeWidth="1" opacity="0.4" />
    <circle cx="28" cy="28" r="24" fill="none" stroke="#ff6b9d" strokeWidth="1" opacity="0.2" />
    {/* Sparkles around globe */}
    <circle cx="6" cy="12" r="2" fill="#ffff00" opacity="0.9" />
    <circle cx="50" cy="14" r="2" fill="#ff6b9d" opacity="0.9" />
    <circle cx="4" cy="28" r="1.5" fill="#8b5cf6" opacity="0.9" />
    <circle cx="52" cy="28" r="1.5" fill="#ffff00" opacity="0.9" />
  </svg>
);

export const PixelEmail = ({ size = 36, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Ultra colorful magical envelope */}
    <defs>
      <linearGradient id="envelopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <rect x="5" y="7" width="26" height="22" fill="url(#envelopeGrad)" rx="3" />
    <rect x="7" y="9" width="22" height="18" fill="#1e1b4b" />
    <rect x="9" y="11" width="18" height="14" fill="#f9fafb" rx="2" />
    <rect x="9" y="11" width="18" height="4" fill="#ffff00" opacity="0.2" />
    {/* Enhanced glowing letter lines */}
    <rect x="11" y="13" width="14" height="2" fill="#ffff00" />
    <rect x="11" y="13" width="14" height="1" fill="#ffffff" opacity="0.8" />
    <rect x="11" y="17" width="12" height="2" fill="#ff6b9d" />
    <rect x="11" y="17" width="12" height="1" fill="#ffffff" opacity="0.8" />
    <rect x="11" y="21" width="10" height="2" fill="#8b5cf6" />
    <rect x="11" y="21" width="10" height="1" fill="#ffffff" opacity="0.8" />
    <circle cx="14" cy="19" r="0.8" fill="#ec4899" />
    <circle cx="18" cy="23" r="0.8" fill="#ffff00" />
    {/* Enhanced envelope flap with glow */}
    <polygon points="5,7 18,17 31,7" fill="#ec4899" />
    <polygon points="6,8 18,16 30,8" fill="#f472b6" />
    <polyline points="5,7 18,17 31,7" stroke="#ffff00" strokeWidth="2.5" fill="none" />
    <polyline points="5,7 18,17 31,7" stroke="#ff6b9d" strokeWidth="1" fill="none" opacity="0.6" />
    {/* Sparkles */}
    <circle cx="3" cy="9" r="1.5" fill="#ffff00" opacity="0.9" />
    <circle cx="33" cy="11" r="1.5" fill="#ff6b9d" opacity="0.9" />
  </svg>
);

export const PixelSocial = ({ size = 36, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Magic Portal/Gateway - Social/Connection themed */}
    <defs>
      <radialGradient id="portalGrad" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
      </radialGradient>
    </defs>
    {/* Portal ring outer */}
    <circle cx="18" cy="18" r="14" fill="none" stroke="#8b5cf6" strokeWidth="3" />
    <circle cx="18" cy="18" r="12" fill="none" stroke="#ec4899" strokeWidth="2" />
    {/* Portal center */}
    <circle cx="18" cy="18" r="10" fill="url(#portalGrad)" />
    <circle cx="18" cy="18" r="8" fill="#1e1b4b" opacity="0.6" />
    {/* Portal swirls */}
    <path d="M 18 8 Q 24 12 20 18 Q 16 14 18 8" fill="#ffff00" opacity="0.4" />
    <path d="M 18 28 Q 12 24 16 18 Q 20 22 18 28" fill="#ff6b9d" opacity="0.4" />
    {/* Portal symbols */}
    <circle cx="18" cy="10" r="1.5" fill="#ffff00" />
    <circle cx="18" cy="26" r="1.5" fill="#ff6b9d" />
    <circle cx="10" cy="18" r="1.5" fill="#8b5cf6" />
    <circle cx="26" cy="18" r="1.5" fill="#ffff00" />
    {/* Sparkles */}
    <circle cx="6" cy="8" r="1.5" fill="#ffff00" opacity="0.9" />
    <circle cx="30" cy="10" r="1.5" fill="#ff6b9d" opacity="0.9" />
    <circle cx="8" cy="28" r="1.5" fill="#8b5cf6" opacity="0.9" />
    <circle cx="28" cy="26" r="1.5" fill="#ffff00" opacity="0.9" />
  </svg>
);

// Fantasy Adventure Sprites - Magical Items!
export const PixelCharacterReading = ({ size = 80, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Magic Scroll - Reading themed */}
    <defs>
      <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f9fafb" />
        <stop offset="50%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
    </defs>
    {/* Scroll body */}
    <rect x="20" y="20" width="40" height="40" fill="url(#scrollGrad)" rx="2" />
    <rect x="22" y="22" width="36" height="36" fill="#ffffff" rx="1" />
    {/* Scroll text lines */}
    <rect x="26" y="26" width="28" height="3" fill="#8b5cf6" />
    <rect x="26" y="32" width="24" height="3" fill="#ff6b9d" />
    <rect x="26" y="38" width="20" height="3" fill="#ffff00" />
    <rect x="26" y="44" width="26" height="3" fill="#8b5cf6" />
    <rect x="26" y="50" width="18" height="3" fill="#ec4899" />
    {/* Scroll decorative ends */}
    <rect x="18" y="24" width="4" height="32" fill="#fbbf24" rx="1" />
    <rect x="58" y="24" width="4" height="32" fill="#fbbf24" rx="1" />
    <circle cx="20" cy="28" r="2" fill="#8b5cf6" />
    <circle cx="60" cy="28" r="2" fill="#ff6b9d" />
    <circle cx="20" cy="52" r="2" fill="#ff6b9d" />
    <circle cx="60" cy="52" r="2" fill="#8b5cf6" />
    {/* Magical symbols */}
    <circle cx="30" cy="30" r="1.5" fill="#ffff00" />
    <circle cx="50" cy="34" r="1.5" fill="#8b5cf6" />
    <circle cx="32" cy="48" r="1.5" fill="#ff6b9d" />
    {/* Sparkles */}
    <circle cx="12" cy="24" r="2" fill="#ffff00" opacity="0.9" />
    <circle cx="68" cy="32" r="2" fill="#ff6b9d" opacity="0.9" />
    <circle cx="14" cy="56" r="1.5" fill="#8b5cf6" opacity="0.9" />
  </svg>
);

export const PixelCharacterWriting = ({ size = 80, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Magic Quill Pen - Writing themed */}
    <defs>
      <linearGradient id="quillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    {/* Quill feather */}
    <path d="M 40 8 L 36 20 L 40 32 L 44 20 Z" fill="#1e1b4b" />
    <path d="M 40 10 L 37 18 L 40 28 L 43 18 Z" fill="#312e81" />
    <path d="M 40 12 L 38 16 L 40 24 L 42 16 Z" fill="#4c1d95" />
    {/* Quill shaft */}
    <rect x="38" y="32" width="4" height="32" fill="#fbbf24" />
    <rect x="39" y="34" width="2" height="28" fill="#fcd34d" />
    {/* Quill tip */}
    <polygon points="38,64 40,72 42,64" fill="#6b7280" />
    <polygon points="39,66 40,70 41,66" fill="#9ca3af" />
    {/* Ink drops */}
    <circle cx="42" cy="68" r="2" fill="#1e1b4b" />
    <circle cx="44" cy="70" r="1.5" fill="#312e81" />
    <circle cx="46" cy="72" r="1" fill="#4c1d95" />
    {/* Magical sparkles */}
    <circle cx="28" cy="16" r="2" fill="#ffff00" opacity="0.9" />
    <circle cx="52" cy="24" r="2" fill="#ff6b9d" opacity="0.9" />
    <circle cx="30" cy="48" r="1.5" fill="#8b5cf6" opacity="0.9" />
    <circle cx="50" cy="52" r="1.5" fill="#ffff00" opacity="0.9" />
    {/* Writing magic trail */}
    <path d="M 44 70 Q 50 68 56 70" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.6" />
    <circle cx="50" cy="68" r="1" fill="#ffff00" />
  </svg>
);

export const PixelCharacterSpeaking = ({ size = 80, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Magic Potion Bottle - Speaking/Communication themed */}
    <defs>
      <linearGradient id="potionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    {/* Bottle body */}
    <rect x="28" y="20" width="24" height="40" fill="#1e1b4b" rx="2" />
    <rect x="30" y="22" width="20" height="36" fill="#312e81" />
    {/* Potion liquid */}
    <rect x="30" y="38" width="20" height="20" fill="url(#potionGrad)" />
    <rect x="32" y="40" width="16" height="16" fill="#8b5cf6" opacity="0.8" />
    {/* Liquid surface */}
    <ellipse cx="40" cy="38" rx="10" ry="2" fill="#ffff00" opacity="0.6" />
    {/* Bubbles */}
    <circle cx="34" cy="44" r="2" fill="#ffffff" opacity="0.8" />
    <circle cx="46" cy="48" r="1.5" fill="#ffffff" opacity="0.8" />
    <circle cx="38" cy="52" r="1" fill="#ffffff" opacity="0.8" />
    {/* Bottle neck */}
    <rect x="34" y="16" width="12" height="6" fill="#1e1b4b" />
    <rect x="36" y="18" width="8" height="4" fill="#312e81" />
    {/* Cork */}
    <rect x="36" y="10" width="8" height="8" fill="#92400e" rx="1" />
    <rect x="38" y="12" width="4" height="4" fill="#b45309" />
    {/* Glow effect */}
    <rect x="28" y="20" width="24" height="40" fill="none" stroke="#ffff00" strokeWidth="1" opacity="0.4" />
    {/* Sparkles */}
    <circle cx="18" cy="28" r="2" fill="#ffff00" opacity="0.9" />
    <circle cx="62" cy="36" r="2" fill="#ff6b9d" opacity="0.9" />
    <circle cx="20" cy="56" r="1.5" fill="#8b5cf6" opacity="0.9" />
    <circle cx="60" cy="60" r="1.5" fill="#ffff00" opacity="0.9" />
  </svg>
);
