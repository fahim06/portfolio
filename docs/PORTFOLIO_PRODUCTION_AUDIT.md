# Portfolio Production Audit

- **Date:** 2026-08-29
- **Auditor:** Claude Code (per `PORTFOLIO_PRODUCTION_AUDIT_PROMPT.md`)
- **Branch audited:** `feat/glassmorphism` (current working state incl. glassmorphism + floating navbar)
- **Method:** every claim below was verified against repository files and runtime behavior (dev server + HTTP checks + `npm audit` + link HEAD-checks), not filenames or README claims.

## Verified application profile

| Aspect | Verified fact | Evidence |
| --- | --- | --- |
| Type | Single-page personal portfolio (scroll sections, anchors — no client router) | `src/App.jsx`, `src/sections/*` |
| Stack | Vite + React 19 (plain JS), CSS Modules, framer-motion | `package.json`, `vite.config.js` |
| Rendering | Static SPA (`dist/`) + one serverless function | `vercel.json`, `api/contact.js` |
| Backend | `/api/contact` → `server/contactHandler.js`: Nodemailer (Gmail SMTP), validation, header-injection sanitization, honeypot, in-memory rate limit (5/hr/IP), safe error surfaces | `api/contact.js`, `server/contactHandler.js`, `vite.config.js` (dev middleware) |
| Auth | None (no login/session/token code anywhere) | repo-wide grep |
| Analytics | None (no gtag/plausible/hotjar; only `localStorage["theme"]`) | grep across `src/` |
| Data collected | Contact form: name, email, message (+hidden honeypot) → email only; no database | `server/contactHandler.js`, `ContactForm.jsx` |
| SEO | Title/description/canonical/OG/Twitter in `index.html`; `public/robots.txt`, `public/sitemap.xml`; **no structured data** | `index.html`, `public/` |
| Tests/CI | Vitest+RTL (4 files/12 tests), ESLint flat config; CI: lint+test+build+Vercel, dependency-review, docker | `package.json`, `.github/workflows/` |
| External links | 7 GitHub repos + LinkedIn/Behance/X — HTTP-checked: all reachable (LinkedIn returns 405 to HEAD requests, which is its standard HEAD behavior, not a broken link) | `src/data/projects.js`, `src/config/social.js` + curl |

## Audit table

Statuses: `EXISTS_AND_ADEQUATE` · `EXISTS_NEEDS_IMPROVEMENT` · `APPLICABLE_MISSING` · `NOT_APPLICABLE` · `BLOCKED_BY_MISSING_INFORMATION`

### Portfolio / Content

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| Portfolio | Home / Landing | EXISTS_AND_ADEQUATE | `src/sections/Home.jsx` — hero, availability pill, CTAs (CV download + explore), metrics | Core page, fully functional | None |
| Portfolio | About | EXISTS_AND_ADEQUATE | `src/sections/About.jsx`, `src/data/personalInfo.js` (summary + 6 points) | Core page | None |
| Portfolio | Experience | EXISTS_AND_ADEQUATE | `src/sections/Experience.jsx` + `TimelineItem.jsx` with real `EmptyState` for placeholder roles | Core page | None |
| Portfolio | Skills / Technologies | EXISTS_AND_ADEQUATE | `src/sections/Skills.jsx`, `TechStack.jsx`, `src/data/skills.js` | Core page | None |
| Portfolio | Projects | EXISTS_AND_ADEQUATE | `src/sections/Projects.jsx`, 7 projects, live GitHub links (all HTTP-verified) | Core page | None |
| Portfolio | Project Detail / Case Study | NOT_APPLICABLE | Flagship card renders problem/solution/architecture/highlights/roadmap inline (`ProjectCard.jsx` FlagshipCard) | SPA is anchor-based with no routing system; case-study depth already exists inline; adding routed detail pages would force an architecture rewrite the spec forbids (rule 16) | None |
| Portfolio | Resume / CV | EXISTS_AND_ADEQUATE | `public/resume.pdf` (git-tracked), `src/config/resume.js`, download button in `Home.jsx:59` | Real download, verified | None |
| Portfolio | Services | NOT_APPLICABLE | No services data/section anywhere | Would require inventing service/pricing/business claims | None |
| Portfolio | Contact | EXISTS_AND_ADEQUATE | `src/sections/Contact.jsx` — working form + mailto + socials | Core page | None |
| Portfolio | Blog / Articles | NOT_APPLICABLE | No blog routes/content | Nothing published to show | None |
| Portfolio | Testimonials | NOT_APPLICABLE | No testimonial data | Inventing clients/quotes is forbidden | None |
| Portfolio | Certifications / Awards | EXISTS_AND_ADEQUATE | `src/sections/Certificates.jsx` + `src/data/certificates.js` (issuer/year data); local PDFs intentionally gitignored | Display-only by design; no fake download links | None |
| Portfolio | Publications / Speaking | NOT_APPLICABLE | No such data | Nothing to publish | None |
| Portfolio | Social / External Links | EXISTS_AND_ADEQUATE | `src/config/social.js` — 4 profiles, all HTTP-reachable, `rel="noopener noreferrer"` + aria-labels | Verified links only | None |

