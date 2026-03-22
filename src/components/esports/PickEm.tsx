"use client";

import { useState } from "react";
import { Network } from "lucide-react";
import { pickEmBracket } from "@/data/esports-command-data";

export default function PickEm() {
  // Store predictions: matchId -> winnerTeamName
  const [predictions, setPredictions] = useState<Record<string, string>>({});

  const handlePick = (matchId: string, team: string, nextMatchId: string, slot: "team1" | "team2") => {
    if (team === "TBD" || !team) return;
    
    setPredictions((prev) => ({ ...prev, [matchId]: team }));

    // Propagate to next round if applicable (simplified logic for this demo bracket)
    if (nextMatchId) {
       // We'd theoretically update the next match's team1 or team2 based on the slot, 
       // but for simplicity, we let the UI derive the "TBD" slots from the predictions state.
    }
  };

  // Derive semi-finals from QF predictions
  const sf1_team1 = predictions["qf1"] || "TBD";
  const sf1_team2 = predictions["qf2"] || "TBD";
  const sf2_team1 = predictions["qf3"] || "TBD";
  const sf2_team2 = predictions["qf4"] || "TBD";

  // Derive grand final from SF predictions
  const final_team1 = predictions["sf1"] || "TBD";
  const final_team2 = predictions["sf2"] || "TBD";

  const winner = predictions["final"] || "TBD";

  const MatchBlock = ({ 
    id, team1, team2, round 
  }: { 
    id: string, team1: string, team2: string, round: number 
  }) => {
    const isTeam1Picked = predictions[id] === team1;
    const isTeam2Picked = predictions[id] === team2;
    
    return (
      <div className="flex flex-col gap-1 w-48 relative z-10">
        <button
          onClick={() => handlePick(id, team1, round === 1 ? (id === "qf1" || id === "qf2" ? "sf1" : "sf2") : "final", "team1")}
          className={`px-3 py-2 border-2 border-black flex items-center justify-between text-xs font-black uppercase tracking-wide transition-colors ${
            isTeam1Picked ? "bg-[#39FF14] text-black" : team1 !== "TBD" ? "bg-[#111820] text-gray-300 hover:border-[#39FF14]" : "bg-[#0a0f14] text-gray-600 cursor-not-allowed"
          }`}
        >
          <span className="truncate">{team1}</span>
          {isTeam1Picked && <span className="text-xl">✓</span>}
        </button>
        <button
          onClick={() => handlePick(id, team2, round === 1 ? (id === "qf1" || id === "qf2" ? "sf1" : "sf2") : "final", "team2")}
          className={`px-3 py-2 border-2 border-black flex items-center justify-between text-xs font-black uppercase tracking-wide transition-colors ${
            isTeam2Picked ? "bg-[#39FF14] text-black" : team2 !== "TBD" ? "bg-[#111820] text-gray-300 hover:border-[#39FF14]" : "bg-[#0a0f14] text-gray-600 cursor-not-allowed"
          }`}
        >
          <span className="truncate">{team2}</span>
          {isTeam2Picked && <span className="text-xl">✓</span>}
        </button>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-6">
        <Network className="w-8 h-8 text-[#FFD700]" />
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter">Crystal Ball</h2>
          <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
            Masters London 2026 Pick&apos;em
          </p>
        </div>
      </div>

      <div className="border-4 border-black p-8 bg-[#0a0f14] overflow-x-auto relative" style={{ boxShadow: "6px 6px 0px #FFD700" }}>
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="flex min-w-[800px] gap-8 relative z-10 p-4">
          {/* Quarter Finals */}
          <div className="flex flex-col justify-around gap-8">
            <div className="text-xs font-black uppercase tracking-widest text-[#FF4655] mb-2 text-center">Quarterfinals</div>
            <MatchBlock id="qf1" team1={pickEmBracket[0].team1} team2={pickEmBracket[0].team2} round={1} />
            <MatchBlock id="qf2" team1={pickEmBracket[1].team1} team2={pickEmBracket[1].team2} round={1} />
            <MatchBlock id="qf3" team1={pickEmBracket[2].team1} team2={pickEmBracket[2].team2} round={1} />
            <MatchBlock id="qf4" team1={pickEmBracket[3].team1} team2={pickEmBracket[3].team2} round={1} />
          </div>

          {/* Semi Finals */}
          <div className="flex flex-col justify-around gap-24 py-16">
            <div className="text-xs font-black uppercase tracking-widest text-[#00E5FF] mb-2 text-center absolute top-4">Semifinals</div>
            <MatchBlock id="sf1" team1={sf1_team1} team2={sf1_team2} round={2} />
            <MatchBlock id="sf2" team1={sf2_team1} team2={sf2_team2} round={2} />
          </div>

          {/* Grand Final */}
          <div className="flex flex-col justify-center gap-8 py-32">
            <div className="text-xs font-black uppercase tracking-widest text-[#FFD700] mb-2 text-center absolute top-4">Grand Final</div>
            <MatchBlock id="final" team1={final_team1} team2={final_team2} round={3} />
          </div>

          {/* Winner */}
          <div className="flex flex-col justify-center items-center ml-8">
            <div className="text-xs font-black uppercase tracking-widest text-[#39FF14] mb-4">Champion</div>
            <div className={`w-48 h-32 border-4 border-black flex items-center justify-center text-center p-4 transition-colors ${
              winner !== "TBD" ? "bg-[#39FF14] text-black shadow-[6px_6px_0px_#FFD700]" : "bg-[#111820] text-gray-500"
            }`}>
              <span className="font-black uppercase text-xl">{winner}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
