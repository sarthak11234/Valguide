# 🎮 ValoGuide — Valorant Recruit Protocol (VRP)

> A comic-book styled tactical web app for Valorant players — built with Next.js, Tailwind CSS, Framer Motion, and the Vercel AI SDK.

![ValoGuide Hero](https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc04e4637dd38eeb5/64a613f1738d82136e4be2eb/PlayValorant_PC_1920x1080_Omen.jpg)

---

## ✨ Features

### 🤖 SAGE Terminal (`/sage`)
- AI-powered tactical assistant powered by **Google Gemini 1.5 Pro** via the Vercel AI SDK.
- SAGE persona trained on Valorant lore, mechanics, economy, and agent specializations.
- Comic-style speech bubbles, custom SAGE avatar, and live typing indicators.

### 🏆 VCT Esports Command Center (`/esports`)
- **Global Overview:** Comprehensive data on International Leagues (Americas, EMEA, Pacific, China).
- **Roster & Player Stats:** Interactive flip-cards for top tier operatives and real-time player data.
- **Champions Legacy:** Historical overview of VCT Champions winners, locations, and MVPs.
- **Meta Pulse & Pick'Em:** Interactive charts (via Recharts) analyzing the current agent/weapon meta, plus bracket predictions.
- **The Ghost Play:** Breakdowns of historical iconic plays on an interactive tactical map.

### 🔧 Tactical Toolkit (`/toolkit`)
- **eDPI Calculator** — Calculate your effective DPI (`Mouse DPI × In-Game Sensitivity`) with visual feedback.
  - Beginner target range indicator (200–400 eDPI).
  - Pro player reference table (TenZ, s0m, yay, Aspas, Derke) with dynamic filtering.
- **Weapon Stat Comparison** — Live data from the official Valorant-API.
  - Category tabs: Rifles, Pistols, SMGs, Snipers, Shotguns, Heavy.
  - Advanced sorting by fire rate, magazine size, wall penetration, and credit cost.
- **Crosshair Generator** — Visualize and create your perfect crosshair with live preview.

### 🗺️ Map Intel & 📖 Lore Registry
- **Map Intel (`/maps`):** Detailed breakdowns of active duty maps, callouts, and strategic choke points.
- **Lore Registry (`/lore`):** An interactive timeline of the Valorant universe, Kingdom Corporation, and Radiant history.
- **Agents Archive (`/agents`):** Complete, filterable roster database with role details and abilities.

---

## 🔌 API Architecture

| Route | Description | Environment |
|-------|-------------|-------------|
| `GET /api/agents` | Playable agent data (icons, abilities, stats) | Next.js API Route |
| `GET /api/weapons` | Full weapon roster, stats, and damage falloff | Next.js API Route |
| `POST /api/chat` | SAGE AI chatbot streaming endpoint | Edge Runtime + AI SDK |

> External Data sourced from [valorant-api.com](https://valorant-api.com) — an incredibly useful, unofficial community API.

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/your-org/valguide.git
cd valguide
npm install
```

### 2. Set up Environment
Create a `.env.local` file in the root to power SAGE:
```env
# Required for /sage chat functionality
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** Next.js 16.1.7 (App Router, Server Components)
- **Styling:** Tailwind CSS v4, custom CSS Variables for brand colors (`--val-red`, `--val-navy`)
- **Animations:** Framer Motion (Page transitions, micro-interactions, flip cards)
- **Data Viz:** Recharts (For Esports Meta Pulse charts)
- **AI Integration:** Vercel AI SDK v5 + `@ai-sdk/google` + `@ai-sdk/react`
- **Language Model:** Google Gemini 1.5 Pro
- **Icons:** Lucide React

---

## 👥 Development

This project uses feature-based branching. Please adhere to the following conventions:

| Prefix | Usage |
|--------|-------|
| `feat:` | New features, pages, or major components |
| `fix:` | Bug fixes and hotfixes |
| `style:`| UI adjustments, CSS, animations |
| `docs:` | README updates, comments |

**Branch rules:**
- Never commit directly to `main` — always use a PR.
- Ensure `npm run lint` passes before submitting a PR.
- Use atomic commits with descriptive messages.

---

*Not affiliated with Riot Games. Valorant and all related characters and assets are trademarks of Riot Games, Inc.*
