"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mapsData } from "@/data/maps-data";
import MapModal from "@/components/MapModal";

export default function MapsPage() {
  const [mapsApiData, setMapsApiData] = useState<any[]>([]);
  const [selectedMap, setSelectedMap] = useState<any | null>(null);

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
    <div className="maps-page">
      {/* Comic Panel Header */}
      <div className="page-header">
        <div className="page-header__badge page-header__badge--green">
          <h1>MAP INTEL</h1>
        </div>
        <p className="page-header__sub">
          CLASSIFIED DOSSIERS ON EVERY OPERATIONAL THEATRE
        </p>
      </div>

      {/* Map Grid */}
      <div className="maps-grid">
        {mapsData.map((map, index) => (
          <motion.div
            key={map.id}
            className="map-card cursor-pointer"
            onClick={() => handleMapClick(map)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{
              y: -6,
              x: -6,
              transition: { type: "spring", stiffness: 400, damping: 15 },
            }}
            style={{
              ["--map-accent" as string]: map.accentColor,
            }}
          >
            {/* Map Image Banner */}
            <div className="w-full h-40 border-b-4 border-black relative overflow-hidden bg-[#0F1923] group">
              <div 
                className="absolute inset-0 bg-cover bg-[center_top_20%] opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${map.imageUrl})` }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Map header */}
            <div
              className="map-card__header relative z-10 bg-white"
              style={{
                borderBottomColor: map.accentColor,
              }}
            >
              <h3 className="map-card__name">{map.name}</h3>
              <span
                className="map-card__coord"
                style={{ color: map.accentColor }}
              >
                {map.coordinate}
              </span>
            </div>

            {/* Description */}
            <p className="map-card__desc">{map.description}</p>

            {/* Lore summary */}
            <div className="map-card__lore">
              <span className="map-card__lore-label" style={{ color: map.accentColor }}>
                INTEL REPORT
              </span>
              <p className="map-card__lore-text">{map.loreSummary}</p>
            </div>

            {/* Hover shadow */}
            <div
              className="map-card__shadow"
              style={{ backgroundColor: map.accentColor }}
            />
          </motion.div>
        ))}
      </div>

      {/* Interactive Blueprint Modal */}
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
