export interface MapInfo {
  id: string;
  name: string;
  coordinate: string;
  description: string;
  loreSummary: string;
  accentColor: string;
  imageUrl: string;
}

export const mapsData: MapInfo[] = [
  {
    id: 'bind',
    name: 'BIND',
    coordinate: '34°02\'A\" N, 6°51\'Z\" W',
    description: 'Two bombsites, no mid. Use teleporters to outflank.',
    loreSummary:
      'Located in Rabat, Morocco, Bind houses two massive teleporters built with stolen Kingdom tech. These one-way portals tear through space itself, a remnant of early Radianite experiments gone rogue. The site was once a thriving refinery before the Kingdom Corporation moved in, displacing locals and tapping into the region\'s volatile energy reserves.',
    accentColor: '#FF4655',
    imageUrl: 'https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/listviewicontall.png'
  },
  {
    id: 'haven',
    name: 'HAVEN',
    coordinate: '27°28\'A\" N, 89°38\'Z\" E',
    description: 'Three bombsites demand sharp rotations and comms.',
    loreSummary:
      'A secret monastery in Thimphu, Bhutan, Haven is one of the oldest Radianite reserves on Earth. Its three contested sites make it a critical operational hotspot for both Alpha and Omega agents. Kingdom has heavily fortified the ancient ruins, attempting to study the natural Radianite crystal formations that hum beneath the temple floors.',
    accentColor: '#00E5FF',
    imageUrl: 'https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/listviewicontall.png'
  },
  {
    id: 'split',
    name: 'SPLIT',
    coordinate: '35°41\'A\" N, 139°41\'Z\" E',
    description: 'Tight vertical gameplay with ropes and elevated positions.',
    loreSummary:
      'Set in a fractured Tokyo district, Split was literally torn apart by a Radianite anomaly. The rift created two distinct halves connected by narrow mid corridors. The location serves as a stark visual representation of Kingdom\'s dominance over civilian life, featuring a pristine corporate headquarters towering directly over the shattered remnants of the old city.',
    accentColor: '#39FF14',
    imageUrl: 'https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/listviewicontall.png'
  },
  {
    id: 'ascent',
    name: 'ASCENT',
    coordinate: '43°46\'A\" N, 11°15\'Z\" E',
    description: 'Open mid with mechanical doors. Classic tactical layout.',
    loreSummary:
      'A chunk of Venice, Italy ripped into the sky by a catastrophic Radianite explosion. Ascent floats above the clouds, its ancient architecture now a warzone for agents battling over the exposed Radianite core. The disaster here, known as the First Light incident, was the catalyst that awakened Radianite powers in the first agents.',
    accentColor: '#FF4655',
    imageUrl: 'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/listviewicontall.png'
  },
  {
    id: 'icebox',
    name: 'ICEBOX',
    coordinate: '76°44\'A\" N, 149°30\'Z\" E',
    description: 'Arctic facility with complex verticality and ziplines.',
    loreSummary:
      'A Kingdom excavation site in the frigid Arctic, Icebox conceals a massive underground Radianite mining operation. Multiple levels and ziplines create one of the most vertically demanding combat zones. The facility was established after researchers discovered an ancient ship encased in ice, pulsing with untapped Radianite energy.',
    accentColor: '#00E5FF',
    imageUrl: 'https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/listviewicontall.png'
  },
  {
    id: 'breeze',
    name: 'BREEZE',
    coordinate: '7°N, 22°W',
    description: 'Wide open spaces and long sightlines in a tropical paradise.',
    loreSummary:
      'A hidden Caribbean island fortress, Breeze was once a Kingdom research outpost studying oceanic Radianite currents. Its wide-open ruins and underground tunnels now host high-stakes engagements. The island is also heavily affiliated with the elusive operative known as K-TAC, holding secrets about dimensional travel technology.',
    accentColor: '#39FF14',
    imageUrl: 'https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/listviewicontall.png'
  },
  {
    id: 'fracture',
    name: 'FRACTURE',
    coordinate: '35°47\'A\" N, 106°28\'Z\" W',
    description: 'H-shaped map. Attackers spawn surrounding defenders.',
    loreSummary:
      'A top-secret Kingdom research facility in New Mexico, Fracture was split in two by a dimensional rift — one half on Alpha Earth, one on Omega. The bridge between worlds makes this map uniquely dangerous. The collider explosion here proved that Omega Earth agents were not only real, but actively sabotaging Alpha\'s Radianite supply.',
    accentColor: '#FF4655',
    imageUrl: 'https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/listviewicontall.png'
  },
  {
    id: 'lotus',
    name: 'LOTUS',
    coordinate: '15°28\'A\" N, 73°49\'Z\" E',
    description: 'Three bombsites with rotating doors and destructible walls.',
    loreSummary:
      'Hidden deep within the temples of Western India, Lotus is an ancient site where Radianite energy has seeped into the earth for centuries. Rotating stone doors and breakable walls make every round unpredictable. The Astral Guardians, overseen by Harbor, fought for years to protect the artifacts buried here from Kingdom\'s greedy grasp.',
    accentColor: '#00E5FF',
    imageUrl: 'https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/listviewicontall.png'
  },
  {
    id: 'sunset',
    name: 'SUNSET',
    coordinate: '34°03\'A\" N, 118°15\'Z\" W',
    description: 'Los Angeles-set map with marketplace and boxy structures.',
    loreSummary:
      'Located in the vibrant streets of Los Angeles, Sunset is a Kingdom-controlled neighborhood hiding a massive Radianite processing facility beneath its colorful storefronts. Gekko and his crew of Radianite creatures routinely cause havoc here to disrupt Kingdom Operations and reclaim their home turf.',
    accentColor: '#39FF14',
    imageUrl: 'https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/listviewicontall.png'
  },
  {
    id: 'abyss',
    name: 'ABYSS',
    coordinate: 'CLASSIFIED',
    description: 'No barriers at the map edges — fall off and die.',
    loreSummary:
      'Suspended above an unfathomable void, Abyss exists in a space between dimensions. With no safety railings or barriers, one misstep sends agents into the infinite darkness below. It serves as the mysterious headquarters for the Scions of Hourglass, a secretive cabal that has manipulated world events since the First Light.',
    accentColor: '#FF4655',
    imageUrl: 'https://media.valorant-api.com/maps/224b0a95-48b9-f703-1bd8-67aca101a61f/listviewicontall.png'
  },
];
