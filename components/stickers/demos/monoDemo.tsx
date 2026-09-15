import { StickerEffect } from '../svg-sticker-effect';

interface MonoStickerDemoProps {
  theme?: "light" | "dark" | string | null;
  userSelectedEffect?: "multicolor" | "monocolor" | string | null;
}

export default function MonoStickerDemo({
  theme = "dark",
  userSelectedEffect = "monocolor",
}: MonoStickerDemoProps) {
  const isDark = theme === "dark";
  const isMulticolor = userSelectedEffect === "multicolor";

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent float-animation">
      <StickerEffect 
        pointerLighting={true}
        outlineColor={isDark ? "#ffffff" : "#000000"}
        lightingColor={isDark ? "hsla(0, 0%, 80%, 0.5)" : "hsla(0, 0%, 100%, 0.7)"}
        radius={4}
      >
        <svg
          viewBox="0 0 885 1059"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={!isMulticolor ? { filter: "grayscale(1)" } : undefined}
        >
          <rect x="528" y="962" width="115" height="52" rx="26" transform="rotate(-90 528 962)" fill="#AF7128" stroke="#000" strokeWidth="6" />
          <path d="M552 948a3 3 0 1 0-6 0h6Zm0 12v-12h-6v12h6Z" fill="#000" />
          <path d="M564 948a3 3 0 1 0-6 0h6Zm0 12v-12h-6v12h6Z" fill="#000" />
          <path d="M506 673a37 37 0 1 1 66-7c13 4 26 11 36 21l14 14c10 11 18 23 21 36a37 37 0 1 1-7 67c-4 6-8 12-14 18l-47 47-77 77-6 7-15 25c-4 5-7 11-13 13-8 3-17 1-23-5l-13-12-8-7-9-9c-8-9-6-20-1-31l13-23-6-6-4-7-16 21c-6 9-20 10-29 2l-26-26c-8-9-15-21-5-37l47-60-2-8v-63a29 29 0 1 1 58 0v15l48-48c5-5 11-10 18-14Z" fill="#AF7128" />
          <path d="m575 869 47-47c6-6 10-12 14-18a37 37 0 1 0 7-67c-3-13-11-25-21-36l-14-14a85 85 0 0 0-36-21 37 37 0 1 0-66 7c-7 4-13 9-18 14l-48 48v-15a29 29 0 0 0-58 0v63l2 8-47 60c-10 16-3 28 5 37l26 26c9 8 23 7 29-2l16-21 4 7 6 6-13 23c-5 11-7 22 1 31l9 9 8 7 13 12c6 6 15 8 23 5 6-2 9-8 13-13l15-25 6-7 39-39" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M412 705a3 3 0 0 0 6 0h-6Zm0-12v12h6v-12h-6Z" fill="#000" />
          <path d="M400 705a3 3 0 0 0 6 0h-6Zm0-12v12h6v-12h-6Z" fill="#000" />
          <path fill="#FF1E1E" d="m542 703 63 63-9 9-63-63z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M650 753c3 23-6 46-21 61l-43-44c9-10 9-25 0-35l-14-13a25 25 0 0 0-35 0l-43-44c14-14 37-23 60-21 23 3 46 14 64 32s30 41 32 64Z" fill="#000" />
          <circle cx="582.1" cy="803.3" transform="rotate(45 582 803)" fill="#000" r="8.1" />
          <circle cx="505.2" cy="726.4" transform="rotate(45 505 726)" fill="#000" r="8.1" />
          <path d="M548 790c-6 6-19 5-27-3-8-7-8-21-2-27 5-5 15-1 23 6 8 8 12 18 6 24Z" fill="#000" />
          <path d="m430 956-8 8" stroke="#000" strokeWidth="6" strokeLinecap="round" />
          <path d="m447 973-8 8" stroke="#000" strokeWidth="6" strokeLinecap="round" />
          <path d="m357 883-8 8" stroke="#000" strokeWidth="6" strokeLinecap="round" />
          <path d="m374 900-8 8" stroke="#000" strokeWidth="6" strokeLinecap="round" />
          <path d="m427 822-5-376" stroke="#000" strokeWidth="6" strokeLinecap="round" />
          <circle cx="421.5" cy="273.5" r="169" fill="#D52828" fillOpacity="1" stroke="#000" strokeWidth="6" />
          <path d="M406 445h31l10 20h-50l9-20Z" fill="#F20000" fillOpacity="1" stroke="#000" strokeWidth="6" strokeLinejoin="round" />
          <path d="m380 757 62-42" stroke="#000" strokeWidth="6" strokeLinecap="round" />
          <path d="M384 143a136 136 0 0 0-98 119" stroke="#fff" strokeOpacity=".5" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </StickerEffect>
    </div>
  );
}