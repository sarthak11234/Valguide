"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  vctInfo,
  regionsData,
  championsHistory,
  globalStreamers,
  roadmapEvents2026,
} from "@/data/esports-data";

// Command Center Components
import PowerRankings from "@/components/esports/PowerRankings";
import TrophyCabinet from "@/components/esports/TrophyCabinet";
import AgentSpecialists from "@/components/esports/AgentSpecialists";
import MapKDATable from "@/components/esports/MapKDATable";
import MetaPulse from "@/components/esports/MetaPulse";
import PickEm from "@/components/esports/PickEm";
import GhostPlay from "@/components/esports/GhostPlay";
import RosterFlipCards from "@/components/esports/RosterFlipCards";
import LiveTicker from "@/components/esports/LiveTicker";

const PLATFORM_COLORS: Record<string, string> = {
  Twitch: "#9146FF",
  YouTube: "#FF0000",
  Kick: "#53FC18",
  Huya: "#FF6700",
  Bilibili: "#00A1D6",
};

const REGION_TABS = ["americas", "emea", "pacific", "cn"];
const REGION_LABELS: Record<string, string> = {
  americas: "🌎 Americas",
  emea: "🌍 EMEA",
  pacific: "🌏 Pacific",
  cn: "🐉 China",
};

export default function EsportsPage() {
  const [agentsApiData, setAgentsApiData] = useState<any[]>([]);
  const [activeRegion, setActiveRegion] = useState("americas");
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAgents() {
      try {
        const res = await fetch("/api/agents");
        const json = await res.json();
        if (json.data) setAgentsApiData(json.data);
      } catch {
        /* silent */
      }
    }
    fetchAgents();
  }, []);

  const currentRegion = regionsData.find((r) => r.id === activeRegion)!;

  return (
    <div className="min-h-screen bg-[#0A0F16] text-[#ECE8E1] font-sans">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 py-10 space-y-20">

        {/* ── HERO HEADER ──────────────────────────────────────────── */}
        <div className="relative border-4 border-black bg-[#ECE8E1] text-black p-10 md:p-14 shadow-[16px_16px_0px_#FF4655]">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,#000 0,#000 1px,transparent 0,transparent 50%)", backgroundSize: "12px 12px" }}
          />
          <div className="absolute -top-6 left-0 sm:-left-2 md:-left-4 bg-[#39FF14] border-4 border-black px-4 sm:px-8 py-2 md:py-3 transform -skew-x-6 shadow-[4px_4px_0px_#00E5FF] z-10 max-w-[95%]">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-widest text-black italic">
              {vctInfo.title}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
            <p className="text-lg md:text-xl font-bold leading-relaxed max-w-3xl border-l-8 border-[#FF4655] pl-6">
              {vctInfo.description}
            </p>
            <div className="flex flex-wrap md:flex-col gap-3 ml-auto shrink-0">
              {[
                { label: "REGIONS", val: "4" },
                { label: "INT'L TEAMS / REGION", val: "12" },
                { label: "MASTERS EVENTS", val: "2" },
                { label: "WORLD CHAMPS", val: "Shanghai '26" },
              ].map((s) => (
                <div key={s.label} className="border-4 border-black bg-[#0A0F16] text-white px-4 py-3 text-center min-w-[130px]">
                  <div className="text-[#39FF14] text-xs font-black uppercase tracking-widest">{s.label}</div>
                  <div className="text-2xl font-black">{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CHAMPIONS LEGACY ─────────────────────────────────────── */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-8 h-8 bg-[#FF4655] inline-block border-4 border-black shrink-0" />
            Champions Legacy
            <span className="text-lg font-bold text-gray-500 normal-case ml-2">2021 – 2025</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {championsHistory.map((champ, i) => (
              <motion.div
                key={champ.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative border-4 border-black bg-[#ECE8E1] text-black overflow-hidden group cursor-default"
                style={{ boxShadow: `6px 6px 0px ${champ.themeColor}` }}
              >
                {/* Color band top */}
                <div className="h-2 w-full" style={{ backgroundColor: champ.themeColor }} />

                {/* Trophy icon area */}
                <div
                  className="flex items-center justify-center text-7xl py-6 relative overflow-hidden"
                  style={{ backgroundColor: champ.themeColor + "15" }}
                >
                  <span className="text-6xl select-none">🏆</span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: champ.themeColor }}
                  />
                </div>

                <div className="p-5 space-y-2">
                  <div
                    className="text-xs font-black uppercase tracking-widest border-2 border-black inline-block px-2 py-0.5"
                    style={{ backgroundColor: champ.themeColor, color: "#000" }}
                  >
                    {champ.year} World Champion
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-tight">{champ.winner}</h3>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{champ.location}</p>
                  <p className="text-xs font-bold text-gray-500">{champ.venue}</p>

                  <div className="border-t-2 border-black/10 pt-2 space-y-1 text-sm">
                    <p><span className="font-black">Runner-Up:</span> {champ.runnerUp}</p>
                    <p><span className="font-black">MVP:</span> {champ.mvp}</p>
                    {champ.prize && (
                      <p className="font-black" style={{ color: champ.themeColor }}>Prize: {champ.prize}</p>
                    )}
                  </div>

                  {champ.summary && (
                    <p className="text-xs text-gray-600 leading-relaxed border-t border-black/10 pt-2 hidden group-hover:block transition-all">
                      {champ.summary}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── THE PANTHEON (TROPHY CABINET) ─────────────────────────── */}
        <section>
          <TrophyCabinet />
        </section>

        {/* ── 2026 SEASON ROADMAP ──────────────────────────────────── */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
            <span className="w-8 h-8 bg-[#39FF14] inline-block border-4 border-black shrink-0" />
            2026 Season Roadmap
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {roadmapEvents2026.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`border-4 border-black p-5 relative ${ev.highlight ? "bg-[#39FF14] text-black shadow-[6px_6px_0px_#000]" : "bg-[#111820] text-white shadow-[4px_4px_0px_#39FF14]"}`}
              >
                <div className={`text-xs font-black uppercase tracking-widest mb-2 ${ev.highlight ? "text-black/70" : "text-[#39FF14]"}`}>
                  {ev.date}
                </div>
                <div className="text-xl font-black uppercase leading-tight mb-2">{ev.title}</div>
                <div className={`text-xs font-bold mb-2 ${ev.highlight ? "text-black" : "text-[#00E5FF]"}`}>
                  📍 {ev.location}
                </div>
                <p className={`text-xs leading-relaxed ${ev.highlight ? "text-black/80" : "text-gray-400"}`}>
                  {ev.desc}
                </p>
                <div className="absolute top-2 right-2 text-xl">{ev.highlight ? "⭐" : "◆"}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── THE PANTHEON (POWER RANKINGS) ─────────────────────────── */}
        <section>
          <PowerRankings />
        </section>

        {/* ── GLOBAL STREAMERS ─────────────────────────────────────── */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 flex items-center gap-4">
            <span className="w-8 h-8 bg-[#00E5FF] inline-block border-4 border-black shrink-0" />
            Recon Broadcasters
          </h2>
          <p className="text-gray-400 font-bold mb-8 ml-12">Top Valorant streamers & content creators worldwide</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {globalStreamers.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-4 border-black bg-[#111820] text-white relative overflow-hidden group"
                style={{ boxShadow: `4px 4px 0px ${PLATFORM_COLORS[s.platform] ?? "#FFF"}` }}
              >
                {/* Avatar Image */}
                <div
                  className="h-32 flex items-center justify-center border-b-4 border-black select-none relative overflow-hidden bg-[#ECE8E1] group-hover:bg-white transition-colors"
                >
                  <img
                    src={s.imageUrl || `https://api.dicebear.com/9.x/micah/svg?seed=${s.name}`}
                    alt={s.name}
                    className="w-full h-full object-cover p-0 transform group-hover:scale-110 transition-transform duration-500 z-10"
                    onError={(e) => { e.currentTarget.src = `https://api.dicebear.com/9.x/micah/svg?seed=${s.name}` }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-20 pointer-events-none"
                    style={{ backgroundColor: PLATFORM_COLORS[s.platform] }}
                  />
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xl font-black uppercase leading-tight">{s.name}</span>
                    <span
                      className="text-xs font-black px-2 py-0.5 border-2 border-black shrink-0"
                      style={{ backgroundColor: PLATFORM_COLORS[s.platform], color: "#fff" }}
                    >
                      {s.platform}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-bold">{s.country}</div>
                  <div className="text-[#39FF14] font-black text-sm">{s.followers} followers</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.description}</p>

                  {/* Links */}
                  <div className="flex gap-2 pt-1 flex-wrap">
                    {s.ytLink && (
                      <a
                        href={s.ytLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black bg-[#FF0000] text-white px-3 py-1 border-2 border-black hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                      >
                        ▶ YouTube
                      </a>
                    )}
                    {s.twitchLink && (
                      <a
                        href={s.twitchLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black bg-[#9146FF] text-white px-3 py-1 border-2 border-black hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                      >
                        📺 Twitch
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── AGENT SPECIALISTS & MAP KDA ──────────────────────────── */}
        <section>
          <AgentSpecialists />
        </section>

        <section>
          <MapKDATable />
        </section>

        {/* ── REGION SELECT + DETAIL ───────────────────────────────── */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-[#FF4655] inline-block border-4 border-black shrink-0" />
            International Leagues
          </h2>

          {/* Tab Switcher */}
          <div className="flex flex-wrap gap-2 mb-8 border-b-4 border-black pb-4">
            {REGION_TABS.map((rid) => {
              const rd = regionsData.find((r) => r.id === rid)!;
              const active = rid === activeRegion;
              return (
                <button
                  key={rid}
                  onClick={() => { setActiveRegion(rid); setExpandedTeam(null); }}
                  className={`px-6 py-3 border-4 border-black font-black uppercase tracking-wide text-sm transition-all ${active ? "text-black shadow-[4px_4px_0px_#000] -translate-y-1" : "bg-[#111820] text-white hover:-translate-y-0.5"}`}
                  style={active ? { backgroundColor: rd.color } : {}}
                >
                  {REGION_LABELS[rid]}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Region Hero Banner */}
              <div
                className="border-4 border-black p-8 md:p-10 relative overflow-hidden"
                style={{
                  backgroundColor: currentRegion.color + "15",
                  boxShadow: `10px 10px 0px ${currentRegion.color}`,
                }}
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 opacity-10 font-black text-[180px] leading-none select-none text-right overflow-hidden"
                  style={{ color: currentRegion.color }}
                >
                  {activeRegion.toUpperCase()}
                </div>
                <h3
                  className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
                  style={{ color: currentRegion.color }}
                >
                  {currentRegion.name}
                </h3>
                <p className="text-lg font-bold text-gray-300 max-w-2xl mt-3">{currentRegion.description}</p>
              </div>

              {/* Top Players */}
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-5 border-b-4 border-black pb-2">
                  ⚡ Top Tier Operatives
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {currentRegion.topPlayers.map((player) => {
                    const agentData = agentsApiData.find(
                      (a: any) => a.displayName.toLowerCase() === player.mainAgent.toLowerCase()
                    );
                    return (
                      <div
                        key={player.name}
                        className="border-4 border-black bg-[#ECE8E1] text-black p-6 relative overflow-hidden group"
                        style={{ borderLeftWidth: "8px", borderLeftColor: currentRegion.color, boxShadow: "4px 4px 0px #000" }}
                      >
                        {agentData && (
                          <img
                            src={agentData.displayIcon}
                            alt={player.mainAgent}
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-36 opacity-15 object-contain select-none pointer-events-none group-hover:opacity-40 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                          />
                        )}
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-3 gap-2">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-white shrink-0 shadow-[2px_2px_0px_#000]">
                                <img
                                  src={player.imageUrl || `https://api.dicebear.com/9.x/micah/svg?seed=${player.name}`}
                                  alt={player.name}
                                  className="w-full h-full object-cover relative z-0"
                                  onError={(e) => { e.currentTarget.src = `https://api.dicebear.com/9.x/micah/svg?seed=${player.name}` }}
                                />
                              </div>
                              <span className="text-2xl md:text-3xl font-black uppercase leading-tight">{player.name}</span>
                            </div>
                            <span className="text-xs font-black bg-black text-white px-2 py-1 shrink-0">{player.team}</span>
                          </div>
                          <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: currentRegion.color }}>
                            {player.role} · {player.mainAgent}
                          </div>
                          <div className="flex gap-4 py-2 border-y border-black/20 my-2 text-sm font-black">
                            <span>ACS <span className="font-bold text-black">{player.acs}</span></span>
                            <span>K/D <span className="font-bold text-black">{player.kd}</span></span>
                            <span>HS <span className="font-bold text-black">{player.hs}%</span></span>
                          </div>
                          <p className="text-sm font-medium text-gray-700 leading-relaxed">{player.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

                {/* Roster Flip Cards Section */}
                <div className="mt-12">
                  <RosterFlipCards />
                </div>

                <div className="mt-16">
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-5 border-b-4 border-black pb-2">
                    🏟️ Franchise Rosters — Database
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {currentRegion.partneredTeams.map((team, idx) => {
                    const isOpen = expandedTeam === team.name;
                    return (
                      <motion.div
                        key={team.name}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className="border-4 border-black bg-[#ECE8E1] text-black cursor-pointer group"
                        style={{ boxShadow: isOpen ? `6px 6px 0px ${currentRegion.color}` : "4px 4px 0px #000" }}
                        onClick={() => setExpandedTeam(isOpen ? null : team.name)}
                      >
                        <div className="flex justify-between items-center p-4 border-b-4 border-black">
                          <div className="flex items-center gap-4">
                            {team.logoUrl && (
                              <img loading="lazy" 
                                src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${team.logoUrl.replace('https://logo.clearbit.com/', '')}&size=128`}
                                alt={team.name} 
                                className="w-10 h-10 object-contain bg-white rounded-md border-2 border-black/10 shrink-0 p-1" 
                                onError={(e) => { e.currentTarget.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; e.currentTarget.className = 'hidden'; }}
                              />
                            )}
                            <div>
                              <div
                                className="text-xs font-black uppercase tracking-widest mb-0.5"
                                style={{ color: idx === 0 ? "#FF4655" : "#666" }}
                              >
                                #{idx + 1} · {team.points} pts
                              </div>
                              <h4 className="text-lg font-black uppercase leading-tight">{team.name}</h4>
                            </div>
                          </div>
                          <div
                            className="w-8 h-8 border-4 border-black flex items-center justify-center font-black transition-transform"
                            style={{ backgroundColor: currentRegion.color, transform: isOpen ? "rotate(45deg)" : "none" }}
                          >
                            +
                          </div>
                        </div>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="p-4 space-y-2">
                                {team.roster.map((player) => (
                                  <li key={player} className="flex items-center gap-2 text-sm font-bold">
                                    <span
                                      className="w-2 h-2 rounded-sm shrink-0"
                                      style={{ backgroundColor: currentRegion.color }}
                                    />
                                    {player}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ── META PULSE ───────────────────────────────────────────── */}
        <section>
          <MetaPulse />
        </section>

        {/* ── PICK'EM BRACKET ──────────────────────────────────────── */}
        <section>
          <PickEm />
        </section>

        {/* ── THE GHOST PLAY ───────────────────────────────────────── */}
        <section>
          <GhostPlay />
        </section>

      </div>

      <LiveTicker />
    </div>
  );
}
