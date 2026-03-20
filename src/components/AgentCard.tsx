"use client";

import { motion } from "framer-motion";
import type { Agent } from "@/types";

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

export default function AgentCard({ agent, onClick }: AgentCardProps) {
  const gradientColor = agent.backgroundGradientColors?.[0]
    ? `#${agent.backgroundGradientColors[0].slice(0, 6)}`
    : "#1a1a2e";

  return (
    <motion.div
      className="agent-card"
      onClick={onClick}
      whileHover={{
        y: -8,
        x: -8,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
      style={{
        ["--agent-accent" as string]: gradientColor,
      }}
    >
      {/* Comic issue number */}
      <div className="agent-card__issue">
        <span>#{String(agent.displayName.length).padStart(3, "0")}</span>
      </div>

      {/* Role badge */}
      <div className="agent-card__role">
        {agent.role?.displayIcon && (
          <img
            src={agent.role.displayIcon}
            alt={agent.role.displayName}
            width={14}
            height={14}
          />
        )}
        <span>{agent.role?.displayName?.toUpperCase()}</span>
      </div>

      {/* Agent portrait */}
      <div className="agent-card__portrait">
        <div
          className="agent-card__bg"
          style={{
            background: `linear-gradient(135deg, ${gradientColor} 0%, #0F1923 100%)`,
          }}
        />
        {agent.displayIcon && (
          <img
            src={agent.displayIcon}
            alt={agent.displayName}
            className="agent-card__img"
            loading="lazy"
          />
        )}
      </div>

      {/* Agent name bar */}
      <div className="agent-card__name-bar">
        <h3>{agent.displayName.toUpperCase()}</h3>
      </div>

      {/* Hover shadow layer */}
      <div className="agent-card__shadow" />
    </motion.div>
  );
}
