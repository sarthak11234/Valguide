export interface ProPlayer {
  name: string;
  team: string;
  role: string;
  mainAgent: string;
  acs: number;
  kd: number;
  hs: number;
  description: string;
  imageUrl?: string;
}

export interface Streamer {
  name: string;
  platform: "Twitch" | "YouTube" | "Kick" | "Huya" | "Bilibili";
  region: string;
  followers: string;
  description: string;
  ytLink?: string;
  twitchLink?: string;
  country: string;
  imageUrl?: string;
}

export interface PartneredTeam {
  name: string;
  roster: string[];
  points: number;
  tag?: string;
  logoUrl?: string;
}

export interface RegionData {
  id: string;
  name: string;
  description: string;
  color: string;
  topPlayers: ProPlayer[];
  topStreamers: Streamer[];
  partneredTeams: PartneredTeam[];
}

export interface ChampionRecord {
  year: number;
  winner: string;
  runnerUp: string;
  mvp: string;
  location: string;
  venue?: string;
  summary?: string;
  prize?: string;
  themeColor?: string;
}

export const vctInfo = {
  title: "VALORANT CHAMPIONS TOUR (VCT)",
  description:
    "The premier global esports circuit operated by Riot Games. The tier-1 ecosystem is divided into four International Leagues — Americas, EMEA, Pacific, and China. Teams battle through Kickoff, two Masters events, and domestic Stage playoffs before the elite collide at the year-end world championship: VCT Champions.",
};

export const championsHistory: ChampionRecord[] = [
  { year: 2021, winner: "Acend", runnerUp: "Gambit Esports", mvp: "zeek", location: "Berlin, Germany", venue: "Tempodrom", summary: "In a stunning debut world championship, EU's Acend dethroned CIS favourites Gambit in a nail-biting five-map Grand Final, cementing zeek as one of Valorant's first iconic players.", prize: "$350,000", themeColor: "#A855F7" },
  { year: 2022, winner: "LOUD", runnerUp: "OpTic Gaming", mvp: "pANcada", location: "Istanbul, Turkey", venue: "Volkswagen Arena", summary: "Brazil's LOUD immortalised themselves, taking down NA powerhouse OpTic Gaming in an electric five-map classic and bringing South America its first world title. pANcada's clutch plays under pressure cemented his legendary status.", prize: "$1,000,000", themeColor: "#22C55E" },
  { year: 2023, winner: "Evil Geniuses", runnerUp: "Paper Rex", mvp: "Demon1", location: "Los Angeles, USA", venue: "Kia Forum", summary: "With an historic run through the lower bracket, NRG-turned-EG shocked the world. Demon1's otherworldly Jett play dismantled PRX's high-chaos W-gaming style in a finals that had fans on their feet for every round.", prize: "$1,000,000", themeColor: "#3B82F6" },
  { year: 2024, winner: "EDward Gaming", runnerUp: "Team Heretics", mvp: "ZmjjKK", location: "Seoul, South Korea", venue: "Olympic Gymnastics Arena", summary: "China's finest hour. EDG took down EMEA's Team Heretics in a dominant display of Operator mastery and calculated aggression. ZmjjKK's signature Jett made him a global superstar and confirmed China's arrival on the world stage.", prize: "$1,000,000", themeColor: "#FF4655" },
  { year: 2025, winner: "NRG", runnerUp: "FNATIC", mvp: "brawk", location: "Paris, France", venue: "Accor Arena", summary: "In a historic 3-2 Grand Final at the iconic Accor Arena, NRG's brawk delivered a masterclass performance that clinched the title over FNATIC. The victory marked North America's triumphant return to the world throne in a tournament defined by clutch plays and unforgettable moments.", prize: "$1,000,000", themeColor: "#F97316" }
];