### Legal / Transparency

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| Legal | Privacy Policy | BLOCKED_BY_MISSING_INFORMATION | Contact form collects name/email/message (`server/contactHandler.js`) → personal data, so a policy is applicable; but retention period, jurisdiction/legal basis wording, effective date, and whether the public email may serve as the privacy contact are owner facts not present in the repo | Publishing legal claims without these facts would violate the no-invention rule | Owner to supply: retention period, jurisdiction, privacy contact, effective date. Then a factual policy can be written from the verified data inventory |
| Legal | Terms of Service | NOT_APPLICABLE | No accounts, payments, products, subscriptions, or APIs offered to users | Nothing transactional | None |
| Legal | Cookie Policy | NOT_APPLICABLE | No cookies, no tracking, no analytics; only `localStorage["theme"]` (strictly functional, set client-side) | Nothing to disclose | None |
| Legal | Cookie Preferences | NOT_APPLICABLE | No non-essential tracking exists | A consent UI without tracking would be fake | None |
| Legal | Refund / Cancellation / Shipping / Return | NOT_APPLICABLE | No commerce | No payments or goods | None |
| Legal | Disclaimer | NOT_APPLICABLE | Personal portfolio; no published advice/content needing limitation | Generic legal text forbidden | None |
| Legal | Accessibility Statement | APPLICABLE_MISSING | Verified accessible features exist in code: `SkipLink.jsx`, focus-visible styles, `prefers-reduced-motion` (MotionConfig + CSS), labeled form fields, `role="status"/"alert"` announcements, 44px touch targets | Public site; a factual statement (without conformance claims) is publishable from verified code facts | Implement `/accessibility` statement from verified features + public contact email; footer link |
| Legal | Data Processing Agreement | NOT_APPLICABLE | No processing on behalf of business customers | Not a data processor | None |
| Legal | Acceptable Use Policy | NOT_APPLICABLE | No accounts/uploads/UGC | No user interaction beyond the form | None |
| Legal | Security Policy | EXISTS_NEEDS_IMPROVEMENT | `SECURITY.md` is the unedited GitHub template ("Use this section to tell people…", fake 5.1.x version table) | Repo has a real security contact (public email in `personalInfo.js`) | Rewrite factually: supported version = current deployed `main`, reporting via the public email; remove template placeholders |
| Legal | Responsible Disclosure | EXISTS_NEEDS_IMPROVEMENT | (same file — template has no real reporting channel) | Same | Covered by the SECURITY.md rewrite |
| Legal | Community Guidelines | NOT_APPLICABLE | No comments/messaging/community features | Nothing to moderate | None |

