import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ErrorBoundary from "./ErrorBoundary.jsx";

function Bomb() {
  throw new Error("kaboom");
}

describe("ErrorBoundary", () => {
  it("renders children when nothing throws", () => {
    render(
      <ErrorBoundary>
        <p>All good</p>
      </ErrorBoundary>,
    );
    expect(screen.getByText("All good")).toBeTruthy();
  });

  it("renders the recovery screen instead of crashing on throw", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );
    expect(screen.getByRole("heading", { name: /something went wrong/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /reload the site/i }).getAttribute("href")).toBe("/");
    // No stack trace or error message reaches the DOM.
    expect(document.body.textContent).not.toContain("kaboom");
    spy.mockRestore();
  });
});
