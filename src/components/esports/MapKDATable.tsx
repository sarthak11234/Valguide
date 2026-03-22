"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Table, Filter, ArrowUpDown, ChevronDown } from "lucide-react";
import { mapKDAData } from "@/data/esports-command-data";

type SortKey = "player" | "map" | "kda" | "winPct" | "agent";

export default function MapKDATable() {
  const [mapFilter, setMapFilter] = useState<string>("All");
  const [sortKey, setSortKey] = useState<SortKey>("kda");
  const [sortAsc, setSortAsc] = useState(false);

  const allMaps = useMemo(() => {
    const set = new Set(mapKDAData.map((d) => d.map));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let data = mapFilter === "All" ? [...mapKDAData] : mapKDAData.filter((d) => d.map === mapFilter);
    data.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortAsc ? aVal - bVal : bVal - aVal;
      }
      return sortAsc
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
    return data;
  }, [mapFilter, sortKey, sortAsc]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const MAP_COLORS: Record<string, string> = {
    Abyss: "#6366f1",
    Corrode: "#22c55e",
    Sunset: "#f97316",
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Table className="w-8 h-8 text-[#00E5FF]" />
        <h2 className="text-4xl font-black uppercase tracking-tighter">Map KDA Intel</h2>
      </div>
      <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-6">
        Player performance breakdown by map — sortable & filterable
      </p>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <Filter className="w-4 h-4 text-gray-500" />
        <span className="text-xs font-black uppercase tracking-widest text-gray-500">Map Filter:</span>
        {allMaps.map((m) => (
          <button
            key={m}
            onClick={() => setMapFilter(m)}
            className={`text-xs font-black uppercase tracking-wide px-3 py-1.5 border-3 border-black transition-all ${
              mapFilter === m
                ? "bg-[#00E5FF] text-black"
                : "bg-[#1a2332] text-gray-400 hover:text-white"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="border-4 border-black overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#0a0f14] border-b-4 border-black">
              {[
                { key: "player" as SortKey, label: "Player" },
                { key: "agent" as SortKey, label: "Agent" },
                { key: "map" as SortKey, label: "Map" },
                { key: "kda" as SortKey, label: "KDA" },
                { key: "winPct" as SortKey, label: "Win %" },
              ].map((col) => (
                <th
                  key={col.key}
                  onClick={() => toggleSort(col.key)}
                  className="px-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400 cursor-pointer hover:text-white transition-colors select-none"
                >
                  <span className="flex items-center gap-1">
                    {col.label}
                    <ArrowUpDown className="w-3 h-3" />
                  </span>
                </th>
              ))}
              <th className="px-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400">Rnds</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <motion.tr
                key={`${row.player}-${row.map}-${row.agent}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="border-b-2 border-black/30 hover:bg-[#1a2332] transition-colors"
              >
                <td className="px-4 py-3">
                  <div>
                    <span className="font-black text-sm">{row.player}</span>
                    <span className="text-xs text-gray-500 ml-2">{row.team}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm font-bold text-[#00E5FF]">{row.agent}</td>
                <td className="px-4 py-3">
                  <span
                    className="text-xs font-black uppercase px-2 py-0.5 border-2 border-black"
                    style={{ backgroundColor: (MAP_COLORS[row.map] || "#666") + "30", color: MAP_COLORS[row.map] || "#fff" }}
                  >
                    {row.map}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-lg font-black ${row.kda >= 1.3 ? "text-[#39FF14]" : row.kda >= 1.1 ? "text-[#FFD700]" : "text-gray-400"}`}>
                    {row.kda.toFixed(2)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-[#1a2332] border border-black/40 relative overflow-hidden">
                      <div
                        className="h-full"
                        style={{ width: `${row.winPct}%`, backgroundColor: row.winPct >= 70 ? "#39FF14" : row.winPct >= 60 ? "#FFD700" : "#FF4655" }}
                      />
                    </div>
                    <span className="text-sm font-black">{row.winPct}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 font-bold">{row.rounds}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
