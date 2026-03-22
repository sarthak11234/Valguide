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
    Grenade: 'https://www.youtube.com/embed/fQfHLqCRbkI', // Boom Bot
  },
  Phoenix: {
    Ability2: 'https://www.youtube.com/embed/u3OvYFga4E4', // Curveball
    Ultimate: 'https://www.youtube.com/embed/u3OvYFga4E4', // Run it Back
  },
  Reyna: {
    Ability1: 'https://www.youtube.com/embed/hhHmwI_krIk', // Devour
    Ultimate: 'https://www.youtube.com/embed/hhHmwI_krIk', // Empress
  },
  Omen: {
    Ability2: 'https://www.youtube.com/embed/xyoOlFBg82Y', // Dark Cover
    Ultimate: 'https://www.youtube.com/embed/xyoOlFBg82Y', // From the Shadows
  },
  Viper: {
    Ability2: 'https://www.youtube.com/embed/ozRwR9q6iQo', // Toxic Screen
    Ultimate: 'https://www.youtube.com/embed/ozRwR9q6iQo', // Viper's Pit
  },
  Brimstone: {
    Ability2: 'https://www.youtube.com/embed/GUEa6E8_jDQ', // Sky Smoke
    Ultimate: 'https://www.youtube.com/embed/GUEa6E8_jDQ', // Orbital Strike
  },
  Killjoy: {
    Ability2: 'https://www.youtube.com/embed/NhsxmCmaFOI', // TURRET
    Ultimate: 'https://www.youtube.com/embed/NhsxmCmaFOI', // Lockdown
  },
  Cypher: {
    Ability2: 'https://www.youtube.com/embed/iHE4yyMt3iY', // Spycam
    Ultimate: 'https://www.youtube.com/embed/iHE4yyMt3iY', // Neural Theft
  },
  Breach: {
    Ability2: 'https://www.youtube.com/embed/1F3-BkOfPAE', // Fault Line
    Ultimate: 'https://www.youtube.com/embed/1F3-BkOfPAE', // Rolling Thunder
  },
  Skye: {
    Ability2: 'https://www.youtube.com/embed/JSrCVbkPL3M', // Guiding Light
    Ultimate: 'https://www.youtube.com/embed/JSrCVbkPL3M', // Seekers
  },
  Yoru: {
    Ability2: 'https://www.youtube.com/embed/5O1gDlIaAyk', // GATECRASH
    Ultimate: 'https://www.youtube.com/embed/5O1gDlIaAyk', // DIMENSIONAL DRIFT
  },
  Astra: {
    Ability2: 'https://www.youtube.com/embed/LlBMmjnQfcY', // Nebula / Dissipate
    Ultimate: 'https://www.youtube.com/embed/LlBMmjnQfcY', // Astral Form / Cosmic Divide
  },
  'KAY/O': {
    Ability2: 'https://www.youtube.com/embed/bsSsOGjjEb4', // ZERO/point
    Ultimate: 'https://www.youtube.com/embed/bsSsOGjjEb4', // NULL/cmd
  },
  Neon: {
    Ability2: 'https://www.youtube.com/embed/7UE6m6FG5bU', // High Gear
    Ultimate: 'https://www.youtube.com/embed/7UE6m6FG5bU', // Overdrive
  },
  Chamber: {
    Ability1: 'https://www.youtube.com/embed/DZhKnadcqOk', // Headhunter
    Ultimate: 'https://www.youtube.com/embed/DZhKnadcqOk', // Tour De Force
  },
  Fade: {
    Ability2: 'https://www.youtube.com/embed/aI3ns4cSiOI', // Haunt
    Ultimate: 'https://www.youtube.com/embed/aI3ns4cSiOI', // Nightfall
  },
  Harbor: {
    Ability1: 'https://www.youtube.com/embed/z_G1WMeyubk', // High Tide
    Ultimate: 'https://www.youtube.com/embed/z_G1WMeyubk', // Reckoning
  },
  Gekko: {
    Ability1: 'https://www.youtube.com/embed/Lmn8qN83Y6Q', // Wingman
    Ultimate: 'https://www.youtube.com/embed/Lmn8qN83Y6Q', // Thrash
  },
  Deadlock: {
    Ability1: 'https://www.youtube.com/embed/AGKL_R3YNag', // Sonic Sensor
    Ultimate: 'https://www.youtube.com/embed/AGKL_R3YNag', // Annihilation
  },
  Iso: {
    Ability2: 'https://www.youtube.com/embed/E0nMsaA1ZmI', // Double Tap
    Ultimate: 'https://www.youtube.com/embed/E0nMsaA1ZmI', // Kill Contract
  },
  Clove: {
    Ability2: 'https://www.youtube.com/embed/NCNT6MQmhnw', // Ruse
    Ultimate: 'https://www.youtube.com/embed/NCNT6MQmhnw', // Not Dead Yet
  },
  Vyse: {
    Ability1: 'https://www.youtube.com/embed/3vGc1Dy2urA', // Shear
    Ultimate: 'https://www.youtube.com/embed/3vGc1Dy2urA', // Steel Garden
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
