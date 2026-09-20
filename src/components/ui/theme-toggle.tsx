"use client";

import { useSyncExternalStore } from "react";
import {
  DEFAULT_THEME,
  THEME_ATTRIBUTE,
  THEME_STORAGE_KEY,
  isThemeName,
  type ThemeName,
} from "@/lib/theme";

const THEME_LABELS: Record<ThemeName, string> = {
  dark: "escuro",
  light: "claro",
};

type ThemeListener = () => void;
const themeListeners = new Set<ThemeListener>();

function applyTheme(theme: ThemeName) {
  if (theme === DEFAULT_THEME) {
    document.documentElement.removeAttribute(THEME_ATTRIBUTE);
  } else {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // localStorage indisponível (modo privado/bloqueado): tema segue apenas em memória.
  }

  for (const listener of themeListeners) {
    listener();
  }
}

function subscribeToTheme(listener: ThemeListener) {
  themeListeners.add(listener);
  return () => {
    themeListeners.delete(listener);
  };
}

function getThemeSnapshot(): ThemeName {
  const current = document.documentElement.getAttribute(THEME_ATTRIBUTE);
  return isThemeName(current) ? current : DEFAULT_THEME;
}

function getServerThemeSnapshot(): ThemeName {
  return DEFAULT_THEME;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    applyTheme(theme === "light" ? "dark" : "light");
  }

  const nextLabel = THEME_LABELS[theme === "light" ? "dark" : "light"];

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Ativar tema ${nextLabel}`}
      title={`Ativar tema ${nextLabel}`}
      aria-pressed={theme === "light"}
    >
      <span className="theme-toggle-icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          data-active={theme === "light"}
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.36 5.64l-1.56 1.56M7.2 16.8l-1.56 1.56M18.36 18.36l-1.56-1.56M7.2 7.2 5.64 5.64" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          data-active={theme === "dark"}
        >
          <path d="M12 3a9 9 0 1 0 9 9c0-.35-.02-.7-.05-1.04A5.5 5.5 0 0 1 12.9 3.05 8.98 8.98 0 0 0 12 3Z" />
        </svg>
      </span>
    </button>
  );
}
