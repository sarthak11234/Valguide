"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { powerRankings } from "@/data/esports-command-data";

const REGION_COLORS: Record<string, string> = {
  "Americas": "#FF4655",
  "EMEA": "#00E5FF",
  "Pacific": "#39FF14",
  "China": "#FF3333",
};

export default function PowerRankings() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-8 h-8 text-[#FF4655]" />
        <h2 className="text-4xl font-black uppercase tracking-tighter">Global Power Rankings</h2>
      </div>
      <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-6">
        Updated after Masters Santiago 2026
      </p>

      <div className="space-y-2">
        {powerRankings.map((team, i) => (
          <motion.div
            key={team.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-4 p-4 border-4 border-black bg-[#111820] group hover:border-[#FF4655] transition-colors"
            style={{ boxShadow: i === 0 ? "6px 6px 0px #FFD700" : "4px 4px 0px #000" }}
          >
            {/* Rank */}
            <div className={`w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-black shrink-0 ${i === 0 ? "bg-[#FFD700] text-black" : i === 1 ? "bg-[#C0C0C0] text-black" : i === 2 ? "bg-[#CD7F32] text-black" : "bg-[#1a2332] text-white"}`}>
              {team.rank}
            </div>

            {/* Change indicator */}
            <div className="w-6 shrink-0">
              {team.change > 0 && <TrendingUp className="w-5 h-5 text-[#39FF14]" />}
              {team.change < 0 && <TrendingDown className="w-5 h-5 text-[#FF4655]" />}
              {team.change === 0 && <Minus className="w-5 h-5 text-gray-500" />}
            </div>

            {/* Logo */}
            <img
              src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${team.logoUrl}&size=128`}
              alt={team.name}
              className="w-10 h-10 object-contain bg-white rounded border-2 border-black/10 p-1 shrink-0"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            {/* Team Info */}
            <div className="flex-1 min-w-0">
              <div className="text-lg font-black uppercase tracking-wide truncate">{team.name}</div>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: REGION_COLORS[team.region] }}>
                {team.region}
              </div>
            </div>

            {/* Points */}
            <div className="text-right shrink-0">
              <div className="text-2xl font-black text-[#39FF14]">{team.points}</div>
              <div className="text-xs text-gray-500 font-bold uppercase">PTS</div>
            </div>

            {/* Form */}
            <div className="flex gap-1 shrink-0">
              {team.form.map((f, j) => (
                <span
                  key={j}
                  className={`w-6 h-6 flex items-center justify-center text-xs font-black border-2 border-black ${f === "W" ? "bg-[#39FF14] text-black" : "bg-[#FF4655] text-white"}`}
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
