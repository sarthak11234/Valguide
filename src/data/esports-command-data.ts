// ==========================================
// ESPORTS COMMAND CENTER — DATA LAYER
// ==========================================

// --- Power Rankings ---
export interface RankedTeam {
  rank: number;
  name: string;
  region: string;
  points: number;
  form: ("W" | "L")[];
  logoUrl: string;
  change: number; // +1 up, -1 down, 0 same
}

export const powerRankings: RankedTeam[] = [
  { rank: 1, name: "Nongshim RedForce", region: "Pacific", points: 2840, form: ["W","W","W","W","W"], logoUrl: "ns-esports.com", change: +2 },
  { rank: 2, name: "Paper Rex", region: "Pacific", points: 2780, form: ["W","W","L","W","W"], logoUrl: "pprx.team", change: -1 },
  { rank: 3, name: "NRG", region: "Americas", points: 2720, form: ["W","L","W","W","W"], logoUrl: "nrg.gg", change: -1 },
  { rank: 4, name: "Team Vitality", region: "EMEA", points: 2650, form: ["W","W","W","L","W"], logoUrl: "vitality.gg", change: +1 },
  { rank: 5, name: "EDward Gaming", region: "China", points: 2600, form: ["L","W","W","W","W"], logoUrl: "edg.gg", change: -1 },
  { rank: 6, name: "FNATIC", region: "EMEA", points: 2550, form: ["W","W","L","W","L"], logoUrl: "fnatic.com", change: 0 },
  { rank: 7, name: "Gen.G", region: "Pacific", points: 2480, form: ["W","L","W","W","L"], logoUrl: "geng.gg", change: +2 },
  { rank: 8, name: "LOUD", region: "Americas", points: 2430, form: ["L","W","W","L","W"], logoUrl: "loud.gg", change: -1 },
  { rank: 9, name: "Team Heretics", region: "EMEA", points: 2380, form: ["W","W","L","L","W"], logoUrl: "teamheretics.com", change: +1 },
  { rank: 10, name: "FunPlus Phoenix", region: "China", points: 2320, form: ["W","L","W","L","W"], logoUrl: "fpx.com", change: -1 },
];

// --- Trophy Cabinet ---
export interface TrophyEntry {
  event: string;
  year: number;
  winner: string;
  mvp: string;
  venue: string;
  location: string;
  prize: string;
  themeColor: string;
  winnerLogoUrl: string;
}

export const trophyCabinet: TrophyEntry[] = [
  {
    event: "VCT Champions 2025",
    year: 2025,
    winner: "NRG",
    mvp: "brawk",
    venue: "Accor Arena",
    location: "Paris, France",
    prize: "$1,000,000",
    themeColor: "#F97316",
    winnerLogoUrl: "nrg.gg",
  },
  {
    event: "Masters Santiago 2026",
    year: 2026,
    winner: "Nongshim RedForce",
    mvp: "Dambi",
    venue: "Movistar Arena",
    location: "Santiago, Chile",
    prize: "$500,000",
    themeColor: "#FF3333",
    winnerLogoUrl: "ns-esports.com",
  },
];

// --- Agent Specialists ---
export interface AgentSpecialist {
  playerName: string;
  team: string;
  agent: string;
  agentRole: string;
  kda: number;
  winRate: number;
  imageUrl?: string;
  stats: {
    aim: number;
    gamesense: number;
    utility: number;
    clutch: number;
    movement: number;
  };
}

