interface JaggedDividerProps {
  color?: string;
  height?: string;
  flip?: boolean;
}

export default function JaggedDivider({ 
  color = "fill-(--val-navy)", 
  height = "h-[30px] md:h-[50px]", 
  flip = false 
}: JaggedDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className={`block w-full ${height} relative z-20`}
      >
        <path 
           d="M0,0 L100,60 L200,0 L300,60 L400,0 L500,60 L600,0 L700,60 L800,0 L900,60 L1000,0 L1100,60 L1200,0 L1200,120 L0,120 Z" 
           className={`${color} stroke-black stroke-[4px]`}
        ></path>
      </svg>
    </div>
  );
}
