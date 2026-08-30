import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
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
    expect(screen.getByRole("heading", { level: 1, name: "Fahim Yusuf" })).toBeTruthy();
  });

  it("renders the accessibility statement at /accessibility", () => {
    goTo("/accessibility");
    renderApp();
    expect(screen.getByRole("heading", { name: /accessibility on this site/i })).toBeTruthy();
    expect(screen.getByRole("heading", { name: /keyboard support/i })).toBeTruthy();
  });

  it("renders the branded 404 for unknown paths and sets noindex", () => {
    goTo("/definitely-not-a-page");
    renderApp();
    expect(screen.getByRole("heading", { name: /this page doesn't exist/i })).toBeTruthy();
    const homeLink = screen.getByRole("link", { name: /back to home/i });
    expect(homeLink.getAttribute("href")).toBe("/");
    const robots = document.querySelector('meta[name="robots"]');
    expect(robots?.getAttribute("content")).toBe("noindex, nofollow");
  });

  it("treats /index.html and trailing slashes as the home page", () => {
    goTo("/index.html/");
    renderApp();
    expect(screen.getByRole("heading", { level: 1, name: "Fahim Yusuf" })).toBeTruthy();
  });

  it("scrolls to the hashed section once lazy sections mount (deep links)", async () => {
    const spy = vi.spyOn(Element.prototype, "scrollIntoView");
    goTo("/#about");
    renderApp();
    await screen.findByRole("heading", { name: /tools of the trade/i });
    await waitFor(() => expect(spy).toHaveBeenCalled());
    spy.mockRestore();
  });

  it("updates the URL hash when a nav section is clicked on the home page", () => {
    goTo("/");
    renderApp();
    fireEvent.click(screen.getByRole("button", { name: "About" }));
    expect(window.location.hash).toBe("#about");
    // Brand click returns to the bare home URL.
    fireEvent.click(screen.getByRole("button", { name: /back to top/i }));
    expect(window.location.hash).toBe("");
  });
});
