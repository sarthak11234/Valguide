export interface LoreEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'origin' | 'conflict' | 'discovery' | 'protocol';
  accentColor: string;
}

export const loreEvents: LoreEvent[] = [
  {
    id: 'first-light',
    year: 'YEAR ZERO',
    title: 'THE FIRST LIGHT',
    description:
      'A cataclysmic event engulfs the planet, fundamentally altering life on Earth. Mysterious energy erupts across the globe, granting certain individuals extraordinary powers — the Radiants. The world will never be the same.',
    category: 'origin',
    accentColor: '#FF4655',
  },
  {
    id: 'radianite-discovery',
    year: 'YEAR ONE',
    title: 'RADIANITE DISCOVERED',
    description:
      'Scientists identify Radianite, the powerful crystalline substance left behind by the First Light. This near-limitless energy source becomes the most sought-after resource on the planet, sparking a global rush to control it.',
    category: 'discovery',
    accentColor: '#00E5FF',
  },
  {
    id: 'kingdom-rise',
    year: 'YEAR THREE',
    title: 'KINGDOM CORPORATION RISES',
    description:
      'Kingdom Industries emerges as the dominant global megacorporation, monopolizing Radianite refinement and distribution. Their technology powers cities worldwide, but their true motives remain shrouded in secrecy.',
    category: 'origin',
    accentColor: '#39FF14',
  },
  {
    id: 'venice-ascension',
    year: 'YEAR FOUR',
    title: 'THE VENICE ASCENSION',
    description:
      'A catastrophic Radianite explosion rips a chunk of Venice, Italy into the sky. The floating island — later codenamed ASCENT — becomes the first visible proof that Radianite energy can defy the laws of physics. Kingdom attempts to contain the incident, but the world watches in horror as an entire city block hangs suspended above the clouds.',
    category: 'conflict',
    accentColor: '#FF4655',
  },
  {
    id: 'radiants-emerge',
    year: 'YEAR FIVE',
    title: 'RADIANTS EMERGE',
    description:
      'Individuals with innate Radianite-fueled abilities — Radiants — begin surfacing globally. Phoenix harnesses flame in London, Jett commands wind in Seoul, and Reyna devours souls in Mexico. The world watches in awe and fear.',
    category: 'origin',
    accentColor: '#FF4655',
  },
  {
    id: 'kingdom-experiments',
    year: 'YEAR SIX',
    title: 'KINGDOM\'S DIMENSIONAL EXPERIMENTS',
    description:
      'Kingdom Corporation secretly begins experimenting with interdimensional travel at a facility in New Mexico. Using massive Radianite-powered colliders, they attempt to breach the barrier between realities. The experiments attract the attention of an unknown parallel world — one that has been watching Alpha Earth for some time.',
    category: 'discovery',
    accentColor: '#39FF14',
  },
  {
    id: 'valorant-protocol',
    year: 'YEAR SEVEN',
    title: 'VALORANT PROTOCOL FOUNDED',
    description:
      'A covert multinational task force is assembled to combat rising global threats tied to Radianite. Codenamed "VALORANT," the Protocol recruits both Radiants and elite operatives equipped with Radianite-enhanced technology.',
    category: 'protocol',
    accentColor: '#FF4655',
  },
  {
    id: 'mirror-earth',
    year: 'YEAR EIGHT',
    title: 'MIRROR EARTH — OMEGA DISCOVERED',
    description:
      'The Protocol uncovers the existence of a parallel dimension: Omega Earth. Mirror versions of every agent exist there, led by a shadowy counterpart organization. Omega agents begin crossing over, stealing Radianite from Alpha Earth.',
    category: 'conflict',
    accentColor: '#00E5FF',
  },
  {
    id: 'fracture-sabotage',
    year: 'YEAR EIGHT',
    title: 'THE FRACTURE SABOTAGE',
    description:
      'Agent Chamber orchestrates the destruction of the Everett-Linde research facility in New Mexico, splitting it between dimensions. The resulting rift — codenamed FRACTURE — proves that Omega Earth agents have been infiltrating Alpha Earth for years. Chamber\'s true motives remain a dangerous enigma within the Protocol.',
    category: 'conflict',
    accentColor: '#00E5FF',
  },
  {
    id: 'omega-war',
    year: 'YEAR NINE',
    title: 'THE INTER-DIMENSIONAL WAR',
    description:
      'Full-scale conflict erupts between Alpha and Omega Earth. Agents from both sides clash across key Radianite sites — Bind, Haven, Split, and beyond. The Spike, a Radianite-harvesting device, becomes the primary weapon of Omega forces.',
    category: 'conflict',
    accentColor: '#39FF14',
  },
  {
    id: 'protocol-expansion',
    year: 'YEAR TEN',
    title: 'PROTOCOL EXPANSION WAVE',
    description:
      'Facing escalating Omega threats, the VALORANT Protocol launches a massive recruitment drive. KAY/O arrives from an alternate future timeline, Neon is discovered in the Philippines, Harbor brings ancient relics from India, and Gekko bonds with living Radianite creatures in Los Angeles. The Protocol grows to its largest roster yet.',
    category: 'protocol',
    accentColor: '#00E5FF',
  },
  {
    id: 'clove-arrival',
    year: 'YEAR ELEVEN',
    title: 'CLOVE BREACHES THE VEIL',
    description:
      'The immortal Scottish Radiant known as Clove joins the Protocol — the first agent capable of operating beyond the boundaries of life and death. Their arrival signals a new chapter: the war between worlds is no longer bound by mortal limits. Even death itself cannot stop the fight.',
    category: 'protocol',
    accentColor: '#39FF14',
  },
  {
    id: 'current-ops',
    year: 'PRESENT',
    title: 'OPERATIONS CONTINUE',
    description:
      'VALORANT Protocol agents are deployed worldwide to intercept Omega incursions and protect critical Radianite reserves. New recruits join the Protocol as threats escalate. The fate of both Earths hangs in the balance.',
    category: 'protocol',
    accentColor: '#FF4655',
  },
];
