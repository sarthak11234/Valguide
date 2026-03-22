"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Crosshair } from "lucide-react";
import { ghostPlayData } from "@/data/esports-command-data";

export default function GhostPlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [hoveredPlayerAction, setHoveredPlayerAction] = useState<string | null>(null);

  const duration = ghostPlayData.duration;

  // Animation loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isPlaying) {
        lastTime = time;
        drawCanvas();
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const deltaTime = time - lastTime;
      lastTime = time;

      setCurrentTime((prev) => {
        const nextTime = prev + deltaTime;
        if (nextTime >= duration) {
          setIsPlaying(false);
          return duration;
        }
        return nextTime;
      });

      drawCanvas();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, duration]);

  // Interpolate frames
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Find current frame indices
    let frame1Idx = 0;
    while (frame1Idx < ghostPlayData.frames.length - 1 && ghostPlayData.frames[frame1Idx + 1].time <= currentTime) {
      frame1Idx++;
    }
    const frame1 = ghostPlayData.frames[frame1Idx];
    const frame2 = ghostPlayData.frames[Math.min(frame1Idx + 1, ghostPlayData.frames.length - 1)];

    // Interpolation progress
    let progress = 0;
    if (frame1.time !== frame2.time) {
      progress = (currentTime - frame1.time) / (frame2.time - frame1.time);
    }

    // Draw players
    frame1.players.forEach((p1, i) => {
      const p2 = frame2.players[i];
      if (!p1.alive && !p2.alive && frame1Idx > 0 && progress > 0) return; // Disappear completely shortly after death

      const w = canvas.width;
      const h = canvas.height;
      
      const px = p1.x + (p2.x - p1.x) * progress;
      const py = p1.y + (p2.y - p1.y) * progress;
      const realX = (px / 100) * w;
      const realY = (py / 100) * h;

      const isDead = !p1.alive || (!p2.alive && progress > 0.5);

      ctx.beginPath();
      ctx.arc(realX, realY, 8, 0, Math.PI * 2);
      
      if (isDead) {
        ctx.fillStyle = "rgba(100, 100, 100, 0.5)";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
        
        // Draw X
        ctx.beginPath();
        ctx.moveTo(realX - 4, realY - 4);
        ctx.lineTo(realX + 4, realY + 4);
        ctx.moveTo(realX + 4, realY - 4);
        ctx.lineTo(realX - 4, realY + 4);
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.fillStyle = p1.id === "ZmjjKK" ? "#39FF14" : (p1.team === "DEF" ? "#00E5FF" : "#FF4655");
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        if (p1.id === "ZmjjKK") {
          // Glow effect for hero
          ctx.beginPath();
          ctx.arc(realX, realY, 12, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(57, 255, 20, 0.5)";
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }

      // Draw action text if hovered/hero
      if (p1.id === "ZmjjKK" && !isDead) {
        ctx.fillStyle = "#fff";
        ctx.font = "bold 10px monospace";
        ctx.fillText(p2.action || p1.action || "", realX + 15, realY + 4);
      }
    });
  };

  const togglePlay = () => {
    if (currentTime >= duration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="border-4 border-black bg-[#111820]" style={{ boxShadow: "8px 8px 0px #39FF14" }}>
      <div className="p-6 border-b-4 border-black flex justify-between items-end bg-[#0a0f14]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Crosshair className="w-6 h-6 text-[#39FF14]" />
            <div className="text-xs font-black uppercase tracking-widest text-[#39FF14]">The Ghost Play</div>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight">{ghostPlayData.title}</h2>
          <div className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-widest">
            {ghostPlayData.event} // {ghostPlayData.round}
          </div>
        </div>
      </div>

      <div className="relative aspect-video bg-[#1a2332] w-full border-b-4 border-black overflow-hidden">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: "radial-gradient(#ECE8E1 1px, transparent 1px)", 
          backgroundSize: "20px 20px" 
        }}>
          {/* Mock walls for Haven A-Site */}
          <div className="absolute top-1/2 left-1/4 w-1/2 h-2 bg-white" />
          <div className="absolute top-1/4 left-1/2 w-2 h-1/2 bg-white" />
          <div className="absolute top-[40%] left-[80%] w-16 h-16 border-4 border-white transform rotate-45" />
          <div className="absolute top-1/3 left-1/4 text-white/50 font-black text-6xl uppercase transform -rotate-12">A-Long</div>
          <div className="absolute top-[60%] left-[60%] text-white/50 font-black text-6xl uppercase">A-Site</div>
        </div>

        <canvas
          ref={canvasRef}
          width={800}
          height={450}
          className="w-full h-full relative z-10"
        />
      </div>

      {/* Controls */}
      <div className="p-4 flex items-center gap-4 bg-[#0a0f14]">
        <button
          onClick={togglePlay}
          className="w-12 h-12 flex items-center justify-center bg-[#39FF14] text-black border-4 border-black hover:bg-white transition-colors"
        >
          {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
        </button>
        <button
          onClick={() => { setCurrentTime(0); setIsPlaying(false); drawCanvas(); }}
          className="w-12 h-12 flex items-center justify-center bg-[#111820] text-white border-4 border-black hover:bg-[#FF4655] transition-colors"
        >
          <RotateCcw />
        </button>

        {/* Timeline Slider */}
        <div className="flex-1 relative h-4 bg-black border-2 border-gray-800 flex items-center">
          <div 
            className="absolute h-full bg-[#39FF14]"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              setCurrentTime(Number(e.target.value));
              drawCanvas();
            }}
            className="absolute inset-0 w-full opacity-0 cursor-ew-resize"
          />
        </div>
        <div className="text-sm font-black text-[#39FF14] w-16 text-right">
          {(currentTime / 1000).toFixed(1)}s
        </div>
      </div>
    </div>
  );
}
