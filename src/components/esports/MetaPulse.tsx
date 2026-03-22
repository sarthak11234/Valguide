"use client";

import { motion } from "framer-motion";
import { Cpu, Monitor, Mouse, Activity, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { miksAnalysis, proGearData } from "@/data/esports-command-data";

export default function MetaPulse() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <Activity className="w-8 h-8 text-[#39FF14]" />
        <h2 className="text-4xl font-black uppercase tracking-tighter">Meta Lab</h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* MIKS ANALYSIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-4 border-black bg-[#111820] p-6"
          style={{ boxShadow: "6px 6px 0px #39FF14" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#39FF14] border-3 border-black flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase">The &quot;MIKS&quot; Shift</h3>
              <div className="text-xs text-gray-400 font-bold">{miksAnalysis.origin} · {miksAnalysis.role}</div>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-6">{miksAnalysis.description}</p>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: "Pick Rate", value: `${miksAnalysis.pickRate}%`, color: "#39FF14" },
              { label: "Win Rate", value: `${miksAnalysis.winRate}%`, color: "#00E5FF" },
              { label: "Ban Rate", value: `${miksAnalysis.banRate}%`, color: "#FF4655" },
              { label: "Avg ACS", value: `${miksAnalysis.avgACS}`, color: "#FFD700" },
            ].map((s) => (
              <div key={s.label} className="text-center p-3 border-2 border-black bg-[#0a0f14]">
                <div className="text-xs font-black uppercase tracking-wider text-gray-500">{s.label}</div>
                <div className="text-xl font-black" style={{ color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Pick Rate Trend */}
          <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Pick Rate Trend — 2026</div>
          <div className="h-40 border-2 border-black bg-[#0a0f14] p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={miksAnalysis.pickRateTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
                <XAxis dataKey="month" tick={{ fill: "#666", fontSize: 11, fontWeight: 700 }} />
                <YAxis domain={[0, 100]} tick={{ fill: "#666", fontSize: 11, fontWeight: 700 }} />
                <Tooltip
                  contentStyle={{ background: "#0a0f14", border: "3px solid #000", fontWeight: 800 }}
                  labelStyle={{ color: "#ECE8E1" }}
                />
                <Line type="monotone" dataKey="rate" stroke="#39FF14" strokeWidth={3} dot={{ fill: "#39FF14", stroke: "#000", strokeWidth: 2, r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top Players */}
          <div className="mt-4">
            <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Top Miks Players</div>
            <div className="flex flex-wrap gap-2">
              {miksAnalysis.topPlayers.map((p) => (
                <span key={p} className="text-xs font-black px-2 py-1 border-2 border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10">{p}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* PRO GEAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border-4 border-black bg-[#111820] p-6"
          style={{ boxShadow: "6px 6px 0px #00E5FF" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#00E5FF] border-3 border-black flex items-center justify-center">
              <Cpu className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase">Copy the Pros</h3>
              <div className="text-xs text-gray-400 font-bold">2026 Hardware Meta</div>
            </div>
          </div>

          {/* Trend badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-xs font-black px-2 py-1 border-2 border-[#FF4655] text-[#FF4655] bg-[#FF4655]/10 flex items-center gap-1">
              <Mouse className="w-3 h-3" /> 8000Hz Polling Meta
            </span>
            <span className="text-xs font-black px-2 py-1 border-2 border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/10 flex items-center gap-1">
              <Monitor className="w-3 h-3" /> 540Hz OLED Trend
            </span>
          </div>

          {/* Gear Table */}
          <div className="border-2 border-black overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#0a0f14] border-b-2 border-black">
                  <th className="px-3 py-2 font-black text-xs uppercase text-gray-500">Player</th>
                  <th className="px-3 py-2 font-black text-xs uppercase text-gray-500">Mouse</th>
                  <th className="px-3 py-2 font-black text-xs uppercase text-gray-500">eDPI</th>
                  <th className="px-3 py-2 font-black text-xs uppercase text-gray-500">Poll</th>
                  <th className="px-3 py-2 font-black text-xs uppercase text-gray-500">Monitor</th>
                </tr>
              </thead>
              <tbody>
                {proGearData.map((g) => (
                  <tr key={g.player} className="border-b border-black/20 hover:bg-[#1a2332] transition-colors">
                    <td className="px-3 py-2">
                      <span className="font-black">{g.player}</span>
                      <span className="text-gray-500 ml-1 text-xs">{g.team}</span>
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-300">{g.mouse}</td>
                    <td className="px-3 py-2 font-black text-[#FFD700]">{g.edpi}</td>
                    <td className="px-3 py-2">
                      <span className={`text-xs font-black px-1 py-0.5 border border-black ${g.pollingRate === "8000Hz" ? "bg-[#FF4655]/20 text-[#FF4655]" : "bg-[#00E5FF]/20 text-[#00E5FF]"}`}>
                        {g.pollingRate}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-300">
                      {g.refreshRate === "540Hz" ? <span className="text-[#39FF14] font-bold">{g.refreshRate}</span> : g.refreshRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
