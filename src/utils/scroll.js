export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export function scrollToTop() {
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

/**
 * Where a section-nav click should go. On the home page the sections are in
 * the DOM, so the click scrolls (returns null). On any other page (/accessibility,
 * the 404 view) they are not mounted — return a full-navigation href with hash
 * so the browser lands on the section after loading home.
 */
export function navHref(id, pathname = window.location.pathname) {
  const normalized = pathname
    .replace(/\/+$/, "")
    .replace(/index\.html$/, "")
    .replace(/\/+$/, "");
  if (normalized === "") return null;
  return id === "home" ? "/" : `/#${id}`;
}
