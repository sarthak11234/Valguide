import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classified Timeline",
  description:
    "Explore the full Valorant lore timeline — from the First Light event and Radianite discovery to the inter-dimensional war between Alpha and Omega Earth.",
  openGraph: {
    title: "Classified Timeline | ValoGuide",
    description:
      "The history of Radianite, the VALORANT Protocol, and the war between worlds.",
    type: "website",
  },
};

export default function LoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
