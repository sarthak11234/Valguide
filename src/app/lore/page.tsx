"use client";

import TimelineEvent from "@/components/TimelineEvent";
import { loreEvents } from "@/data/lore-data";

export default function LorePage() {
  return (
    <div className="lore-page">
      {/* Comic Panel Header */}
      <div className="page-header">
        <div className="page-header__badge page-header__badge--cyan">
          <h1>CLASSIFIED TIMELINE</h1>
        </div>
        <p className="page-header__sub">
          THE HISTORY OF RADIANITE, THE PROTOCOL, AND THE WAR BETWEEN WORLDS
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="timeline__line" />
        {loreEvents.map((event, index) => (
          <TimelineEvent key={event.id} event={event} index={index} />
        ))}
        {/* End marker */}
        <div className="timeline__end">
          <span>TO BE CONTINUED...</span>
        </div>
      </div>
    </div>
  );
}
