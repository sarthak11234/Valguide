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
  title: "ValoGuide | Project VRP",
  description: "Valorant Recruit Protocol - Tactical Guide",
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

