import React, { useId, useRef } from 'react';

export interface StickerEffectProps {
  /** The SVG or elements to apply the sticker effect to */
  children: React.ReactNode;
  /** Additional container classes */
  className?: string;
  
  // feMorphology
  radius?: number;
  // feFlood
  outlineColor?: string;
  // feTurbulence
  baseFrequency?: number;
  numOctaves?: number;
  seed?: number;
  turbulenceType?: 'fractalNoise' | 'turbulence';
  // feGaussianBlur
  blurDeviation?: number;
  // feSpecularLighting
  lightingColor?: string;
  surfaceScale?: number;
  specularConstant?: number;
  specularExponent?: number;
  // fePointLight
  lightX?: number;
  lightY?: number;
  lightZ?: number;
  pointerLighting?: boolean;
  // feDropShadow
  dropShadowDx?: number;
  dropShadowDy?: number;
  dropShadowColor?: string;
  dropShadowOpacity?: number;
  dropShadowDeviation?: number;
}

export function StickerEffect({
  children,
  className = '',
  radius = 4,
  outlineColor = '#fff',
  baseFrequency = 0.4,
  numOctaves = 4,
  seed = 120,
  turbulenceType = 'turbulence',
  blurDeviation = 2,
  lightingColor = 'hsla(0, 0%, 80%, 0.5)',
  surfaceScale = 8,
  specularConstant = 6,
  specularExponent = 65,
  lightX = 50,
  lightY = 50,
  lightZ = 65,
  pointerLighting = true,
  dropShadowDx = 1,
  dropShadowDy = 3,
  dropShadowColor = 'hsl(0, 0%, 0%)',
  dropShadowOpacity = 0.75,
  dropShadowDeviation = 3,
}: StickerEffectProps) {
  const filterId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const pointLightRef = useRef<SVGFEPointLightElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerLighting || !containerRef.current || !pointLightRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    
    // Direct DOM manipulation for performance (avoids React state re-renders on mouse move)
    pointLightRef.current.setAttribute('x', x.toString());
    pointLightRef.current.setAttribute('y', y.toString());
  };

  return (
    <>
      {/* Hidden SVG Filter Definition */}
      <svg className="sr-only" aria-hidden="true">
        <filter id={filterId}>
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
          <feComposite in="outlinecolor" in2="dilate" operator="in" result="outlineflat" />
          <feMerge result="merged">
            <feMergeNode in="outlineflat" />
            <feMergeNode in="outline" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
          <feGaussianBlur in="SourceAlpha" stdDeviation={blurDeviation} result="blur" />
          <feSpecularLighting
            result="lighting"
            in="blur"
            surfaceScale={surfaceScale}
            specularConstant={specularConstant}
            specularExponent={specularExponent}
            lightingColor={lightingColor}
            style={{ opacity: 0.4 }}
          >
            <fePointLight ref={pointLightRef} x={lightX} y={lightY} z={lightZ} />
          </feSpecularLighting>
          <feComposite in="lighting" in2="SourceAlpha" operator="in" result="composite" />
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
            dx={dropShadowDx}
            dy={dropShadowDy}
            stdDeviation={dropShadowDeviation}
            floodColor={dropShadowColor}
            floodOpacity={dropShadowOpacity}
          />
        </filter>
      </svg>

      {/* Target Container */}
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        style={{ filter: `url(#${filterId})` }}
        className={`w-[clamp(200px,35vmin,400px)] overflow-visible [&_svg]:!overflow-visible ${
          pointerLighting ? 'cursor-none' : ''
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
}