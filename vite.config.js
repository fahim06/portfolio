import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, open: true },
  // Inline PostCSS config so Vite does not auto-load the leftover
  // Next.js/Tailwind `postcss.config.mjs` (removed in Task 20). Its
  // `@tailwindcss/postcss` plugin is no longer installed and would break the build.
  css: { postcss: { plugins: [] } },
});
