import "@fontsource-variable/jetbrains-mono";
import "@fontsource/comforter-brush";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { MotionConfig } from "framer-motion";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ui/ErrorBoundary.jsx";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import "./styles/base.css";
import "./styles/tokens.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
