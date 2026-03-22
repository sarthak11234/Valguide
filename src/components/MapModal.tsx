import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MapModalProps {
  mapData: any; // Merged object from maps-data.ts and Valorant API
  onClose: () => void;
}

type TabType = "INTEL" | "LAYOUT" | "GALLERY";

export default function MapModal({ mapData, onClose }: MapModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("INTEL");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="modal-content relative flex flex-col md:flex-row overflow-hidden"
        style={{
          border: `4px solid ${mapData.accentColor || "#FF4655"}`,
          ["--agent-color" as string]: mapData.accentColor || "#FF4655", // Reusing variables for consistency
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 border-4 border-black bg-white flex items-center justify-center hover:bg-[#FF4655] hover:text-white transition-colors group"
        >
          <span className="font-black text-xl group-hover:scale-110 transition-transform">
            X
          </span>
        </button>

        {/* Left Side: Header & Tabs */}
        <div className="w-full md:w-80 lg:w-96 shrink-0 bg-[#ECE8E1] p-8 flex flex-col border-b-4 md:border-b-0 md:border-r-4 border-black relative z-10">
          <div className="mb-8">
            <h2
              className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-2 break-words break-all sm:break-normal"
              style={{ color: mapData.accentColor || "#FF4655" }}
            >
              {mapData.name || mapData.displayName}
            </h2>
            <p className="text-xl font-bold uppercase tracking-widest text-gray-800">
              {mapData.coordinate}
            </p>
          </div>

          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
            {(["INTEL", "LAYOUT", "GALLERY"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-6 py-4 font-black uppercase tracking-widest border-4 border-black transition-all ${
                  activeTab === tab
                    ? "bg-black text-white translate-x-2"
                    : "bg-white hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor: activeTab === tab ? mapData.accentColor || "#FF4655" : "",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Tab Content */}
        <div className="flex-1 w-full bg-[#0F1923] text-[#ECE8E1] p-8 relative overflow-y-auto">
          {/* Background decoration */}
          <div
            className="absolute -bottom-20 -right-20 text-[200px] font-black opacity-5 pointer-events-none select-none"
            style={{ color: mapData.accentColor || "#FF4655" }}
          >
            {mapData.name?.substring(0, 2)}
          </div>

          <div className="relative z-10 h-full">
            <AnimatePresence mode="wait">
              {/* INTEL TAB */}
              {activeTab === "INTEL" && (
                <motion.div
                  key="intel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="border-l-8 pl-6" style={{ borderColor: mapData.accentColor || "#FF4655" }}>
                    <h3 className="text-2xl font-black uppercase mb-4 tracking-wider">Tactical Brief</h3>
                    <p className="text-lg font-medium leading-relaxed italic text-gray-300">
                      {mapData.description}
                    </p>
                  </div>
                  
                  <div className="border-l-8 pl-6 border-white bg-white/5 p-4">
                    <h3 className="text-xl font-black uppercase mb-2">Classified Lore</h3>
                    <p className="font-medium text-gray-300">
                      {mapData.loreSummary}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* LAYOUT TAB */}
              {activeTab === "LAYOUT" && (
                <motion.div
                  key="layout"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col items-center justify-center h-full space-y-4"
                >
                  <h3 className="text-2xl font-black uppercase w-full text-left tracking-wider text-gray-400">
                    Satellite Scan
                  </h3>
                  {mapData.displayIcon ? (
                    <div className="relative w-full aspect-square max-w-md mx-auto bg-black/50 border-4 border-[#39FF14] p-4 shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                      <img 
                        src={mapData.displayIcon} 
                        alt={`${mapData.name} Layout`} 
                        className="w-full h-full object-contain filter invert opacity-80" 
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#0F1923_120%)] pointer-events-none" />
                      {/* Radar scan effect line */}
                      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-[#39FF14] opacity-50 origin-bottom animate-spin pointer-events-none" style={{ animationDuration: '4s' }} />
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 font-bold p-12 border-4 border-dashed border-gray-700 w-full">
                      NO SATELLITE DATA AVAILABLE
                    </div>
                  )}
                </motion.div>
              )}

              {/* GALLERY TAB */}
              {activeTab === "GALLERY" && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-black uppercase tracking-wider text-gray-400">
                    Visual Recon
                  </h3>
                  
                  {mapData.splash && (
                    <div className="border-4 border-black relative group overflow-hidden">
                      <div className="absolute top-2 left-2 bg-[#FF4655] text-white text-xs font-black uppercase px-2 py-1 z-10">Entry Angle</div>
                      <img src={mapData.splash} alt="Splash" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  )}

                  {mapData.stylizedBackgroundImage && (
                    <div className="border-4 border-black relative group overflow-hidden">
                      <div className="absolute top-2 left-2 bg-[#00E5FF] text-black text-xs font-black uppercase px-2 py-1 z-10">Stylized Recon</div>
                      <img src={mapData.stylizedBackgroundImage} alt="Stylized" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