export const roadmapEvents2026 = [
  { title: "KICKOFF", date: "JAN 15 – FEB 15", desc: "New triple-elimination bracket format. Top 3 per league qualify for Masters Santiago.", location: "Regional — All Leagues", highlight: true },
  { title: "MASTERS SANTIAGO", date: "FEB 28 – MAR 15", desc: "Latin America hosts its first-ever international Masters. 12 teams, global prestige.", location: "Santiago, Chile", highlight: false },
  { title: "STAGE 1", date: "MAR 31 – MAY 24", desc: "Domestic league battles resume. Top 3 per league advance to Masters London.", location: "Regional — All Leagues", highlight: false },
  { title: "MASTERS LONDON", date: "JUN 6 – JUN 21", desc: "The UK's debut as a Masters host. 12 teams fight for mid-season supremacy.", location: "London, UK", highlight: false },
  { title: "STAGE 2", date: "JUN 30 – AUG 16", desc: "The final domestic push. Path to Champions slots open for elite Challengers squads.", location: "Regional — All Leagues", highlight: false },
  { title: "CHAMPIONS SHANGHAI", date: "SEP 24 – OCT 18", desc: "The world championship returns to China. All roads lead to Shanghai.", location: "Shanghai, China", highlight: true }
];

export const globalStreamers: Streamer[] = [
  { name: "TenZ", platform: "Twitch", region: "Americas", country: "🇨🇦 Canada", followers: "4.5M", description: "The biggest Valorant streamer on the planet. TenZ's mechanical ceiling remains unmatched — expect god-tier Jett clips and a loyal army of fans at every stream.", twitchLink: "https://www.twitch.tv/tenz", ytLink: "https://www.youtube.com/@TenZ", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/dfb5c790-5ea6-4543-bc2b-0f5f79b1f959-profile_image-300x300.png" },
  { name: "tarik", platform: "Twitch", region: "Americas", country: "🇺🇸 USA", followers: "3.3M", description: "The self-proclaimed 'Mayor of Valorant'. Tarik's VCT co-streams and watch parties are must-watch events, routinely peaking at 200k+ concurrent viewers during Champions.", twitchLink: "https://www.twitch.tv/tarik", ytLink: "https://www.youtube.com/@tarik", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/f04d2a14-8d63-4cd5-a469-7ec2cd6e5ce3-profile_image-300x300.png" },
  { name: "Kyedae", platform: "Twitch", region: "Americas", country: "🇨🇦 Canada", followers: "3.1M", description: "One of the most beloved faces in Valorant streaming. Kyedae's warmth, entertainment value, and competitive ranked grind have built one of the most loyal communities in the game.", twitchLink: "https://www.twitch.tv/kyedae", ytLink: "https://www.youtube.com/@Kyedae", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/52434605-a13a-451a-8c7c-712d84715cc1-profile_image-300x300.png" },
  { name: "Mixwell", platform: "Twitch", region: "EMEA", country: "🇪🇸 Spain", followers: "1.2M", description: "A former CS:GO pro turned Valorant streaming royalty. The undisputed king of Spanish-language Valorant content, with razor-sharp analysis and elite aim.", twitchLink: "https://www.twitch.tv/mixwell", ytLink: "https://www.youtube.com/@mixwell", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/6d3b4513-6824-4912-848c-dc046ee262ad-profile_image-300x300.png" },
  { name: "benjyfishy", platform: "Twitch", region: "EMEA", country: "🇬🇧 UK", followers: "2.2M", description: "The multi-game prodigy who transitioned from Fortnite World Cup to Valorant pro play. Now a full-time content creator blending elite mechanics with entertaining streaming.", twitchLink: "https://www.twitch.tv/benjyfishy", ytLink: "https://www.youtube.com/@benjyfishy", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/1aea44a4-d85b-401e-b9f5-cb6906d77594-profile_image-300x300.png" },
  { name: "Sliggy", platform: "Twitch", region: "EMEA", country: "🇬🇧 UK", followers: "390K", description: "A former pro coach offering the most analytically thorough VCT watch parties in the scene. Essential viewing for anyone who wants to understand professional Valorant.", twitchLink: "https://www.twitch.tv/sliggy", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/04dbc9bb-27bf-4975-b9ab-361268e8f5b5-profile_image-300x300.png" },
  { name: "fps_shaka", platform: "YouTube", region: "Pacific", country: "🇯🇵 Japan", followers: "890K", description: "The gateway to Japanese Valorant for millions of fans. Shaka's entertaining streams and edu-content have helped catapult the Japanese competitive scene into global relevance.", ytLink: "https://www.youtube.com/@fps_shaka", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/d8a3e3e9-f70a-4634-bd59-b4a1cab834de-profile_image-300x300.png" },
  { name: "s0mcs", platform: "Twitch", region: "Americas", country: "🇺🇸 USA", followers: "1.3M", description: "Former NRG pro player turned full-time content creator. Known for his elite Controller play on Brimstone and Omen, and consistently educational ranked commentary.", twitchLink: "https://www.twitch.tv/s0mcs", ytLink: "https://www.youtube.com/@s0mcs", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/e086d0a4-781d-49d6-9732-2d8f9516f9c0-profile_image-300x300.png" },
  { name: "AverageJonas", platform: "YouTube", region: "EMEA", country: "🇩🇰 Denmark", followers: "720K", description: "The go-to YouTube channel for clean, no-nonsense Valorant guides and ranked improvement content. A fan favourite for education-focused Valorant video essays.", ytLink: "https://www.youtube.com/@AverageJonas", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/dca7e0ce-d5d5-417a-8c9d-324841cd74df-profile_image-300x300.png" },
  { name: "Dizzy", platform: "Huya", region: "China", country: "🇨🇳 China", followers: "2.8M", description: "One of China's most dominant Valorant ranked warriors. A household streaming name in the CN scene, Dizzy's mechanical showcase streams attract massive viewership on Huya.", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/d4cfac6a-b9cd-4126-b218-3753b50469e7-profile_image-300x300.png" },
];

export const regionsData: RegionData[] = [
  {
    id: "americas",
    name: "VCT AMERICAS",
    description: "Home to aggressive playstyles and fierce rivalries between NA organisations and South American superteams. 2026 introduces ENVY back as a franchise partner.",
    color: "#FF4655",
    topPlayers: [
      { name: "brawk", team: "NRG", role: "Duelist/Flex", mainAgent: "Jett", acs: 252, kd: 1.28, hs: 31, description: "2025 World Champion and MVP. The Canadian clutch king elevated NRG to their first ever world title in Paris with relentless carry performances and ice-cold nerves.", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/d5a628d5-6928-48ad-a726-a228bd89e0b8-profile_image-300x300.png" },
      { name: "aspas", team: "MIBR", role: "Duelist", mainAgent: "Raze", acs: 265, kd: 1.32, hs: 27, description: "The Brazilian phenomenon. Now proudly on MIBR, aspas continues to be the most complete entry fragger in the Americas — a genuine top-3 player in the world.", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/56adcee0-86f1-4ade-bcd9-8d9bde1c6670-profile_image-300x300.png" },
      { name: "Demon1", team: "ENVY", role: "Duelist/Controller", mainAgent: "Jett", acs: 248, kd: 1.26, hs: 39, description: "2023 World Champion. After a stint on Cloud9, Demon1 now anchors the newly franchised ENVY squad, bringing championship pedigree to a hungry new organisation.", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/8a29ffa8-e315-462c-a248-9d2905e43efc-profile_image-300x300.png" }
    ],
    topStreamers: [],
    partneredTeams: [
      { name: "NRG", roster: ["brawk", "mada", "skuba", "Ethan", "keiko"], points: 24, logoUrl: "https://logo.clearbit.com/nrg.gg" },
      { name: "MIBR", roster: ["tex", "zekken", "Mazino", "aspas", "Verno"], points: 20, logoUrl: "https://logo.clearbit.com/mibr.gg" },
      { name: "G2 Esports", roster: ["BABYBAY", "valyn", "jawgemo", "leaf", "trent"], points: 17, logoUrl: "https://logo.clearbit.com/g2esports.com" },
      { name: "LOUD", roster: ["pANcada", "Virtyy", "cauanzin", "Darker", "lukxo"], points: 15, logoUrl: "https://logo.clearbit.com/loud.gg" },
      { name: "Leviátan", roster: ["kiNgg", "PxS", "blowz", "Sato", "spike"], points: 14, logoUrl: "https://logo.clearbit.com/leviatan.gg" },
      { name: "Sentinels", roster: ["johnqt", "cortezia", "Reduxx", "Kyu", "N4RRATE"], points: 12, logoUrl: "https://logo.clearbit.com/sentinels.gg" },
      { name: "100 Thieves", roster: ["Asuna", "bang", "Cryocells", "vora", "Timotino"], points: 11, logoUrl: "https://logo.clearbit.com/100thieves.com" },
      { name: "Cloud9", roster: ["Zellsis", "penny", "Xeppaa", "v1c", "OXY"], points: 10, logoUrl: "https://logo.clearbit.com/cloud9.gg" },
      { name: "ENVY", roster: ["Inspire", "Rossy", "keznit", "P0PPIN", "Demon1"], points: 9, logoUrl: "https://logo.clearbit.com/envy.gg" },
      { name: "KRÜ Esports", roster: ["NagZ", "Governor", "infiltrator", "mta", "benG"], points: 7, logoUrl: "https://logo.clearbit.com/kruesports.gg" },
      { name: "FURIA", roster: ["Nerve", "Artzin", "Eeiu", "Koalanoob", "Alym"], points: 6, logoUrl: "https://logo.clearbit.com/furia.gg" },
      { name: "Evil Geniuses", roster: ["C0M", "supamen", "Okeanos", "dgzin", "bao"], points: 5, logoUrl: "https://logo.clearbit.com/evilgeniuses.gg" }
    ]
  },
  {
    id: "emea",
    name: "VCT EMEA",
    description: "Europe, Middle East, and Africa. The deepest talent pool in the world — known for hyper-tactical setups, disciplined defaults, and cerebral IGL play.",
    color: "#00E5FF",
    topPlayers: [
      { name: "Derke", team: "Team Vitality", role: "Duelist", mainAgent: "Raze", acs: 258, kd: 1.24, hs: 28, description: "Now with Team Vitality, Derke remains EMEA's most explosive entry player. His Raze B-site executes and Jett duels have broken defences at every level of play.", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/13e263e1-7e99-4cab-b25c-a36c34488b7e-profile_image-300x300.png" },
      { name: "nAts", team: "Team Liquid", role: "Sentinel", mainAgent: "Cypher", acs: 220, kd: 1.18, hs: 30, description: "Arguably the greatest Cypher player of all time. nAts' trap setups and system-level thinking make him a chess grandmaster of Valorant.", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/e4e40827-cb49-4dd5-a274-dab81a84e337-profile_image-300x300.png" },
      { name: "MiniBoo", team: "Team Liquid", role: "Duelist", mainAgent: "Neon", acs: 242, kd: 1.19, hs: 33, description: "The Lithuanian lightning rod. MiniBoo's hyper-aggressive Neon play gives Liquid's structured system a lethal, unpredictable X-factor.", imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png" }
    ],
    topStreamers: [],
    partneredTeams: [
      { name: "Team Vitality", roster: ["Jamppi", "Derke", "Sayonara", "Chronicle", "PROFEK"], points: 22, logoUrl: "https://logo.clearbit.com/vitality.gg" },
      { name: "Team Heretics", roster: ["Boo", "benjyfishy", "MiniBoo", "RieNs", "Wo0t"], points: 19, logoUrl: "https://logo.clearbit.com/teamheretics.com" },
      { name: "FNATIC", roster: ["Boaster", "Alfajer", "Leo", "Chronicle", "Enzo"], points: 18, logoUrl: "https://logo.clearbit.com/fnatic.com" },
      { name: "Team Liquid", roster: ["nAts", "kamo", "MiniBoo", "purp0", "wayne"], points: 16, logoUrl: "https://logo.clearbit.com/teamliquid.com" },
      { name: "Natus Vincere", roster: ["ANGE1", "Shao", "Zyppan", "SUYGETSU", "ardiis"], points: 14, logoUrl: "https://logo.clearbit.com/navi.gg" },
      { name: "Karmine Corp", roster: ["Shin", "MAGNUM", "marteen", "N4RRATE", "tomaszy"], points: 11, logoUrl: "https://logo.clearbit.com/karminecorp.fr" },
      { name: "FUT Esports", roster: ["qRaxs", "MrFaliN", "AtaKaptan", "yetujey", "cNed"], points: 10, logoUrl: "https://logo.clearbit.com/futesports.gg" },
      { name: "Gentle Mates", roster: ["Wailers", "TakaS", "beyAz", "nataK", "logN"], points: 8, logoUrl: "https://logo.clearbit.com/gentlemates.com" },
      { name: "BBL Esports", roster: ["pAura", "Turko", "Brave", "Elite", "reazy"], points: 7, logoUrl: "https://logo.clearbit.com/bblesports.com" },
      { name: "Eternal Fire", roster: ["SouhcNi", "CATA", "Destrian", "Gosu", "Mini"], points: 4, logoUrl: "https://logo.clearbit.com/eternalfire.gg" },
      { name: "GIANTX", roster: ["Fit1nho", "Cloud", "purp0", "Redgar", "hoody"], points: 5, logoUrl: "https://logo.clearbit.com/giantx.gg" },
      { name: "Vitality (sub)", roster: ["UNFAKE"], points: 1, logoUrl: "https://logo.clearbit.com/vitality.gg" }
    ]
  },
  {
    id: "pacific",
    name: "VCT PACIFIC",
    description: "The fastest-growing region. Defined by electric 'W-gaming', raw mechanical aim, and a passionate fanbase spanning Japan, Korea, Southeast Asia, and Oceania.",
    color: "#39FF14",
    topPlayers: [
      { name: "f0rsakeN", team: "Paper Rex", role: "Flex", mainAgent: "Yoru", acs: 238, kd: 1.12, hs: 26, description: "PRX's versatile engine. f0rsakeN can dominate on literally any agent.", imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/a5c1d6f9-885a-40b3-bc8b-77ab2b216d67-profile_image-300x300.png" },
      { name: "something", team: "Paper Rex", role: "Duelist", mainAgent: "Reyna", acs: 270, kd: 1.30, hs: 29, description: "The Russian import who became a Pacific icon. something's Reyna and Jett completely redefined the meta.", imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png" },
      { name: "t3xture", team: "Gen.G", role: "Duelist", mainAgent: "Jett", acs: 252, kd: 1.22, hs: 27, description: "The energetic superstar who spearheads Gen.G's championship-calibre roster. t3xture's aggressive Jett duels make him a nightmare.", imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png" }
    ],
    topStreamers: [],
    partneredTeams: [
      { name: "Paper Rex", roster: ["f0rsakeN", "invy", "d4v41", "something", "Jinggg"], points: 22, logoUrl: "https://logo.clearbit.com/pprx.team" },
      { name: "T1", roster: ["stax", "BuZz", "Munchkin", "Meteor", "iZu"], points: 20, logoUrl: "https://logo.clearbit.com/t1.gg" },
      { name: "Gen.G", roster: ["Lakia", "t3xture", "Ash", "Karon", "ZynX"], points: 19, logoUrl: "https://logo.clearbit.com/geng.gg" },
      { name: "DRX", roster: ["free1ng", "MaKo", "BeYN", "Hermes", "HYUNMIN"], points: 16, logoUrl: "https://logo.clearbit.com/drx.gg" },
      { name: "ZETA DIVISION", roster: ["eKo", "SugarZ3ro", "SyouTa", "Xdll", "Absol"], points: 12, logoUrl: "https://logo.clearbit.com/zetadivision.com" },
      { name: "Team Secret", roster: ["JessieVash", "Sylvan", "BerserX", "kellyS", "TenTen"], points: 10, logoUrl: "https://logo.clearbit.com/teamsecret.gg" },
      { name: "FULL SENSE", roster: ["Killua", "JitBoyS", "primmie", "Leviathan", "thyy"], points: 9, logoUrl: "https://logo.clearbit.com/fullsense.gg" },
      { name: "Nongshim RedForce", roster: ["Rb", "Dambi", "Francis", "Ivy", "Xross"], points: 8, logoUrl: "https://logo.clearbit.com/ns-esports.com" },
      { name: "Rex Regum Qeon", roster: ["crazyguy", "Kushy", "xffero", "Monyet", "Jemkin"], points: 7, logoUrl: "https://logo.clearbit.com/teamrrq.com" },
      { name: "Global Esports", roster: ["Autumn", "UdoTan", "Kr1stal", "xavi8k", "PatMen"], points: 5, logoUrl: "https://logo.clearbit.com/globalesports.com" },
      { name: "DetonatioN FocusMe", roster: ["Meiy", "Akame", "SSeeS", "Caedye", "yatsuka"], points: 4, logoUrl: "https://logo.clearbit.com/team-detonation.net" },
      { name: "VARREL", roster: ["C1ndeR", "Klaus", "oonzmlp", "Zexy", "XuNa"], points: 3, logoUrl: "https://logo.clearbit.com/donutsvarrel.com" }
    ]
  },
  {
    id: "cn",
    name: "VCT CHINA",
    description: "Expanded to 12 teams in 2026, the league is fiercer than ever — defined by fearless aggression and sniper superstars.",
    color: "#FF3333",
    topPlayers: [
      { name: "ZmjjKK", team: "EDward Gaming", role: "Duelist/Sniper", mainAgent: "Jett", acs: 278, kd: 1.38, hs: 23, description: "2024 World Champion and the face of Chinese Valorant. ZmjjKK's Operator plays are the stuff of legend.", imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png" },
      { name: "CHICHOO", team: "EDward Gaming", role: "Sentinel", mainAgent: "Cypher", acs: 218, kd: 1.16, hs: 33, description: "The clutch gene of EDG. CHICHOO consistently delivers in the most high-pressure situations.", imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png" },
      { name: "Life", team: "FunPlus Phoenix", role: "Controller", mainAgent: "Omen", acs: 208, kd: 1.10, hs: 29, description: "The tactical mastermind of FPX. Life's ability to dictate smokes and create mid-round advantages.", imageUrl: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png" }
    ],
    topStreamers: [],
    partneredTeams: [
      { name: "EDward Gaming", roster: ["nobody", "ZmjjKK", "Smoggy", "CHICHOO", "cb"], points: 28, logoUrl: "https://logo.clearbit.com/edg.gg" },
      { name: "FunPlus Phoenix", roster: ["Life", "sScary", "BerLIN", "AAAAY", "Setrod"], points: 20, logoUrl: "https://logo.clearbit.com/fpx.com" },
      { name: "Trace Esports", roster: ["LuoK1ng", "FengF", "deLb", "Viva", "Kai"], points: 17, logoUrl: "https://logo.clearbit.com/traceesports.com" },
      { name: "Bilibili Gaming", roster: ["Knight", "whzy", "nephh", "rushia", "bud"], points: 14, logoUrl: "https://logo.clearbit.com/blg.gg" },
      { name: "Nova Esports", roster: ["heybay", "GREEN", "OBONE", "GuanG", "Ezeir"], points: 12, logoUrl: "https://logo.clearbit.com/novaesports.com" },
      { name: "TYLOO", roster: ["sword9", "splash", "Scales", "slowly", "Erv"], points: 10, logoUrl: "https://logo.clearbit.com/tyloo.cc" },
      { name: "JD Gaming", roster: ["jkuro", "Yuicaw", "coconut", "stew", "zhe"], points: 9, logoUrl: "https://logo.clearbit.com/jdgaming.com" },
      { name: "Dragon Ranger Gaming", roster: ["vo0kashu", "Flex1n", "Nicc", "SpiritZ1", "Akeman"], points: 7, logoUrl: "https://logo.clearbit.com/drg.gg" },
      { name: "Wuxi Titan EC", roster: ["Haodong", "Abo", "lucas", "Dynamite", "Coco"], points: 6, logoUrl: "https://logo.clearbit.com/titan.com" },
      { name: "Wolves Esports", roster: ["yosemite", "SiuFatBB", "Spring", "jowa", "qiutiaN"], points: 5, logoUrl: "https://logo.clearbit.com/wolves.co.uk" },
      { name: "All Gamers", roster: ["f4ngeer", "Shr1mp", "K1ra", "Au1", "iamgrq"], points: 4, logoUrl: "https://logo.clearbit.com/allgamers.com" },
      { name: "Xi Lai Gaming", roster: ["NoMan", "Rarga", "WsLeo", "Lysoar", "happywei"], points: 3, logoUrl: "https://logo.clearbit.com/xlg.com" }
    ]
  }
];
