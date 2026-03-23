"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Agent } from "@/types";
import { getAbilityVideo } from "@/data/ability-videos";
import { getAgentLore, getAgentTactics } from "@/data/agent-lore";

interface AgentModalProps {
  agent: Agent;
  onClose: () => void;
}

type TabKey = "lore" | "abilities" | "stats" | "tactics";

/* ── Ability card with click-to-play video ─────────────── */
function AbilityCardWithVideo({
  ability,
  videoUrl,
}: {
  ability: Agent["abilities"][number];
  videoUrl: string | null;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlay = () => {
    setLoading(true);
    setShowVideo(true);
  };

  return (
    <div className="ability-card">
      <div className="ability-card__header">
        {ability.displayIcon && (
          <img
            src={ability.displayIcon}
            alt={ability.displayName}
            className="ability-card__icon"
          />
        )}
        <div>
          <span className="ability-card__slot">
            {ability.slot.toUpperCase()}
          </span>
          <h4 className="ability-card__name">{ability.displayName}</h4>
        </div>
      </div>
      <p className="ability-card__desc">{ability.description}</p>

      {/* Video section — click to load */}
      {videoUrl ? (
        showVideo ? (
          <div className="ability-card__video">
            <div className="ability-card__video-label">▶ FIELD FOOTAGE</div>
            {loading && (
              <div className="ability-card__video-loading">
                <div className="ability-card__spinner" />
              </div>
            )}
            <iframe
              src={videoUrl}
              title={`${ability.displayName} preview`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="ability-card__iframe"
              style={loading ? { display: "none" } : {}}
              onLoad={() => setLoading(false)}
            />
          </div>
        ) : (
          <div className="ability-card__video-thumb" onClick={handlePlay}>
            <div className="ability-card__thumb-label">▶ FIELD FOOTAGE</div>
            <div className="ability-card__thumb-inner">
              <div className="ability-card__play-btn" />
            </div>
          </div>
        )
      ) : (
        <div className="ability-card__no-video">
          <span>// NO FOOTAGE AVAILABLE</span>
        </div>
      )}
    </div>
  );
}

export default function AgentModal({ agent, onClose }: AgentModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("lore");

  const gradientColor = agent.backgroundGradientColors?.[0]
    ? `#${agent.backgroundGradientColors[0].slice(0, 6)}`
    : "#1a1a2e";

  const tabs: { key: TabKey; label: string }[] = [
    { key: "lore", label: "LORE" },
    { key: "abilities", label: "ABILITIES" },
    { key: "stats", label: "STATS" },
    { key: "tactics", label: "TACTICS" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotateX: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            ["--modal-accent" as string]: gradientColor,
          }}
        >
          {/* Close button */}
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>

          {/* Comic panel header */}
          <div className="modal-header">
            <div
              className="modal-header__bg"
              style={{
                background: `linear-gradient(135deg, ${gradientColor} 0%, #0F1923 80%)`,
              }}
            />
            <div className="modal-header__content">
              {agent.fullPortrait && (
                <img
                  src={agent.fullPortrait}
                  alt={agent.displayName}
                  className="modal-header__portrait"
                />
              )}
              <div className="modal-header__info">
                <div className="modal-header__role-badge">
                  {agent.role?.displayIcon && (
                    <img
                      src={agent.role.displayIcon}
                      alt={agent.role.displayName}
                      width={18}
                      height={18}
                    />
                  )}
                  <span>{agent.role?.displayName?.toUpperCase()}</span>
                </div>
                <h2 className="modal-header__name">
                  {agent.displayName.toUpperCase()}
                </h2>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="modal-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`modal-tab ${activeTab === tab.key ? "modal-tab--active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="modal-body">
            <AnimatePresence mode="wait">
              {activeTab === "lore" && (
                <motion.div
                  key="lore"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="modal-tab-content"
                >
                  <div className="lore-section">
                    <h3 className="lore-section__title">DOSSIER</h3>
                    <p className="lore-section__text">{agent.description}</p>
                  </div>
                  
                  <div className="lore-section">
                    <h3 className="lore-section__title">BACKGROUND INTEL</h3>
                    <p className="lore-section__text text-gray-400 font-medium italic leading-relaxed">
                      {getAgentLore(agent.displayName)}
                    </p>
                  </div>
                  {agent.characterTags && agent.characterTags.length > 0 && (
                    <div className="lore-section">
                      <h3 className="lore-section__title">
                        SPECIALIZATIONS
                      </h3>
                      <div className="lore-tags">
                        {agent.characterTags.map((tag) => (
                          <span key={tag} className="lore-tag">
                            {tag.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "abilities" && (
                <motion.div
                  key="abilities"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="modal-tab-content"
                >
                  <div className="abilities-grid">
                    {agent.abilities.map((ability) => {
                      const videoUrl = getAbilityVideo(
                        agent.displayName,
                        ability.slot
                      );
                      return (
                        <AbilityCardWithVideo
                          key={ability.slot}
                          ability={ability}
                          videoUrl={videoUrl}
                        />
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === "stats" && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="modal-tab-content"
                >
                  <div className="stats-grid">
                    <div className="stat-block">
                      <span className="stat-block__label">ROLE</span>
                      <span className="stat-block__value">
                        {agent.role?.displayName}
                      </span>
                    </div>
                    <div className="stat-block">
                      <span className="stat-block__label">ROLE DESCRIPTION</span>
                      <span className="stat-block__value stat-block__value--sm">
                        {agent.role?.description}
                      </span>
                    </div>
                    <div className="stat-block">
                      <span className="stat-block__label">CODENAME</span>
                      <span className="stat-block__value">
                        {agent.developerName}
                      </span>
                    </div>
                    <div className="stat-block">
                      <span className="stat-block__label">ABILITIES COUNT</span>
                      <span className="stat-block__value">
                        {agent.abilities.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "tactics" && (
                <motion.div
                  key="tactics"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="modal-tab-content h-full p-4"
                >
                  {(() => {
                    const agentTactics = getAgentTactics(agent.displayName);
                    if (!agentTactics) {
                      return (
                        <div className="w-full h-full flex items-center justify-center p-12 border-4 border-dashed border-gray-700">
                          <span className="font-black text-gray-500 uppercase tracking-widest text-xl text-center">
                            // NO TACTICAL RECON AVAILABLE FOR THIS OPERATIVE.
                          </span>
                        </div>
                      );
                    }
                    
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                        {/* SYN */}
                        <div className="border-[6px] border-black bg-[#0F1923] relative md:shadow-[8px_8px_0px_#39FF14] transition-shadow hover:shadow-[12px_12px_0px_#39FF14]">
                          <div className="absolute -top-5 left-4 z-10">
                            <span className="bg-[#39FF14] text-black font-[family:var(--font-tungsten)] text-3xl tracking-widest uppercase px-4 py-1 border-4 border-black block transform -skew-x-12">
                              BEST PAIRED WITH
                            </span>
                          </div>
                          <div className="p-6 pt-10 h-full bg-[radial-gradient(circle,rgba(57,255,20,0.05)_2px,transparent_2px)] bg-[length:12px_12px]">
                            {agentTactics.bestPairedWith.map((synergy, idx) => (
                              <div key={idx} className="mb-4 last:mb-0 border-l-[6px] border-[#39FF14] bg-black/80 p-4 group hover:bg-[#39FF14]/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-xl font-black text-[#39FF14] tracking-widest uppercase line-clamp-1 group-hover:pl-2 transition-all">
                                    + {synergy.name}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-300 font-medium leading-relaxed italic">"{synergy.reason}"</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CNTR */}
                        <div className="border-[6px] border-black bg-[#0F1923] relative md:shadow-[8px_8px_0px_#FF4655] transition-shadow hover:shadow-[12px_12px_0px_#FF4655]">
                          <div className="absolute -top-5 left-4 z-10">
                            <span className="bg-[#FF4655] text-white font-[family:var(--font-tungsten)] text-3xl tracking-widest uppercase px-4 py-1 border-4 border-black block transform -skew-x-12">
                              COUNTERED BY
                            </span>
                          </div>
                          <div className="p-6 pt-10 h-full bg-[radial-gradient(circle,rgba(255,70,85,0.05)_2px,transparent_2px)] bg-[length:12px_12px]">
                            {agentTactics.counteredBy.map((counter, idx) => (
                              <div key={idx} className="mb-4 last:mb-0 border-l-[6px] border-[#FF4655] bg-black/80 p-4 group hover:bg-[#FF4655]/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-xl font-black text-[#FF4655] tracking-widest uppercase line-clamp-1 group-hover:pl-2 transition-all">
                                    VS {counter.name}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-300 font-medium leading-relaxed italic">"{counter.reason}"</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
