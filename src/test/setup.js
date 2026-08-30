// Test environment polyfills for jsdom (used by all component tests).

// matchMedia — used by useTheme, usePrefersReducedMotion, scroll.js.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent() {
      return false;
    },
  });
}

// IntersectionObserver — used by useScrollSpy + framer-motion `whileInView`.
class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
if (!("IntersectionObserver" in window)) window.IntersectionObserver = NoopObserver;
if (!("ResizeObserver" in window)) window.ResizeObserver = NoopObserver;

// jsdom has no layout — give scrollIntoView/scrollTo no-op implementations.
if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};
if (!window.scrollTo) window.scrollTo = () => {};
