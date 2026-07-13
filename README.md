# Fahim Yusuf — Portfolio

A personal portfolio for **Fahim Yusuf — Software Engineer & ML Enthusiast**, built with an original **Olive Gray** design system on **Vite + React 19 (JavaScript)**. No TypeScript, no UI framework — hand-crafted CSS Modules, custom-property design tokens, and subtle motion.

[![CI](https://github.com/fahim06/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/fahim06/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-7C8C58.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-91A56A.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.x-59634F.svg)](https://vitejs.dev)

---

## Overview

This repository is Fahim Yusuf's portfolio — a single-page React application for an ML/software engineer. It communicates: *"I build software with precision."*

- **Design system** — an original **Olive Gray** palette: sophisticated, low-saturation greens on near-black. No blue accents, no purple.
- **Layout** — an original **Editorial Index Rail**: a sticky left rail of section numbers that acts as both navigation and a table of contents, paired with a vertical flow of modular content blocks. Not a bento grid, not a conventional nav.
- **Theming** — **Dark / Light / System** modes, FOUC-safe (the resolved theme is applied before first paint via an inline script and persisted to `localStorage`).
- **10 sections** — Home, About, Skills, Experience, Projects, Education, Certificates, Tech Stack, Resume, Contact.
- **Original work** — entirely original design, layout, typography, and copy. Not a clone or imitation of any reference.

## Features

- **Dark / Light / System theme** — three-way toggle with system-preference tracking; FOUC-safe inline boot script.
- **Responsive** — fluid from 320px to ultra-wide; no horizontal overflow, no layout breakage.
- **Accessible** — semantic landmarks, skip link, `:focus-visible` rings, `aria-*` on interactive controls, and `prefers-reduced-motion` support that dampens animation.
- **Subtle motion** — fade/slide/stagger via `framer-motion`, respectful of reduced-motion.
- **Editorial Index Rail** — sticky section index that doubles as scroll-spy navigation.
- **`mailto:` contact** — form opens a pre-filled email; no backend, no third-party services, no data leaves the browser.
- **Self-hosted typography** — Inter + JetBrains Mono via `@fontsource` (no Google Fonts request).
- **Original design** — conceived from scratch; intentionally distinct from any inspiration.

## Technology Stack

| Layer            | Choice                                                  |
| ---------------- | ------------------------------------------------------- |
| Build tool       | **Vite**                                                |
| UI               | **React 19** — functional components & hooks (`.jsx`)   |
| Animation        | **framer-motion** — subtle fade / slide / stagger       |
| Styling          | **CSS Modules** + custom-property design tokens         |
| Fonts            | `@fontsource/inter`, `@fontsource-variable/jetbrains-mono` |
| Testing          | **Vitest** — logic-level unit tests                     |
| Linting          | **ESLint** (`eslint-plugin-react`, `-react-hooks`)      |

> **No** TypeScript, **no** Tailwind / UI kit, **no** backend, **no** router (single page with smooth-scroll sections).

## Architecture Overview

A single-page application with no client-side router — each section is a scroll target linked by smooth-scroll anchors. `App.jsx` composes ten section components inside `RootLayout`, which renders the `Header`, the sticky `IndexRail`, a `<main>` landmark, and the `Footer`.

Theming is provided by `ThemeProvider` (in `src/hooks/useTheme.jsx`) wrapping the app in `main.jsx`. A small FOUC-safe inline script in `index.html` applies the resolved theme to `<html>` before React mounts, so there is no flash of the wrong theme on load. Content is fully separated from presentation: all copy lives in `src/data/`, all site/navigation/social/theme configuration in `src/config/`, and components stay presentational.

## Folder Structure

```text
portfolio/
├── public/                     # static assets — favicon.svg, images/, resume.pdf
├── index.html                  # HTML shell + FOUC-safe theme boot script
├── vite.config.js              # Vite config (dev server on port 3000)
├── vitest.config.js            # Vitest config
├── eslint.config.mjs           # ESLint flat config
├── Dockerfile                  # multi-stage build → nginx serving dist/
├── Dockerfile.dev              # Vite dev container
├── docker-compose.yml          # prod (web) + opt-in dev (profile: dev)
└── src/
    ├── App.jsx                 # page composition (10 sections)
    ├── main.jsx                # entry point — fonts, tokens, ThemeProvider
    ├── components/
    │   ├── ui/                 # Button, Card, Tag, Icon, Reveal, SectionHeader,
    │   │                       # BackToTop, SkipLink, EmptyState
    │   ├── layout/             # Header, Footer, IndexRail, ThemeToggle
    │   └── forms/              # MailtoForm (mailto: contact form)
    ├── sections/               # Home, About, Skills, Experience, Projects,
    │                           # Education, Certificates, TechStack, Resume, Contact
    ├── layouts/                # RootLayout — Header + IndexRail + main + Footer
    ├── hooks/                  # useTheme (+ThemeProvider), useScrollSpy,
    │                           # usePrefersReducedMotion
    ├── config/                 # site, navigation, social, theme, resume config
    ├── contexts/               # (reserved for future React contexts)
    ├── data/                   # personalInfo, skills, experience, projects,
    │                           # education, engineeringValues
    ├── styles/                 # tokens.css (design tokens), base.css (reset/base)
    └── utils/                  # clsx, mailto, scroll helpers
```

## Installation

```bash
git clone https://github.com/fahim06/portfolio.git
cd portfolio
npm install
```

**Requirements:** Node.js 20+ (matches CI) and npm.

## Development

```bash
npm run dev
```

Starts the Vite dev server at **http://localhost:3000** with hot-module replacement (HMR) — edits to `src/` reload instantly in the browser.

## Docker Usage

Two compose services are defined in `docker-compose.yml`:

**Production** — builds the app and serves the static build via nginx:

```bash
docker compose up --build
# → http://localhost:8080
```

**Development** — Vite dev server with live source mount and hot reload (opt-in profile):

```bash
docker compose --profile dev up --build
# → http://localhost:5173
```

## Environment Variables

None are required — this is a static SPA. One optional variable is supported:

| Variable        | Required | Description                                                        |
| --------------- | -------- | ------------------------------------------------------------------ |
| `VITE_SITE_URL` | no       | Canonical deployed URL, for SEO / Open Graph tags if wired up.     |

See [`.env.example`](.env.example). Never commit real secrets; `.env*` files are gitignored except the example.

## Build

```bash
npm run build      # type/transform-free production build → dist/
npm run preview    # serve the production build locally for verification
```

## Testing & Linting

```bash
npm test           # Vitest — logic-level unit tests (clsx, mailto, useTheme, …)
npm run lint       # ESLint over src/
```

Tests deliberately cover pure logic (data utilities, the theme reducer, mailto composition) rather than DOM snapshots, to stay fast and resilient.

## Deployment

**Vercel (recommended)** — push to GitHub and import the repo in [Vercel](https://vercel.com). Vite is auto-detected, but set the project's **Framework Preset to *Vite*** to be explicit (the CI workflow already deploys to Vercel on pushes to `main` and creates preview deployments from `dev`).

**Docker** — the `web` service in `docker-compose.yml` produces a self-contained nginx container suitable for any host.

## Screenshots

<!-- add screenshots here -->

_Screenshots of the Home section, Index Rail, light/dark themes, and a project card will be added here._

## License

MIT — © Fahim Yusuf. See [LICENSE](LICENSE).

## Author

**Fahim Yusuf** — Software Engineer & ML Enthusiast

- GitHub: [@fahim06](https://github.com/fahim06)
- LinkedIn: [fahim-yusuf](https://www.linkedin.com/in/fahim-yusuf)
- Email: [fahim.yusuf06@gmail.com](mailto:fahim.yusuf06@gmail.com)

## Future Improvements

- Fill in the SkyTech experience entry with full role details and achievements.
- Populate the **Certificates** section with issuers, dates, and credential links.
- Wire the optional `VITE_SITE_URL` into SEO / Open Graph meta tags in `index.html`.
- Optionally add a blog or per-project detail routes (would require a router).
- Address outstanding `npm audit` advisories where feasible.
