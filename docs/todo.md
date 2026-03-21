# 📋 ValoGuide — Implementation TODO

> **Project:** Valorant Recruit Protocol (VRP)  
> **Tech Stack:** Next.js (App Router) · Tailwind CSS · Framer Motion · Vercel AI SDK + Gemini 1.5 Pro · Valorant-API.com  
> **Design:** Comic-Style Tactical-Tech (heavy borders, halftone textures, comic panels)

---

## 🔀 Git Branching — Quick Guide

### What are Branches?
Branches let each person work on their own copy of the code **without affecting others**. When done, changes are merged back into the main branch.

### Essential Commands

```bash
# 1. Clone the repo (first time only)
git clone <repo-url>
cd Valguide

# 2. Always pull latest changes before starting work
git pull origin main

# 3. Create your own branch and switch to it
git checkout -b <branch-name>
#   Examples:
#     git checkout -b vedant/frontend-core
#     git checkout -b sarthak/ai-chatbot-backend
#     git checkout -b gourav/agents-lore

# 4. Stage and commit your changes
git add .
git commit -m "feat: add agent archive grid layout"

# 5. Push your branch to GitHub
git push origin <branch-name>

# 6. Create a Pull Request (PR) on GitHub to merge into main

# 7. After PR is approved and merged, switch back to main and pull
git checkout main
git pull origin main
```

### Branch Naming Convention
| Person  | Branch Pattern               | Example                        |
|---------|------------------------------|--------------------------------|
| Vedant  | `vedant/<feature-name>`      | `vedant/hero-section`          |
| Sarthak | `sarthak/<feature-name>`     | `sarthak/sage-chatbot`         |
| Gourav  | `gourav/<feature-name>`      | `gourav/agent-archive`         |

### Tips
- **Never commit directly to `main`** — always use a feature branch + PR.
- **Pull `main` often** to avoid big merge conflicts.
- **Write clear commit messages** using prefixes: `feat:`, `fix:`, `style:`, `docs:`.

---

## 👤 Part 1 — Vedant (Frontend Core & Layout)
> **Focus:** Project setup, global styling, navigation, hero section, and overall page structure.

### Project Setup & Config
- [ ] Initialize Next.js project with App Router (`npx create-next-app@latest`)
- [ ] Configure Tailwind CSS with custom theme tokens:
  - Valorant Red `#FF4655`, Toxic Green `#00E5FF` / `#39FF14`
  - Dark Navy `#0F1923`, Off-White `#ECE8E1`
- [ ] Set up Google Fonts (Tungsten / blocky headings + Inter for body)
- [ ] Create `global.css` with comic-style utilities:
  - Halftone dot background patterns
  - `clip-path` utilities for jagged/angled panels
  - Heavy 3–5px black border classes
- [ ] Set up project folder structure (`/components`, `/app`, `/lib`, `/public`)

### Command Center — Hero Section
- [ ] Build cinematic hero section with video/image background + halftone overlay
- [ ] Create skewed CTA buttons with thick black borders
- [ ] Add hover effects: text shake + action-line radial animation (Framer Motion)
- [ ] Implement "Recruit" onboarding intro flow on landing

### Navigation & Layout
- [ ] Design "Command Center" dashboard-style navigation (not traditional navbar)
- [ ] Implement modular grid layout using comic-panel styling (sharp corners, slanted panels)
- [ ] Add jagged/diagonal dividers between page sections
- [ ] Build page transition animations — speed-line / page-flip effects (Framer Motion)

### Responsiveness & Polish
- [ ] Ensure fully responsive layouts (mobile, tablet, desktop)
- [ ] Add SEO meta tags, `<title>`, Open Graph tags per page
- [ ] Performance optimization — image/video lazy loading, bundle analysis

---

## 👤 Part 2 — Sarthak (AI Chatbot & Backend / API)
> **Focus:** "SAGE" AI chatbot, serverless API routes, Valorant-API data fetching, and Tactical Toolkit.

