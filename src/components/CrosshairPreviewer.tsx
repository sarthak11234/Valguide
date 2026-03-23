"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { crosshairs, CrosshairProfile } from "@/data/crosshairs";

function CrosshairCSS({ profile }: { profile: CrosshairProfile }) {
  const { color, outline, length, thickness, offset, centerDot } = profile;
  
  const lineStyle = {
    backgroundColor: color,
    border: outline ? '1px solid black' : 'none',
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
      {centerDot && (
        <div 
          style={{ 
            ...lineStyle, 
            width: thickness * 2 || 4, 
            height: thickness * 2 || 4,
          }} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      {length > 0 && (
        <>
          {/* Top */}
          <div className="absolute" style={{ ...lineStyle, width: thickness, height: length, top: `calc(50% - ${offset + length}px)`, left: `calc(50% - ${thickness/2}px)` }} />
          {/* Bottom */}
          <div className="absolute" style={{ ...lineStyle, width: thickness, height: length, bottom: `calc(50% - ${offset + length}px)`, left: `calc(50% - ${thickness/2}px)` }} />
          {/* Left */}
          <div className="absolute" style={{ ...lineStyle, width: length, height: thickness, left: `calc(50% - ${offset + length}px)`, top: `calc(50% - ${thickness/2}px)` }} />
          {/* Right */}
          <div className="absolute" style={{ ...lineStyle, width: length, height: thickness, right: `calc(50% - ${offset + length}px)`, top: `calc(50% - ${thickness/2}px)` }} />
        </>
      )}
    </div>
  );
}

export default function CrosshairPreviewer() {
  const [selectedId, setSelectedId] = useState<string>(crosshairs[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const selectedTarget = crosshairs.find(c => c.id === selectedId) || crosshairs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedTarget.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-[6px] border-black bg-[#0F1923] p-6 shadow-[16px_16px_0px_#00E5FF]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: List of Pros */}
        <div className="lg:col-span-4 flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {crosshairs.map(crosshair => {
            const isSelected = crosshair.id === selectedId;
            return (
              <button
                key={crosshair.id}
                onClick={() => setSelectedId(crosshair.id)}
                className={`text-left p-4 border-[4px] transition-all transform skew-x-[-5deg] ${
                  isSelected 
                    ? "border-[#00E5FF] bg-[#00E5FF]/10 text-white translate-x-2" 
                    : "border-gray-800 bg-black/40 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                }`}
              >
                <div className="skew-x-[5deg] flex justify-between items-center">
                  <span className="font-black tracking-widest uppercase text-xl">{crosshair.playerName}</span>
                  <span className={`text-xs font-bold px-2 py-1 uppercase ${isSelected ? "bg-[#00E5FF] text-black" : "bg-gray-800 text-gray-400"}`}>
                    {crosshair.team}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Preview & Code */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Canvas */}
          <div className="relative w-full aspect-video bg-gray-900 border-[4px] border-black overflow-hidden flex items-center justify-center">
            {/* Fake ingame background */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/displayicon.png')] bg-cover bg-center blur-[2px] grayscale-[0.5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] to-transparent opacity-80" />
            
            {/* The actual crosshair */}
            <div className="relative z-10 w-24 h-24">
              <CrosshairCSS profile={selectedTarget} />
            </div>

            <div className="absolute top-4 left-4 border-l-4 border-[#00E5FF] pl-3">
              <span className="block text-[#00E5FF] font-black tracking-widest uppercase text-sm">PREVIEW CAMERA</span>
              <span className="block text-gray-400 font-bold uppercase text-xs">{selectedTarget.playerName} // {selectedTarget.team}</span>
            </div>
          </div>

          {/* Import Code Box */}
          <div className="w-full bg-black border-4 border-gray-700 p-4 relative group">
            <span className="absolute -top-[10px] left-4 bg-gray-700 text-white text-[10px] font-black px-2 tracking-widest">
              IMPORT PROFILE CODE
            </span>
            
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <code className="text-[#00E5FF] font-mono text-xs sm:text-sm break-all flex-1 p-2 bg-[#0F1923] border border-gray-800 selection:bg-[#00E5FF] selection:text-black">
                {selectedTarget.code}
              </code>
              <button
                onClick={handleCopy}
                className={`shrink-0 px-6 py-3 font-black tracking-widest uppercase transition-all border-4 ${
                  copied 
                    ? "bg-[#39FF14] text-black border-black shadow-[4px_4px_0px_#00E5FF]" 
                    : "bg-[#00E5FF] text-black border-black shadow-[4px_4px_0px_#FF4655] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FF4655]"
                }`}
              >
                {copied ? "COPIED TO CLIPBOARD" : "COPY CODE"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
