"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

type ArmorType = 0 | 25 | 50;
type DistanceType = 0 | 15 | 30;

const WEAPON_CATEGORIES = ["ALL", "Sidearm", "SMG", "Rifle", "Sniper", "Shotgun", "Heavy"];

export default function WeaponTableClient({ initialWeapons }: { initialWeapons: any[] }) {
  const [armor, setArmor] = useState<ArmorType>(50); // Default to heavy shields
  const [distance, setDistance] = useState<DistanceType>(0); // Default 0-15m
  const [category, setCategory] = useState("ALL");

  const weaponsWithTTK = useMemo(() => {
    let filtered = initialWeapons;
    
    // Filter by category
    if (category !== "ALL") {
      filtered = filtered.filter((w) => {
        const cat = w.shopData?.categoryText;
        if (!cat) return false;
        // API returns "EEquippableCategory::Rifle" style, we compare using display text
        return cat.toUpperCase() === category.toUpperCase();
      });
    }

    return filtered.map((w) => {
      const stats = w.weaponStats;
      if (!stats || !stats.damageRanges || stats.damageRanges.length === 0) {
        return { ...w, ttk: Infinity, hitsToKill: Infinity, bodyDamage: 0 };
      }

      // Find the right damage range
      let targetRange = stats.damageRanges[0];
      for (const range of stats.damageRanges) {
        // If distance falls within rangeStartMeters and rangeEndMeters
        if (distance >= range.rangeStartMeters && distance < range.rangeEndMeters) {
          targetRange = range;
          break;
        }
      }

      const damage = targetRange.bodyDamage;
      const fireRate = stats.fireRate;
      
      let hitsToKill = Infinity;
      let ttk = Infinity;

      if (damage > 0) {
        const targetHealth = 100 + armor;
        hitsToKill = Math.ceil(targetHealth / damage);
        
        // Single shot weapons or first shot is instant (TTK = 0 for 1 shot)
        if (hitsToKill === 1) {
          ttk = 0;
        } else {
          // Time between shots = 1 / fireRate
          ttk = (hitsToKill - 1) * (1 / fireRate);
        }
      }

      return { ...w, ttk, hitsToKill, bodyDamage: damage };
    }).sort((a, b) => {
      // Sort by TTK ascending
      if (a.ttk === Infinity) return 1;
      if (b.ttk === Infinity) return -1;
      return a.ttk - b.ttk;
    });
  }, [initialWeapons, armor, distance, category]);

  return (
    <div className="w-full relative border-[6px] border-black shadow-[12px_12px_0px_#00E5FF] bg-black">
      {/* Halftone backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,229,255,0.08)_1px,transparent_1px)] bg-[length:16px_16px] pointer-events-none" />

      {/* Control Panel */}
      <div className="relative z-20 flex flex-col gap-4 p-4 sm:p-6 bg-[black] border-b-[6px] border-black">
        {/* Category Filter */}
        <div className="flex flex-col gap-2">
          <label className="font-bold tracking-widest text-sm text-[#FF4655] uppercase">
            WEAPON CLASS
          </label>
          <div className="flex flex-wrap gap-2">
            {WEAPON_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 border-[2px] font-bold text-xs tracking-widest transition-colors ${
                  category === cat 
                  ? "bg-[#FF4655] text-black border-black" 
                  : "bg-black text-zinc-400 border-zinc-700 hover:border-[#FF4655] hover:text-[#FF4655]"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-end justify-between">
          <div className="flex flex-col gap-2">
            <label className="font-bold tracking-widest text-sm text-[#00E5FF] uppercase">
              TARGET ARMOR
            </label>
            <div className="flex flex-wrap gap-2">
              {[0, 25, 50].map((val) => (
                <button
                  key={`armor-${val}`}
                  onClick={() => setArmor(val as ArmorType)}
                  className={`px-3 sm:px-4 py-2 border-[3px] font-bold text-xs sm:text-sm tracking-widest transition-colors ${
                    armor === val 
                    ? "bg-[#00E5FF] text-black border-black transform translate-y-1 shadow-none" 
                    : "bg-black text-white border-[#00E5FF] shadow-[4px_4px_0_#00E5FF]"
                  }`}
                >
                  {val === 0 ? "NONE (100)" : val === 25 ? "LIGHT (125)" : "HEAVY (150)"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold tracking-widest text-sm text-[#39FF14] uppercase">
              DISTANCE
            </label>
            <div className="flex flex-wrap gap-2">
              {[0, 15, 30].map((val) => (
                <button
                  key={`dist-${val}`}
                  onClick={() => setDistance(val as DistanceType)}
                  className={`px-3 sm:px-4 py-2 border-[3px] font-bold text-xs sm:text-sm tracking-widest transition-colors ${
                    distance === val 
                    ? "bg-[#39FF14] text-black border-black transform translate-y-1 shadow-none" 
                    : "bg-black text-white border-[#39FF14] shadow-[4px_4px_0_#39FF14]"
                  }`}
                >
                  {val === 0 ? "CLOSE (0-15m)" : val === 15 ? "MID (15-30m)" : "LONG (30-50m)"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable table with sticky first column on mobile */}
      <div className="overflow-x-auto relative z-10 w-full">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-black/50 backdrop-blur-sm">
              <th className="p-3 sm:p-4 border-b-[6px] border-r-[4px] border-black font-[family:var(--font-tungsten)] text-2xl sm:text-3xl tracking-widest text-zinc-400 sticky left-0 bg-black z-20">WEAPON</th>
              <th className="p-3 sm:p-4 border-b-[6px] border-r-[4px] border-black font-[family:var(--font-tungsten)] text-2xl sm:text-3xl tracking-widest text-zinc-400">COST (¤)</th>
              <th className="p-3 sm:p-4 border-b-[6px] border-r-[4px] border-black font-[family:var(--font-tungsten)] text-2xl sm:text-3xl tracking-widest text-zinc-400">BODY DMG</th>
              <th className="p-3 sm:p-4 border-b-[6px] border-r-[4px] border-black font-[family:var(--font-tungsten)] text-2xl sm:text-3xl tracking-widest text-[#39FF14]">TTK (s)</th>
              <th className="p-3 sm:p-4 border-b-[6px] border-black font-[family:var(--font-tungsten)] text-2xl sm:text-3xl tracking-widest text-zinc-400">SHOTS</th>
            </tr>
          </thead>
          <tbody>
            {weaponsWithTTK.map((w: any) => {
              return (
                <tr 
                  key={w.uuid} 
                  className="group border-b-[4px] border-black bg-black/60 hover:bg-[#ECE8E1] transition-colors"
                >
                  <td className="p-3 sm:p-4 border-r-[4px] border-black flex items-center gap-3 sm:gap-6 sticky left-0 bg-black group-hover:bg-[#ECE8E1] transition-colors z-20">
                    <div className="w-16 sm:w-24 h-10 sm:h-12 relative flex-shrink-0">
                      <Image src={w.displayIcon} alt={w.displayName} fill className="object-contain drop-shadow-[2px_2px_0px_#000] group-hover:drop-shadow-[2px_2px_0px_#FF4655] transition-all" />
                    </div>
                    <span className="font-[family:var(--font-tungsten)] text-xl sm:text-3xl uppercase tracking-widest text-white group-hover:text-black">
                      {w.displayName}
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 border-r-[4px] border-black font-[family:var(--font-tungsten)] text-2xl sm:text-4xl text-[#39FF14] group-hover:text-[#0F1923]">
                    {w.shopData?.cost || 0}
                  </td>
                  <td className="p-3 sm:p-4 border-r-[4px] border-black font-[family:var(--font-tungsten)] text-2xl sm:text-4xl text-white group-hover:text-black">
                    {Math.round(w.bodyDamage)}
                  </td>
                  <td className="p-3 sm:p-4 border-r-[4px] border-black font-[family:var(--font-tungsten)] text-2xl sm:text-4xl text-[#00E5FF] group-hover:text-[#FF4655] font-black">
                    {w.ttk === Infinity ? "N/A" : w.ttk.toFixed(3)}<span className="text-lg sm:text-xl opacity-75">s</span>
                  </td>
                  <td className="p-3 sm:p-4 border-black font-[family:var(--font-tungsten)] text-2xl sm:text-4xl text-white group-hover:text-black">
                    {w.hitsToKill === Infinity ? "-" : w.hitsToKill}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
