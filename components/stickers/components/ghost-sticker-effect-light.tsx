"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Settings, X } from "lucide-react";
import { StickerEffect } from "@/components/stickers/svg-sticker-effects"; // Assuming this is in the same directory
import { GhostDark, GhostLight } from "@/components/stickers/stickers/ghost";
import { addToLocalStorage, getFromLocalStorage, isItemInLocalStorage } from "@/lib/local-storage"

// --- State Definition ---
type StickerConfig = {
  radius: number;
  outlineColor: string;
  baseFrequency: number;
  numOctaves: number;
  seed: number;
  turbulenceType: "fractalNoise" | "turbulence";
  blurDeviation: number;
  lightingColor: string;
  surfaceScale: number;
  specularConstant: number;
  specularExponent: number;
  pointerLighting: boolean;
  lightX: number;
  lightY: number;
  lightZ: number;
  dropShadowDx: number;
  dropShadowDy: number;
  dropShadowColor: string;
  dropShadowOpacity: number;
  dropShadowDeviation: number;
};

const defaultConfig: StickerConfig = {
  radius: 4,
  outlineColor: "#ffffff",
  baseFrequency: 0.4,
  numOctaves: 4,
  seed: 120,
  turbulenceType: "turbulence",
  blurDeviation: 2,
  lightingColor: "#cccccc",
  surfaceScale: 8,
  specularConstant: 6,
  specularExponent: 65,
  pointerLighting: true,
  lightX: 50,
  lightY: 50,
  lightZ: 65,
  dropShadowDx: 1,
  dropShadowDy: 3,
  dropShadowColor: "#000000",
  dropShadowOpacity: 0.75,
  dropShadowDeviation: 3,
};

// --- Main App Component ---
export default function GhostStickerEffectLight() {
  const [config, setConfig] = useState<StickerConfig>(defaultConfig);
  const [mounted, setMounted] = useState(false)
  const [mountedEffect, setMountedEffect] = useState<"multicolor" | "monocolor">("multicolor")
  const effect = isItemInLocalStorage("colorEffect") === true ? getFromLocalStorage("colorEffect") : null
  const [theme, setTheme] = useState<"light" | "dark" | string | null | undefined>(isItemInLocalStorage("theme") === true ? getFromLocalStorage("theme") : 'dark')
  const [selectedEffect, setSelectedEffect] = useState({ effect: "multicolor" })
   const handleChange = (value): void => { setSelectedEffect({ effect: value }) }
  const updateConfig = (key: keyof StickerConfig, value: string | number | boolean) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex min-h-content flex-col items-center justify-center gap-12 bg-radial-gradient from-40% to-100% p-8">
      {/* 1. Sticker Graphic */}
      <StickerEffect {...config}>
        <GhostLight
          userSelectedEffect={selectedEffect.effect}
          onChange={handleChange}
          // color={selectedEffect.effect === "multicolor" ? "yellow-500/30" : "white/30"}
          width={128} height={128} 
          size={128}
          />
      </StickerEffect>

      {/* 2. Control Panel Notch */}
      <NotchControls config={config} onChange={updateConfig} />
    </div>
  );
}

