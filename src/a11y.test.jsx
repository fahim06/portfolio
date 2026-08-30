import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { afterEach, describe, expect, it } from "vitest";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import App from "./App.jsx";

// Automated accessibility check via axe-core against the jsdom DOM.
// jsdom has no layout engine, so color-contrast rules come back
// "incomplete" rather than pass/fail — everything else (semantics,
// ARIA, names, structure, roles) runs for real.
expect.extend(toHaveNoViolations);

function goTo(path) {
  window.history.pushState({}, "", path);
}

async function renderForAxe(path, waitFor) {
  goTo(path);
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
  // Cold CI runners stream lazy chunks slowly — the contact button is the
  // last of nine sections, so allow generous time for everything to mount.
  if (waitFor) await screen.findByRole(...waitFor, { timeout: 8000 });
  return axe(document.body);
}

afterEach(() => {
  goTo("/");
});

describe("axe accessibility scans", () => {
  it("home view (all sections mounted) has no violations", async () => {
    // Waiting for the contact submit button forces every lazy section to mount.
    const results = await renderForAxe("/", ["button", { name: /send message/i }]);
    expect(results).toHaveNoViolations();
  });

  it("accessibility statement has no violations", async () => {
    const results = await renderForAxe("/accessibility");
    expect(results).toHaveNoViolations();
  });

  it("404 view has no violations", async () => {
    const results = await renderForAxe("/definitely-not-a-page");
    expect(results).toHaveNoViolations();
  });
});
