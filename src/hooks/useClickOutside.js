import { useEffect, useRef } from "react";

/**
 * Invokes `handler` on:
 *   • a pointer-down (mouse/touch) that lands OUTSIDE `ref.current`, and
 *   • an Escape keydown.
 *
 * Pass `active = false` (e.g. while the overlay is closed) so no global
 * listeners are bound unnecessarily. The latest `handler` is kept in a ref,
 * so callers may pass an inline function without re-binding listeners.
 *
 * @param {React.RefObject<HTMLElement>} ref   element considered "inside"
 * @param {(event: Event) => void} handler     called on outside-click / Escape
 * @param {boolean} active                      whether listeners are bound
 */
export function useClickOutside(ref, handler, active = true) {
  const savedHandler = useRef(handler);
  savedHandler.current = handler;

  useEffect(() => {
    if (!active) return undefined;

    const onPointer = (event) => {
      const el = ref.current;
      if (el && !el.contains(event.target)) savedHandler.current(event);
    };
    const onKey = (event) => {
      if (event.key === "Escape") savedHandler.current(event);
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, active]);
}