export const agentSpecialists: AgentSpecialist[] = [
  { playerName: "something", team: "Paper Rex", agent: "Jett", agentRole: "Duelist", kda: 1.42, winRate: 68, stats: { aim: 95, gamesense: 80, utility: 60, clutch: 85, movement: 98 }, imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png" },
  { playerName: "Dambi", team: "Nongshim RedForce", agent: "Miks", agentRole: "Controller", kda: 1.28, winRate: 74, stats: { aim: 72, gamesense: 96, utility: 98, clutch: 80, movement: 70 }, imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png" },
  { playerName: "ZmjjKK", team: "EDward Gaming", agent: "Jett", agentRole: "Duelist", kda: 1.38, winRate: 65, stats: { aim: 97, gamesense: 85, utility: 55, clutch: 92, movement: 90 }, imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png" },
  { playerName: "nAts", team: "Team Liquid", agent: "Cypher", agentRole: "Sentinel", kda: 1.18, winRate: 62, stats: { aim: 78, gamesense: 99, utility: 95, clutch: 88, movement: 65 }, imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-300x300.png" },
  { playerName: "aspas", team: "MIBR", agent: "Raze", agentRole: "Duelist", kda: 1.32, winRate: 66, stats: { aim: 94, gamesense: 82, utility: 70, clutch: 90, movement: 92 }, imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/56adcee0-86f1-4ade-bcd9-8d9bde1c6670-profile_image-300x300.png" },
  { playerName: "Derke", team: "Team Vitality", agent: "Raze", agentRole: "Duelist", kda: 1.24, winRate: 63, stats: { aim: 93, gamesense: 78, utility: 65, clutch: 82, movement: 88 }, imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/13e263e1-7e99-4cab-b25c-a36c34488b7e-profile_image-300x300.png" },
];

// --- Map KDA Table ---
export interface MapKDAEntry {
  player: string;
  team: string;
  agent: string;
  map: string;
  kda: number;
  winPct: number;
  rounds: number;
}

export const mapKDAData: MapKDAEntry[] = [
  { player: "aspas", team: "MIBR", agent: "Raze", map: "Abyss", kda: 1.45, winPct: 72, rounds: 186 },
  { player: "something", team: "Paper Rex", agent: "Jett", map: "Abyss", kda: 1.38, winPct: 68, rounds: 142 },
  { player: "ZmjjKK", team: "EDward Gaming", agent: "Jett", map: "Sunset", kda: 1.52, winPct: 75, rounds: 198 },
  { player: "Derke", team: "Team Vitality", agent: "Raze", map: "Sunset", kda: 1.30, winPct: 64, rounds: 176 },
  { player: "nAts", team: "Team Liquid", agent: "Cypher", map: "Corrode", kda: 1.22, winPct: 70, rounds: 204 },
  { player: "Dambi", team: "Nongshim RedForce", agent: "Miks", map: "Corrode", kda: 1.18, winPct: 78, rounds: 168 },
  { player: "brawk", team: "NRG", agent: "Jett", map: "Abyss", kda: 1.35, winPct: 66, rounds: 154 },
  { player: "f0rsakeN", team: "Paper Rex", agent: "Yoru", map: "Sunset", kda: 1.28, winPct: 62, rounds: 138 },
  { player: "Demon1", team: "ENVY", agent: "Jett", map: "Sunset", kda: 1.40, winPct: 70, rounds: 162 },
  { player: "aspas", team: "MIBR", agent: "Raze", map: "Corrode", kda: 1.32, winPct: 65, rounds: 148 },
  { player: "something", team: "Paper Rex", agent: "Reyna", map: "Corrode", kda: 1.44, winPct: 71, rounds: 130 },
  { player: "ZmjjKK", team: "EDward Gaming", agent: "Jett", map: "Abyss", kda: 1.48, winPct: 73, rounds: 190 },
  { player: "Dambi", team: "Nongshim RedForce", agent: "Miks", map: "Abyss", kda: 1.15, winPct: 76, rounds: 172 },
  { player: "Dambi", team: "Nongshim RedForce", agent: "Miks", map: "Sunset", kda: 1.20, winPct: 80, rounds: 188 },
  { player: "nAts", team: "Team Liquid", agent: "Cypher", map: "Abyss", kda: 1.12, winPct: 58, rounds: 144 },
  { player: "nAts", team: "Team Liquid", agent: "Cypher", map: "Sunset", kda: 1.25, winPct: 66, rounds: 158 },
  { player: "brawk", team: "NRG", agent: "Jett", map: "Corrode", kda: 1.28, winPct: 62, rounds: 136 },
  { player: "brawk", team: "NRG", agent: "Jett", map: "Sunset", kda: 1.42, winPct: 74, rounds: 180 },
];

// --- Pro Gear ---
export interface ProGear {
  player: string;
  team: string;
  mouse: string;
  dpi: number;
  sens: number;
  edpi: number;
  pollingRate: string;
  monitor: string;
  refreshRate: string;
}

export const proGearData: ProGear[] = [
  { player: "ZmjjKK", team: "EDG", mouse: "Razer Viper V3 Pro", dpi: 800, sens: 0.28, edpi: 224, pollingRate: "8000Hz", monitor: "ASUS ROG Swift OLED PG27AQN2", refreshRate: "540Hz" },
  { player: "something", team: "PRX", mouse: "Logitech G Pro X Superlight 2", dpi: 1600, sens: 0.18, edpi: 288, pollingRate: "4000Hz", monitor: "BenQ ZOWIE XL2586X+", refreshRate: "540Hz" },
  { player: "aspas", team: "MIBR", mouse: "Finalmouse UltralightX", dpi: 1600, sens: 0.22, edpi: 352, pollingRate: "8000Hz", monitor: "ASUS ROG Swift OLED PG27AQN2", refreshRate: "540Hz" },
  { player: "Derke", team: "VIT", mouse: "Razer DeathAdder V3 HyperSpeed", dpi: 800, sens: 0.35, edpi: 280, pollingRate: "8000Hz", monitor: "Samsung Odyssey G6 OLED", refreshRate: "500Hz" },
  { player: "nAts", team: "TL", mouse: "ZOWIE EC2-CW", dpi: 400, sens: 0.62, edpi: 248, pollingRate: "4000Hz", monitor: "BenQ ZOWIE XL2586X+", refreshRate: "540Hz" },
  { player: "Dambi", team: "NS", mouse: "Razer Viper V3 Pro", dpi: 800, sens: 0.30, edpi: 240, pollingRate: "8000Hz", monitor: "Samsung Odyssey G6 OLED", refreshRate: "500Hz" },
];

// --- Miks Meta Analysis ---
export const miksAnalysis = {
  agentName: "Miks",
  origin: "Croatia",
  role: "Controller",
  pickRate: 78,
  winRate: 54.2,
  banRate: 12,
  avgACS: 195,
  description: "Miks has completely reshaped the Controller meta since release. Her 'Diffusion Wall' creates asymmetric sight-line cuts that force rotational aggression, while the 'Graviton Pull' ultimate has redefined post-plant defense. Teams without a dedicated Miks player are at a measurable disadvantage in 2026.",
  pickRateTrend: [
    { month: "Jan", rate: 42 },
    { month: "Feb", rate: 58 },
    { month: "Mar", rate: 68 },
    { month: "Apr", rate: 74 },
    { month: "May", rate: 78 },
  ],
  topPlayers: ["Dambi (NS)", "Life (FPX)", "pANcada (LOUD)", "valyn (G2)"],
  compsWith: ["Jett + Miks + Cypher + Sova + KAY/O"],
};

// --- Pick'em Bracket (Masters London 2026) ---
export interface PickEmMatch {
  id: string;
  round: number;
  team1: string;
  team2: string;
  logo1: string;
  logo2: string;
}

export const pickEmBracket: PickEmMatch[] = [
  { id: "qf1", round: 1, team1: "Nongshim RedForce", team2: "Team Vitality", logo1: "ns-esports.com", logo2: "vitality.gg" },
  { id: "qf2", round: 1, team1: "Paper Rex", team2: "FNATIC", logo1: "pprx.team", logo2: "fnatic.com" },
  { id: "qf3", round: 1, team1: "NRG", team2: "EDward Gaming", logo1: "nrg.gg", logo2: "edg.gg" },
  { id: "qf4", round: 1, team1: "LOUD", team2: "Gen.G", logo1: "loud.gg", logo2: "geng.gg" },
  { id: "sf1", round: 2, team1: "TBD", team2: "TBD", logo1: "", logo2: "" },
  { id: "sf2", round: 2, team1: "TBD", team2: "TBD", logo1: "", logo2: "" },
  { id: "final", round: 3, team1: "TBD", team2: "TBD", logo1: "", logo2: "" },
];

// --- Ghost Play (ZmjjKK 1v4 Haven A-Site) ---
export interface GhostFrame {
  time: number; // ms
  players: {
    id: string;
    team: "ATK" | "DEF";
    x: number; // % of canvas
    y: number;
    alive: boolean;
    action?: string;
  }[];
}

export const ghostPlayData = {
  title: "ZmjjKK 1v4 Clutch — Haven A-Site",
  event: "Champions 2024 Grand Final",
  round: "Round 24 — Match Point",
  map: "Haven",
  site: "A",
  duration: 12000, // 12 seconds
  frames: [
    { time: 0, players: [
      { id: "ZmjjKK", team: "DEF" as const, x: 72, y: 85, alive: true, action: "Op holding A-Long" },
      { id: "ATK1", team: "ATK" as const, x: 20, y: 40, alive: true, action: "Pushing A-Short" },
      { id: "ATK2", team: "ATK" as const, x: 15, y: 55, alive: true, action: "Flashing A-Short" },
      { id: "ATK3", team: "ATK" as const, x: 28, y: 30, alive: true, action: "Holding A-Long" },
      { id: "ATK4", team: "ATK" as const, x: 22, y: 65, alive: true, action: "Planting spike" },
    ]},
    { time: 2000, players: [
      { id: "ZmjjKK", team: "DEF" as const, x: 68, y: 78, alive: true, action: "Op flick → kills ATK3" },
      { id: "ATK1", team: "ATK" as const, x: 30, y: 42, alive: true, action: "Swinging" },
      { id: "ATK2", team: "ATK" as const, x: 25, y: 50, alive: true, action: "Trading" },
      { id: "ATK3", team: "ATK" as const, x: 35, y: 32, alive: false, action: "Eliminated" },
      { id: "ATK4", team: "ATK" as const, x: 40, y: 60, alive: true, action: "Spike planted" },
    ]},
    { time: 4500, players: [
      { id: "ZmjjKK", team: "DEF" as const, x: 55, y: 65, alive: true, action: "Dash → Vandal kill on ATK1" },
      { id: "ATK1", team: "ATK" as const, x: 38, y: 45, alive: false, action: "Eliminated" },
      { id: "ATK2", team: "ATK" as const, x: 42, y: 48, alive: true, action: "Retreating" },
      { id: "ATK3", team: "ATK" as const, x: 35, y: 32, alive: false, action: "Eliminated" },
      { id: "ATK4", team: "ATK" as const, x: 45, y: 55, alive: true, action: "Holding post-plant" },
    ]},
    { time: 7000, players: [
      { id: "ZmjjKK", team: "DEF" as const, x: 48, y: 52, alive: true, action: "Updraft → headshot ATK2" },
      { id: "ATK1", team: "ATK" as const, x: 38, y: 45, alive: false, action: "Eliminated" },
      { id: "ATK2", team: "ATK" as const, x: 44, y: 46, alive: false, action: "Eliminated" },
      { id: "ATK3", team: "ATK" as const, x: 35, y: 32, alive: false, action: "Eliminated" },
      { id: "ATK4", team: "ATK" as const, x: 50, y: 50, alive: true, action: "Last player alive" },
    ]},
    { time: 10000, players: [
      { id: "ZmjjKK", team: "DEF" as const, x: 50, y: 48, alive: true, action: "1v1 — Blade Storm kill on ATK4 🏆" },
      { id: "ATK1", team: "ATK" as const, x: 38, y: 45, alive: false, action: "Eliminated" },
      { id: "ATK2", team: "ATK" as const, x: 44, y: 46, alive: false, action: "Eliminated" },
      { id: "ATK3", team: "ATK" as const, x: 35, y: 32, alive: false, action: "Eliminated" },
      { id: "ATK4", team: "ATK" as const, x: 52, y: 49, alive: false, action: "Eliminated — CLUTCH!" },
    ]},
  ] as GhostFrame[],
};

// --- Live Ticker ---
export interface TickerMatch {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  status: "LIVE" | "FINAL" | "UPCOMING";
  event: string;
}

export const liveTicker: TickerMatch[] = [
  { team1: "NRG", team2: "Sentinels", score1: 2, score2: 1, status: "LIVE", event: "VCT Americas Stage 1" },
  { team1: "FNATIC", team2: "Team Vitality", score1: 0, score2: 2, status: "FINAL", event: "VCT EMEA Stage 1" },
  { team1: "Paper Rex", team2: "Gen.G", score1: 2, score2: 0, status: "FINAL", event: "VCT Pacific Stage 1" },
  { team1: "EDward Gaming", team2: "FunPlus Phoenix", score1: 1, score2: 1, status: "LIVE", event: "VCT China Stage 1" },
  { team1: "LOUD", team2: "MIBR", score1: 0, score2: 0, status: "UPCOMING", event: "VCT Americas Stage 1" },
  { team1: "Team Liquid", team2: "Karmine Corp", score1: 2, score2: 1, status: "FINAL", event: "VCT EMEA Stage 1" },
  { team1: "Nongshim RedForce", team2: "T1", score1: 1, score2: 0, status: "LIVE", event: "VCT Pacific Stage 1" },
  { team1: "Trace Esports", team2: "Bilibili Gaming", score1: 2, score2: 0, status: "FINAL", event: "VCT China Stage 1" },
];
