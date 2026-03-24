"use client";

import React, { useState } from "react";

const COLORS = [
  { name: "Cyan", hex: "#00FFFF", code: 5 },
  { name: "Green", hex: "#00FF00", code: 1 },
  { name: "Yellow Green", hex: "#ADFF2F", code: 2 },
  { name: "White", hex: "#FFFFFF", code: 0 },
  { name: "Red", hex: "#FF0000", code: 7 },
  { name: "Pink", hex: "#FF69B4", code: 6 },
];

export default function CrosshairGenerator() {
  // Color
  const [color, setColor] = useState(COLORS[0]);

  // Center Dot
  const [showDot, setShowDot] = useState(true);
  const [dotThickness, setDotThickness] = useState(2);

  // Inner Lines
  const [showInner, setShowInner] = useState(true);
  const [innerLength, setInnerLength] = useState(4);
  const [innerThickness, setInnerThickness] = useState(2);
  const [innerOffset, setInnerOffset] = useState(2);
  
  const [copied, setCopied] = useState(false);

  // Profile Code Generator
  // Example format: 0;P;c;5;o;1;d;1;z;4;0t;1;0l;2;0o;2;0a;1
  const generateProfileCode = () => {
    let code = `0;P;c;${color.code};o;1`; // Base + Color + Outlines on
    
    // Dot
    if (showDot) {
      code += `;d;1;z;${dotThickness}`;
    } else {
      code += `;d;0`;
    }

    // Inner Lines
    if (showInner) {
      code += `;0b;0;0t;${innerThickness};0l;${innerLength};0o;${innerOffset};0a;1`;
    } else {
      code += `;0b;0;0t;0;0l;0;0o;0;0a;0`;
    }

    return code;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateProfileCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8">
      {/* Visual Previewer */}
      <div className="w-full lg:w-1/2 flex flex-col items-center bg-black border-[6px] border-black shadow-[8px_8px_0_#FF4655] p-2">
        <div className="w-full aspect-video bg-zinc-800 relative overflow-hidden flex items-center justify-center border-[4px] border-[#0F1923]">
          {/* Faux map background to simulate visibility */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
          
          <div className="relative" style={{ width: 0, height: 0 }}>
            {/* Center Dot */}
            {showDot && (
              <div 
                className="absolute shadow-[0_0_0_1px_rgba(0,0,0,1)]"
                style={{
                  backgroundColor: color.hex,
                  width: `${dotThickness}px`,
                  height: `${dotThickness}px`,
                  left: `-${dotThickness / 2}px`,
                  top: `-${dotThickness / 2}px`,
                  zIndex: 10
                }}
              />
            )}

            {/* Inner Lines */}
            {showInner && (
              <>
                {/* Top */}
                <div className="absolute shadow-[0_0_0_1px_rgba(0,0,0,1)]"
                  style={{
                    backgroundColor: color.hex,
                    width: `${innerThickness}px`,
                    height: `${innerLength}px`,
                    left: `-${innerThickness / 2}px`,
                    bottom: `${innerOffset}px`
                  }}
                />
                {/* Bottom */}
                <div className="absolute shadow-[0_0_0_1px_rgba(0,0,0,1)]"
                  style={{
                    backgroundColor: color.hex,
                    width: `${innerThickness}px`,
                    height: `${innerLength}px`,
                    left: `-${innerThickness / 2}px`,
                    top: `${innerOffset}px`
                  }}
                />
                {/* Left */}
                <div className="absolute shadow-[0_0_0_1px_rgba(0,0,0,1)]"
                  style={{
                    backgroundColor: color.hex,
                    height: `${innerThickness}px`,
                    width: `${innerLength}px`,
                    top: `-${innerThickness / 2}px`,
                    right: `${innerOffset}px`
                  }}
                />
                {/* Right */}
                <div className="absolute shadow-[0_0_0_1px_rgba(0,0,0,1)]"
                  style={{
                    backgroundColor: color.hex,
                    height: `${innerThickness}px`,
                    width: `${innerLength}px`,
                    top: `-${innerThickness / 2}px`,
                    left: `${innerOffset}px`
                  }}
                />
              </>
            )}
          </div>
        </div>

        {/* Profile Code Exporter Card */}
        <div className="w-full mt-6 bg-[#0F1923] border-4 border-[#39FF14] p-4 flex flex-col gap-4">
          <label className="text-[#39FF14] font-bold text-sm tracking-widest uppercase">
            CROSSHAIR PROFILE CODE
          </label>
          <div className="flex gap-4">
            <input 
              readOnly 
              value={generateProfileCode()} 
              className="flex-1 bg-black border-2 border-[#39FF14] p-3 font-mono text-zinc-300 focus:outline-none"
            />
            <button 
              onClick={handleCopy}
              className={`px-6 py-3 font-black text-xl uppercase tracking-wider transition-all border-4 ${
                copied 
                  ? "bg-[#39FF14] text-black border-black shadow-none scale-95" 
                  : "bg-white text-black border-black hover:bg-[#39FF14] shadow-[4px_4px_0_#39FF14]"
              }`}
            >
              {copied ? "COPIED" : "COPY"}
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 p-6 bg-[#0F1923] border-[6px] border-black shadow-[8px_8px_0_#FFF]">
        <h3 className="font-black text-3xl font-[family:var(--font-tungsten)] text-white italic tracking-widest border-b-4 border-[#FF4655] pb-2 inline-block">
          CALIBRATE RETICLE
        </h3>

        {/* Color Select */}
        <div className="flex flex-col gap-2">
          <label className="font-bold tracking-widest text-[#00E5FF] text-sm uppercase">Primary Color</label>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c)}
                className={`w-10 h-10 border-4 transition-transform ${
                  color.name === c.name 
                    ? "border-white scale-110 shadow-[2px_2px_0_#FFF]" 
                    : "border-black hover:scale-110 shadow-[2px_2px_0_#000]"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        <div className="h-1 w-full bg-zinc-800 my-2" />

        {/* Center Dot Controls */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="font-bold tracking-widest text-[#00E5FF] text-sm uppercase">Center Dot</label>
            <button 
              onClick={() => setShowDot(!showDot)}
              className={`px-3 py-1 font-bold text-xs tracking-wider border-2 border-black ${showDot ? "bg-[#39FF14] text-black" : "bg-zinc-600 text-white"}`}
            >
              {showDot ? "ON" : "OFF"}
            </button>
          </div>
          {showDot && (
            <div className="flex items-center gap-4">
              <label className="w-24 text-zinc-400 text-sm font-bold tracking-wider">Thickness</label>
              <input 
                type="range" 
                min="1" max="6" 
                value={dotThickness} 
                onChange={(e) => setDotThickness(Number(e.target.value))}
                className="flex-1 accent-[#FF4655]"
              />
              <span className="w-8 font-mono font-bold">{dotThickness}</span>
            </div>
          )}
        </div>

        <div className="h-1 w-full bg-zinc-800 my-2" />

        {/* Inner Lines Controls */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="font-bold tracking-widest text-[#00E5FF] text-sm uppercase">Inner Lines</label>
            <button 
              onClick={() => setShowInner(!showInner)}
              className={`px-3 py-1 font-bold text-xs tracking-wider border-2 border-black ${showInner ? "bg-[#39FF14] text-black" : "bg-zinc-600 text-white"}`}
            >
              {showInner ? "ON" : "OFF"}
            </button>
          </div>
          {showInner && (
            <>
              <div className="flex items-center gap-4">
                <label className="w-24 text-zinc-400 text-sm font-bold tracking-wider">Length</label>
                <input 
                  type="range" 
                  min="0" max="20" 
                  value={innerLength} 
                  onChange={(e) => setInnerLength(Number(e.target.value))}
                  className="flex-1 accent-[#00E5FF]"
                />
                <span className="w-8 font-mono font-bold">{innerLength}</span>
              </div>
              <div className="flex items-center gap-4">
                <label className="w-24 text-zinc-400 text-sm font-bold tracking-wider">Thickness</label>
                <input 
                  type="range" 
                  min="0" max="10" 
                  value={innerThickness} 
                  onChange={(e) => setInnerThickness(Number(e.target.value))}
                  className="flex-1 accent-[#00E5FF]"
                />
                <span className="w-8 font-mono font-bold">{innerThickness}</span>
              </div>
              <div className="flex items-center gap-4">
                <label className="w-24 text-zinc-400 text-sm font-bold tracking-wider">Offset</label>
                <input 
                  type="range" 
                  min="0" max="20" 
                  value={innerOffset} 
                  onChange={(e) => setInnerOffset(Number(e.target.value))}
                  className="flex-1 accent-[#00E5FF]"
                />
                <span className="w-8 font-mono font-bold">{innerOffset}</span>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
