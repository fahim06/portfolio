import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import App from "./App.jsx";

// Smoke test: the full app tree mounts (header, atmosphere, lazy sections,
// theme + scroll hooks) without throwing, and the hero + main landmark render.
// findBy* queries throw on timeout, so resolving them asserts presence.
describe("App", () => {
  it("mounts and renders the hero name + main landmark", async () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    // Home section is eager; name + h1 appear immediately.
    expect(await screen.findByText("Fahim Yusuf")).toBeTruthy();
    expect(await screen.findByRole("heading", { level: 1 })).toBeTruthy();
    // Main landmark is present.
    expect(document.querySelector("main")).toBeTruthy();
  });

  it("renders the primary Download CV call-to-action", async () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    expect(await screen.findByRole("link", { name: /download cv/i })).toBeTruthy();
  });
});
