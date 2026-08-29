import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import App from "./App.jsx";

function goTo(path) {
  window.history.pushState({}, "", path);
}

function renderApp() {
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}

afterEach(() => {
  goTo("/");
});

describe("pathname routing", () => {
  it("renders the home page at the root path", () => {
    goTo("/");
    renderApp();
    expect(
      screen.getByRole("heading", { level: 1, name: "Fahim Yusuf" }),
    ).toBeTruthy();
  });

  it("renders the accessibility statement at /accessibility", () => {
    goTo("/accessibility");
    renderApp();
    expect(
      screen.getByRole("heading", { name: /accessibility on this site/i }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: /keyboard support/i }),
    ).toBeTruthy();
  });

  it("renders the branded 404 for unknown paths and sets noindex", () => {
    goTo("/definitely-not-a-page");
    renderApp();
    expect(
      screen.getByRole("heading", { name: /this page doesn't exist/i }),
    ).toBeTruthy();
    const homeLink = screen.getByRole("link", { name: /back to home/i });
    expect(homeLink.getAttribute("href")).toBe("/");
    const robots = document.querySelector('meta[name="robots"]');
    expect(robots?.getAttribute("content")).toBe("noindex, nofollow");
  });

  it("treats /index.html and trailing slashes as the home page", () => {
    goTo("/index.html/");
    renderApp();
    expect(
      screen.getByRole("heading", { level: 1, name: "Fahim Yusuf" }),
    ).toBeTruthy();
  });
});
