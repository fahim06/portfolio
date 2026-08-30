import { useEffect } from "react";
import { scrollToSection } from "../utils/scroll.js";

/**
 * Deep-link support for hash URLs like /#about. The browser's native anchor
 * jump runs before React.lazy sections mount, so it silently fails and the
 * visitor lands at the top. This hook waits (bounded) for the hashed section
 * to appear, then scrolls to it — reusing the reduced-motion-aware util.
 */
export function useHashSectionScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    let attempts = 0;
    let timer;
    const tryScroll = () => {
      if (document.getElementById(id)) {
        scrollToSection(id);
        return;
      }
      if (++attempts > 120) return; // ~6s at 50ms — give up quietly
      timer = setTimeout(tryScroll, 50);
    };
    tryScroll();

    return () => clearTimeout(timer);
  }, []);
}
