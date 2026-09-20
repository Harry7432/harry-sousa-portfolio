export const THEME_STORAGE_KEY = "hs-theme";
export const THEME_ATTRIBUTE = "data-theme";

export type ThemeName = "dark" | "light";

export const THEMES: readonly ThemeName[] = ["dark", "light"];

export const DEFAULT_THEME: ThemeName = "dark";

export function isThemeName(value: unknown): value is ThemeName {
  return typeof value === "string" && (THEMES as readonly string[]).includes(value);
}

/**
 * Script executado antes da hidratação (next/script beforeInteractive) para aplicar
 * o tema correto sem flash de conteúdo nem hydration mismatch: o HTML do servidor
 * sempre assume o tema padrão (dark), e este script só adiciona o atributo
 * quando o tema resolvido (localStorage ou prefers-color-scheme) é o alternativo.
 */
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "light" || stored === "dark" ? stored : null;
    if (!theme) {
      theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }
    if (theme === "light") {
      document.documentElement.setAttribute("${THEME_ATTRIBUTE}", "light");
    }
  } catch (e) {}
})();
`;