### Contact / Interactive

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| Contact | Contact Form | EXISTS_AND_ADEQUATE | `ContactForm.jsx` → `POST /api/contact` → real Nodemailer SMTP send; verified end-to-end (dev middleware + Vercel function share `contactHandler.js`); empty-payload POST returns 400 with validation error (runtime-verified) | Operational, not mocked | None |
| Contact | Validation | EXISTS_AND_ADEQUATE | Client: required/email/min-length per field (`ContactForm.jsx`); server: same + length caps (`contactHandler.js`) | Two layers | None |
| Contact | Loading State | EXISTS_AND_ADEQUATE | `submitting` status: inputs+button disabled, spinner, `aria-busy`, double-submit guard | Real | None |
| Contact | Success State | EXISTS_AND_ADEQUATE | `role="status"`, honest message from server, form reset | Real | None |
| Contact | Submission Error State | EXISTS_AND_ADEQUATE | `role="alert"`, retry possible, entered values preserved (reset only on success) | Real | None |
| Contact | Spam Protection | EXISTS_AND_ADEQUATE | Honeypot `company` field — client fake-success + server fake-success (`contactHandler.js:55`) | Real | None |
| Contact | Rate Limiting | EXISTS_AND_ADEQUATE | 5 req/hr/IP (`contactHandler.js:1-36`) | Adequate at portfolio scale; in-memory Map resets on serverless cold start — recorded as a risk, not a defect worth a database | None (documented limitation) |
| Contact | Search / No Search Results | NOT_APPLICABLE | No search feature exists | Nothing searchable | None |
| Contact | Project Filtering | NOT_APPLICABLE | 7 projects, featured-first sort (`Projects.jsx:8`) | Filter UI unjustified at this size | None |
| Contact | Downloads | EXISTS_AND_ADEQUATE | CV: `public/resume.pdf` + `download` attribute | Verified | None |
| Contact | Newsletter / Booking | NOT_APPLICABLE | No such flows | Nothing to build | None |

### Authentication / Accounts

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| Auth | Login / Register / Verification / Password reset / Onboarding / Settings / Session Expired | NOT_APPLICABLE | Repo-wide: no auth code, no sessions, no tokens, no user model | Public site with no accounts | None |

### UX / System States

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| UX | 404 / Unknown Route | APPLICABLE_MISSING | `vercel.json` has no rewrites; SPA renders only `/`; unknown production paths get Vercel's generic error, and if index is served there is no not-found UI in `App.jsx` | Real gap: any mistyped/deep URL | Implement: catch-all rewrite in `vercel.json` + pathname check in `App.jsx` → branded NotFound with recovery links + `noindex`; add test |
| UX | 403 / Permission Denied | NOT_APPLICABLE | No authorization anywhere | Nothing to deny | None |
| UX | 500 / Unexpected Failure | APPLICABLE_MISSING | No React error boundary — a render crash = blank page | The SPA equivalent of a 500 state | Implement root `ErrorBoundary` with reload/recovery UI (no stack traces); add test |
| UX | Maintenance | NOT_APPLICABLE | No maintenance mode/config exists | Hardcoding a fake maintenance system is forbidden | None |
| UX | Offline | NOT_APPLICABLE | Static content; no service worker; network failure in the form is already handled by the error state | A synthetic offline banner would be fake | None |
| UX | Empty State | EXISTS_AND_ADEQUATE | `EmptyState.jsx` used by `TimelineItem.jsx:26` for placeholder roles | Real usage | None |
| UX | Loading State | EXISTS_AND_ADEQUATE | Suspense fallbacks with reserved height (`App.jsx:17-26`), form submitting state | Real | None |
| UX | Error State | APPLICABLE_MISSING | (see 500 — no app-level error UI) | Same | Covered by ErrorBoundary |
| UX | Success State | EXISTS_AND_ADEQUATE | Contact form success | Real | None |

### SEO / Discoverability

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| SEO | Page Titles / Meta Descriptions | EXISTS_AND_ADEQUATE | `index.html:14-18`, matches `src/config/site.js` | Present and accurate | None |
| SEO | Canonical URLs | EXISTS_AND_ADEQUATE | `index.html:38` → `https://fahimyusuf.com.bd/` (matches deployed URL) | Correct absolute | None |
| SEO | Open Graph | EXISTS_NEEDS_IMPROVEMENT | `index.html:28` — `og:image` is **relative** (`/images/fahim-hero.png`); scrapers require absolute URLs → broken link previews | Real defect | Fix to absolute URL in `index.html` + `site.js` |
| SEO | Twitter/X Cards | EXISTS_AND_ADEQUATE | `index.html:29-37` | Present | Inherits og:image fix |
| SEO | Sitemap / Robots | EXISTS_AND_ADEQUATE | `public/sitemap.xml` (single URL), `public/robots.txt` (allow all + sitemap ref) | Correct for a one-page site | None |
| SEO | Structured Data | APPLICABLE_MISSING | No JSON-LD anywhere | Verified identity data exists (`personalInfo.js`, `social.js`) → Person + WebSite schema can be added without invention | Add JSON-LD from verified data only |
| SEO | Semantic Headings | EXISTS_AND_ADEQUATE | All 10 sections `aria-labelledby` + `SectionHeader` h2 hierarchy | Verified | None |
| SEO | Image Alt Text | EXISTS_AND_ADEQUATE | `SmartImage` alts from data (`personalInfo.js`), decorative icons `aria-hidden` | Verified | None |
| SEO | Internal Linking / Indexability / Favicon | EXISTS_AND_ADEQUATE | Nav anchors + CTAs; robots allow + canonical; `public/favicon.svg` + `theme-color` | Verified | None |
| SEO | Social Preview Images | EXISTS_NEEDS_IMPROVEMENT | Same og:image defect | Same | Same fix |
| SEO | Web App Manifest | NOT_APPLICABLE | No PWA behavior; favicon + theme-color already present | A manifest adds nothing real here | None |

