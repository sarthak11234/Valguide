import { Metadata } from 'next';
import SensCalculator from '@/components/SensCalculator';
import WeaponComparison from '@/components/WeaponComparison';
import JaggedDivider from '@/components/JaggedDivider';

export const metadata: Metadata = {
  title: 'Tactical Toolkit | ValoGuide',
  description: 'Calculate your eDPI and compare Valorant weapon stats.',
};

export default function ToolkitPage() {
  return (
    <main className="min-h-screen bg-(--val-navy) text-(--val-offwhite) pb-32">
      {/* Page Header */}
      <section className="pt-16 pb-8 text-center px-4">
        <div className="inline-block bg-(--val-red) border-[4px] border-black px-8 py-3 transform skew-x-[-8deg] shadow-[8px_8px_0px_#000] mb-6">
          <h1 className="text-4xl md:text-6xl font-[family:var(--font-tungsten)] tracking-[0.1em] text-black italic skew-x-[8deg] m-0">
            TACTICAL TOOLKIT
          </h1>
        </div>
        <p className="text-zinc-400 font-bold tracking-widest uppercase text-sm md:text-base mb-2">
          Optimize your setup. Know your arsenal.
        </p>
      </section>

      {/* Sens Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-[family:var(--font-tungsten)] text-(--val-cyan) italic tracking-wider mb-8 drop-shadow-[2px_2px_0px_#000]">
          // SENSITIVITY MATRIX
        </h2>
        <SensCalculator />
      </section>

      <JaggedDivider color="fill-black" height="h-[40px] md:h-[60px]" />

      {/* Weapon Comparison Section */}
      <section className="w-full bg-black" id="weapons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-[family:var(--font-tungsten)] text-(--val-green) italic tracking-wider mb-8 drop-shadow-[2px_2px_0px_#222]">
            // ARSENAL DATABANK
          </h2>
          <WeaponComparison />
        </div>
      </section>
    </main>
  );
}
