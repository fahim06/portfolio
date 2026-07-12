import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource-variable/jetbrains-mono';
import './styles/tokens.css';
import './styles/base.css';

function App() {
  return (
    <main className="container" style={{ paddingTop: '10vh' }}>
      <p className="eyebrow">tokens loaded</p>
      <h1>Fahim Yusuf</h1>
      <p>Olive Gray design system is wired up.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
