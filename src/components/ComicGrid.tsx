import React from "react";

export function ComicGrid({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto p-6 ${className}`}>
      {children}
    </div>
  );
}

export function ComicPanel({ 
  children, 
  className = "", 
  skew = false,
  accentColor = "var(--val-red)"
}: { 
  children: React.ReactNode, 
  className?: string, 
  skew?: boolean,
  accentColor?: string
}) {
  return (
    <div 
      className={`relative bg-(--val-navy) border-[4px] border-black p-6 shadow-[8px_8px_0px_#0a0a0a] transition-all hover:shadow-[12px_12px_0px_var(--panel-accent)] ${skew ? 'skew-x-[-2deg]' : ''} ${className}`}
      style={{ '--panel-accent': accentColor } as React.CSSProperties}
    >
      {/* Decorative Halftone Background */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:12px_12px] pointer-events-none ${skew ? 'skew-x-[2deg]' : ''}`} />
      
      {/* Content wrapper to undo skew if necessary */}
      <div className={`relative z-10 ${skew ? 'skew-x-[2deg]' : ''}`}>
        {children}
      </div>
    </div>
  );
}
