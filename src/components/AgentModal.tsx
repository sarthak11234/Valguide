"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Agent } from "@/types";
import { getAbilityVideo } from "@/data/ability-videos";

interface AgentModalProps {
  agent: Agent;
  onClose: () => void;
}

type TabKey = "lore" | "abilities" | "stats";

export default function AgentModal({ agent, onClose }: AgentModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("lore");

  const gradientColor = agent.backgroundGradientColors?.[0]
    ? `#${agent.backgroundGradientColors[0].slice(0, 6)}`
    : "#1a1a2e";

  const tabs: { key: TabKey; label: string }[] = [
    { key: "lore", label: "LORE" },
    { key: "abilities", label: "ABILITIES" },
    { key: "stats", label: "STATS" },
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
                        <div key={ability.slot} className="ability-card">
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
                              <h4 className="ability-card__name">
                                {ability.displayName}
                              </h4>
                            </div>
                          </div>
                          <p className="ability-card__desc">
                            {ability.description}
                          </p>

                          {/* Video preview section */}
                          {videoUrl ? (
                            <div className="ability-card__video">
                              <div className="ability-card__video-label">
                                ▶ FIELD FOOTAGE
                              </div>
                              <iframe
                                src={videoUrl}
                                title={`${ability.displayName} preview`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="ability-card__iframe"
                              />
                            </div>
                          ) : (
                            <div className="ability-card__no-video">
                              <span>// NO FOOTAGE AVAILABLE</span>
                            </div>
                          )}
                        </div>
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
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
