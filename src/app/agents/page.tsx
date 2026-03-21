"use client";

import { useState, useEffect } from "react";
import AgentCard from "@/components/AgentCard";
import AgentModal from "@/components/AgentModal";
import type { Agent } from "@/types";

const ROLE_FILTERS = ["ALL", "DUELIST", "CONTROLLER", "INITIATOR", "SENTINEL"];

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    async function fetchAgents() {
      try {
        const res = await fetch("/api/agents");
        const json = await res.json();
        setAgents(json.data || []);
      } catch (err) {
        console.error("Failed to fetch agents:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAgents();
  }, []);

  const filteredAgents =
    activeFilter === "ALL"
      ? agents
      : agents.filter(
          (a) => a.role?.displayName?.toUpperCase() === activeFilter
        );

  return (
    <div className="agents-page">
      {/* Comic Panel Header */}
      <div className="page-header">
        <div className="page-header__badge">
          <h1>AGENT ARCHIVE</h1>
        </div>
        <p className="page-header__sub">
          SELECT AN OPERATIVE TO VIEW THEIR CLASSIFIED DOSSIER
        </p>
      </div>

      {/* Role Filters */}
      <div className="role-filters">
        {ROLE_FILTERS.map((role) => (
          <button
            key={role}
            className={`role-filter ${activeFilter === role ? "role-filter--active" : ""}`}
            onClick={() => setActiveFilter(role)}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="agents-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="agent-card-skeleton" />
          ))}
        </div>
      )}

      {/* Agent Grid */}
      {!loading && (
        <div className="agents-grid">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.uuid}
              agent={agent}
              onClick={() => setSelectedAgent(agent)}
            />
          ))}
        </div>
      )}

      {/* Agent Modal */}
      {selectedAgent && (
        <AgentModal
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </div>
  );
}
