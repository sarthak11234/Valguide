import Link from "next/link";

const FOOTER_LINKS = [
  { name: "AGENTS", href: "/agents" },
  { name: "TOOLKIT", href: "/toolkit" },
  { name: "MAPS", href: "/maps" },
  { name: "ESPORTS", href: "/esports" },
  { name: "LORE", href: "/lore" },
  { name: "SAGE", href: "/sage" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-(--val-offwhite) py-12 px-6 border-t-[8px] border-(--val-red)">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h2 className="font-[family:var(--font-tungsten)] text-4xl italic text-(--val-red) m-0">
              VALOGUIDE
            </h2>
          </Link>
          <p className="text-sm text-zinc-500 font-bold tracking-[0.2em] m-0">
            PROTOCOL V.1.0 // UNAUTHORIZED ACCESS PROHIBITED
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-bold tracking-widest text-sm">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-(--val-cyan) hover:underline transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Credits */}
        <div className="text-center md:text-right">
          <p className="text-xs text-zinc-600 font-bold tracking-wider">
            Made with ❤️ by Team VRP
          </p>
          <p className="text-xs text-zinc-700 mt-1">
            Not affiliated with Riot Games
          </p>
        </div>
      </div>
    </footer>
  );
}
