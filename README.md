# Fahim Yusuf — Portfolio

A personal portfolio for **Fahim Yusuf — Software Engineer & ML Enthusiast**, built with an original **Olive Gray** design system on **Vite + React (JavaScript)**. No TypeScript, no UI framework — just hand-crafted CSS and subtle motion.

## Stack

- **Vite** — fast dev server & build
- **React 19** — functional components & hooks (`.jsx`, no TypeScript)
- **framer-motion** — subtle fade/slide/stagger animations
- **Hand-crafted CSS** — CSS Modules + custom-property design tokens (no Tailwind)
- **@fontsource/inter** & **@fontsource-variable/jetbrains-mono** — self-hosted typography

## Scripts

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:3000
npm run build      # production build → dist/
npm run preview    # preview the production build
npm test           # run Vitest suite (8 tests)
npm run lint       # ESLint
```

## Design

An original **Olive Gray** palette defined as CSS custom properties (sophisticated, low-saturation greens on near-black):

- Background `#111312` · Card `#222624` · Border `#343A36`
- Primary accent `#7C8C58` · Accent hover `#91A56A` · Muted olive `#59634F`
- Primary text `#F7F7F5` · Secondary `#C5C8C2` · Muted `#8E948B`

Themes: **Dark / Light / System** — selected via the header toggle and persisted to `localStorage`.

## Structure

```text
src/
├── App.jsx              # page composition
├── main.jsx             # entry point
├── components/          # reusable UI (Button, Card, Header, Footer, …)
├── sections/            # page sections (Home, About, Skills, Projects, …)
├── layouts/             # layout shells
├── hooks/               # custom hooks
├── data/                # site content (content.js)
├── constants/           # static constants
├── styles/              # global styles & design tokens
└── utils/               # helpers
public/                  # static assets (CV, icons)
```

## Deploy

### Vercel (recommended)

Push to GitHub and import the repo in [Vercel](https://vercel.com) — the Vite preset is auto-detected; no extra config needed.

### Docker

```bash
docker compose up -d --build
```

The app is served by nginx at **http://localhost:8080**.

---

MIT License — © Fahim Yusuf. See [LICENSE](LICENSE).
