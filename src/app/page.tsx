"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1923] text-[#ECE8E1] font-sans relative overflow-hidden flex flex-col items-center justify-center p-8">
      
      {/* Halftone Background Pattern Effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#39FF14_2px,transparent_2px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl w-full border-4 border-black relative bg-[#ECE8E1] p-12 text-black shadow-[12px_12px_0px_#FF4655]">
        
        {/* Decorative corner accents */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00E5FF] border-4 border-black" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#39FF14] border-4 border-black" />

        <div className="text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
          >
            VALOGUIDE
          </motion.h1>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#FF4655] mb-12">
            Valorant Recruit Protocol
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            <Link href="/agents" className="group">
              <div className="border-4 border-black bg-white p-6 relative transition-transform group-hover:-translate-y-2 shadow-[8px_8px_0px_#0F1923] group-hover:shadow-[12px_12px_0px_#0F1923]">
                <h2 className="text-2xl font-black uppercase mb-2">Agent Archive</h2>
                <p className="font-medium text-gray-600">Explore the roster and abilities.</p>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-l-4 border-t-4 border-black bg-[#FF4655]" />
              </div>
            </Link>

            <Link href="/lore" className="group">
              <div className="border-4 border-black bg-white p-6 relative transition-transform group-hover:-translate-y-2 shadow-[8px_8px_0px_#0F1923] group-hover:shadow-[12px_12px_0px_#0F1923]">
                <h2 className="text-2xl font-black uppercase mb-2">Lore Timeline</h2>
                <p className="font-medium text-gray-600">First Light and the Mirror World.</p>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-l-4 border-t-4 border-black bg-[#00E5FF]" />
              </div>
            </Link>

            <Link href="/sage" className="group">
              <div className="border-4 border-black bg-white p-6 relative transition-transform group-hover:-translate-y-2 shadow-[8px_8px_0px_#0F1923] group-hover:shadow-[12px_12px_0px_#0F1923]">
                <h2 className="text-2xl font-black uppercase mb-2">SAGE AI</h2>
                <p className="font-medium text-gray-600">Ask the chatbot for guidance.</p>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-l-4 border-t-4 border-black bg-[#39FF14]" />
              </div>
            </Link>

            <Link href="/toolkit" className="group">
              <div className="border-4 border-black bg-white p-6 relative transition-transform group-hover:-translate-y-2 shadow-[8px_8px_0px_#0F1923] group-hover:shadow-[12px_12px_0px_#0F1923]">
                <h2 className="text-2xl font-black uppercase mb-2">Tactical Toolkit</h2>
                <p className="font-medium text-gray-600">Calculate eDPI and compare weapons.</p>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-l-4 border-t-4 border-black bg-[#FF4655]" />
              </div>
            </Link>

            <Link href="/maps" className="group">
              <div className="border-4 border-black bg-white p-6 relative transition-transform group-hover:-translate-y-2 shadow-[8px_8px_0px_#0F1923] group-hover:shadow-[12px_12px_0px_#0F1923]">
                <h2 className="text-2xl font-black uppercase mb-2">Map Intel</h2>
                <p className="font-medium text-gray-600">Topological data and site lineups.</p>
                <div className="absolute top-0 left-0 w-6 h-6 border-r-4 border-b-4 border-black bg-[#00E5FF]" />
              </div>
            </Link>

            <Link href="/esports" className="group">
              <div className="border-4 border-black bg-white p-6 relative transition-transform group-hover:-translate-y-2 shadow-[8px_8px_0px_#0F1923] group-hover:shadow-[12px_12px_0px_#0F1923]">
                <h2 className="text-2xl font-black uppercase mb-2">VCT & Esports</h2>
                <p className="font-medium text-gray-600">Global circuits and pro players.</p>
                <div className="absolute top-0 right-0 w-6 h-6 border-l-4 border-b-4 border-black bg-[#FF4655]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-r-4 border-t-4 border-black bg-[#39FF14]" />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
