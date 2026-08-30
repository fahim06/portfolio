import { describe, expect, it } from "vitest";
import { navHref } from "./scroll.js";

describe("navHref", () => {
  it("returns null on the home page so clicks scroll in place", () => {
    expect(navHref("about", "/")).toBeNull();
    expect(navHref("home", "/")).toBeNull();
    expect(navHref("about", "/index.html")).toBeNull();
    expect(navHref("about", "/index.html/")).toBeNull();
  });

  it("navigates home with a section hash from standalone pages", () => {
    expect(navHref("about", "/accessibility")).toBe("/#about");
    expect(navHref("projects", "/some-unknown-page")).toBe("/#projects");
  });

  it("navigates to the bare home route for the brand/top target", () => {
    expect(navHref("home", "/accessibility")).toBe("/");
  });
});
