import { useEffect, useState } from 'react';

export function useScrollSpy(ids, options = {}) {
  const { rootMargin = '-45% 0px -50% 0px', threshold = 0 } = options;
  const key = ids.join(',');
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin, threshold }
    );
    ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // `ids` is an array (new reference each render); `key` is its stable
    // string digest, so we depend on `key` to avoid reconnecting the observer every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, rootMargin, threshold]);

  return active;
}
