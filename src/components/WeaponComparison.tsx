import Image from "next/image";

async function getWeapons() {
  try {
    const res = await fetch("https://valorant-api.com/v1/weapons", {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function WeaponComparison() {
  const data = await getWeapons();

  if (!data?.data) {
    return (
      <div className="w-full border-[6px] border-black bg-black p-12 text-center shadow-[12px_12px_0px_#00E5FF]">
        <div className="text-[#FF4655] font-black text-2xl tracking-widest uppercase mb-3">
          // COMMS OFFLINE
        </div>
        <p className="text-zinc-500 font-bold tracking-wider text-sm">
          Unable to reach the Arsenal Databank. Check your connection and reload.
        </p>
      </div>
    );
  }

  // Filter out the melee weapon and rank by cost
  const weapons = data.data
    .filter((w: any) => w.weaponStats)
    .sort((a: any, b: any) => (a.shopData?.cost || 0) - (b.shopData?.cost || 0));

  return (
    <div className="w-full relative overflow-x-auto border-[6px] border-black shadow-[12px_12px_0px_#00E5FF] bg-black">
      {/* Halftone backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,229,255,0.08)_1px,transparent_1px)] bg-[length:16px_16px] pointer-events-none" />

      <table className="w-full text-left border-collapse relative z-10 min-w-[800px]">
        <thead>
          <tr className="bg-(--val-navy)">
            <th className="p-4 border-b-[6px] border-r-[4px] border-black font-[family:var(--font-tungsten)] text-3xl md:text-4xl tracking-widest text-(--val-offwhite)">WEAPON</th>
            <th className="p-4 border-b-[6px] border-r-[4px] border-black font-[family:var(--font-tungsten)] text-3xl md:text-4xl tracking-widest text-(--val-offwhite)">CATEGORY</th>
            <th className="p-4 border-b-[6px] border-r-[4px] border-black font-[family:var(--font-tungsten)] text-3xl md:text-4xl tracking-widest text-(--val-offwhite)">COST (¤)</th>
            <th className="p-4 border-b-[6px] border-r-[4px] border-black font-[family:var(--font-tungsten)] text-3xl md:text-4xl tracking-widest text-(--val-offwhite)">FIRE RATE</th>
            <th className="p-4 border-b-[6px] border-black font-[family:var(--font-tungsten)] text-3xl md:text-4xl tracking-widest text-(--val-offwhite)">MAGAZINE</th>
          </tr>
        </thead>
        <tbody>
          {weapons.map((w: any) => {
             const categoryParts = w.category.split("::");
             const category = categoryParts.length > 1 ? categoryParts[1] : categoryParts[0];
             
             return (
              <tr 
                key={w.uuid} 
                className="group border-b-[4px] border-black bg-black/60 hover:bg-(--val-cyan) transition-colors"
              >
                <td className="p-4 border-r-[4px] border-black flex items-center gap-6">
                  <div className="w-32 h-16 relative flex-shrink-0">
                    <Image src={w.displayIcon} alt={w.displayName} fill className="object-contain drop-shadow-[2px_2px_0px_#000] group-hover:brightness-0 transition-all" />
                  </div>
                  <span className="font-[family:var(--font-tungsten)] text-3xl uppercase tracking-widest text-white group-hover:text-black">
                    {w.displayName}
                  </span>
                </td>
                <td className="p-4 border-r-[4px] border-black font-bold text-sm tracking-widest uppercase text-zinc-400 group-hover:text-black">
                  {category}
                </td>
                <td className="p-4 border-r-[4px] border-black font-[family:var(--font-tungsten)] text-4xl md:text-5xl text-(--val-green) group-hover:text-black">
                  {w.shopData?.cost || 0}
                </td>
                <td className="p-4 border-r-[4px] border-black font-[family:var(--font-tungsten)] text-4xl md:text-5xl text-white group-hover:text-black">
                  {w.weaponStats?.fireRate} <span className="text-xl md:text-2xl opacity-75">rd/s</span>
                </td>
                <td className="p-4 border-black font-[family:var(--font-tungsten)] text-4xl md:text-5xl text-white group-hover:text-black">
                  {w.weaponStats?.magazineSize}
                </td>
              </tr>
             );
          })}
        </tbody>
      </table>
    </div>
  );
}
