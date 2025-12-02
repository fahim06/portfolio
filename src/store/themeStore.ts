/**
 * Theme Store - Singleton pattern for theme state management
 * 
 * This store encapsulates the theme state and provides methods for
 * subscribing to theme changes, getting the current theme, and setting
 * a new theme. It is designed to work with React's useSyncExternalStore
 * hook while avoiding issues with hot module replacement and SSR.
 */

export type Theme = "light" | "dark";

type ThemeListener = () => void;

class ThemeStore {
  private listeners: Set<ThemeListener> = new Set();
  private theme: Theme = "light";

  subscribe = (callback: ThemeListener): (() => void) => {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  };

  getSnapshot = (): Theme => {
    return this.theme;
  };

  getServerSnapshot = (): Theme => {
    return "light"; // Always return light for SSR to avoid hydration mismatch
  };

  setTheme = (newTheme: Theme): void => {
    if (this.theme !== newTheme) {
      this.theme = newTheme;
      this.notifyListeners();
    }
  };

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}

// Singleton instance
export const themeStore = new ThemeStore();