### Accessibility

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| A11y | Semantic HTML / Headings / Skip Nav / Focus / Reduced Motion / Touch Targets / Alt Text | EXISTS_AND_ADEQUATE | `SkipLink.jsx` in `RootLayout.jsx:13`; `:focus-visible` styles; `MotionConfig reducedMotion="user"` + CSS media queries; 44px targets (`BackToTop`, `menuBtn`, socials); landmarks (`main`, sections) | All verified in code | None |
| A11y | Form Labels / Error Messaging | EXISTS_NEEDS_IMPROVEMENT | Labels tied via `htmlFor` ✓, errors `role="alert"` ✓ — **but** inputs lack `aria-invalid` and errors are not linked via `aria-describedby` | Real SR gap | Wire `aria-invalid` + `aria-describedby` in `ContactForm.jsx`; extend tests |
| A11y | Color Contrast | EXISTS_AND_ADEQUATE (manual math) | Glass tokens worst-case computed this session: body 10:1 dark / 13.8:1 light; CTA 5.2:1 / 4.74:1 | Math-verified AA; no automated tool run (recorded NOT_RUN) | None |
| A11y | Dialog Accessibility | EXISTS_AND_ADEQUATE | Dropdown menus: outside-click + Escape (`useClickOutside`), `aria-expanded`, focus return to trigger (`Header.jsx:31-39`) | Verified | None |
| A11y | Automated checker (axe/Lighthouse) | NOT_RUN | No such tooling in repo; not run in this environment (CLI-only) | — | Record as limitation |

### Performance

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| Perf | Code Splitting / Route Loading | EXISTS_AND_ADEQUATE | All sections lazy except Home; Suspense fallback reserves 40vh (anti-CLS) (`App.jsx`) | Verified | None |
| Perf | Image Lazy Loading / Dimensions | EXISTS_AND_ADEQUATE | `SmartImage` `loading="lazy"` + width/height attrs + jpg fallback | Verified | None |
| Perf | Font Loading | EXISTS_NEEDS_IMPROVEMENT | Inter/JetBrains self-hosted via `@fontsource` (`main.jsx`) — but brand font loads via render-blocking Google Fonts CSS (`index.html:6-11`) | Inconsistent + third-party request + render-blocking | Migrate Comforter Brush to `@fontsource/comforter-brush@5.3.0` (exists, matches existing pattern) |
| Perf | Bundle / Third-Party Scripts | EXISTS_AND_ADEQUATE | 112KB gzip index incl. framer-motion; no analytics/tracking scripts | Fine for scope | None |
| Perf | Caching / Layout Shift / Animation Cost | EXISTS_AND_ADEQUATE | Static assets on Vercel CDN; transform/opacity animations; reserved Suspense height | Verified | None |

### Security

