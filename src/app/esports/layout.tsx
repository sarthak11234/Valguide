import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VCT & Esports Command Center",
  description:
    "The ultimate Valorant esports hub — Champions history, global power rankings, franchise rosters, 2026 season roadmap, streamers, and interactive Pick'Em brackets.",
  openGraph: {
    title: "VCT & Esports | ValoGuide",
    description:
      "Valorant Champions Tour coverage — rankings, rosters, meta analysis, and Pick'Em.",
    type: "website",
  },
};

export default function EsportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
