export default function Footer() {
  return (
    <footer className="w-full bg-black text-(--val-offwhite) py-12 px-6 border-t-[8px] border-(--val-red)">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-[family:var(--font-tungsten)] text-4xl italic text-(--val-red) m-0">VALOGUIDE</h2>
          <p className="text-sm text-zinc-500 font-bold tracking-[0.2em] m-0">PROTOCOL V.1.0 // UNAUTHORIZED ACCESS PROHIBITED</p>
        </div>
        <div className="flex gap-6 font-bold tracking-widest text-sm">
          <a href="#" className="hover:text-(--val-cyan) hover:underline transition-colors">AGENTS</a>
          <a href="#" className="hover:text-(--val-cyan) hover:underline transition-colors">MAPS</a>
          <a href="#" className="hover:text-(--val-cyan) hover:underline transition-colors">LORE</a>
        </div>
      </div>
    </footer>
  );
}
