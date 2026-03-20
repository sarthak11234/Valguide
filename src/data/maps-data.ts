export interface MapInfo {
  id: string;
  name: string;
  coordinate: string;
  description: string;
  loreSummary: string;
  accentColor: string;
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
  },
  {
    id: 'haven',
    name: 'HAVEN',
    coordinate: '27°28\'A\" N, 89°38\'Z\" E',
    description: 'Three bombsites demand sharp rotations and comms.',
    loreSummary:
      'A secret monastery in Thimphu, Bhutan, Haven is one of the oldest Radianite reserves on Earth. Its three contested sites make it a critical operational hotspot for both Alpha and Omega agents.',
    accentColor: '#00E5FF',
  },
  {
    id: 'split',
    name: 'SPLIT',
    coordinate: '35°41\'A\" N, 139°41\'Z\" E',
    description: 'Tight vertical gameplay with ropes and elevated positions.',
    loreSummary:
      'Set in a fractured Tokyo district, Split was literally torn apart by a Radianite anomaly. The rift created two distinct halves connected by narrow mid corridors, making it a brutal close-quarters battleground.',
    accentColor: '#39FF14',
  },
  {
    id: 'ascent',
    name: 'ASCENT',
    coordinate: '43°46\'A\" N, 11°15\'Z\" E',
    description: 'Open mid with mechanical doors. Classic tactical layout.',
    loreSummary:
      'A chunk of Venice, Italy ripped into the sky by a catastrophic Radianite explosion. Ascent floats above the clouds, its ancient architecture now a warzone for agents battling over the exposed Radianite core.',
    accentColor: '#FF4655',
  },
  {
    id: 'icebox',
    name: 'ICEBOX',
    coordinate: '76°44\'A\" N, 149°30\'Z\" E',
    description: 'Arctic facility with complex verticality and ziplines.',
    loreSummary:
      'A Kingdom excavation site in the frigid Arctic, Icebox conceals a massive underground Radianite mining operation. Multiple levels and ziplines create one of the most vertically demanding combat zones.',
    accentColor: '#00E5FF',
  },
  {
    id: 'breeze',
    name: 'BREEZE',
    coordinate: '7°N, 22°W',
    description: 'Wide open spaces and long sightlines in a tropical paradise.',
    loreSummary:
      'A hidden Caribbean island fortress, Breeze was once a Kingdom research outpost studying oceanic Radianite currents. Its wide-open ruins and underground tunnels now host high-stakes engagements.',
    accentColor: '#39FF14',
  },
  {
    id: 'fracture',
    name: 'FRACTURE',
    coordinate: '35°47\'A\" N, 106°28\'Z\" W',
    description: 'H-shaped map. Attackers spawn surrounding defenders.',
    loreSummary:
      'A top-secret Kingdom research facility in New Mexico, Fracture was split in two by a dimensional rift — one half on Alpha Earth, one on Omega. The bridge between worlds makes this map uniquely dangerous.',
    accentColor: '#FF4655',
  },
  {
    id: 'lotus',
    name: 'LOTUS',
    coordinate: '15°28\'A\" N, 73°49\'Z\" E',
    description: 'Three bombsites with rotating doors and destructible walls.',
    loreSummary:
      'Hidden deep within the temples of Western India, Lotus is an ancient site where Radianite energy has seeped into the earth for centuries. Rotating stone doors and breakable walls make every round unpredictable.',
    accentColor: '#00E5FF',
  },
  {
    id: 'sunset',
    name: 'SUNSET',
    coordinate: '34°03\'A\" N, 118°15\'Z\" W',
    description: 'Los Angeles-set map with marketplace and boxy structures.',
    loreSummary:
      'Located in the vibrant streets of Los Angeles, Sunset is a Kingdom-controlled neighborhood hiding a massive Radianite processing facility beneath its colorful storefronts.',
    accentColor: '#39FF14',
  },
  {
    id: 'abyss',
    name: 'ABYSS',
    coordinate: 'CLASSIFIED',
    description: 'No barriers at the map edges — fall off and die.',
    loreSummary:
      'Suspended above an unfathomable void, Abyss exists in a space between dimensions. With no safety railings or barriers, one misstep sends agents into the infinite darkness below.',
    accentColor: '#FF4655',
  },
];
