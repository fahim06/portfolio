import { useState } from "react";

/**
 * <img> that transparently falls back to `fallback` if the primary `src`
 * fails to load (404, network error, decode failure). Stops at the last
 * available source so it can never error-loop. Spread any normal <img> props.
 */
export default function SmartImage({ src, fallback, alt = "", ...rest }) {
  const sources = [src, fallback].filter(Boolean);
  const [idx, setIdx] = useState(0);
  const safeIdx = Math.min(idx, sources.length - 1);

  return (
    <img
      src={sources[safeIdx]}
      alt={alt}
      onError={() => setIdx((n) => (n < sources.length - 1 ? n + 1 : n))}
      {...rest}
    />
  );
}