### Backend — API Routes
- [ ] Set up Next.js Route Handlers (`/app/api/...`)
- [ ] Create proxy route for **Valorant-API.com** — fetch agent data (stats, icons, abilities)
- [ ] Implement caching/revalidation strategy for API responses (ISR or `revalidate`)
- [ ] Handle error states and loading skeletons for data-fetched pages

### "SAGE" AI Chatbot
- [ ] Integrate **Vercel AI SDK** with **Google Gemini 1.5 Pro**
- [ ] Build `/api/chat` route handler for streaming AI responses
- [ ] Craft system prompt — train SAGE persona on Valorant lore, mechanics, agent recommendations
- [ ] Implement `useChat` React hook on the frontend for real-time streaming UI
- [ ] Build chat UI with comic speech/thought bubble design:
  - Classic "tail" pointer on bubbles
  - SAGE avatar with halftone shadow styling
  - Comic sound-effect text (*WHIRRR*, *BEEP*) for typing indicator
- [ ] Add onboarding flow: SAGE asks "What is your FPS experience?" to tailor content

### Tactical Toolkit
- [ ] Build **eDPI / Sensitivity Calculator** page
  - Formula: `eDPI = Mouse DPI × In-game Sensitivity`
  - Show beginner-friendly target range (200–400 eDPI)
  - Style inputs as hand-drawn / stamped boxes, large punchy numbers
- [ ] Build **Weapon Stat Comparison** table (data from Valorant-API)
- [ ] Add comic micro-interaction on calculate — *ZAP!* / *BOOM!* flash effect

---

## 👤 Part 3 — Gourav (Agent Archive, Lore & Map Intel)
> **Focus:** Agent character pages, lore timeline, map deep-dives, and content-heavy sections.

### Agent Archive (Character Roster)
- [ ] Build agent grid view — cards styled as comic book issue covers
- [ ] Apply duotone / graphic-novel filters to agent portrait images
- [ ] Implement hover "pop-out" effect (translate + hard-edged neon drop shadow via Framer Motion)
- [ ] Build agent detail modal — framed as a double-page comic spread
  - Tabs/sections: Lore, Abilities, Stats
  - Fetch data dynamically from Valorant-API (via Sarthak's API routes)
- [ ] Add ability video previews with optimized loading

### Lore Timeline
- [ ] Build vertical-scrolling timeline component
- [ ] Design each event as a self-contained horizontal comic strip panel
- [ ] Cover core lore pillars:
  - **First Light** — the event that changed Earth
  - **Radianite** — the source of power
  - **Mirror World** — Omega Earth and agent duplicates
- [ ] Add scroll-triggered entrance animations (Framer Motion `whileInView`)

### Map Intel (Phase 3 / Stretch)
- [ ] Create map overview page with story deep-dives (e.g., Bind portal lore)
- [ ] Display basic site-hold lineups (curated images/videos)
- [ ] Style map cards in the comic-panel aesthetic

### Content & Assets
- [ ] Source / create high-quality agent artwork and map visuals
- [ ] Write or curate lore text for each agent backstory
- [ ] Prepare video assets for agent abilities and map walkthroughs
- [ ] Coordinate with Vedant for consistent comic-panel component usage

---

## 📅 Phase Roadmap

| Phase | Scope | Key Owners |
|-------|-------|------------|
| **Phase 1 (MVP)** | Project setup, Agent Archive, Basic Lore, SAGE Chatbot | All three |
| **Phase 2** | Tactical Toolkit (Sens calculator, Weapon comparison) | Sarthak + Vedant |
| **Phase 3** | Map Intel with interactive lineups | Gourav + Vedant |

---

> **Next Step:** Each person creates their branch (`vedant/...`, `sarthak/...`, `gourav/...`), picks their first `[ ]` item, and starts building! 🚀
