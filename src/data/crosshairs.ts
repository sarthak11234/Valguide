export interface CrosshairProfile {
  id: string;
  playerName: string;
  team: string;
  code: string;
  // CSS rendering props for preview
  color: string;
  outline: boolean;
  length: number; // pixels
  thickness: number; // pixels
  offset: number; // pixels
  centerDot: boolean;
}

export const crosshairs: CrosshairProfile[] = [
  {
    id: "tenz",
    playerName: "TenZ",
    team: "Sentinels",
    code: "0;s;1;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0;S;c;4;o;1",
    color: "#00FFFF", // Cyan
    outline: false,
    length: 4,
    thickness: 2,
    offset: 2,
    centerDot: false,
  },
  {
    id: "yay",
    playerName: "yay",
    team: "Optic", // classic
    code: "0;P;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0",
    color: "#FFFFFF",
    outline: false,
    length: 4,
    thickness: 2,
    offset: 0,
    centerDot: false,
  },
  {
    id: "boaster",
    playerName: "Boaster",
    team: "FNATIC",
    code: "0;s;1;P;c;1;o;1;d;1;0l;0;0o;2;0a;1;0f;0;1t;0;1l;0;1o;0;1a;0;S;c;1;o;1",
    color: "#00FF00",
    outline: true,
    length: 0,
    thickness: 0,
    offset: 0,
    centerDot: true,
  },
  {
    id: "demon1",
    playerName: "Demon1",
    team: "NRG",
    code: "0;s;1;P;o;1;f;0;0t;1;0l;1;0o;2;0a;1;0f;0;1b;0",
    color: "#FFFFFF",
    outline: true,
    length: 1,
    thickness: 1,
    offset: 2,
    centerDot: false,
  },
  {
    id: "forsaken",
    playerName: "f0rsakeN",
    team: "Paper Rex",
    code: "0;s;1;P;o;1;0t;1;0l;1;0o;4;0a;1;0f;0;1t;1;1l;1;1o;3;1a;0;1m;0;1f;0",
    color: "#FFFFFF",
    outline: true,
    length: 1,
    thickness: 1,
    offset: 4,
    centerDot: false,
  },
  {
    id: "zekken",
    playerName: "zekken",
    team: "Sentinels",
    code: "0;P;c;1;h;0;m;1;0t;1;0l;2;0o;1;0a;1;0f;0;1b;0",
    color: "#00FF00",
    outline: false,
    length: 2,
    thickness: 1,
    offset: 1,
    centerDot: false,
  },
  {
    id: "less",
    playerName: "Less",
    team: "LOUD",
    code: "0;P;c;1;h;0;f;0;0t;1;0l;2;0o;1;0a;1;0f;0;1b;0",
    color: "#00FF00",
    outline: false,
    length: 2,
    thickness: 1,
    offset: 1,
    centerDot: false,
  },
  {
    id: "something",
    playerName: "something",
    team: "Paper Rex",
    code: "0;P;o;1;d;1;f;0;0b;0;1b;0",
    color: "#FFFFFF",
    outline: true,
    length: 0,
    thickness: 0,
    offset: 0,
    centerDot: true,
  }
];
