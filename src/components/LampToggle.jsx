import { useEffect, useState } from "react";

// Lamp on = paper (light), lamp off = blueprint (dark).
// index.html sets data-theme before the first paint; this button only flips it.
// The pull-cord swing and circular reveal come in Phase 5 (REVAMP.md §4.3).

const STORAGE_KEY = "theme";

const readTheme = () =>
  document.documentElement.dataset.theme === "blueprint" ? "blueprint" : "paper";

const savedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const LampToggle = () => {
  const [theme, setTheme] = useState(readTheme);
  const lampOn = theme === "paper";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Until someone picks a theme, keep following the system setting.
  useEffect(() => {
    const query = matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!savedTheme()) setTheme(e.matches ? "blueprint" : "paper");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = lampOn ? "blueprint" : "paper";
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode or blocked storage: the choice just won't be remembered.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={lampOn}
      aria-label={`Lamp: ${lampOn ? "on" : "off"}. Switch to the ${
        lampOn ? "dark blueprint" : "light paper"
      } theme`}
      className="label -mx-2 px-2 py-2 hover:text-ink"
    >
      Lamp: {lampOn ? "on" : "off"}
    </button>
  );
};

export default LampToggle;
