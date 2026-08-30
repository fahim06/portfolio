# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-08-30

### Added

- Site-wide glassmorphism design system with tiered transparency (chrome / container / control surfaces), tokenized blur recipes, and solid fallbacks for `prefers-reduced-transparency`.
- Floating segmented navbar: glass pill containers (brand, nav links, live date, theme), hash-synced section URLs, and cross-page navigation from standalone pages.
- Branded 404 page, `/accessibility` statement, and a root error boundary with recovery screen.
- Dribbble and Upwork profiles; grouped "Connect & Work With Me" section in Contact.
- Automated accessibility gate: axe scans in the test suite; Person/WebSite JSON-LD; absolute Open Graph image; self-hosted fonts (Inter variable, Comforter Brush).
- CI: Prettier format check, PR coverage for `dev`, Vercel preview deploys on PRs, Node 22.

### Changed

- Hero/about portraits converted to WebP (3.2 MB → 121 KB); LCP 13.6 s → ~4 s.
- Security policy rewritten from the template to factual content; high-severity `npm audit` finding fixed.
- Contact form errors wired to inputs (`aria-invalid`, `aria-describedby`).

## [Unreleased]

### Pending

- Fill in the SkyTech experience entry with full role details and achievements.
- Populate the **Certificates** section (issuers, dates, credential links).
- Wire the optional `VITE_SITE_URL` into SEO / Open Graph meta tags.
- Address outstanding `npm audit` advisories where feasible.
- Optionally add a blog or per-project detail routes.

## [1.0.0] - 2026-07-13

### Added

- Original **Olive Gray** design system as CSS custom-property design tokens
  (`src/styles/tokens.css`).
- **Editorial Index Rail** layout — a sticky left rail of section numbers acting
  as both navigation and a scroll-spy table of contents.
- **Dark / Light / System** theme with a three-way toggle in the header and a
  FOUC-safe inline boot script in `index.html`.
- Ten sections: Home, About, Skills, Experience, Projects, Education,
  Certificates, Tech Stack, Resume, Contact.
- `mailto:`-based contact form (no backend, no third-party services).
- Accessibility: skip link, semantic landmarks, `:focus-visible`, `aria-*` on
  interactive controls, and `prefers-reduced-motion` support.
- Subtle fade / slide / stagger animations via `framer-motion`.
- Self-hosted typography: Inter + JetBrains Mono via `@fontsource`.
- **Vitest** logic-level unit tests (`clsx`, `mailto`, `useTheme`).
- **Docker** support: production (multi-stage build served by nginx) and an
  opt-in dev profile with live source mount and hot reload.
- GitHub Actions CI: lint, test, build, and Vercel preview/production deploys.
- Community files: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, issue templates,
  and a PR template.

### Changed

- Migrated the project from **Next.js + TypeScript** to **Vite + React 19
  (plain JavaScript)** — removed all TypeScript config, types, and `.ts(x)`
  files.

[Unreleased]: https://github.com/fahim06/portfolio/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/fahim06/portfolio/releases/tag/v1.0.0
