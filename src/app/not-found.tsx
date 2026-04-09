"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F1923] text-[#ECE8E1] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,70,85,0.04) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Speed lines decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#FF4655]/20 to-transparent"
            style={{
              top: `${15 + i * 14}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.4}s`,
              animation: "speed-line 3s linear infinite",
            }}
          />
        ))}
      </div>

      {/* Giant 404 background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20rem] sm:text-[28rem] font-black text-white/[0.02] leading-none tracking-tighter">
          404
        </span>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* Error badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-[#FF4655] border-4 border-black px-6 py-2 transform -skew-x-12 shadow-[8px_8px_0px_#000] mb-8"
        >
          <span className="block skew-x-12 font-black text-sm tracking-[0.3em] text-black uppercase">
            ⚠ ERROR CODE: 404
          </span>
        </motion.div>

        {/* Glitch title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-4 leading-none"
          style={{
            textShadow: "3px 3px 0 #FF4655, -2px -2px 0 #00E5FF",
          }}
        >
          MISSION
          <br />
          ABORTED
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg font-bold tracking-widest text-gray-400 uppercase mb-2"
        >
          SECTOR NOT FOUND
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-gray-500 font-medium mb-10"
        >
          The requested intel does not exist in this dimension. It may have been
          classified, relocated, or was never part of the Protocol.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-block bg-[#FF4655] border-4 border-black px-8 py-4 font-black text-xl text-black uppercase tracking-wider shadow-[6px_6px_0px_#000] hover:translate-y-1 hover:shadow-[3px_3px_0px_#000] transition-all"
          >
            ← COMMAND CENTER
          </Link>
          <Link
            href="/agents"
            className="inline-block bg-[#00E5FF] border-4 border-black px-8 py-4 font-black text-xl text-black uppercase tracking-wider shadow-[6px_6px_0px_#000] hover:translate-y-1 hover:shadow-[3px_3px_0px_#000] transition-all"
          >
            AGENT ARCHIVE →
          </Link>
        </motion.div>

        {/* Comic sound effect  */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          className="absolute -bottom-16 -right-8 sm:-right-24 pointer-events-none select-none"
        >
          <svg
            width="120"
            height="90"
            viewBox="0 0 120 90"
            className="drop-shadow-[-3px_3px_0px_#000]"
          >
            <path
              d="M5,45 L50,5 L42,36 L115,24 L65,85 L73,54 Z"
              fill="#39FF14"
              stroke="#000"
              strokeWidth="4"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-black text-lg text-black -rotate-12 translate-y-[-5px]">
            OOPS!
          </span>
        </motion.div>
      </motion.div>

      {/* CSS for speed line animation */}
      <style>{`
        @keyframes speed-line {
          0% { transform: translateX(-100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
