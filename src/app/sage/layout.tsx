import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAGE AI Terminal",
  description:
    "Ask SAGE, the AI chatbot powered by Google Gemini, for Valorant guidance — agent recommendations, gameplay tips, economy strategies, and lore insights.",
  openGraph: {
    title: "SAGE AI Terminal | ValoGuide",
    description:
      "AI-powered Valorant assistant — get agent picks, gameplay tips, and lore answers from SAGE.",
    type: "website",
  },
};

export default function SageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
