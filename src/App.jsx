import { lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import RootLayout from "./layouts/RootLayout.jsx";
import { useHashSectionScroll } from "./hooks/useHashSectionScroll.js";
import Accessibility from "./sections/Accessibility.jsx";
import Home from "./sections/Home.jsx";
import NotFound from "./sections/NotFound.jsx";

// Home stays eager (above the fold). Everything else is split into its own
// chunk and streamed in, keeping the initial JS payload small.
const About = lazy(() => import("./sections/About.jsx"));
const Skills = lazy(() => import("./sections/Skills.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const Education = lazy(() => import("./sections/Education.jsx"));
const Certificates = lazy(() => import("./sections/Certificates.jsx"));
const Achievements = lazy(() => import("./sections/Achievements.jsx"));
const TechStack = lazy(() => import("./sections/TechStack.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));

function LazySection({ children }) {
  // Reserve vertical space so streaming chunks don't cause layout shift.
  return (
    <Suspense fallback={<div style={{ minHeight: "40vh" }} aria-hidden="true" />}>
      {children}
    </Suspense>
  );
}

// The site is a single scroll page, so the pathname decides the whole view:
// "/" → home, "/accessibility" → statement, anything else → 404.
function resolvePage(pathname) {
  const normalized = pathname
    .replace(/\/+$/, "")
    .replace(/index\.html$/, "")
    .replace(/\/+$/, "");
  if (normalized === "/accessibility") return "accessibility";
  return normalized === "" ? "home" : "not-found";
}

export default function App() {
  useHashSectionScroll();
  const page = resolvePage(window.location.pathname);

  if (page === "accessibility") {
    return (
      <RootLayout>
        <Accessibility />
      </RootLayout>
    );
  }
  if (page === "not-found") {
    return (
      <RootLayout>
        <NotFound />
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <Home />
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <Skills />
      </LazySection>
      <LazySection>
        <Experience />
      </LazySection>
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <Education />
      </LazySection>
      <LazySection>
        <Certificates />
      </LazySection>
      <LazySection>
        <Achievements />
      </LazySection>
      <LazySection>
        <TechStack />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <SpeedInsights />
    </RootLayout>
  );
}
