import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tungstanFallback = Anton({
  weight: "400",
  variable: "--font-tungsten",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ValoGuide | Valorant Recruit Protocol",
    template: "%s | ValoGuide",
  },
  description:
    "The ultimate Valorant tactical guide — AI chatbot, agent archive, lore timeline, map intel, weapon stats, and esports coverage. Built with a comic-book aesthetic.",
  keywords: [
    "Valorant",
    "ValoGuide",
    "Valorant agents",
    "Valorant maps",
    "Valorant lore",
    "eDPI calculator",
    "Valorant weapons",
    "VCT esports",
    "SAGE chatbot",
  ],
  openGraph: {
    title: "ValoGuide | Valorant Recruit Protocol",
    description:
      "Comic-styled tactical web app for Valorant — AI chatbot, agent dossiers, lore, maps, and esports.",
    type: "website",
    siteName: "ValoGuide",
  },
};

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${tungstanFallback.variable} antialiased`}
      >
        <Navigation />
        <div className="pt-[76px] min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

