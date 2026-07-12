import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Inline PostCSS config so Vitest does not auto-load the leftover
  // Next.js/Tailwind `postcss.config.mjs` (removed in Task 20). Its
  // `@tailwindcss/postcss` plugin is no longer installed and would crash
  // `npm test`. Mirrors the same override in vite.config.js.
  css: { postcss: { plugins: [] } },
  test: { environment: 'node', globals: true },
});
