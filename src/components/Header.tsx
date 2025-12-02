"use client";

import {useState} from "react";
import Link from "next/link";
import {useTheme} from "./ThemeProvider";
import {navLinks} from "../data";

function ThemeToggle() {
    const {theme, toggleTheme, mounted} = useTheme();

    // Render a placeholder with same dimensions during SSR to prevent layout shift
    if (!mounted) {
        return (
            <div className="p-2 w-9 h-9 rounded-lg" aria-hidden="true"/>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-background-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? (
                <svg
                    className="w-5 h-5 text-foreground-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            ) : (
                <svg
                    className="w-5 h-5 text-foreground-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            )}
        </button>
    );
}

function MobileMenuButton({
                              isOpen,
                              onClick,
                          }: {
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="md:hidden p-2 rounded-lg hover:bg-background-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
        >
            <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                {isOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
            </svg>
        </button>
    );
}

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
                suppressHydrationWarning>
            <nav className="container" aria-label="Main navigation">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-heading text-foreground hover:text-accent transition-colors"
                    >
                        F. Yusuf
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-foreground-secondary hover:text-foreground rounded-lg hover:bg-background-secondary transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle/>
                        <MobileMenuButton
                            isOpen={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        />
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-foreground-secondary hover:text-foreground rounded-lg hover:bg-background-secondary transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
