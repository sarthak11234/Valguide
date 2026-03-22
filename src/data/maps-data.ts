export interface MapLineup {
  title: string;
  side: 'attack' | 'defense';
  agent: string;
  description: string;
}

export interface MapInfo {
  id: string;
  name: string;
  coordinate: string;
  description: string;
  loreSummary: string;
  accentColor: string;
  lineups: MapLineup[];
}

export const mapsData: MapInfo[] = [
  {
    id: 'bind',
    name: 'BIND',
    coordinate: '34°02\'A\" N, 6°51\'Z\" W',
    description: 'Two bombsites, no mid. Use teleporters to outflank.',
    loreSummary:
      'Located in Rabat, Morocco, Bind houses two massive teleporters built with stolen Kingdom tech. These one-way portals tear through space itself, a remnant of early Radianite experiments gone rogue.',
    accentColor: '#FF4655',
    lineups: [
      { title: 'A Short Recon Dart', side: 'attack', agent: 'Sova', description: 'From A Short entrance, aim above the lamp on the wall and fire a 1-bounce Recon Bolt to scan the entire A site and Heaven.' },
      { title: 'B Hookah Poison Cloud', side: 'defense', agent: 'Viper', description: 'Place Poison Cloud at B Hookah entrance to delay pushes. Activate when you hear footsteps for maximum decay damage.' },
    ],
  },
  {
    id: 'haven',
    name: 'HAVEN',
    coordinate: '27°28\'A\" N, 89°38\'Z\" E',
    description: 'Three bombsites demand sharp rotations and comms.',
    loreSummary:
      'A secret monastery in Thimphu, Bhutan, Haven is one of the oldest Radianite reserves on Earth. Its three contested sites make it a critical operational hotspot for both Alpha and Omega agents.',
    accentColor: '#00E5FF',
    lineups: [
      { title: 'C Long Toxic Screen', side: 'attack', agent: 'Viper', description: 'Launch Toxic Screen from C Long spawn to cut off Defender rotations between C site and Mid Window.' },
      { title: 'B Site Retake Flash', side: 'defense', agent: 'Skye', description: 'From B door, send Guiding Light curving around the corner to flash anyone planting on B site before peeking.' },
      { title: 'A Site Owl Drone Clear', side: 'attack', agent: 'Sova', description: 'Deploy Owl Drone through A Long entrance to scout Heaven and site before committing to the push.' },
    ],
  },
  {
    id: 'split',
    name: 'SPLIT',
    coordinate: '35°41\'A\" N, 139°41\'Z\" E',
    description: 'Tight vertical gameplay with ropes and elevated positions.',
    loreSummary:
      'Set in a fractured Tokyo district, Split was literally torn apart by a Radianite anomaly. The rift created two distinct halves connected by narrow mid corridors, making it a brutal close-quarters battleground.',
    accentColor: '#39FF14',
    lineups: [
      { title: 'Mid Vent Recon Bolt', side: 'attack', agent: 'Sova', description: 'From A Lobby, bounce a Recon Bolt off the wall into Mid Vent to reveal any defenders holding Mid or rotating through vents.' },
      { title: 'B Site Incendiary', side: 'defense', agent: 'Brimstone', description: 'Drop Incendiary on B Main choke from the safety of B site to delay and damage attackers pushing through the narrow corridor.' },
    ],
  },
  {
    id: 'ascent',
    name: 'ASCENT',
    coordinate: '43°46\'A\" N, 11°15\'Z\" E',
    description: 'Open mid with mechanical doors. Classic tactical layout.',
    loreSummary:
      'A chunk of Venice, Italy ripped into the sky by a catastrophic Radianite explosion. Ascent floats above the clouds, its ancient architecture now a warzone for agents battling over the exposed Radianite core.',
    accentColor: '#FF4655',
    lineups: [
      { title: 'B Main Shock Bolt', side: 'attack', agent: 'Sova', description: 'From B Main, fire a 2-bounce Shock Bolt that lands behind the default plant position, clearing defenders hiding in the back of site.' },
      { title: 'A Site Barrier Orb', side: 'defense', agent: 'Sage', description: 'Wall off A Main entrance at round start to force attackers through the narrow A Short route instead.' },
    ],
  },
  {
    id: 'icebox',
    name: 'ICEBOX',
    coordinate: '76°44\'A\" N, 149°30\'Z\" E',
    description: 'Arctic facility with complex verticality and ziplines.',
    loreSummary:
      'A Kingdom excavation site in the frigid Arctic, Icebox conceals a massive underground Radianite mining operation. Multiple levels and ziplines create one of the most vertically demanding combat zones.',
    accentColor: '#00E5FF',
    lineups: [
      { title: 'B Orange Container Smoke', side: 'attack', agent: 'Brimstone', description: 'Smoke the top of Orange Container on B site to block defenders from sniping attackers crossing into Yellow.' },
      { title: 'A Nest Recon Bolt', side: 'attack', agent: 'Sova', description: 'Shoot a Recon Bolt from A Belt to scan A Nest (the elevated position) and A Site simultaneously.' },
    ],
  },
  {
    id: 'breeze',
    name: 'BREEZE',
    coordinate: '7°N, 22°W',
    description: 'Wide open spaces and long sightlines in a tropical paradise.',
    loreSummary:
      'A hidden Caribbean island fortress, Breeze was once a Kingdom research outpost studying oceanic Radianite currents. Its wide-open ruins and underground tunnels now host high-stakes engagements.',
    accentColor: '#39FF14',
    lineups: [
      { title: 'A Hall Viper Wall', side: 'attack', agent: 'Viper', description: 'Place Toxic Screen from A Main that stretches across A Pyramids to cut off Cave defenders and isolate the site.' },
      { title: 'Mid Cannon Recon', side: 'attack', agent: 'Sova', description: 'Recon Bolt from Mid Pillar area reveals B site and B Tunnel for a fast mid-to-B rotation play.' },
    ],
  },
  {
    id: 'fracture',
    name: 'FRACTURE',
    coordinate: '35°47\'A\" N, 106°28\'Z\" W',
    description: 'H-shaped map. Attackers spawn surrounding defenders.',
    loreSummary:
      'A top-secret Kingdom research facility in New Mexico, Fracture was split in two by a dimensional rift — one half on Alpha Earth, one on Omega. The bridge between worlds makes this map uniquely dangerous.',
    accentColor: '#FF4655',
    lineups: [
      { title: 'B Tree Concuss', side: 'attack', agent: 'Breach', description: 'Fault Line from B Main through the wall to concuss defenders holding B Tree and Canteen, creating space for entry.' },
      { title: 'A Rope Control Dart', side: 'attack', agent: 'Sova', description: 'Recon Bolt from A Hall bounced into A Rope to scan defenders holding the drop-down position and A Site.' },
    ],
  },
  {
    id: 'lotus',
    name: 'LOTUS',
    coordinate: '15°28\'A\" N, 73°49\'Z\" E',
    description: 'Three bombsites with rotating doors and destructible walls.',
    loreSummary:
      'Hidden deep within the temples of Western India, Lotus is an ancient site where Radianite energy has seeped into the earth for centuries. Rotating stone doors and breakable walls make every round unpredictable.',
    accentColor: '#00E5FF',
    lineups: [
      { title: 'C Mound Smoke', side: 'attack', agent: 'Omen', description: 'Dark Cover on C Mound to block the defender watching from the elevated position so your team can push C Main freely.' },
      { title: 'A Root Door Break', side: 'attack', agent: 'Raze', description: 'Blast Pack the destructible wall at A Root for a surprise entry angle that bypasses the A Main choke.' },
    ],
  },
  {
    id: 'sunset',
    name: 'SUNSET',
    coordinate: '34°03\'A\" N, 118°15\'Z\" W',
    description: 'Los Angeles-set map with marketplace and boxy structures.',
    loreSummary:
      'Located in the vibrant streets of Los Angeles, Sunset is a Kingdom-controlled neighborhood hiding a massive Radianite processing facility beneath its colorful storefronts.',
    accentColor: '#39FF14',
    lineups: [
      { title: 'Mid Market Control', side: 'attack', agent: 'Omen', description: 'Smoke Mid Market from spawn to safely take mid control and open up rotations to either site.' },
      { title: 'B Site Retake Molly', side: 'defense', agent: 'Brimstone', description: 'Incendiary the default B plant spot from B Main during a retake to force the planter off the spike.' },
    ],
  },
  {
    id: 'abyss',
    name: 'ABYSS',
    coordinate: 'CLASSIFIED',
    description: 'No barriers at the map edges — fall off and die.',
    loreSummary:
      'Suspended above an unfathomable void, Abyss exists in a space between dimensions. With no safety railings or barriers, one misstep sends agents into the infinite darkness below.',
    accentColor: '#FF4655',
    lineups: [
      { title: 'A Site Edge Push', side: 'attack', agent: 'Jett', description: 'Use Updraft and Tailwind to cross the gap at A, bypassing the main choke entirely. High risk, high reward entry.' },
      { title: 'B Bridge Gravity Well', side: 'defense', agent: 'Astra', description: 'Place Gravity Well at the B Bridge to pull attackers off the edge. Arguably the most tilting play in all of Valorant.' },
    ],
  },
];