// --- Modified Notch Component ---
function NotchControls({
  config,
  onChange,
}: {
  config: StickerConfig;
  onChange: (key: keyof StickerConfig, val: any) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const presence = {
    enter: { opacity: 0, scale: 0.95 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.1 } },
  };

  const handleToggle = () => {
    if (isOpen) {
      setShowContent(false);
    } else {
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 150);
    }
  };

  return (
    <motion.div
      className={cn(
        "bg-zinc-900 border border-zinc-800 shadow-xl overflow-hidden will-change-transform",
        isOpen ? "rounded-3xl cursor-default" : "rounded-full cursor-pointer hover:bg-zinc-800"
      )}
      animate={{
        height: isOpen ? 520 : 64,
        width: isOpen ? 560 : 200,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      {/* Header */}
      <div
        onClick={!isOpen ? handleToggle : undefined}
        className={cn(
          "flex items-center justify-between h-16 px-6",
          isOpen && "border-b border-zinc-800/50"
        )}
      >
        <div className="flex items-center gap-3 text-zinc-100">
          <Settings size={20} className={cn(!isOpen && "animate-spin-slow")} />
          <span className="font-medium">{isOpen ? "Sticker Properties" : "Settings"}</span>
        </div>
        {isOpen && (
          <button
            onClick={handleToggle}
            className="p-2 -mr-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Content Area */}
      <AnimatePresence onExitComplete={() => setIsOpen(false)}>
        {showContent && (
          <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={presence}
            className="h-[calc(102%-64px)] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-zinc-700"
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm text-zinc-300">
              
              {/* Group: General */}
              <motion.div variants={itemVariants} className="col-span-2 text-zinc-500 font-semibold uppercase text-xs tracking-wider">Appearance</motion.div>
              <Control title="Radius" value={config.radius} min={0} max={20} step={1} onChange={(v) => onChange("radius", v)} variants={itemVariants} />
              <ColorControl title="Outline Color" value={config.outlineColor} onChange={(v) => onChange("outlineColor", v)} variants={itemVariants} />
              <Control title="Blur Deviation" value={config.blurDeviation} min={0} max={10} step={0.1} onChange={(v) => onChange("blurDeviation", v)} variants={itemVariants} />
              
              {/* Group: Turbulence */}
              <motion.div variants={itemVariants} className="col-span-2 text-zinc-500 font-semibold uppercase text-xs tracking-wider mt-4">Turbulence</motion.div>
              <Control title="Base Frequency" value={config.baseFrequency} min={0} max={1} step={0.01} onChange={(v) => onChange("baseFrequency", v)} variants={itemVariants} />
              <Control title="Octaves" value={config.numOctaves} min={0} max={10} step={1} onChange={(v) => onChange("numOctaves", v)} variants={itemVariants} />
              <Control title="Seed" value={config.seed} min={0} max={1000} step={1} onChange={(v) => onChange("seed", v)} variants={itemVariants} />
              <SelectControl title="Type" value={config.turbulenceType} options={["fractalNoise", "turbulence"]} onChange={(v) => onChange("turbulenceType", v)} variants={itemVariants} />

              {/* Group: Lighting */}
              <motion.div variants={itemVariants} className="col-span-2 flex items-center justify-between text-zinc-500 font-semibold uppercase text-xs tracking-wider mt-4">
                Lighting
                <ToggleControl label="Pointer Track" checked={config.pointerLighting} onChange={(v) => onChange("pointerLighting", v)} />
              </motion.div>
              <ColorControl title="Light Color" value={config.lightingColor} onChange={(v) => onChange("lightingColor", v)} variants={itemVariants} />
              <Control title="Surface Scale" value={config.surfaceScale} min={0} max={50} step={0.1} onChange={(v) => onChange("surfaceScale", v)} variants={itemVariants} />
              <Control title="Spec Constant" value={config.specularConstant} min={0} max={25} step={0.1} onChange={(v) => onChange("specularConstant", v)} variants={itemVariants} />
              <Control title="Spec Exponent" value={config.specularExponent} min={0} max={200} step={1} onChange={(v) => onChange("specularExponent", v)} variants={itemVariants} />
              
              {!config.pointerLighting && (
                <>
                  <Control title="Light X" value={config.lightX} min={-500} max={500} step={1} onChange={(v) => onChange("lightX", v)} variants={itemVariants} />
                  <Control title="Light Y" value={config.lightY} min={-500} max={500} step={1} onChange={(v) => onChange("lightY", v)} variants={itemVariants} />
                  <Control title="Light Z" value={config.lightZ} min={0} max={500} step={1} onChange={(v) => onChange("lightZ", v)} variants={itemVariants} />
                </>
              )}

              {/* Group: Drop Shadow */}
              <motion.div variants={itemVariants} className="col-span-2 text-zinc-500 font-semibold uppercase text-xs tracking-wider mt-4">Drop Shadow</motion.div>
              <Control title="Shadow X" value={config.dropShadowDx} min={-10} max={10} step={1} onChange={(v) => onChange("dropShadowDx", v)} variants={itemVariants} />
              <Control title="Shadow Y" value={config.dropShadowDy} min={-10} max={10} step={1} onChange={(v) => onChange("dropShadowDy", v)} variants={itemVariants} />
              <Control title="Shadow Blur" value={config.dropShadowDeviation} min={0} max={20} step={0.1} onChange={(v) => onChange("dropShadowDeviation", v)} variants={itemVariants} />
              <Control title="Opacity" value={config.dropShadowOpacity} min={0} max={1} step={0.01} onChange={(v) => onChange("dropShadowOpacity", v)} variants={itemVariants} />
              <ColorControl title="Shadow Color" value={config.dropShadowColor} onChange={(v) => onChange("dropShadowColor", v)} variants={itemVariants} />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Helper Form Controls ---

function Control({ title, value, min, max, step, onChange, variants }: any) {
  return (
    <motion.div variants={variants} className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label>{title}</label>
        <span className="text-zinc-500">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="accent-zinc-400 w-full"
      />
    </motion.div>
  );
}

function ColorControl({ title, value, onChange, variants }: any) {
  return (
    <motion.div variants={variants} className="flex flex-col gap-2">
      <label>{title}</label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-12 rounded cursor-pointer bg-transparent border-0 p-0"
        />
        <span className="text-zinc-500 uppercase">{value}</span>
      </div>
    </motion.div>
  );
}

function SelectControl({ title, value, options, onChange, variants }: any) {
  return (
    <motion.div variants={variants} className="flex flex-col gap-2">
      <label>{title}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-zinc-800 text-zinc-100 border border-zinc-700 rounded px-2 py-1 outline-none focus:border-zinc-500"
      >
        {options.map((opt: string) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </motion.div>
  );
}

function ToggleControl({ label, checked, onChange }: any) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <div className={cn("w-8 h-4 rounded-full transition-colors relative", checked ? "bg-zinc-400" : "bg-zinc-700")}>
        <div className={cn("absolute w-3 h-3 bg-zinc-900 rounded-full top-0.5 transition-all", checked ? "left-4" : "left-0.5")} />
      </div>
      <span className="text-zinc-400 font-normal normal-case">{label}</span>
    </label>
  );
}