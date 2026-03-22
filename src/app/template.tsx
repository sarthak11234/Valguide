"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="w-full"
      >
        {children}
      </motion.div>
      
      {/* Speed-line / Comic swipe transition layer */}
      <motion.div 
         initial={{ x: "-100%", skewX: -20 }}
         animate={{ x: "200%", skewX: -20 }}
         transition={{ duration: 0.8, ease: "easeInOut" }}
         className="fixed top-0 bottom-0 w-[150vw] z-[100] pointer-events-none bg-(--val-red) opacity-20"
      />
      
      <motion.div 
         initial={{ x: "-150%", skewX: -20 }}
         animate={{ x: "200%", skewX: -20 }}
         transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
         className="fixed top-0 bottom-0 w-[50vw] z-[100] pointer-events-none bg-(--val-cyan) opacity-30"
      />
    </>
  );
}
