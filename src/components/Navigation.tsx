"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "COMMAND CENTER", href: "/" },
  { name: "AGENTS ARCHIVE", href: "/agents" },
  { name: "TACTICAL TOOLKIT", href: "/toolkit" },
  { name: "MAP INTEL", href: "/maps" },
  { name: "VCT ESPORTS", href: "/esports" },
  { name: "LORE REGISTRY", href: "/lore" },
  { name: "SAGE INTEL", href: "/sage" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-(--val-navy) border-b-[4px] border-black shadow-[0_4px_0px_#FF4655]">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-(--val-red) skew-x-[-10deg] border-[3px] border-black grid place-items-center group-hover:bg-(--val-cyan) transition-colors">
              <span className="font-[family:var(--font-tungsten)] text-black text-2xl font-bold skew-x-[10deg]">V</span>
            </div>
            <span className="font-bold text-xl tracking-[0.15em] text-(--val-offwhite) hidden sm:block">ValoGuide</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 items-center">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative px-4 py-2 text-sm font-bold tracking-[0.1em] text-(--val-offwhite) hover:text-(--val-cyan) transition-colors skew-x-[-10deg] group"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="block skew-x-[10deg]">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-50 relative"
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }} className="w-8 h-[4px] bg-(--val-offwhite) border border-black" />
            <motion.div animate={{ opacity: isOpen ? 0 : 1 }} className="w-8 h-[4px] bg-(--val-offwhite) border border-black" />
            <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }} className="w-8 h-[4px] bg-(--val-red) border border-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-30 bg-(--val-navy) bg-[radial-gradient(circle,rgba(57,255,20,0.06)_1px,transparent_1px)] bg-[length:12px_12px] pt-32 px-8 pb-8 flex flex-col gap-4 overflow-y-auto"
          >
            <div className="absolute top-[72px] left-0 w-full h-[4px] bg-(--val-cyan) z-40" />
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-black/40 border-[3px] border-black p-4 mb-2 skew-x-[-5deg] hover:bg-(--val-red) transition-colors group"
                >
                  <span className="block skew-x-[5deg] font-[family:var(--font-tungsten)] text-3xl tracking-wider text-white group-hover:text-black">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
