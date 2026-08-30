# Fahim Yusuf — Portfolio

A personal portfolio for **Fahim Yusuf — Software Engineer & ML Enthusiast**, built with an original **Olive Gray** design system on **Vite + React 19 (JavaScript)**. No TypeScript, no UI framework — hand-crafted CSS Modules, custom-property design tokens, layered mesh-gradient atmospheres, and tasteful motion.

[![CI](https://github.com/fahim06/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/fahim06/portfolio/actions/workflows/ci.yml)
[![Docker](https://github.com/fahim06/portfolio/actions/workflows/docker.yml/badge.svg)](https://github.com/fahim06/portfolio/actions/workflows/docker.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-7C8C58.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-91A56A.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.x-59634F.svg)](https://vitejs.dev)

---

## Overview

A single-page React portfolio for an ML / software engineer — designed to feel like a premium digital product rather than a template.

- **Design system** — an original **Olive Gray** identity (olive, sage, emerald, warm gold, muted cyan) on a deep, layered background: a fixed mesh-gradient atmosphere with slowly drifting blurred blobs, a subtle film-grain, glass cards with gradient borders, and tasteful motion throughout.
- **Navigation** — a sticky, blur-on-scroll top navbar with section links (scroll-spy active state), a premium Dark / Light / System **theme dropdown**, and a mobile menu. Smooth-scroll anchors, no client-side router.
- **Theming** — Dark / Light / System, FOUC-safe (the resolved theme is applied before first paint via an inline script and persisted to `localStorage`). Each theme is designed independently.
- **10 sections** — Home, About, Skills, Experience, Projects, Education, Certificates, Achievements, Tech Stack, Contact.
- **Contact backend** — the contact form posts to a **Nodemailer** endpoint (`/api/contact`) that delivers email over Gmail SMTP. Works in production on Vercel and locally via a Vite dev middleware.
- **Original work** — entirely original design, layout, typography, and copy.

## Features

- **Dark / Light / System theme** — accessible WAI-ARIA dropdown (keyboard nav, Esc / outside-click close, persistence).
- **Premium hero** — pulsing availability indicator, gradient name, metric tiles, floating tech badges, glass portrait card with an animated gradient ring, staggered entrance.
- **Project showcase** — the NeuroLens flagship renders as an oversized case study with an animated multi-hue gradient border and spotlight glow.
- **Layered motion** — fade / slide / scale / blur reveals, mouse-follow card spotlight, scroll-progress bar, drifting atmosphere — all GPU-friendly and all respect `prefers-reduced-motion`.
- **Responsive** — fluid from 320px to ultra-wide; no horizontal overflow.
- **Accessible** — WCAG 2.2 AA color contrast (both themes), semantic landmarks, skip link, `:focus-visible` rings, full keyboard support, reduced-motion paths.
- **Secure contact form** — client + server validation, header-injection sanitization, rate limiting, and a honeypot.
- **Lazy-loaded** — below-the-fold sections are code-split for a small initial payload.

## Technology Stack

| Layer      | Choice                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------- |
| Build tool | **Vite**                                                                                  |
| UI         | **React 19** — functional components & hooks (`.jsx`)                                     |
| Animation  | **framer-motion** — reveal / spotlight / entrance                                         |
| Styling    | **CSS Modules** + custom-property design tokens                                           |
| Fonts      | `@fontsource/inter`, `@fontsource-variable/jetbrains-mono` + Comforter Brush (brand only) |
| Contact    | **Nodemailer** (Gmail SMTP) — Vercel function + Vite dev middleware                       |
| Testing    | **Vitest** + **React Testing Library** (unit + component smoke)                           |
| Linting    | **ESLint** (`eslint-plugin-react`, `-react-hooks`)                                        |
| Deploy     | **Vercel** (static SPA + serverless `/api/contact`)                                       |

> **No** TypeScript, **no** Tailwind / UI kit, **no** client-side router.

## Architecture Overview

A single-page application — each section is a scroll target linked by smooth-scroll anchors. `App.jsx` lazy-loads the below-the-fold sections (Home is eager) and composes them inside `RootLayout`, which renders the `Atmosphere`, `ScrollProgress`, `Header` (navbar + theme dropdown), `<main>`, `Footer`, and `BackToTop`.

Theming comes from `ThemeProvider` (`src/hooks/useTheme.jsx`) wrapping the app in `main.jsx`, with a FOUC-safe inline script in `index.html` setting the resolved theme before React mounts. Content is separated from presentation: copy in `src/data/`, configuration in `src/config/`, components presentational.

The contact form (`src/components/forms/ContactForm.jsx`) POSTs JSON to `/api/contact`, handled by `api/contact.js` (Vercel serverless function) which calls the shared `server/contactHandler.js` (validation, sanitization, rate limiting, Nodemailer). For local dev, the same handler is mounted as Vite middleware in `vite.config.js`, so `npm run dev` exercises the real backend.

## Folder Structure

```text
portfolio/
├── api/contact.js            # Vercel serverless function (POST /api/contact)
├── server/contactHandler.js  # shared Nodemailer handler (validation/sanitize/rate-limit)
├── scripts/sync-vercel-env.sh# push EMAIL_* from .env.local → Vercel project env
├── public/                   # favicon.svg, robots.txt, sitemap.xml, resume.pdf, images/
├── index.html                # HTML shell + FOUC-safe theme boot script
├── vite.config.js            # Vite config + dev /api/contact middleware
├── vitest.config.js          # Vitest config (jsdom + setup)
├── eslint.config.mjs         # ESLint flat config
├── Dockerfile                # dev image (Vite dev server + healthcheck)
├── Dockerfile.prod           # production image (multi-stage → nginx serving dist/)
├── docker-compose.yml        # dev service (HMR, bind mount, port 3000)
└── src/
    ├── App.jsx               # page composition (lazy sections)
    ├── main.jsx              # entry — fonts, tokens, ThemeProvider, MotionConfig
    ├── components/
    │   ├── ui/               # Button, Card, Tag, Icon, Reveal, SectionHeader,
    │   │                     # BackToTop, SkipLink, EmptyState, Atmosphere, ScrollProgress
    │   ├── layout/           # Header, Footer, ThemeToggle
    │   └── forms/            # ContactForm (Nodemailer)
    ├── sections/             # Home, About, Skills, Experience, Projects, Education,
    │                         # Certificates, Achievements, TechStack, Contact
    ├── layouts/              # RootLayout
    ├── hooks/                # useTheme(+Provider), useScrollSpy, useScrolled,
    │                         # useScrollProgress, usePrefersReducedMotion, useClickOutside
    ├── config/               # site, social, theme, resume
    ├── data/                 # personalInfo, skills, experience, projects, education,
    │                         # certificates, achievements
    ├── styles/               # tokens.css (design tokens), base.css (reset/base)
    ├── utils/                # clsx, scroll helpers
    └── test/setup.js         # jsdom polyfills (matchMedia, IntersectionObserver)
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

Starts the Vite dev server at **http://localhost:3000** with HMR. The dev middleware exposes `POST /api/contact` locally (reads `EMAIL_*` from `.env.local`).

## Environment Variables

The contact form needs server-side SMTP credentials (no `VITE_` prefix — they are never shipped to the browser). Copy `.env.example` → `.env.local` and fill in:

| Variable     | Required | Description                                                |
| ------------ | -------- | ---------------------------------------------------------- |
| `EMAIL_USER` | yes\*    | Gmail address that sends the mail                          |
| `EMAIL_PASS` | yes\*    | Gmail **App Password** (not your normal password)          |
| `EMAIL_TO`   | no       | Inbox that receives submissions (defaults to `EMAIL_USER`) |

\* Required for the contact form to deliver; the app builds and runs without them (the form shows a clear "not configured" message).

For **production on Vercel**, add the same three under Project → Settings → Environment Variables (or run `bash scripts/sync-vercel-env.sh` after `vercel login`), then redeploy. See [`.env.example`](.env.example). Never commit real secrets — `.env*` is gitignored except the example.

## Build & Test

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm test           # Vitest — unit + App smoke tests
npm run lint       # ESLint
```

## Docker

**Development** (Vite dev server with HMR + healthcheck):

```bash
docker compose up --build
# → http://localhost:3000
```

**Production** (self-contained nginx static image; frontend only — the `/api/contact` backend runs on Vercel):

```bash
docker build -f Dockerfile.prod -t portfolio-prod .
docker run -p 8080:80 portfolio-prod
# → http://localhost:8080
```

## Deployment

**Vercel (recommended)** — import the repo in [Vercel](https://vercel.com); Vite is auto-detected and `api/contact.js` is picked up as a serverless function automatically. Set the `EMAIL_*` env vars (above) and deploy. The CI workflow also deploys to Vercel on pushes to `main` (production) and `dev`/PRs (preview).

## GitHub Actions

- **ci.yml** — lint + test + build, then Vercel production/preview deploys (Node cache, build artifact upload).
- **codeql.yml** — JavaScript security analysis (weekly).
- **dependency-review.yml** — blocks high/critical dependency vulnerabilities on PRs.
- **docker.yml** — builds the dev image and runs an HTTP-200 smoke test.

## License

MIT — © Fahim Yusuf. See [LICENSE](LICENSE).

## Author

**Fahim Yusuf** — Software Engineer & ML Enthusiast

- GitHub: [@fahim06](https://github.com/fahim06)
- LinkedIn: [fahim06](https://www.linkedin.com/in/fahim06)
- Email: [fahim.yusuf06@gmail.com](mailto:fahim.yusuf06@gmail.com)

## Future Improvements

- Add end-to-end tests (Playwright) covering navigation, theme switching, and the contact flow.
- Run a bulk `prettier --write` pass to fully normalize formatting (config is in place).
- Capture Lighthouse scores on the Vercel deployment and tune if needed.
- Optionally add per-project detail routes (would require a router).
