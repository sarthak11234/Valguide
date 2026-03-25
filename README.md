# 🎮 ValoGuide — Valorant Recruit Protocol (VRP)

> A comic-book styled tactical web app for Valorant players — built with Next.js, Tailwind CSS, and the Vercel AI SDK.

---

## ✨ Features

### 🤖 SAGE Terminal (`/sage`)
- AI-powered chatbot powered by **Google Gemini 1.5 Pro** via the Vercel AI SDK
- SAGE persona trained on Valorant lore, mechanics, and economy
- Comic-style speech bubbles, SAGE avatar, and live `*WHIRRR* / *BEEP*` typing indicator

### 🔧 Tactical Toolkit (`/toolkit`)
- **eDPI Calculator** — `Mouse DPI × In-Game Sensitivity`
  - Beginner target range: **200–400 eDPI**
  - Contextual feedback tips + `*ZAP!*` flash animation
  - Pro player reference table (TenZ, s0m, yay, Aspas, Derke)
- **Weapon Stat Comparison** — Live data from the Valorant-API
  - Category tabs: Rifles, Pistols, SMGs, Snipers, Shotguns, Heavy
  - Clickable row highlight, fire rate, magazine, wall pen, and cost

### 🔌 API Proxy Routes
| Route | Description |
|-------|-------------|
| `GET /api/agents` | Playable agent data (icons, abilities, stats) |
| `GET /api/weapons` | Full weapon roster with stats |
| `POST /api/chat` | SAGE AI chatbot streaming endpoint |

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone <repo-url>
cd Valguide
npm install
```

### 2. Set up Environment
Create a `.env.local` file in the root:
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| **Next.js 16** (App Router) | Full-stack framework |
| **Tailwind CSS v4** | Styling |
| **Vercel AI SDK v5** + `@ai-sdk/react` | AI streaming |
| **Google Gemini 1.5 Pro** | Language model |
| **valorant-api.com** | Game data (agents, weapons) |

---

## 👥 Team & Branching

| Person | Branch Pattern | Focus Area |
|--------|---------------|------------|
| **Vedant** | `vedant/<feature>` | Frontend Core, Hero, Navigation |
| **Sarthak** | `sarthak/<feature>` | AI Backend, API Routes, Toolkit |
| **Gaurav** | `gaurav/<feature>` | Agent Archive, Lore, Map Intel |

**Branch rules:**
- Never commit directly to `main` — always use a PR
- Pull `main` often to avoid merge conflicts
- Commit prefix convention: `feat:`, `fix:`, `style:`, `docs:`

---

## 📅 Roadmap

| Phase | Status | Scope |
|-------|--------|-------|
| **Phase 1 (MVP)** | ✅ Done | SAGE Chatbot + API Proxy Routes |
| **Phase 2** | ✅ Done | Tactical Toolkit (eDPI + Weapon Comparison) |
| **Phase 3** |  Pending | Agent Archive, Lore Timeline, Map Intel |

---

> **Data sourced from [valorant-api.com](https://valorant-api.com)** — an unofficial community API. Not affiliated with Riot Games.
