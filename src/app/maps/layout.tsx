import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Map Intel",
  description:
    "Tactical map intelligence for every Valorant map — site layouts, lore deep-dives, tactical lineups, and satellite scans for Bind, Haven, Split, Ascent, and more.",
  openGraph: {
    title: "Map Intel | ValoGuide",
    description:
      "Classified dossiers on every Valorant operational theatre — layouts, lineups, and lore.",
    type: "website",
  },
};

export default function MapsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
