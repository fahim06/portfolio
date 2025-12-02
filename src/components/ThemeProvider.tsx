"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { themeStore, Theme } from "@/store/themeStore";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook to check if mounted (client-side)
function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const mounted = useIsMounted();

  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  // Initialize theme from DOM on mount (reads what the inline script set)
  useEffect(() => {
    const domTheme = document.documentElement.getAttribute(
      "data-theme"
    ) as Theme;
    if (domTheme && domTheme !== themeStore.getSnapshot()) {
      themeStore.setTheme(domTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const currentTheme = themeStore.getSnapshot();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    themeStore.setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
