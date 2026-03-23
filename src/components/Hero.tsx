"use client";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-(--val-navy)">
      {/* Valorant Cinematic Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full bg-black">
        <iframe
          src="https://www.youtube.com/embed/e_E9W2vsRbQ?autoplay=1&mute=1&loop=1&playlist=e_E9W2vsRbQ&controls=0&modestbranding=1&playsinline=1&rel=0"
          title="Valorant Cinematic"
          className="absolute top-1/2 left-1/2 min-w-[150vw] min-h-[150vh] -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-luminosity pointer-events-none scale-125 md:scale-100"
          sandbox="allow-same-origin allow-scripts allow-presentation"
        />
      </div>
      
      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(57,255,20,0.06)_1px,transparent_1px)] bg-[length:12px_12px]" />

      {/* Radial Action Lines Animation */}
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg, transparent 0deg 10deg, #fff 10deg 20deg, transparent 20deg 30deg, #fff 30deg 40deg, transparent 40deg 50deg, #fff 50deg 60deg, transparent 60deg 70deg, #fff 70deg 80deg, transparent 80deg 360deg)"
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="w-full flex flex-col items-center"
        >
          {/* Using a modified custom banner, similar to page-header__badge but bigger */}
          <motion.div 
            whileHover={{ x: [-2, 2, -2, 2, 0], y: [-1, 1, -1, 1, 0] }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-(--val-red) border-[4px] border-black px-6 py-2 skew-x-[-8deg] shadow-[8px_8px_0px_#000] mb-8"
          >
            <h1 className="text-4xl md:text-7xl font-[family:var(--font-tungsten)] tracking-[0.1em] text-black italic skew-x-[8deg] m-0">
              VALORANT RECRUIT PROTOCOL
            </h1>
          </motion.div>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-(--val-offwhite) font-bold tracking-widest uppercase mb-12 drop-shadow-md">
            Your tactical guide to agents, maps, and lore. Find your main. Master your setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center w-full">
             <Button variant="primary">RECRUIT NOW</Button>
             <Button variant="secondary">VIEW RECORDS</Button>
          </div>
        </motion.div>
      </div>

      {/* Jagged border bottom separator */}
      <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none h-[40px] md:h-[60px]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-full">
            <path d="M0,0 L100,60 L200,0 L300,60 L400,0 L500,60 L600,0 L700,60 L800,0 L900,60 L1000,0 L1100,60 L1200,0 L1200,120 L0,120 Z" className="fill-(--val-navy) stroke-black stroke-[4px]"></path>
        </svg>
      </div>
    </section>
  );
}
