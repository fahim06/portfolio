# Contributing

Thanks for your interest in contributing to this portfolio! This is a small, opinionated project, so the guidelines below keep things consistent.

## Getting started

1. **Fork** the repository and clone your fork.
2. Create a branch from the relevant base branch (`main` for production fixes, `dev` for ongoing work):
   - `feat/<short-description>` for new features
   - `fix/<short-description>` for bug fixes
   - `chore/<short-description>` for tooling, deps, docs
3. Install dependencies (Node.js 20+):

   ```bash
   npm install
   ```

4. Start the dev server:

   ```bash
   npm run dev   # http://localhost:3000
   ```

## Project conventions

This project is intentionally minimal. Please respect these constraints:

- **JavaScript only.** Use `.js` / `.jsx`. **Do not** introduce TypeScript, type annotations, `tsconfig.json`, or `.ts(x)` files. This is a hard rule.
- **No CSS frameworks.** Styling uses **CSS Modules** + custom-property design tokens defined in `src/styles/tokens.css`. Do not add Tailwind, styled-components, or similar.
- **No router / no backend.** The site is a single page with smooth-scroll sections. Don't add a client-side router unless a feature truly requires it.
- **Keep content separate.** Copy and data live in `src/data/`; site/nav/social config in `src/config/`. Don't hardcode content into components.
- **Subtle motion only.** Animations use `framer-motion` and must respect `prefers-reduced-motion`.
- **Originality.** This is an original **Olive Gray** design. Don't introduce layouts, colors, or typography copied from elsewhere.

## Before you open a PR

Run all three and make sure they pass:

```bash
npm test          # Vitest logic tests
npm run lint      # ESLint
npm run build     # production build
```

Then:

1. Rebase onto the latest base branch to keep history clean.
2. Fill in the [PR template](.github/PULL_REQUEST_TEMPLATE.md) — summary, motivation, changes, and screenshots (for UI changes).
3. Keep PRs focused: one logical change per PR is easier to review and land.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add certificates credential links
fix: prevent theme flash on first paint
chore: bump vitest
refactor: extract scroll helper
docs: clarify Docker usage
```

Keep commits small and self-contained.

## Issue & PR etiquette

- Search existing issues/PRs before opening a new one.
- For questions, use [GitHub Discussions](https://github.com/fahim06/portfolio/discussions) rather than an issue.
- Be respectful — interactions are governed by the [Code of Conduct](CODE_OF_CONDUCT.md).

Thanks again for contributing!
