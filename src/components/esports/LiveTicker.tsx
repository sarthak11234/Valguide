"use client";

import { liveTicker } from "@/data/esports-command-data";

export default function LiveTicker() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#FF4655] border-t-4 border-black text-black overflow-hidden shadow-[0_-4px_20px_rgba(255,70,85,0.3)]">
      <div className="flex items-center">
        {/* Static Header */}
        <div className="bg-black text-[#FF4655] font-black uppercase tracking-widest px-6 py-3 text-sm flex items-center gap-2 shrink-0 border-r-4 border-black z-10 relative">
          <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
          Live Central
        </div>

        {/* Scrolling Ticker */}
        <div className="flex whitespace-nowrap overflow-hidden py-3">
          <div className="animate-ticker-scroll inline-block">
            {liveTicker.map((match, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 text-sm font-black uppercase tracking-wide border-r-2 border-black/30 last:border-0">
                <span className="text-black/60 text-xs">{match.event}</span>
                <span className={match.score1 > match.score2 ? "text-white" : ""}>{match.team1}</span>
                <span className="bg-black text-white px-2 py-0.5 rounded-sm">{match.score1}</span>
                <span className="text-black/40">-</span>
                <span className="bg-black text-white px-2 py-0.5 rounded-sm">{match.score2}</span>
                <span className={match.score2 > match.score1 ? "text-white" : ""}>{match.team2}</span>
                
                {match.status === "LIVE" && <span className="text-[#39FF14] bg-black px-1.5 py-0.5 text-[10px]">LIVE</span>}
                {match.status === "FINAL" && <span className="text-black/60 bg-black/10 px-1.5 py-0.5 text-[10px]">FINAL</span>}
                {match.status === "UPCOMING" && <span className="text-white bg-black/30 px-1.5 py-0.5 text-[10px]">UPCOMING</span>}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless scrolling */}
          <div className="animate-ticker-scroll inline-block">
            {liveTicker.map((match, i) => (
              <span key={`dup-${i}`} className="inline-flex items-center gap-3 px-8 text-sm font-black uppercase tracking-wide border-r-2 border-black/30 last:border-0">
                <span className="text-black/60 text-xs">{match.event}</span>
                <span className={match.score1 > match.score2 ? "text-white" : ""}>{match.team1}</span>
                <span className="bg-black text-white px-2 py-0.5 rounded-sm">{match.score1}</span>
                <span className="text-black/40">-</span>
                <span className="bg-black text-white px-2 py-0.5 rounded-sm">{match.score2}</span>
                <span className={match.score2 > match.score1 ? "text-white" : ""}>{match.team2}</span>
                
                {match.status === "LIVE" && <span className="text-[#39FF14] bg-black px-1.5 py-0.5 text-[10px]">LIVE</span>}
                {match.status === "FINAL" && <span className="text-black/60 bg-black/10 px-1.5 py-0.5 text-[10px]">FINAL</span>}
                {match.status === "UPCOMING" && <span className="text-white bg-black/30 px-1.5 py-0.5 text-[10px]">UPCOMING</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
