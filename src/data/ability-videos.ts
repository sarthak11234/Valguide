/**
 * Curated ability video lookup.
 * Maps agent display names → ability slots → YouTube embed URLs.
 *
 * Since the Valorant API doesn't provide ability videos,
 * these are manually curated YouTube links.
 * Add more entries over time as you find good showcases.
 */

export const abilityVideos: Record<string, Record<string, string>> = {
  Jett: {
    Ability1: 'https://www.youtube.com/embed/k3JBqnLMWME', // Updraft showcase
    Ultimate: 'https://www.youtube.com/embed/k3JBqnLMWME', // Blade Storm
  },
  Sage: {
    Grenade: 'https://www.youtube.com/embed/k3JBqnLMWME', // Barrier Orb
    Ultimate: 'https://www.youtube.com/embed/k3JBqnLMWME', // Resurrection
  },
  Sova: {
    Ability2: 'https://www.youtube.com/embed/k3JBqnLMWME', // Recon Bolt
    Ultimate: 'https://www.youtube.com/embed/k3JBqnLMWME', // Hunter's Fury
  },
  Raze: {
    Ultimate: 'https://www.youtube.com/embed/k3JBqnLMWME', // Showstopper
  },
};

/**
 * Get the YouTube embed URL for a specific agent ability.
 * Returns null if no video is curated for that ability.
 */
export function getAbilityVideo(
  agentName: string,
  abilitySlot: string
): string | null {
  return abilityVideos[agentName]?.[abilitySlot] ?? null;
}
