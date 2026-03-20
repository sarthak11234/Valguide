"use client";

import { motion } from "framer-motion";
import { mapsData } from "@/data/maps-data";

export default function MapsPage() {
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
            className="map-card"
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
            {/* Map header */}
            <div
              className="map-card__header"
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
    </div>
  );
}
