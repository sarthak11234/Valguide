"use client";

import { motion } from "framer-motion";
import type { LoreEvent } from "@/data/lore-data";

interface TimelineEventProps {
  event: LoreEvent;
  index: number;
}

export default function TimelineEvent({ event, index }: TimelineEventProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`timeline-event ${isLeft ? "timeline-event--left" : "timeline-event--right"}`}
      initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.9, rotate: isLeft ? -2 : 2 }}
      whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100, damping: 12 }}
    >
      {/* Connector dot */}
      <div
        className="timeline-event__dot"
        style={{ backgroundColor: event.accentColor }}
      />

      {/* Event card */}
      <div
        className="timeline-event__card"
        style={{
          ["--event-accent" as string]: event.accentColor,
        }}
      >
        {/* Decorative chevron mark */}
        <div
          className="absolute top-3 right-8 text-3xl font-black leading-none select-none pointer-events-none"
          style={{ color: event.accentColor, opacity: 0.1 }}
        >
          ❯❯
        </div>

        <div className="timeline-event__year" style={{ color: event.accentColor }}>
          {event.year}
        </div>
        <h3 className="timeline-event__title">{event.title}</h3>
        <p className="timeline-event__desc">{event.description}</p>
        <div
          className="timeline-event__category"
          style={{
            backgroundColor: event.accentColor,
          }}
        >
          {event.category.toUpperCase()}
        </div>
      </div>
    </motion.div>
  );
}

