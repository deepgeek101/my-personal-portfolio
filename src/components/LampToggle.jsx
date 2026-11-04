import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import useReducedMotion from "../hooks/useReducedMotion";

// Lamp on = paper (light), lamp off = blueprint (dark). REVAMP.md §4.3.
// index.html sets data-theme before the first paint; this button flips it.

const STORAGE_KEY = "theme";
const root = document.documentElement;

const readTheme = () =>
  root.dataset.theme === "blueprint" ? "blueprint" : "paper";

const savedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const LampToggle = () => {
  const [theme, setTheme] = useState(readTheme);
  const [pulls, setPulls] = useState(0);
  const reducedMotion = useReducedMotion();
  const lampOn = theme === "paper";

  useEffect(() => {
    root.dataset.theme = theme;
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

  const toggle = (e) => {
    const next = lampOn ? "blueprint" : "paper";
    setPulls((n) => n + 1);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode or blocked storage: the choice just won't be remembered.
    }

    // The page has to be in its new state by the time this returns, so the
    // browser can snapshot it; flushSync makes React render right away.
    const apply = () => {
      root.dataset.theme = next;
      flushSync(() => setTheme(next));
    };

    if (!document.startViewTransition || reducedMotion) {
      apply();
      return;
    }

    // Reveal the new theme as a circle growing from the click. A keyboard
    // "click" has no pointer position, so use the button's centre.
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.detail ? e.clientX : box.left + box.width / 2;
    const y = e.detail ? e.clientY : box.top + box.height / 2;
    const radius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );
    root.style.setProperty("--reveal-x", `${x}px`);
    root.style.setProperty("--reveal-y", `${y}px`);
    root.style.setProperty("--reveal-r", `${radius}px`);
    document.startViewTransition(apply);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={lampOn}
      aria-label={`Lamp: ${lampOn ? "on" : "off"}. Switch to the ${
        lampOn ? "dark blueprint" : "light paper"
      } theme`}
      className="label -mx-2 inline-flex items-start gap-1.5 px-2 py-2 hover:text-ink"
    >
      Lamp: {lampOn ? "on" : "off"}
      {/* A new key restarts the swing animation on every pull. */}
      <svg
        key={pulls}
        aria-hidden="true"
        viewBox="0 0 8 20"
        className={`lamp-cord ${pulls ? "lamp-cord-pulled" : ""}`}
      >
        <line x1="4" y1="0" x2="4" y2="13" />
        <circle cx="4" cy="16" r="2.5" />
      </svg>
    </button>
  );
};

export default LampToggle;
