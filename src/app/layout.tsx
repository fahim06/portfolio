import type {Metadata} from "next";
import {Comforter_Brush, Geist, Geist_Mono} from "next/font/google";
import {Footer, Header, ThemeProvider} from "@/components";
import BackToTopButton from "@/components/ui/BackToTopButton";


import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const comforterBrush = Comforter_Brush({
    weight: '400',
    variable: "--font-comforter-brush",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Fahim | Software Engineer",
        template: "%s | Fahim",
    },
    description:
        "Software engineer focused on building thoughtful, scalable solutions. Explore my projects, experience, and approach to solving complex problems.",
    keywords: [
        "software engineer",
        "full-stack developer",
        "web development",
        "React",
        "TypeScript",
        "portfolio",
    ],
    authors: [{name: "Fahim"}],
    creator: "Fahim",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Fahim Portfolio",
        title: "Fahim | Software Engineer",
        description:
            "Software engineer focused on building thoughtful, scalable solutions.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fahim | Software Engineer",
        description:
            "Software engineer focused on building thoughtful, scalable solutions.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    // Script to set theme before React hydrates to prevent flash
    const themeScript = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      } catch (e) {}
    })();
  `;

    return (
        <html lang="en" id="top" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{__html: themeScript}}/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${comforterBrush.variable} antialiased min-h-screen flex flex-col`}
            suppressHydrationWarning
        >
        <ThemeProvider>
            <Header/>
            <main className="flex-1">{children}</main>
            <Footer/>
            <BackToTopButton/>
        </ThemeProvider>
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
        </body>
        </html>
    );
}
