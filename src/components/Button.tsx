"use client";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({ children, onClick, variant = "primary", className = "" }: ButtonProps) {
  const bgClass = variant === "primary" ? "bg-(--val-red)" : "bg-(--val-cyan)";
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative inline-block border-[4px] border-black px-8 py-3 font-[family:var(--font-tungsten)] text-3xl font-normal uppercase hover:italic text-black shadow-[6px_6px_0px_#000] skew-x-[-8deg] transition-all hover:shadow-[10px_10px_0px_#000] ${bgClass} ${className}`}
    >
      <span className="block skew-x-[8deg] tracking-wider">{children}</span>
    </motion.button>
  );
}
