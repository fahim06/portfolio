import { act, fireEvent, renderHook } from "@testing-library/react";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { useClickOutside } from "./useClickOutside.js";

function setup({ active = true } = {}) {
  const handler = vi.fn();
  const { result, rerender } = renderHook(
    ({ active }) => {
      const ref = useRef(null);
      useClickOutside(ref, handler, active);
      return ref;
    },
    { initialProps: { active } },
  );

  // Attach a real DOM node to the ref so contains() works.
  const inside = document.createElement("div");
  inside.setAttribute("data-inside", "true");
  document.body.appendChild(inside);
  result.current.current = inside;

  return { handler, inside, rerender };
}

describe("useClickOutside", () => {
  it("calls handler on a pointer-down outside the element", () => {
    const { handler, inside } = setup();
    const outside = document.createElement("button");
    document.body.appendChild(outside);

    fireEvent.mouseDown(outside);
    expect(handler).toHaveBeenCalledTimes(1);

    fireEvent.mouseDown(inside);
    expect(handler).toHaveBeenCalledTimes(1); // inside clicks are ignored
  });

  it("calls handler on Escape", () => {
    const { handler } = setup();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("ignores other keys", () => {
    const { handler } = setup();
    fireEvent.keyDown(document, { key: "Enter" });
    fireEvent.keyDown(document, { key: "ArrowDown" });
    expect(handler).not.toHaveBeenCalled();
  });

  it("does not bind listeners when inactive", () => {
    const { handler } = setup({ active: false });
    fireEvent.keyDown(document, { key: "Escape" });
    expect(handler).not.toHaveBeenCalled();
  });

  it("stops listening once deactivated", () => {
    const { handler, rerender } = setup();
    act(() => rerender({ active: false }));
    fireEvent.keyDown(document, { key: "Escape" });
    expect(handler).not.toHaveBeenCalled();
  });
});
