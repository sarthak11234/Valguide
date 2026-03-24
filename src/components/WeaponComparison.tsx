import WeaponTableClient from "./WeaponTableClient";

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

  // Filter out the melee weapon and rank by cost by default
  const weapons = data.data
    .filter((w: any) => w.weaponStats)
    .sort((a: any, b: any) => (a.shopData?.cost || 0) - (b.shopData?.cost || 0));

  return <WeaponTableClient initialWeapons={weapons} />;
}
