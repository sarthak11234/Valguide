"use client";

import { motion } from "framer-motion";
import { Crosshair, Zap } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { agentSpecialists, type AgentSpecialist } from "@/data/esports-command-data";

function SpecialistCard({ spec }: { spec: AgentSpecialist }) {
  const radarData = [
    { stat: "Aim", value: spec.stats.aim },
    { stat: "Game IQ", value: spec.stats.gamesense },
    { stat: "Utility", value: spec.stats.utility },
    { stat: "Clutch", value: spec.stats.clutch },
    { stat: "Movement", value: spec.stats.movement },
  ];

  return (
    <div
      className="border-4 border-black bg-[#111820] overflow-hidden group relative"
      style={{ boxShadow: "4px 4px 0px #000" }}
    >
      {/* Glitch hover overlay */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,70,85,0.03) 2px, rgba(255,70,85,0.03) 4px)",
        }}
        animate={{ y: [0, -4, 2, -1, 0] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
      />

      {/* Header with image */}
      <div className="flex items-center gap-4 p-5 border-b-4 border-black bg-[#0a0f14]">
        <div className="w-14 h-14 rounded-full border-3 border-black overflow-hidden bg-white shrink-0 shadow-[2px_2px_0px_#000]">
          <img
            src={spec.imageUrl || `https://api.dicebear.com/9.x/micah/svg?seed=${spec.playerName}`}
            alt={spec.playerName}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.src = `https://api.dicebear.com/9.x/micah/svg?seed=${spec.playerName}`; }}
          />
        </div>
        <div className="flex-1">
          <div className="text-xs font-black uppercase tracking-widest text-[#FF4655] mb-1 flex items-center gap-1">
            <Crosshair className="w-3 h-3" />
            World&apos;s Best {spec.agent}
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight">{spec.playerName}</h3>
          <div className="text-xs text-gray-400 font-bold">{spec.team} · {spec.agentRole}</div>
        </div>
      </div>

      {/* Radar Chart */}
      <div className="h-52 px-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#1a2332" />
            <PolarAngleAxis
              dataKey="stat"
              tick={{ fill: "#ECE8E1", fontSize: 10, fontWeight: 800, letterSpacing: "0.05em" }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name={spec.playerName}
              dataKey="value"
              stroke="#FF4655"
              fill="#FF4655"
              fillOpacity={0.25}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Stats bar */}
      <div className="flex justify-between items-center p-4 border-t-4 border-black bg-[#0a0f14]">
        <div>
          <span className="text-xs text-gray-500 font-black uppercase">KDA</span>
          <span className="text-lg font-black text-[#39FF14] ml-2">{spec.kda}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500 font-black uppercase">Win Rate</span>
          <span className="text-lg font-black text-[#00E5FF] ml-2">{spec.winRate}%</span>
        </div>
        <Zap className="w-5 h-5 text-[#FFD700]" />
      </div>
    </div>
  );
}

export default function AgentSpecialists() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Crosshair className="w-8 h-8 text-[#FF4655]" />
        <h2 className="text-4xl font-black uppercase tracking-tighter">Agent Specialists</h2>
      </div>
      <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-6">
        The world&apos;s best on every agent — powered by 2026 VCT data
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {agentSpecialists.map((spec, i) => (
          <motion.div
            key={spec.playerName}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <SpecialistCard spec={spec} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
