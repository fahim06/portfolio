"use client";

import {createContext, ReactNode, useCallback, useContext, useEffect, useSyncExternalStore,} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Store for theme state management
let themeListeners: Array<() => void> = [];
let currentTheme: Theme = "light";

function getThemeSnapshot(): Theme {
    return currentTheme;
}

function getThemeServerSnapshot(): Theme {
    return "light"; // Always return light for SSR
}

function subscribeToTheme(callback: () => void) {
    themeListeners.push(callback);
    return () => {
        themeListeners = themeListeners.filter((l) => l !== callback);
    };
}

function setThemeValue(newTheme: Theme) {
    currentTheme = newTheme;
    themeListeners.forEach((listener) => listener());
}

// Hook to check if mounted (client-side)
function useIsMounted() {
    return useSyncExternalStore(
        () => () => {
        },
        () => true,
        () => false
    );
}

export function ThemeProvider({children}: { children: ReactNode }) {
    const mounted = useIsMounted();

    const theme = useSyncExternalStore(
        subscribeToTheme,
        getThemeSnapshot,
        getThemeServerSnapshot
    );

    // Initialize theme from DOM on mount (reads what the inline script set)
    useEffect(() => {
        const domTheme = document.documentElement.getAttribute("data-theme") as Theme;
        if (domTheme && domTheme !== currentTheme) {
            setThemeValue(domTheme);
        }
    }, []);

    const toggleTheme = useCallback(() => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setThemeValue(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, mounted}}>
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
