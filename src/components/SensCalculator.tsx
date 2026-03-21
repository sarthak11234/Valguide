"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { ComicPanel } from "./ComicGrid";

export default function SensCalculator() {
  const [dpi, setDpi] = useState<number | "">(800);
  const [sens, setSens] = useState<number | "">(0.35);
  const [edpi, setEdpi] = useState<number | null>(null);
  const [showZap, setShowZap] = useState(false);

  const calculate = () => {
    if (dpi && sens) {
      const result = Math.round(dpi * sens * 100) / 100;
      setEdpi(result);
      
      // Flash Zap
      setShowZap(true);
      setTimeout(() => setShowZap(false), 800);
    }
  };

  const getEdpiStatus = (val: number) => {
    if (val < 200) return { text: "LOW - Requires large arm sweeps", color: "text-zinc-400 border-zinc-400" };
    if (val <= 400) return { text: "OPTIMAL - Pro sweet spot (200-400)", color: "text-(--val-green) border-(--val-green)" };
    if (val <= 600) return { text: "HIGH - Precision suffers slightly", color: "text-(--val-cyan) border-(--val-cyan)" };
    return { text: "EXTREME - Wrist injury risk", color: "text-(--val-red) border-(--val-red)" };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <AnimatePresence>
        {showZap && (
          <motion.div
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: [1.5, 1], rotate: -15, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          >
            <div className="relative">
              <svg width="200" height="150" viewBox="0 0 200 150" className="drop-shadow-[-6px_6px_0px_#000]">
                {/* Yellow/Green jagged flash */}
                <path d="M10,75 L80,10 L70,60 L190,40 L110,140 L120,90 Z" fill="var(--val-green)" stroke="#000" strokeWidth="6" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center -rotate-12">
                <span className="font-[family:var(--font-tungsten)] text-5xl text-black font-bold italic translate-y-[-10px]">
                  ZAP!
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Form */}
      <ComicPanel accentColor="var(--val-cyan)">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block font-bold tracking-widest text-sm text-(--val-cyan) mb-2">
              MOUSE DPI
            </label>
            <input 
              type="number"
              value={dpi}
              onChange={(e) => setDpi(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full bg-black/50 border-[4px] border-black p-4 font-[family:var(--font-tungsten)] text-4xl focus:outline-none focus:border-(--val-cyan) transition-colors text-white text-center"
              placeholder="e.g. 800"
            />
          </div>
          <div>
            <label className="block font-bold tracking-widest text-sm text-(--val-cyan) mb-2">
              IN-GAME SENSITIVITY
            </label>
            <input 
              type="number"
              step="0.01"
              value={sens}
              onChange={(e) => setSens(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full bg-black/50 border-[4px] border-black p-4 font-[family:var(--font-tungsten)] text-4xl focus:outline-none focus:border-(--val-cyan) transition-colors text-white text-center"
              placeholder="e.g. 0.35"
            />
          </div>
          <Button onClick={calculate} variant="secondary" className="w-full mt-2">
            CALCULATE eDPI
          </Button>
        </div>
      </ComicPanel>

      {/* Result Panel */}
      <ComicPanel skew={false} accentColor="var(--val-green)" className="flex flex-col justify-center items-center text-center p-8">
        <h3 className="font-bold tracking-[0.2em] text-zinc-500 mb-6">EFFECTIVE DPI (eDPI)</h3>
        {edpi !== null ? (
          <motion.div
            key={edpi}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center w-full"
          >
            <div className="inline-block bg-black border-[6px] border-(--val-green) py-6 px-12 mb-8 -skew-x-[6deg] shadow-[8px_8px_0px_#000]">
              <span className="block font-[family:var(--font-tungsten)] text-7xl md:text-9xl text-(--val-offwhite) skew-x-[6deg]">
                {edpi}
              </span>
            </div>
            {(() => {
              const status = getEdpiStatus(edpi);
              return (
                <div className={`font-bold tracking-widest uppercase text-sm md:text-base ${status.color} bg-black/80 px-6 py-3 border-[3px] shadow-[4px_4px_0_#000]`}>
                  {status.text}
                </div>
              )
            })()}
          </motion.div>
        ) : (
          <div className="font-[family:var(--font-tungsten)] text-4xl text-zinc-700 opacity-50 italic">
            AWAITING INPUT...
          </div>
        )}
      </ComicPanel>
    </div>
  );
}