| Category | Page or state | Status | Evidence | Applicability reason | Required action |
| --- | --- | --- | --- | --- | --- |
| Sec | XSS / Unsafe HTML | EXISTS_AND_ADEQUATE | Zero `dangerouslySetInnerHTML`/`innerHTML` in `src/` (grep-verified); email HTML built with escaping | Verified | None |
| Sec | Unsafe URL Handling / Open Redirects | EXISTS_AND_ADEQUATE | All external links `rel="noopener noreferrer"`; no redirect handling exists | Verified | None |
| Sec | Exposed / Client-Side Secrets | EXISTS_AND_ADEQUATE | Only `.env.example` tracked; `.env*` gitignored; `EMAIL_*` read server-side only (no `VITE_` prefix) | Verified | None |
| Sec | Form Input Validation / Backend Validation | EXISTS_AND_ADEQUATE | See contact rows — server validates all fields + lengths | Verified | None |
| Sec | API Authorization / CSRF / CORS / Sessions | NOT_APPLICABLE | Public single-endpoint API, cookie-less, no ACAO headers (cross-origin reads blocked by same-origin policy); no sessions | Nothing to authorize | None |
| Sec | Rate Limiting | EXISTS_AND_ADEQUATE | 5/hr/IP (cold-start caveat recorded in risks) | Adequate | None |
| Sec | Safe Error Handling | EXISTS_AND_ADEQUATE | Client gets generic messages; internals only to server console (`contactHandler.js:97,157`) | Verified | None |
| Sec | Dependency Vulnerabilities | EXISTS_NEEDS_IMPROVEMENT | `npm audit`: **high** `brace-expansion` (fixable non-breaking) + **moderate** `esbuild`/`vite` via `vitest@2` (fix = vitest@4 major — deliberately held per repo CLAUDE.md Dependabot policy) | Real findings | `npm audit fix` (non-breaking); document the vitest-major hold as a risk |
| Sec | File Upload Security | NOT_APPLICABLE | No uploads | — | None |

## Missing owner information (consolidated)

Facts that cannot be safely determined from the repository; none were guessed:

1. **Privacy policy inputs:** data retention period, jurisdiction, privacy-contact email (public email exists but its use for privacy requests is an owner decision), policy effective date.
2. **Security policy inputs:** preferred vulnerability-reporting channel beyond the public email (e.g., whether GitHub private vulnerability reporting is enabled on the repo).
3. Whether the owner wants a **web app manifest / PWA** ambitions (assumed none).

## Implementation plan (applicable, unblocked items)

1. Fix `og:image` → absolute URL (`index.html`, `src/config/site.js`).
2. Add Person + WebSite JSON-LD from verified data (`index.html`).
3. 404: catch-all rewrite (`vercel.json`) + pathname guard in `App.jsx` → branded NotFound, `noindex`, recovery links; test.
4. 500/error: root `ErrorBoundary` with recovery UI; test.
5. ContactForm a11y: `aria-invalid` + `aria-describedby`; test.
6. Self-host Comforter Brush via `@fontsource/comforter-brush`; drop Google Fonts links.
7. Factual `SECURITY.md` rewrite (public email, current version).
8. `/accessibility` statement from verified features; footer link; reachable via the new pathname guard.
9. `npm audit fix` (non-breaking only).

Deliberately **not** implemented (with reasons): privacy policy (blocked), manifest (N/A), offline/maintenance/403 (N/A), search/filtering/blog/services/testimonials (N/A), vitest@4 forced upgrade (repo policy).

## Verification results (post-implementation, 2026-08-29)

| Check | Command or method | Result |
| --- | --- | --- |
| Lint | `npm run lint` | PASSED — 0 errors |
| Unit/component tests | `npm test` | PASSED — 7 files, 21 tests (12 pre-existing + 9 new: 4 routing, 2 boundary, 3 contact form) |
| Production build | `npm run build` | PASSED — built in 852ms; JSON-LD present (1 block) and absolute `og:image` confirmed in `dist/index.html` |
| Dependency audit | `npm audit` | PARTIAL — high `brace-expansion` fixed via non-breaking `npm audit fix`; moderate esbuild (dev-server-only advisory) remains, fix requires vitest@4 major held by repo policy |
| Route serving | `npm run preview` + curl | PASSED — `/`, `/accessibility`, unknown paths all serve the SPA (200); `/resume.pdf` serves the file directly; rendered views covered by route tests |
| Formatter (Prettier) | — | NOT_RUN — `.prettierrc` exists but prettier is not installed as a dependency or script |
| Type checker | — | NOT_APPLICABLE — plain JavaScript project |
| Automated a11y (axe/Lighthouse) | — | NOT_RUN — no such tooling in repo; CLI-only environment |
| Browser/emulator manual pass | — | NOT_RUN — dev server available at `:3000` for owner verification |

## Implementation record

| Item | Commit |
| --- | --- |
| Audit document | `b40449e` |
| Absolute og:image + JSON-LD | `7dc89a7` |
| 404 + /accessibility + footer link + tests | `10840b1` |
| Root ErrorBoundary + test | `7c778ac` |
| ContactForm aria wiring + tests | `b86dea0` |
| Self-hosted Comforter Brush | `d53f076` |
| SECURITY.md + audit fix | `b8c780b` |
