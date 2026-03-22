"use client";

import { useState, useEffect } from "react";

const CATEGORY_ORDER = ["Rifles", "Pistols", "SMGs", "Snipers", "Shotguns", "Heavy"];

const PRO_TIPS = [
  { player: "TenZ",   dpi: 800,  sens: 0.408, edpi: 326.4 },
  { player: "s0m",    dpi: 400,  sens: 0.793, edpi: 317.2 },
  { player: "yay",    dpi: 800,  sens: 0.22,  edpi: 176.0 },
  { player: "Aspas",  dpi: 1600, sens: 0.18,  edpi: 288.0 },
  { player: "Derke",  dpi: 400,  sens: 0.97,  edpi: 388.0 },
];

interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  shopData?: { cost: number } | null;
  weaponStats?: {
    fireRate: number;
    magazineSize: number;
    wallPenetration: string;
  } | null;
  displayIcon: string;
}

export default function TacticalToolkit() {
  // --- eDPI Calculator ---
  const [dpi, setDpi] = useState<number | "">("");
  const [sens, setSens] = useState<number | "">("");
  const [edpi, setEdpi] = useState<number | null>(null);
  const [showZap, setShowZap] = useState(false);

  // --- Weapon Table ---
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [loadingWeapons, setLoadingWeapons] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Rifles");
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/weapons")
      .then((r) => r.json())
      .then((data) => {
        setWeapons(data.data ?? []);
        setLoadingWeapons(false);
      })
      .catch(() => setLoadingWeapons(false));
  }, []);

  const calculate = () => {
    if (dpi && sens) {
      setEdpi(Number(dpi) * Number(sens));
      setShowZap(true);
      setTimeout(() => setShowZap(false), 600);
    }
  };

  const normalizeCategory = (raw: string) => {
    const map: Record<string, string> = {
      "EEquippableCategory::Rifle":    "Rifles",
      "EEquippableCategory::Pistol":   "Pistols",
      "EEquippableCategory::SMG":      "SMGs",
      "EEquippableCategory::Sniper":   "Snipers",
      "EEquippableCategory::Shotgun":  "Shotguns",
      "EEquippableCategory::Heavy":    "Heavy",
    };
    return map[raw] ?? raw;
  };

  const filteredWeapons = weapons.filter(
    (w) => normalizeCategory(w.category) === activeCategory
  );

  const penLabel = (raw: string) => {
    if (!raw) return "—";
    if (raw.includes("Low"))    return "🟡 Low";
    if (raw.includes("Medium")) return "🟠 Medium";
    if (raw.includes("High"))   return "🔴 High";
    return raw;
  };

  return (
    <div className="min-h-screen bg-[#0F1923] text-[#ECE8E1] p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ──────────────── eDPI Calculator ──────────────── */}
        <div className="w-full max-w-lg mx-auto border-4 border-black bg-[#ECE8E1] text-black p-8 relative shadow-[12px_12px_0px_#00E5FF]">
          <div className="absolute -top-6 -left-6 bg-[#00E5FF] border-4 border-black px-6 py-2 transform -skew-x-6 shadow-[4px_4px_0px_#FF4655]">
            <h1 className="text-3xl font-black uppercase tracking-widest text-black italic">
              TACTICAL TOOLKIT
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* DPI Input */}
            <div className="flex border-4 border-black">
              <div className="bg-[#FF4655] px-6 py-4 border-r-4 border-black font-black uppercase text-xl text-white min-w-[160px]">
                Mouse DPI
              </div>
              <input
                type="number"
                id="dpi-input"
                className="flex-1 w-full min-w-0 bg-white px-4 py-4 text-2xl font-bold focus:outline-none"
                placeholder="e.g. 800"
                value={dpi}
                onChange={(e) => setDpi(Number(e.target.value))}
              />
            </div>

            {/* Sensitivity Input */}
            <div className="flex border-4 border-black">
              <div className="bg-[#FF4655] px-6 py-4 border-r-4 border-black font-black uppercase text-xl text-white min-w-[160px]">
                In-Game Sens
              </div>
              <input
                type="number"
                id="sens-input"
                step="0.01"
                className="flex-1 w-full min-w-0 bg-white px-4 py-4 text-2xl font-bold focus:outline-none"
                placeholder="e.g. 0.4"
                value={sens}
                onChange={(e) => setSens(Number(e.target.value))}
              />
            </div>

            {/* Calculate Button */}
            <button
              id="calculate-btn"
              onClick={calculate}
              className="w-full bg-[#39FF14] border-4 border-black px-8 py-4 text-black font-black text-2xl uppercase tracking-wider shadow-[4px_4px_0px_#0F1923] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all relative overflow-hidden"
            >
              CALCULATE eDPI
              {showZap && (
                <span className="absolute inset-0 flex items-center justify-center bg-white text-[#FF4655] text-5xl font-black italic z-10">
                  *ZAP!*
                </span>
              )}
            </button>

            {/* Result */}
            {edpi !== null && (
              <div className="mt-4 border-4 border-black border-dashed p-6 text-center transform rotate-1 bg-white">
                <h2 className="text-2xl font-black uppercase">Your eDPI:</h2>
                <p className="text-7xl font-black text-[#FF4655] mt-2 drop-shadow-[3px_3px_0_#0F1923]">
                  {edpi.toFixed(1)}
                </p>
                <div className="mt-4 text-lg font-bold">
                  {edpi >= 200 && edpi <= 400 ? (
                    <span className="text-[#39FF14] bg-black px-3 py-1 inline-block">
                      ✅ *TARGET RANGE ACHIEVED* (200–400)
                    </span>
                  ) : (
                    <span className="text-white bg-black px-3 py-1 inline-block">
                      TARGET RANGE: 200 – 400 eDPI
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-gray-600 font-semibold">
                  {edpi < 200
                    ? "⚠️ Too high — aim may feel unresponsive. Lower DPI or raise sensitivity."
                    : edpi > 400
                    ? "⚠️ Too low — aim may feel jittery. Lower sensitivity or reduce DPI."
                    : "🎯 Great for precise aiming! Most pro players stay in this range."}
                </p>
              </div>
            )}
          </div>

          {/* Pro Tips Panel */}
          <div className="mt-8 border-4 border-black bg-[#0F1923] text-[#ECE8E1] p-4">
            <p className="font-black uppercase tracking-widest text-[#00E5FF] mb-3 text-sm">
              ⚡ PRO PLAYER REFERENCE
            </p>
            <table className="w-full text-sm font-bold">
              <thead>
                <tr className="border-b-2 border-[#FF4655] text-[#FF4655] uppercase text-xs">
                  <th className="text-left py-1">Player</th>
                  <th className="text-right py-1">DPI</th>
                  <th className="text-right py-1">Sens</th>
                  <th className="text-right py-1">eDPI</th>
                </tr>
              </thead>
              <tbody>
                {PRO_TIPS.map((p) => (
                  <tr key={p.player} className="border-b border-gray-700">
                    <td className="py-1">{p.player}</td>
                    <td className="text-right">{p.dpi}</td>
                    <td className="text-right">{p.sens}</td>
                    <td className="text-right text-[#39FF14]">{p.edpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ──────────────── Weapon Stat Comparison ──────────────── */}
        <div className="border-4 border-black bg-[#ECE8E1] text-black relative shadow-[12px_12px_0px_#FF4655]">
          {/* Header */}
          <div className="absolute -top-6 -left-6 bg-[#FF4655] border-4 border-black px-6 py-2 transform -skew-x-6 shadow-[4px_4px_0px_#39FF14]">
            <h2 className="text-3xl font-black uppercase tracking-widest text-white italic">
              WEAPON INTEL
            </h2>
          </div>

          <div className="pt-10 p-6">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CATEGORY_ORDER.map((cat) => (
                <button
                  key={cat}
                  id={`tab-${cat.toLowerCase()}`}
                  onClick={() => { setActiveCategory(cat); setSelectedWeapon(null); }}
                  className={`border-4 border-black px-4 py-2 font-black uppercase text-sm tracking-wider transition-all hover:translate-y-[-2px] ${
                    activeCategory === cat
                      ? "bg-[#FF4655] text-white shadow-[3px_3px_0px_#0F1923]"
                      : "bg-white text-black shadow-[3px_3px_0px_#ccc] hover:shadow-[3px_3px_0px_#FF4655]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Table */}
            {loadingWeapons ? (
              <div className="text-center py-12 font-black text-2xl uppercase animate-pulse text-gray-500">
                *LOADING ARSENAL...*
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-4 border-black text-sm font-bold">
                  <thead>
                    <tr className="bg-[#0F1923] text-[#ECE8E1] uppercase text-xs tracking-widest">
                      <th className="text-left p-3 border-r-2 border-gray-700">Weapon</th>
                      <th className="text-right p-3 border-r-2 border-gray-700">Fire Rate</th>
                      <th className="text-right p-3 border-r-2 border-gray-700">Magazine</th>
                      <th className="text-right p-3 border-r-2 border-gray-700">Wall Pen</th>
                      <th className="text-right p-3">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWeapons.map((w, i) => (
                      <tr
                        key={w.uuid}
                        id={`weapon-row-${w.uuid}`}
                        onClick={() => setSelectedWeapon(w.uuid === selectedWeapon ? null : w.uuid)}
                        className={`border-t-2 border-black cursor-pointer transition-all ${
                          selectedWeapon === w.uuid
                            ? "bg-[#FF4655] text-white"
                            : i % 2 === 0
                            ? "bg-white hover:bg-[#fff0f1]"
                            : "bg-[#f5f5f5] hover:bg-[#fff0f1]"
                        }`}
                      >
                        <td className="p-3 border-r-2 border-black flex items-center gap-3">
                          {w.displayIcon && (
                            <img
                              src={w.displayIcon}
                              alt={w.displayName}
                              className="h-6 object-contain"
                            />
                          )}
                          <span>{w.displayName}</span>
                        </td>
                        <td className="p-3 border-r-2 border-black text-right">
                          {w.weaponStats?.fireRate?.toFixed(1) ?? "—"}
                          <span className="text-xs font-normal ml-1">rnd/s</span>
                        </td>
                        <td className="p-3 border-r-2 border-black text-right">
                          {w.weaponStats?.magazineSize ?? "—"}
                        </td>
                        <td className="p-3 border-r-2 border-black text-right">
                          {penLabel(w.weaponStats?.wallPenetration ?? "")}
                        </td>
                        <td className="p-3 text-right">
                          {w.shopData?.cost
                            ? <span className="font-black">{w.shopData.cost} <span className="text-xs font-normal">creds</span></span>
                            : "—"
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="mt-3 text-xs text-gray-500 font-semibold text-right">
              Click a row to highlight · Data via valorant-api.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
