import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Archive",
  description:
    "Browse the full Valorant agent roster. View abilities, lore, backstories, and tactical stats for every playable operative in the VALORANT Protocol.",
  openGraph: {
    title: "Agent Archive | ValoGuide",
    description:
      "Explore the classified dossiers of every VALORANT agent — abilities, lore, and field intel.",
    type: "website",
  },
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
