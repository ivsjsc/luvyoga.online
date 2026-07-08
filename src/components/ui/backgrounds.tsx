import React from 'react';
import { cn } from '@/lib/utils';

// 1. Subtle Paper / Linen Texture (using CSS SVG data-uri pattern)
export const BackgroundTexture: React.FC<{ type?: 'paper' | 'linen'; className?: string }> = ({
  type = 'paper',
  className,
}) => {
  const patternSvg =
    type === 'linen'
      ? `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M0 20h40M20 0v40" stroke="%237A4D35" stroke-width="0.5" opacity="0.06" fill="none"/></svg>`
      : `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.04"/></svg>`;

  const bgImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(patternSvg)}")`;

  return (
    <div
      className={cn('absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.4]', className)}
      style={{ backgroundImage: bgImage }}
    />
  );
};

// 2. Large radial warm lighting / glow
export const BackgroundGlow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden',
        className
      )}
    >
      <div className="absolute top-[10%] left-[20%] w-[80vw] h-[80vw] max-w-[800px] rounded-full bg-radial from-[#F5EAD4] via-[#F3ECE3]/40 to-transparent blur-[120px] opacity-60 mix-blend-soft-light" />
      <div className="absolute bottom-[15%] right-[10%] w-[70vw] h-[70vw] max-w-[700px] rounded-full bg-radial from-[#FFFDFB] via-[#EFE4D6]/50 to-transparent blur-[140px] opacity-70 mix-blend-soft-light" />
    </div>
  );
};

// 3. Very soft botanical leaf shadows (beautiful elegant leaf paths)
export const BackgroundLeafShadow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden select-none', className)}>
      <svg
        className="absolute top-[5%] right-[-5%] w-[45%] max-w-[450px] aspect-square text-[#4B3427] opacity-[0.05] blur-[3px]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M100 0 C 80 20, 50 25, 40 40 C 30 55, 32 75, 20 85 C 18 80, 22 60, 35 48 C 45 38, 70 30, 100 0 Z" />
        <path d="M85 15 C 70 30, 55 35, 48 50 C 42 62, 45 78, 35 88 C 33 82, 36 68, 44 58 C 52 48, 68 40, 85 15 Z" />
        <path d="M70 30 C 58 42, 48 48, 42 62 C 37 74, 40 85, 32 92 C 30 87, 32 78, 38 70 C 44 62, 58 52, 70 30 Z" />
      </svg>
      <svg
        className="absolute bottom-[5%] left-[-8%] w-[40%] max-w-[400px] aspect-square text-[#4B3427] opacity-[0.045] blur-[2px]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M0 100 C 20 80, 50 75, 60 60 C 70 45, 68 25, 80 15 C 82 20, 78 40, 65 52 C 55 62, 30 70, 0 100 Z" />
        <path d="M15 85 C 30 70, 45 65, 52 50 C 58 38, 55 22, 65 12 C 67 18, 64 32, 56 42 C 48 52, 32 60, 15 85 Z" />
      </svg>
    </div>
  );
};

// 4. Very light yoga silhouette (Only for Hero, elegant meditating pose)
export const BackgroundSilhouette: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden select-none flex items-center justify-center', className)}>
      <svg
        className="w-[70%] max-w-[500px] aspect-square text-[#7A4D35] opacity-[0.04] blur-[1px]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        {/* Head */}
        <circle cx="50" cy="22" r="6" />
        {/* Torso & Lotus Posture outline */}
        <path d="M50 29 C45 29, 41 33, 41 40 C41 48, 44 56, 38 65 C32 74, 18 78, 22 84 C26 88, 34 86, 50 86 C66 86, 74 88, 78 84 C82 78, 68 74, 62 65 C56 56, 59 48, 59 40 C59 33, 55 29, 50 29 Z" />
        {/* Arms folded in Dhyana Mudra */}
        <path d="M41 40 C35 44, 30 52, 34 60 C38 66, 45 67, 50 67 C55 67, 62 66, 66 60 C70 52, 65 44, 59 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// 5. Very large lotus outline
