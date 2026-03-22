"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, Star, Award } from "lucide-react";
import { trophyCabinet } from "@/data/esports-command-data";

export default function TrophyCabinet() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-8 h-8 text-[#FFD700]" />
        <h2 className="text-4xl font-black uppercase tracking-tighter">Trophy Cabinet</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trophyCabinet.map((trophy, i) => (
          <motion.div
            key={trophy.event}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative border-4 border-black overflow-hidden group"
            style={{ boxShadow: `8px 8px 0px ${trophy.themeColor}` }}
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at 50% 0%, ${trophy.themeColor}, transparent 70%)` }}
            />

            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Event badge */}
              <div
                className="inline-block px-4 py-1 border-4 border-black font-black text-black text-sm uppercase tracking-widest mb-4"
                style={{ backgroundColor: trophy.themeColor }}
              >
                {trophy.event}
              </div>

              {/* Trophy icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Trophy className="w-16 h-16" style={{ color: trophy.themeColor }} />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase tracking-tight">{trophy.winner}</h3>
                  <div className="text-sm text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2 mt-1">
                    <MapPin className="w-3 h-3" />
                    {trophy.venue}, {trophy.location}
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 border-t-4 border-black pt-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-500">MVP</div>
                  <div className="text-xl font-black flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#FFD700]" />
                    {trophy.mvp}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-500">Prize</div>
                  <div className="text-xl font-black text-[#39FF14]">{trophy.prize}</div>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-500">Year</div>
                  <div className="text-xl font-black">{trophy.year}</div>
                </div>
              </div>
            </div>

            {/* Logo watermark */}
            <img
              src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${trophy.winnerLogoUrl}&size=128`}
              alt={trophy.winner}
              className="absolute right-4 bottom-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
