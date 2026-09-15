import React, { useRef, useId } from 'react';
import { motion } from 'motion/react';

export interface StickerEffectProps {
  children: React.ReactNode;
  /** Morphology radius */
  radius?: number;
  /** Outline color */
  outlineColor?: string;
  /** Turbulence base frequency */
  baseFrequency?: number;
  /** Turbulence octaves */
  numOctaves?: number;
  /** Turbulence seed */
  seed?: number;
  /** Turbulence type */
  turbulenceType?: 'fractalNoise' | 'turbulence';
  /** Gaussian blur deviation */
  blurDeviation?: number;
  /** Specular lighting surface scale */
  surfaceScale?: number;
  /** Specular lighting constant */
  specularConstant?: number;
  /** Specular lighting exponent */
  specularExponent?: number;
  /** Lighting color */
  lightingColor?: string;
  /** Default light X position */
  lightX?: number;
  /** Default light Y position */
  lightY?: number;
  /** Light Z position */
  lightZ?: number;
  /** Enable pointer tracking for the light source */
  pointerTracking?: boolean;
  /** Drop shadow X offset */
  shadowDx?: number;
  /** Drop shadow Y offset */
  shadowDy?: number;
  /** Drop shadow color */
  shadowColor?: string;
  /** Drop shadow opacity */
  shadowOpacity?: number;
  /** Drop shadow blur deviation */
  shadowDeviation?: number;
  /** Additional wrapper classes */
  className?: string;
}

export function StickerEffect({
  children,
  radius = 4,
  outlineColor = '#fff',
  baseFrequency = 0.4,
  numOctaves = 4,
  seed = 120,
  turbulenceType = 'turbulence',
  blurDeviation = 2,
  surfaceScale = 8,
  specularConstant = 6,
  specularExponent = 65,
  lightingColor = 'hsla(0, 0%, 80%, 0.5)',
  lightX = 50,
  lightY = 50,
  lightZ = 65,
  pointerTracking = true,
  shadowDx = 1,
  shadowDy = 3,
  shadowColor = 'hsl(0, 0%, 0%)',
  shadowOpacity = 0.75,
  shadowDeviation = 3,
  className = '',
}: StickerEffectProps) {
  const filterId = useId();
  const stickerRef = useRef<HTMLDivElement>(null);
  const pointLightRef = useRef<SVGFEPointLightElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerTracking || !pointLightRef.current || !stickerRef.current) return;
    const rect = stickerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Direct DOM manipulation for high-frequency SVG filter updates
    pointLightRef.current.setAttribute('x', x.toString());
    pointLightRef.current.setAttribute('y', y.toString());
  };

  return (
    <div className={`relative ${className}`}>
      {/* SVG Filter Definition */}
      <svg className="sr-only absolute w-0 h-0">
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feMorphology
            in="SourceAlpha"
            result="dilate"
            operator="dilate"
            radius={radius}
          />
          <feFlood floodColor={outlineColor} result="outlinecolor" />
          <feTurbulence
            baseFrequency={baseFrequency}
            seed={seed}
            numOctaves={numOctaves}
            type={turbulenceType}
            result="turb"
          />
          <feComposite in="turb" in2="dilate" operator="in" result="outline" />
          <feComposite
            in="outlinecolor"
            in2="dilate"
            operator="in"
            result="outlineflat"
          />
          <feMerge result="merged">
            <feMergeNode in="outlineflat" />
            <feMergeNode in="outline" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
          <feGaussianBlur
            in="SourceAlpha"
            stdDeviation={blurDeviation}
            result="blur"
          />
          <feSpecularLighting
            result="lighting"
            in="blur"
            surfaceScale={surfaceScale}
            specularConstant={specularConstant}
            specularExponent={specularExponent}
            lightingColor={lightingColor}
            // Tailwind v4 specific opacity handling or standard inline style
            style={{ opacity: 0.4 }} 
          >
            <fePointLight
              ref={pointLightRef}
              x={lightX}
              y={lightY}
              z={lightZ}
            />
          </feSpecularLighting>
          <feComposite
            in="lighting"
            in2="SourceAlpha"
            operator="in"
            result="composite"
          />
          <feComposite
            in="merged"
            in2="composite"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litPaint"
          />
          <feDropShadow
            dx={shadowDx}
            dy={shadowDy}
            stdDeviation={shadowDeviation}
            floodColor={shadowColor}
            floodOpacity={shadowOpacity}
          />
        </filter>
      </svg>

      {/* Graphic Container */}
      <motion.div
        ref={stickerRef}
        onPointerMove={handlePointerMove}
        className={`w-[clamp(200px,35vmin,400px)] overflow-visible ${
          pointerTracking ? 'cursor-none' : ''
        }`}
        style={{ filter: `url(#${filterId})` }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}