"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navCards = [
  {
    href: "/agents",
    title: "Agent Archive",
    desc: "Classified dossiers on every operative",
    accent: "#FF4655",
    icon: "⬡",
  },
  {
    href: "/lore",
    title: "Lore Registry",
    desc: "First Light & the Mirror World",
    accent: "#00E5FF",
    icon: "◈",
  },
  {
    href: "/sage",
    title: "SAGE Terminal",
    desc: "AI tactical advisor powered by Gemini",
    accent: "#39FF14",
    icon: "◉",
  },
  {
    href: "/toolkit",
    title: "Tactical Toolkit",
    desc: "eDPI calculator & weapon comparison",
    accent: "#FF4655",
    icon: "⬢",
  },
  {
    href: "/maps",
    title: "Map Intel",
    desc: "Site layouts, lineups & recon data",
    accent: "#00E5FF",
    icon: "◇",
  },
  {
    href: "/esports",
    title: "VCT & Esports",
    desc: "Champions, rosters & global circuits",
    accent: "#39FF14",
    icon: "◆",
  },
];

export default function Home() {
  return (
    <div className="hero-page">
      {/* ═══ HERO SECTION ═══ */}
      <section className="hero">
        {/* Animated background layers */}
        <div className="hero__bg-grid" />
        <div className="hero__scanline" />
        <div className="hero__vignette" />

        {/* Floating particles / speed lines */}
        <div className="hero__speed-lines">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="hero__line"
              style={{
                top: `${12 + i * 11}%`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.15 + Math.random() * 0.15,
              }}
            />
          ))}
        </div>

        {/* Main hero content */}
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="hero__title-group"
          >
            {/* Protocol badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hero__badge"
            >
              <span className="hero__badge-dot" />
              VALORANT RECRUIT PROTOCOL
            </motion.div>

            {/* Main title with glitch */}
            <h1 className="hero__title" data-text="VALOGUIDE">
              VALOGUIDE
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hero__subtitle"
            >
              YOUR TACTICAL COMPANION FOR EVERYTHING VALORANT
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="hero__ctas"
            >
              <Link href="/agents" className="hero__cta hero__cta--primary">
                <span className="hero__cta-text">ENTER ARCHIVE</span>
                <span className="hero__cta-arrow">→</span>
              </Link>
              <Link href="/sage" className="hero__cta hero__cta--secondary">
                <span className="hero__cta-text">ASK SAGE</span>
                <span className="hero__cta-arrow">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scrolldown indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hero__scroll-hint"
          >
            <span>EXPLORE</span>
            <div className="hero__scroll-arrow" />
          </motion.div>
        </div>
      </section>

      {/* ═══ NAVIGATION CARDS ═══ */}
      <section className="hero-nav">
        <div className="hero-nav__header">
          <div className="hero-nav__line" />
          <h2 className="hero-nav__title">COMMAND CENTER</h2>
          <div className="hero-nav__line" />
        </div>

        <div className="hero-nav__grid">
          {navCards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 120 }}
            >
              <Link href={card.href} className="hero-card">
                <div
                  className="hero-card__accent"
                  style={{ backgroundColor: card.accent }}
                />
                <div className="hero-card__icon" style={{ color: card.accent }}>
                  {card.icon}
                </div>
                <div className="hero-card__body">
                  <h3 className="hero-card__title">{card.title}</h3>
                  <p className="hero-card__desc">{card.desc}</p>
                </div>
                <div
                  className="hero-card__arrow"
                  style={{ color: card.accent }}
                >
                  →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
