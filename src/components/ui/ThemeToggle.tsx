"use client";

import { useEffect, useSyncExternalStore } from "react";

const storageKey = "zahid-portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";

function getThemeSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

function subscribeToTheme(listener: () => void) {
  window.addEventListener(themeChangeEvent, listener);
  return () => window.removeEventListener(themeChangeEvent, listener);
}

function getServerThemeSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";

    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.dispatchEvent(new Event(themeChangeEvent));
  }, []);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem(storageKey, nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-icon theme-icon-sun">☼</span>
        <span className="theme-toggle-icon theme-icon-moon">☾</span>
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
}
