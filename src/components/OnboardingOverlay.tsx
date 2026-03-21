"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function OnboardingOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="relative w-full max-w-lg bg-(--val-navy) border-[6px] border-(--val-red) p-8 shadow-[12px_12px_0px_#FF4655] text-center"
          >
            {/* Halftone backdrop inside modal */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,70,85,0.1)_1px,transparent_1px)] bg-[length:8px_8px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-5xl font-[family:var(--font-tungsten)] text-white italic tracking-wider mb-4 uppercase">
                Welcome Recruit
              </h2>
              <div className="h-[2px] w-1/2 bg-(--val-red) mx-auto mb-6" />
              <p className="text-(--val-offwhite) text-lg font-bold mb-8 uppercase tracking-widest leading-relaxed">
                Before accessing the tactical database, authorize your connection.
              </p>
              
              <Button onClick={() => setIsVisible(false)} variant="primary">
                INITIALIZE LINK
              </Button>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute -top-[6px] -left-[6px] w-4 h-4 bg-(--val-red)" />
            <div className="absolute -bottom-[6px] -right-[6px] w-4 h-4 bg-(--val-red)" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
