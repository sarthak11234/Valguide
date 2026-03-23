import { Metadata } from 'next';
import SensCalculator from '@/components/SensCalculator';
import WeaponComparison from '@/components/WeaponComparison';
import JaggedDivider from '@/components/JaggedDivider';
import CrosshairPreviewer from '@/components/CrosshairPreviewer';

export const metadata: Metadata = {
  title: 'Tactical Toolkit',
  description: 'Calculate your eDPI sensitivity and compare Valorant weapon stats — fire rate, damage, cost, and wall penetration for every weapon in the game.',
  openGraph: {
    title: 'Tactical Toolkit | ValoGuide',
    description: 'eDPI calculator and weapon stat comparison for Valorant players.',
    type: 'website',
  },
};

export default function ToolkitPage() {
  return (
    <main className="min-h-screen bg-[#0F1923] text-[#ECE8E1] pb-32">
      {/* Page Header */}
      <section className="pt-16 pb-8 text-center px-4">
        <div className="inline-block bg-[#FF4655] border-[4px] border-black px-8 py-3 transform skew-x-[-8deg] shadow-[8px_8px_0px_#000] mb-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-[0.1em] text-black italic skew-x-[8deg] m-0">
            TACTICAL TOOLKIT
          </h1>
        </div>
        <p className="text-gray-400 font-bold tracking-widest uppercase text-sm md:text-base mb-2">
          Optimize your setup. Know your arsenal.
        </p>
      </section>

      {/* Sens Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#00E5FF] italic tracking-wider mb-8 drop-shadow-[2px_2px_0px_#000]">
          // SENSITIVITY MATRIX
        </h2>
        <SensCalculator />
      </section>

      <JaggedDivider color="fill-[#FF4655]" height="h-[30px]" />

      {/* Crosshair Previewer Section */}
      <section className="w-full bg-[#FF4655]" id="crosshair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-black italic tracking-wider mb-8 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.3)]">
            // PRO CROSSHAIR PROFILES
          </h2>
          <CrosshairPreviewer />
        </div>
      </section>

      <JaggedDivider color="fill-[#111820]" height="h-[40px] md:h-[60px]" />

      {/* Weapon Comparison Section */}
      <section className="w-full bg-[#111820]" id="weapons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#39FF14] italic tracking-wider mb-8 drop-shadow-[2px_2px_0px_#000]">
            // ARSENAL DATABANK
          </h2>
          <WeaponComparison />
        </div>
      </section>
    </main>
  );
}
