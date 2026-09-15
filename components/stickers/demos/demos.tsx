import React from 'react';
import { StickerEffect } from '../svg-sticker-effects';

interface StickerDemosProps {
  theme?: "light" | "dark" | string | null;
  userSelectedEffect?: "multicolor" | "monocolor" | string | null;
}

export default function StickerDemos({
  theme = "dark",
  userSelectedEffect = "multicolor",
}: StickerDemosProps) {
  const isDark = theme === "dark";
  const isMulticolor = userSelectedEffect === "multicolor";

  return (
    <main className="min-h-screen flex items-center justify-center bg-transparent dark:bg-transparent text-black dark:text-white transition-colors duration-300 float-animation">
      <StickerEffect
        radius={4}
        outlineColor={isDark ? "#ffffff" : "#000000"}
        lightingColor={isDark ? "hsla(0, 0%, 80%, 0.5)" : "hsla(0, 0%, 100%, 0.7)"}
        pointerTracking={true}
        // You can override any of the default props here based on the Tweakpane settings
      >
        <svg
          viewBox="0 0 885 1059"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible w-full h-auto"
          style={!isMulticolor ? { filter: "grayscale(1)" } : undefined}
        >
          {/* Insert the original SVG paths from the CodePen here */}
          <rect
            x="528"
            y="962"
            width="115"
            height="52"
            rx="26"
            transform="rotate(-90 528 962)"
            fill="#AF7128"
            stroke="#000"
            strokeWidth="6"
          />
          <path d="M552 948a3 3 0 1 0-6 0h6Zm0 12v-12h-6v12h6Z" fill="#000" />
          <path d="M564 948a3 3 0 1 0-6 0h6Zm0 12v-12h-6v12h6Z" fill="#000" />
          <path
            d="M506 673a37 37 0 1 1 66-7c13 4 26 11 36 21l14 14c10 11 18 23 21 36a37 37 0 1 1-7 67c-4 6-8 12-14 18l-47 47-77 77-6 7-15 25c-4 5-7 11-13 13-8 3-17 1-23-5l-13-12-8-7-9-9c-8-9-6-20-1-31l13-23-6-6-4-7-16 21c-6 9-20 10-29 2l-26-26c-8-9-15-21-5-37l47-60-2-8v-63a29 29 0 1 1 58 0v15l48-48c5-5 11-10 18-14Z"
            fill="#AF7128"
          />
          <path
            d="m575 869 47-47c6-6 10-12 14-18a37 37 0 1 0 7-67c-3-13-11-25-21-36l-14-14a85 85 0 0 0-36-21 37 37 0 1 0-66 7c-7 4-13 9-18 14l-48 48v-15a29 29 0 0 0-58 0v63l2 8-47 60c-10 16-3 28 5 37l26 26c9 8 23 7 29-2l16-21 4 7 6 6-13 23c-5 11-7 22 1 31l9 9 8 7 13 12c6 6 15 8 23 5 6-2 9-8 13-13l15-25 6-7 39-39"
            stroke="#000"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* ... Add remaining paths from the original source graphic ... */}
        </svg>
      </StickerEffect>
    </main>
  );
}