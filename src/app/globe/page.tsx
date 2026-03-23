"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mapsData } from "@/data/maps-data";
import MapModal from "@/components/MapModal";

// Coordinates expressed as CSS percentages for a conceptual 2D map projection
const mapCoordinates: Record<string, { x: number; y: number }> = {
  bind: { x: 48, y: 38 },
  haven: { x: 72, y: 42 },
  split: { x: 86, y: 36 },
  ascent: { x: 52, y: 32 },
  icebox: { x: 82, y: 15 },
  breeze: { x: 28, y: 52 },
  fracture: { x: 22, y: 36 },
  lotus: { x: 69, y: 48 },
  sunset: { x: 18, y: 38 },
  abyss: { x: 55, y: 75 },
};

export default function GlobePage() {
  const [mapsApiData, setMapsApiData] = useState<any[]>([]);
  const [selectedMap, setSelectedMap] = useState<any | null>(null);
  const [hoveredMap, setHoveredMap] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMaps() {
      try {
        const res = await fetch("https://valorant-api.com/v1/maps");
        const json = await res.json();
        if (json.data) setMapsApiData(json.data);
      } catch (e) {
        console.error("Failed to fetch map data", e);
      }
    }
    fetchMaps();
  }, []);

  const handleMapClick = (localMap: any) => {
    const apiMap = mapsApiData.find(
      (m: any) => m.displayName.toUpperCase() === localMap.name.toUpperCase()
    );
    setSelectedMap({ ...localMap, ...apiMap });
  };

  return (
    <div className="min-h-screen bg-[#ECE8E1] p-6 lg:p-12 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_2px,transparent_2px)] bg-[length:24px_24px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-8 max-w-7xl mx-auto">
        <div className="inline-block bg-[#00E5FF] border-[6px] border-black px-6 py-2 transform -skew-x-12 mb-4 shadow-[8px_8px_0px_#000]">
          <h1 className="font-[family:var(--font-tungsten)] text-6xl tracking-widest uppercase text-black skew-x-12 m-0 leading-none">
            GLOBAL RADAR
          </h1>
        </div>
        <p className="font-bold text-xl tracking-[0.2em] uppercase max-w-2xl border-l-[6px] border-[#00E5FF] pl-4 text-gray-800">
          ALPHA & OMEGA EARTH DEPLOYMENT TRACKER
        </p>
      </div>

      {/* Interactive Map Interface */}
      <div className="relative z-10 max-w-7xl mx-auto border-[8px] border-black bg-[#0F1923] shadow-[16px_16px_0px_#FF4655] aspect-[4/3] md:aspect-[21/9] group">
        
        {/* Background elements with overflow hidden */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Tactical grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
          
          {/* Radar sweeping line */}
          <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] origin-top-left -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] z-0">
            <div className="w-1/2 h-1/2 bg-[conic-gradient(from_0deg_at_bottom_right,transparent_0deg,rgba(0,229,255,0.15)_90deg,transparent_90deg)] origin-bottom-right" />
          </div>

          {/* Central target lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00E5FF]/20" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#00E5FF]/20" />
        </div>

        {/* Map Dots */}
        {mapsData.map((map) => {
          const coords = mapCoordinates[map.id];
          if (!coords) return null;

          const isHovered = hoveredMap === map.id;

          return (
            <div
              key={map.id}
              className="absolute z-10"
              style={{
                left: `${coords.x}%`,
                top: `${coords.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredMap(map.id)}
              onMouseLeave={() => setHoveredMap(null)}
              onClick={() => handleMapClick(map)}
            >
              {/* Pulsing beacon */}
              <div className="relative w-6 h-6 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                <div 
                  className="absolute inset-0 rounded-full animate-ping opacity-75"
                  style={{ backgroundColor: map.accentColor }}
                />
                <div 
                  className="relative w-3 h-3 rounded-full border border-black shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: map.accentColor, color: map.accentColor }}
                />
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-black border-4 text-white z-50 pointer-events-none"
                    style={{ borderColor: map.accentColor }}
                  >
                    {/* Tooltip triangle tail */}
                    <div 
                      className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-[6px] border-x-transparent border-t-transparent"
                      style={{ borderBottomColor: map.accentColor }}
                    />
                    
                    <div className="p-3">
                      <h4 className="font-[family:var(--font-tungsten)] text-3xl tracking-widest uppercase mb-1" style={{ color: map.accentColor }}>
                        {map.name}
                      </h4>
                      <div className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
                        <span className="text-[10px] font-bold tracking-widest text-gray-400">COORDINATES</span>
                        <span className="text-[10px] font-black tracking-widest text-[#00E5FF]">{map.coordinate}</span>
                      </div>
                      <p className="text-xs text-gray-300 font-medium italic line-clamp-3 leading-relaxed">
                        {map.loreSummary}
                      </p>
                      <div className="mt-3 text-[10px] font-black uppercase tracking-widest text-center animate-pulse" style={{ color: map.accentColor }}>
                        CLICK TO OPEN COMMS
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Interactive Map Modal */}
      <AnimatePresence>
        {selectedMap && (
          <MapModal
            key="map-modal"
            mapData={selectedMap}
            onClose={() => setSelectedMap(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
