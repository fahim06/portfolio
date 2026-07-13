import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { STORAGE_KEY, DEFAULT_THEME } from '../config/theme.js';

/** Pure theme resolver — unit tested. */
export function resolveTheme(preference, systemPrefersDark) {
  if (preference === 'system') return systemPrefersDark ? 'dark' : 'light';
  return preference;
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_THEME;
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
  });
  const [systemPrefersDark, setSystemPrefersDark] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setSystemPrefersDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const resolved = resolveTheme(preference, systemPrefersDark);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolved);
  }, [resolved]);

  const setTheme = useCallback((next) => {
    setPreference(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
  }, []);

  const cycle = useCallback(() => {
    const order = ['system', 'light', 'dark'];
    const idx = order.indexOf(preference);
    setTheme(order[(idx + 1) % order.length]);
  }, [preference, setTheme]);

  const value = { preference, resolved, setTheme, cycle };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
