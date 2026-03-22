"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users } from "lucide-react";
import { regionsData, type PartneredTeam } from "@/data/esports-data";

export default function RosterFlipCards() {
  // Let's take the top 6 teams across all regions for the showcase
  const showcaseTeams = regionsData.flatMap(r => r.partneredTeams).slice(0, 6);

  const roleIcons = [Target, Shield, Shield, Target, Shield]; // Mock roles for roster

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-8 h-8 text-[#00E5FF]" />
        <h2 className="text-4xl font-black uppercase tracking-tighter">Active Rosters</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcaseTeams.map((team: PartneredTeam, i: number) => (
          <motion.div
            key={team.name}
            className="w-full h-64 [perspective:1000px] group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 bg-[#111820] border-4 border-black" style={{ boxShadow: "6px 6px 0px #000" }}>
                <img
                  src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${team.logoUrl?.replace('https://logo.clearbit.com/', '')}&size=128`}
                  alt={team.name}
                  className="w-24 h-24 object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <h3 className="mt-4 text-2xl font-black uppercase tracking-widest">{team.name}</h3>
                <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-1">Hover to view roster</p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-[#1a2332] border-4 border-black p-4 flex flex-col justify-center" style={{ boxShadow: "6px 6px 0px #00E5FF" }}>
                <div className="text-xs font-black uppercase tracking-widest text-[#00E5FF] mb-4 text-center border-b-2 border-[#00E5FF]/30 pb-2">
                  {team.name} — 2026 Roster
                </div>
                <div className="space-y-2">
                  {team.roster.slice(0, 5).map((player: string, idx: number) => {
                    const Icon = roleIcons[idx] || Shield;
                    return (
                      <div key={player} className="flex justify-between items-center group/player px-2 py-1 hover:bg-white/5 transition-colors">
                        <span className="font-black uppercase tracking-wide text-sm">{player}</span>
                        <Icon className="w-4 h-4 text-gray-500 group-hover/player:text-[#00E5FF] transition-colors" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
