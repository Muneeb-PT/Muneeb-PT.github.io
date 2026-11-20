import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // Storage can be unavailable in private or restricted browsing contexts.
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still works for the current page session.
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "light"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-border px-3 text-[12px] text-text-muted transition-colors hover:border-accent-line hover:text-accent"
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
      <span className="font-mono">{theme === "dark" ? "Light" : "Dark"} mode</span>
    </button>
  );
}