export const BackgroundLotus: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden select-none', className)}>
      <svg
        className="absolute bottom-[-10%] right-[-10%] w-[60%] max-w-[600px] aspect-square text-[#7A4D35] opacity-[0.02]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        {/* Center Petal */}
        <path d="M50 15 C45 35, 45 65, 50 90 C55 65, 55 35, 50 15 Z" />
        {/* Inner Petals */}
        <path d="M50 30 C30 45, 30 75, 50 90 C70 75, 70 45, 50 30 Z" />
        <path d="M50 45 C15 55, 15 80, 50 90 C85 80, 85 55, 50 45 Z" />
        {/* Outer Petals */}
        <path d="M50 60 C5 65, 10 85, 50 90 C90 85, 95 65, 50 60 Z" />
      </svg>
    </div>
  );
};

// 6. Very soft mandala line art
export const BackgroundMandala: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden select-none flex items-center justify-center', className)}>
      <svg
        className="w-[85%] max-w-[800px] aspect-square text-[#7A4D35] opacity-[0.015]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
      >
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="35" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="15" />
        {/* Mandala rays */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 45 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 45 * Math.sin((angle * Math.PI) / 180)}
            />
          );
        })}
      </svg>
    </div>
  );
};

// 7. Organic flowing SVG curves
export const BackgroundFlowingLines: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden select-none', className)}>
      <svg
        className="absolute inset-0 w-full h-full text-[#7A4D35] opacity-[0.045]"
        viewBox="0 0 1440 800"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M -100 200 C 300 250, 450 50, 800 150 C 1150 250, 1200 450, 1600 400" />
        <path d="M -100 280 C 280 320, 480 120, 820 220 C 1160 320, 1180 520, 1600 480" />
      </svg>
    </div>
  );
};

// 8. Soft grain / noise texture (SVG filter overlay)
export const BackgroundNoise: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay', className)}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grainy-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainy-noise)" />
      </svg>
    </div>
  );
};

// Unified dynamic section background wrapper
interface SectionBackgroundProps {
  type: 'hero' | 'about' | 'therapy' | 'classes' | 'testimonials' | 'contact' | 'footer';
  className?: string;
  children?: React.ReactNode;
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({ type, className, children }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden w-full transition-colors duration-500',
        // Background base gradients
        type === 'hero' && 'bg-gradient-to-b from-[#FFFDFB] via-[#F8F5F0] to-[#F3ECE3]',
        type === 'about' && 'bg-[#F8F5F0]',
        type === 'therapy' && 'bg-[#F3ECE3]',
        type === 'classes' && 'bg-[#EFE4D6]',
        type === 'testimonials' && 'bg-[#F8F5F0]',
        type === 'contact' && 'bg-gradient-to-b from-[#F3ECE3] to-[#FFFDFB]',
        type === 'footer' && 'bg-[#4B3427]',
        className
      )}
    >
      {/* 1. Subtle Paper / Linen Texture */}
      {(type === 'about' || type === 'testimonials') && <BackgroundTexture type="paper" />}
      {(type === 'classes' || type === 'hero') && <BackgroundTexture type="linen" />}

      {/* 2. Soft Warm Lighting Glows */}
      {(type === 'hero' || type === 'about' || type === 'classes' || type === 'contact') && (
        <BackgroundGlow />
      )}

      {/* 3. Soft Botanical Leaf Shadows */}
      {(type === 'hero' || type === 'about' || type === 'contact') && <BackgroundLeafShadow />}

      {/* 4. Very Light Yoga Silhouette */}
      {type === 'hero' && <BackgroundSilhouette />}

      {/* 5. Very Large Lotus Outline */}
      {(type === 'hero' || type === 'therapy' || type === 'footer') && <BackgroundLotus />}

      {/* 6. Soft Mandala Line Art */}
      {type === 'testimonials' && <BackgroundMandala />}

      {/* 7. Organic Flowing SVG Curves */}
      {(type === 'hero' || type === 'therapy') && <BackgroundFlowingLines />}

      {/* 8. Soft Grain / Noise */}
      <BackgroundNoise />

      {/* Backdrop protection for readability */}
      {type !== 'footer' && (
        <div className="absolute inset-0 bg-[#FFFDFB]/10 backdrop-blur-[0.5px] pointer-events-none" />
      )}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
