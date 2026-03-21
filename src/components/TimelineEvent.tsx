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
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
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
