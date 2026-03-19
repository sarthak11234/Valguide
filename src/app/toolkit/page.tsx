"use client";

import { useState } from "react";

export default function TacticalToolkit() {
  const [dpi, setDpi] = useState<number | "">("");
  const [sens, setSens] = useState<number | "">("");
  const [edpi, setEdpi] = useState<number | null>(null);
  const [showZap, setShowZap] = useState(false);

  const calculate = () => {
    if (dpi && sens) {
      setEdpi(dpi * sens);
      setShowZap(true);
      setTimeout(() => setShowZap(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1923] text-[#ECE8E1] flex flex-col items-center justify-center p-8 font-sans relative">
      <div className="w-full max-w-lg border-4 border-black bg-[#ECE8E1] text-black p-8 relative shadow-[12px_12px_0px_#00E5FF]">
        {/* Comic Panel Header */}
        <div className="absolute -top-6 -left-6 bg-[#00E5FF] border-4 border-black px-6 py-2 transform -skew-x-6 shadow-[4px_4px_0px_#FF4655]">
          <h1 className="text-3xl font-black uppercase tracking-widest text-black italic">
            TACTICAL TOOLKIT
          </h1>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex border-4 border-black">
            <div className="bg-[#FF4655] px-6 py-4 border-r-4 border-black font-black uppercase text-xl text-white">
              Mouse DPI
            </div>
            <input 
              type="number" 
              className="flex-1 bg-white px-4 py-4 text-2xl font-bold focus:outline-none"
              value={dpi} 
              onChange={(e) => setDpi(Number(e.target.value))}
            />
          </div>

          <div className="flex border-4 border-black">
            <div className="bg-[#FF4655] px-6 py-4 border-r-4 border-black font-black uppercase text-xl text-white">
              In-Game Sens
            </div>
            <input 
              type="number" 
              step="0.01"
              className="flex-1 bg-white px-4 py-4 text-2xl font-bold focus:outline-none"
              value={sens} 
              onChange={(e) => setSens(Number(e.target.value))}
            />
          </div>

          <button 
            onClick={calculate}
            className="w-full bg-[#39FF14] border-4 border-black px-8 py-4 text-black font-black text-2xl uppercase tracking-wider shadow-[4px_4px_0px_#0F1923] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all relative overflow-hidden"
          >
            CALCULATE eDPI
            {showZap && (
              <span className="absolute inset-0 flex items-center justify-center bg-white text-[#FF4655] text-5xl italic z-10 transition-opacity duration-[50ms]">
                *ZAP!*
              </span>
            )}
          </button>

          {edpi !== null && (
            <div className="mt-8 border-4 border-black border-dashed p-6 text-center transform rotate-1 bg-white">
              <h2 className="text-2xl font-black uppercase">Your eDPI:</h2>
              <p className="text-7xl font-black text-[#FF4655] mt-2 drop-shadow-[2px_2px_0_#0F1923]">{edpi.toFixed(1)}</p>
              
              <div className="mt-4 text-lg font-bold">
                {edpi >= 200 && edpi <= 400 ? (
                  <span className="text-[#39FF14] bg-black px-3 py-1 inline-block">*TARGET RANGE ACHIEVED*</span>
                ) : (
                  <span className="text-white bg-black px-3 py-1 inline-block">TARGET RANGE: 200 - 400</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
