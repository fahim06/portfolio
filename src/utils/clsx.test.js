import { describe, expect, it } from "vitest";
import { clsx } from "./clsx.js";

describe("clsx", () => {
  it("joins truthy parts with spaces", () => {
    expect(clsx("a", false, "b", undefined, null, "c")).toBe("a b c");
  });
  it("flattens arrays", () => {
    expect(clsx("x", ["y", "", "z"])).toBe("x y z");
  });
  it("returns empty string for no input", () => {
    expect(clsx()).toBe("");
  });
});
