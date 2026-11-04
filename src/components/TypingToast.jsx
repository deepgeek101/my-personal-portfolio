import { useEffect, useState } from "react";
import { site } from "../content/site";
import useFinePointer from "../hooks/useFinePointer";

// A Monkeytype nod (REVAMP.md §4.8): type anywhere on the page and a small
// note says how fast you're going. WPM = (characters / 5) / minutes, counted
// over the last 10 seconds. Keyboard shortcuts and form fields are ignored,
// and the page's own key handling is never blocked.
const WINDOW_MS = 10_000;
const MIN_CHARS = 15;
const IDLE_MS = 3_000;

const monkeytype = site.socials.find((s) => s.id === "monkeytype");

const isTypingField = (target) =>
  target instanceof Element &&
  target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])');

const TypingToast = () => {
  const finePointer = useFinePointer();
  const [wpm, setWpm] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!finePointer) return;
    let stamps = [];
    let idle = null;

    const onKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return;
      if (isTypingField(e.target)) return;

      const now = performance.now();
      stamps = [...stamps.filter((t) => now - t <= WINDOW_MS), now];
      if (stamps.length >= MIN_CHARS) {
        const minutes = Math.max(now - stamps[0], 1000) / 60_000;
        setWpm(Math.round(stamps.length / 5 / minutes));
        setVisible(true);
      }

      clearTimeout(idle);
      idle = setTimeout(() => {
        setVisible(false);
        stamps = [];
      }, IDLE_MS);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      clearTimeout(idle);
    };
  }, [finePointer]);

  if (!finePointer) return null;

  return (
    <div data-visible={visible} className="typing-toast label">
      you&rsquo;re typing at {wpm} wpm.
      {site.monkeytypeBest && <> my best is {site.monkeytypeBest}.</>}{" "}
      {monkeytype && (
        <a
          href={monkeytype.href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className="text-ink underline underline-offset-2"
        >
          monkeytype →
        </a>
      )}
    </div>
  );
};

export default TypingToast;
